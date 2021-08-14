import React from 'react';
import { Svg, Path, } from 'react-native-svg';

import type { Style, } from 'typeDefinitions';

type Props = {
	style?: Style,
	size?: number,
	color?: string,
};

const CardIcon = (props: Props) => {
	const { style, size, color, } = props;

	return <Svg
		style={style}
		fill={color}
		width={size}
		height={size}
		viewBox="0 0 24 24">
		<Path d="M20,3H4C1.8,3,0,4.8,0,7v1c0,0.6,0.4,1,1,1h22c0.6,0,1-0.4,1-1V7C24,4.8,22.2,3,20,3z"/>
		<Path d="M23,11H1c-0.6,0-1,0.4-1,1v5c0,2.2,1.8,4,4,4h16c2.2,0,4-1.8,4-4v-5C24,11.4,23.6,11,23,11z M11,18H5c-0.6,0-1-0.4-1-1    s0.4-1,1-1h6c0.6,0,1,0.4,1,1S11.6,18,11,18z M19,15h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S19.6,15,19,15z"/>
	</Svg>;
};

CardIcon.defaultProps = {
	size: 24,
	color: '#333333',
};

export default CardIcon;
