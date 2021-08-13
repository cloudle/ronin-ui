import React from 'react';
import { Svg, Path, } from 'react-native-svg';

import type { Style, } from 'typeDefinitions';

type Props = {
	style?: Style,
	width?: number,
	height?: number,
	color?: string,
	invert?: boolean,
};

const LogoIcon = (props: Props) => {
	const { style, width, height, color, invert, } = props;
	const bgColor = invert ? '#FFFFFF' : color;
	const shapeColor = invert ? color : '#FFFFFF';
	
	return <Svg style={style} width={width} height={height} viewBox="0 0 114 160">
		<Path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M12.8613 0H101.173C108.018 0 113.567 5.54925 113.567 12.3946V109.379C113.567 114.046 111.464 118.464 107.841 121.406L62.8772 157.92C59.4625 160.693 54.5716 160.693 51.1569 157.92L6.19302 121.406C2.57029 118.464 0.466675 114.046 0.466675 109.379V12.3946C0.466675 5.54925 6.01593 0 12.8613 0Z"
			fill={bgColor}/>
		<Path
			transform="translate(18, 18)"
			d="M66.6796 0.591919C71.8136 0.591919 75.9755 4.75386 75.9755 9.88787V39.8724L75.9729 40.1177C75.8442 46.2328 70.9117 51.1664 64.797 51.2968L64.5485 51.2995L64.7937 51.3021C70.9089 51.4308 75.8424 56.3633 75.9729 62.478L75.9755 62.7265V81.4828C75.9755 84.1512 74.8289 86.6909 72.8274 88.4556L49.4759 109.044L49.4762 67.0232C49.4762 61.8891 45.3143 57.7272 40.1803 57.7272H26.5579L26.5575 109.044L3.20673 88.4556C1.20524 86.6909 0.0585938 84.1512 0.0585938 81.4828V9.88787C0.0585938 4.75386 4.22053 0.591919 9.35455 0.591919H66.6796ZM49.4762 13.4474H26.5579V42.015H40.1803C45.3143 42.015 49.4762 37.8531 49.4762 32.719V13.4474Z"
			fill={shapeColor}/>
	</Svg>;
};

LogoIcon.defaultProps = {
	width: 113,
	height: 160,
	color: '#888888',
	invert: false,
};

export default LogoIcon;
