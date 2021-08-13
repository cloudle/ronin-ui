import React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, Text, } from 'react-native';
import { useNavigate, } from 'react-router';

import type { Style, } from 'typeDefinitions';
import TopNavigation from 'components/TopNavigation';
import Input from 'components/Input';
import Button from 'components/Button';
import RouteContainer from 'components/RouteContainer';
import { colors, textColors, sizes, } from 'utils/global';

type Props = {

};

const SendRoute = (props: Props) => {
	const navigate = useNavigate();

	const maxAmountButton = <TouchableOpacity style={styles.embedButtonContainer}>
		<Text style={styles.embedButtonCaption}>MAX</Text>
	</TouchableOpacity>;

	return <RouteContainer style={styles.container}>
		<TopNavigation
			title="Send Assets"
			onBack={() => navigate('/')}/>
		<ScrollView contentContainerStyle={styles.scrollContentContainer}>
			<Input
				disabled
				caption="FROM"
				value="My Wallet (7300...3334)"/>
			<Input caption="TO"/>
			<Input caption="ASSET"/>
			<Input
				caption="AMOUNT"
				rightCaption="AVAILABLE: 50 EUR"
				suffix={maxAmountButton}/>
		</ScrollView>
		<View style={styles.commandContainer}>
			<Button
				disabled
				style={styles.buttonContainer}
				caption="Cancel"
				onPress={() => navigate('/')}/>
			<Button
				style={styles.buttonContainer}
				caption="Send"/>
		</View>
	</RouteContainer>;
};

export default SendRoute;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	scrollContentContainer: {
		paddingVertical: 30,
		paddingHorizontal: 20,
	},
	commandContainer: {
		flexDirection: 'row',
		paddingTop: 8,
		paddingBottom: 20,
		paddingHorizontal: 12,
	},
	embedButtonContainer: {
		backgroundColor: colors.cloud,
		borderRadius: sizes.normalRadius,
		paddingVertical: 4,
		paddingHorizontal: 8,
		marginRight: 16,
	},
	embedButtonCaption: {
		color: textColors.lightGray,
		fontSize: 10,
		fontWeight: '700',
		lineHeight: 16,
	},
	buttonContainer: {
		flex: 1,
		marginHorizontal: 8,
	},
});