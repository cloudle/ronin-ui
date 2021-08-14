import React, { Fragment, useEffect, useState, } from 'react';
import { StyleSheet, TouchableOpacity, } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring, } from 'react-native-reanimated';

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

	const onClose = () => {
		setReady(false);
		opacity.value = withSpring(0, {}, () => {
			item?.onClose?.();
			close();
		});
	};

	useEffect(() => {
		opacity.value = withSpring(0.2, {

		}, (isFinished) => {
			item?.onReady?.(isFinished);
		});
	}, []);

	return <Fragment>
		<AnimatedTouchable
			pointerEvents={ready ? 'auto' : 'none'}
			onPress={onClose}
			style={[styles.maskContainer, maskStyle]}/>
		<Component close={onClose} configs={item}/>
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
});
