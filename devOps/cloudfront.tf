provider "aws" {
  region = "ap-northeast-1"
}

resource "aws_s3_bucket" "app" {
  bucket = "marvis-ronin"

  website {
    index_document = "index.html"
    error_document = "error.html"
  }
}

module "template_files" { # run "terraform get" to install the module
  source = "hashicorp/dir/template"
  base_dir = "../wings"
}

resource "aws_s3_bucket_object" "app-files" {
  for_each = module.template_files.files

  bucket = aws_s3_bucket.app.bucket
  acl = "public-read"
  key = each.key
  content_type = each.value.content_type
  source = each.value.source_path
  content = each.value.content
  etag = each.value.digests.md5
}

resource "aws_cloudfront_distribution" "app" {
  enabled = true
  is_ipv6_enabled = true
  default_root_object = "index.html"

  origin {
    domain_name = aws_s3_bucket.app.bucket_regional_domain_name
    origin_id = "marvis-ronin"
  }

  default_cache_behavior {
    allowed_methods  = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods   = ["GET", "HEAD"]
    viewer_protocol_policy = "redirect-to-https"
    target_origin_id = "marvis-ronin"

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }
  }

  custom_error_response {
    error_code = 403
    error_caching_min_ttl = 10
    response_page_path = "/index.html"
    response_code = 200
  }

  custom_error_response {
    error_code = 404
    error_caching_min_ttl = 10
    response_page_path = "/index.html"
    response_code = 200
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = true
  }
}
