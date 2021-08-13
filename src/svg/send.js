import React from 'react';
import { Svg, Defs, Path, LinearGradient, Stop, } from 'react-native-svg';

import type { Style, } from 'typeDefinitions';

type Props = {
	style?: Style,
	size?: number,
	colors?: Array<string>,
};

const SendIcon = (props: Props) => {
	const { style, size, colors, } = props;

	return <Svg style={style} width={size} height={size} viewBox="0 0 24 24">
		<Path
			fill="url(#iconBG)"
			d="M23.3225 0.698379C22.7222 0.0823177 21.8338 -0.147195 21.0055 0.0943974L1.6896 5.71143C0.815638 5.95423 0.196185 6.65123 0.0293162 7.53666C-0.141154 8.4378 0.45429 9.58175 1.23221 10.0601L7.27188 13.7722C7.89134 14.1527 8.69086 14.0573 9.20347 13.5402L16.1195 6.58116C16.4676 6.21877 17.0439 6.21877 17.392 6.58116C17.7402 6.93147 17.7402 7.49922 17.392 7.8616L10.464 14.8219C9.95018 15.3377 9.85414 16.141 10.2323 16.7643L13.9226 22.8645C14.3548 23.5893 15.0991 24 15.9154 24C16.0115 24 16.1195 24 16.2155 23.9879C17.1519 23.8671 17.8962 23.2269 18.1723 22.3209L23.8987 3.02975C24.1508 2.20833 23.9227 1.31444 23.3225 0.698379Z"/>
		<Defs>
			<LinearGradient
				id="iconBG"
				gradientUnits="userSpaceOnUse"
				x1={24}
				y1={-2.93038e-06}
				x2={-4.17918}
				y2={6.87806}>
				{colors.map((color, i) => <Stop
					key={i}
					offset={i}
					stopColor={color}/>)}
			</LinearGradient>
		</Defs>
	</Svg>;
};

SendIcon.defaultProps = {
	size: 24,
	colors: ['#1C94F4', '#1273EA'],
};

export default SendIcon;