import React from 'react';
import { Svg, Path, Circle, } from 'react-native-svg';

import type { Style, } from 'typeDefinitions';

type Props = {
	style?: Style,
	size?: number,
	color?: string,
};

const EyeIcon = (props: Props) => {
	const { style, size, color, } = props;

	return <Svg
		style={style}
		width={size}
		height={size}
		viewBox="0 0 24 24"
		fill="none"
		stroke={color}
		strokeWidth={2}
		strokeLinecap="round"
		strokeLinejoin="round">
		<Path
			d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
		<Circle
			cx={12}
			cy={12}
			r={3.5}/>
	</Svg>;
};

EyeIcon.defaultProps = {
	size: 20,
	color: '#888888',
};

export default EyeIcon;
