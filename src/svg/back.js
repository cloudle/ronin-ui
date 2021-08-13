import React from 'react';
import { Svg, Polygon, } from 'react-native-svg';

import type { Style, } from 'typeDefinitions';

type Props = {
	style?: Style,
	size?: number,
	color?: string,
};

const BackIcon = (props: Props) => {
	const { style, size, color, } = props;

	return <Svg style={style} width={size} height={size} viewBox="0 0 512 512">
		<Polygon
			fill={color}
			points="352,128.4 319.7,96 160,256 160,256 160,256 319.7,416 352,383.6 224.7,256"/>
	</Svg>;
};

BackIcon.defaultProps = {
	size: 24,
	color: '#151A30',
};

export default BackIcon;
