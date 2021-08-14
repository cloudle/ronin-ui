## Introduction:
A Browser based Application.. but also "mobile friendly", could be run natively with React Native. 

## Required tools:
- wings-cli, install with `npm i -g wings-cli`

## Development:
With `wings-cli` installed, run `wings` under project's root to launch development server

## Build:
- Run `wings -h` for further information, for bundle/build run `wings bundle`
- Check out bundled assets under `wings` folder

## Deployment:
This project use Terraform to deploy over AWS S3 and CloudFront.
- Make sure you have Aws account configured on your machine
- Make sure you have Terraform initialized on your machine by execute `terraform init` inside `devOps` folder
- Under project's root, run `yarn deploy` to deploy
- Note: Terraform states could be found under `devOps/states` folder, link it with ie. DropBox for simple state share