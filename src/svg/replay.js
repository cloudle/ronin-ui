import React from 'react';
import { Svg, Path, } from 'react-native-svg';

import type { Style, } from 'typeDefinitions';

type Props = {
	style?: Style,
	size?: number,
	color?: string,
};

const ReplayIcon = (props: Props) => {
	const { style, size, color, } = props;

	return <Svg
		style={style}
		fill={color}
		width={size}
		height={size}
		viewBox="0 0 24 24">
		<Path d="M21.71,5.29l-3-3a1,1,0,0,0-1.09-.21A1,1,0,0,0,17,3V5H5A3,3,0,0,0,2,8v3a1,1,0,0,0,2,0V8A1,1,0,0,1,5,7H17V9a1,1,0,0,0,.62.92A.84.84,0,0,0,18,10a1,1,0,0,0,.71-.29l3-3A1,1,0,0,0,21.71,5.29Z"/>
		<Path d="M21,12a1,1,0,0,0-1,1v3a1,1,0,0,1-1,1H7V15a1,1,0,0,0-.62-.92,1,1,0,0,0-1.09.21l-3,3a1,1,0,0,0,0,1.42l3,3A1,1,0,0,0,6,22a.84.84,0,0,0,.38-.08A1,1,0,0,0,7,21V19H19a3,3,0,0,0,3-3V13A1,1,0,0,0,21,12Z"/>
	</Svg>;
};

ReplayIcon.defaultProps = {
	size: 24,
	color: '#333333',
};

export default ReplayIcon;
