import React, { useEffect } from 'react';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, } from 'react-native-reanimated';

import type { Style, } from 'typeDefinitions';

type Props = {
	style?: Style,
	children?: Element,
};

const RouteContainer = (props: Props) => {
	const { style, children, } = props;
	const opacity = useSharedValue(0);
	const appearStyle = useAnimatedStyle(() => ({ opacity: opacity.value, }));

	useEffect(() => {
		opacity.value = withSpring(1);
	}, []);

	return <Animated.View style={[appearStyle, style]}>
		{children}
	</Animated.View>;
};

export default RouteContainer;