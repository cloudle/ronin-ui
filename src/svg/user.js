import React from 'react';
import { Svg, Path, Mask, } from 'react-native-svg';

import type { Style, } from 'typeDefinitions';

type Props = {
	style?: Style,
	size?: number,
	color?: string,
};

const UserIcon = (props: Props) => {
	const { style, size, color, } = props;
	
	return <Svg style={style} width={size} height={size} viewBox="0 0 32 32">
		<Path
			fill={color}
			d="M20 11C20 13.206 18.206 15 16 15C13.794 15 12 13.206 12 11C12 8.794 13.794 7 16 7C18.206 7 20 8.794 20 11ZM23 24C23 24.552 22.553 25 22 25H10C9.447 25 9 24.552 9 24C9 20.14 12.141 17 16 17C19.859 17 23 20.14 23 24Z"/>
		<Mask
			id="mask0"
			masktype="alpha"
			maskUnits="userSpaceOnUse"
			x={9}
			y={7}
			width={14}
			height={18}>
			<Path
				fill="white"
				d="M20 11C20 13.206 18.206 15 16 15C13.794 15 12 13.206 12 11C12 8.794 13.794 7 16 7C18.206 7 20 8.794 20 11ZM23 24C23 24.552 22.553 25 22 25H10C9.447 25 9 24.552 9 24C9 20.14 12.141 17 16 17C19.859 17 23 20.14 23 24Z"/>
		</Mask>
	</Svg>;
};

UserIcon.defaultProps = {
	size: 32,
	color: '#1273EA',
};

export default UserIcon;
