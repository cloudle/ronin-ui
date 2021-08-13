import React from 'react';
import { Svg, Path, Rect, } from 'react-native-svg';

import type { Style, } from 'typeDefinitions';

type Props = {
	style?: Style,
	size?: number,
	color?: string,
};

const CopyIcon = (props: Props) => {
	const { style, size, color, } = props;
	
	return <Svg style={style} width={size} height={size} viewBox="0 0 24 24">
		<Rect
			height={13}
			width={13}
			x={9}
			y={9}
			rx={2}
			ry={2}
			fill="none"
			stroke={color}
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}/>
		<Path
			d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
			fill="none"
			stroke={color}
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}/>
	</Svg>;
};

CopyIcon.defaultProps = {
	size: 14,
	color: '#888888',
};

export default CopyIcon;
