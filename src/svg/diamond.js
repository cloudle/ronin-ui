import React from 'react';
import { Svg, Path, } from 'react-native-svg';

import type { Style, } from 'typeDefinitions';

type Props = {
	style?: Style,
	size?: number,
	color?: string,
};

const DiamondIcon = (props: Props) => {
	const { style, size, color, } = props;
	
	return <Svg style={style} width={size} height={size} viewBox="0 0 12 12">
		<Path
			fill={color}
			d="M0 5.80579C0 6.47992 5.20124 11.6122 6 11.6122C6.79876 11.6122 12 6.47992 12 5.80579C12 5.13223 6.79876 0 6 0C5.20124 0 0 5.13223 0 5.80579Z"/>
	</Svg>;
};

DiamondIcon.defaultProps = {
	size: 12,
	color: '#FFC729',
};

export default DiamondIcon;
