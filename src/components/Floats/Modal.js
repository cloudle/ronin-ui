import React, { Fragment, useEffect, useState, } from 'react';
import { StyleSheet, TouchableOpacity, } from 'react-native';
import Animated, { Extrapolate, useAnimatedStyle, useSharedValue, withSpring, interpolate, } from 'react-native-reanimated';

import type { ToggleModalOptions, } from 'typeDefinitions';
import { listItemEqual, } from 'utils/global';

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

type Props = {
	close?: Function,
	item?: ToggleModalOptions,
};

const FloatModal = (props: Props) => {
	const { close, item, } = props;
	const { component: Component, } = item;
	const [ready, setReady] = useState(true);
	const opacity = useSharedValue(0);
	const maskStyle = useAnimatedStyle(() => ({ opacity: opacity.value, }));
	const contentStyle = useAnimatedStyle(() => {
		const innerOp = interpolate(opacity.value, [0, 0.5], [0, 1], Extrapolate.CLAMP);
		const translateY = interpolate(opacity.value, [0, 0.5], [10, 0], Extrapolate.CLAMP);

		return { opacity: innerOp, transform: [{ translateY, }] };
	});

	const onClose = () => {
		setReady(false);
		opacity.value = withSpring(0, {}, () => {
			item?.onClose?.();
			close();
		});
	};

	useEffect(() => {
		opacity.value = withSpring(0.5, {

		}, (isFinished) => {
			item?.onReady?.(isFinished);
		});
	}, []);

	return <Fragment>
		<AnimatedTouchable
			pointerEvents={ready ? 'auto' : 'none'}
			onPress={onClose}
			style={[styles.maskContainer, maskStyle]}/>
		<Animated.View
			pointerEvents="box-none"
			style={[styles.contentContainer, contentStyle]}>
			<Component close={onClose} configs={item}/>
		</Animated.View>
	</Fragment>;
};

export default React.memo(FloatModal, listItemEqual);

const styles = StyleSheet.create({
	container: {

	},
	maskContainer: {
		position: 'absolute',
		top: 0, left: 0, right: 0, bottom: 0,
		backgroundColor: '#000000',
	},
	contentContainer: {
		position: 'absolute',
		top: 0, left: 0, right: 0, bottom: 0,
	},
});
