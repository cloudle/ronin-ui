import React from 'react';
import { StyleSheet, View, Text, } from 'react-native';
import { isString, } from 'lodash';

import type { Element, } from 'typeDefinitions';
import Button from 'components/Button';
import { textColors, } from 'utils/global';

type Props = {
	close?: Function,
	configs?: {
		title?: string,
		message?: string | Element,
	},
};

const Confirmation = (props: Props) => {
	const { close, configs, } = props;
	const modalTitle = configs?.title || 'Modal Title';
	const ModalMessage = configs?.message;

	return <View style={styles.container}>
		<Text style={styles.title}>
			{modalTitle}
		</Text>
		{ModalMessage && <View style={styles.messageContainer}>
			{isString(ModalMessage)
				? <Text>{ModalMessage}</Text>
				: <ModalMessage/>}
		</View>}

		<Button
			style={styles.buttonContainer}
			caption="OK"
			onPress={close}/>
	</View>;
};

export default Confirmation;

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		top: '20%', left: 20, right: 20,
		backgroundColor: '#FFFFFF',
		borderRadius: 16,
		padding: 24,
	},
	title: {
		fontSize: 20,
		textAlign: 'center',
		fontWeight: '700',
		color: textColors.gray,
	},
	messageContainer: {
		marginTop: 24,
	},
	message: {

	},
	buttonContainer: {
		marginTop: 24,
	},
});