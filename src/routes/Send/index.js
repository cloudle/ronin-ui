import React, { useState, } from 'react';
import { StyleSheet, View, Image, ScrollView, TouchableOpacity, Text, } from 'react-native';
import { useDispatch, useSelector, } from 'react-redux';
import { useNavigate, } from 'react-router';
import numeral from 'numeral';

import type { Style, } from 'typeDefinitions';
import StackIcon from 'svg/stack';
import TopNavigation from 'components/TopNavigation';
import Input from 'components/Input';
import Button from 'components/Button';
import RouteContainer from 'components/RouteContainer';
import ConfirmationModal from 'modals/Confirmation';
import AssetPickerModal from 'modals/AssetPicker';
import { colors, textColors, sizes, currencyIconMap, } from 'utils/global';
import * as uiActions from 'store/action/ui';

type Props = {

};

const SendRoute = (props: Props) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const assets = useSelector(({ wallet, }) => wallet.assets);
	const [selectedAsset, setSelectedAsset] = useState(assets[0]);
	const [amount, setAmount] = useState(0);
	const currencyIconSrc = { uri: currencyIconMap[selectedAsset.currency], };
	const formattedValue = numeral(selectedAsset.value).format('0,0');
	const rightAssetCaption = `AVAILABLE: ${formattedValue} ${selectedAsset.currency}`;

	const onAssetSelect = () => {
		dispatch(uiActions.toggleModal(true, {
			component: AssetPickerModal,
			onSelect: (value) => {
				setSelectedAsset(value);
				setAmount(0);
			},
		}));
	};

	const onSend = () => {
		setAmount(0);
		dispatch(uiActions.toggleModal(true, {
			component: ConfirmationModal,
			title: 'Successfully sent',
			message: () => <View>
				<Text style={styles.messageLine}>
					Your <Text style={styles.boldText}>EUR</Text> has been sent!
				</Text>
				<Text style={styles.messageLine}>
					Thank you for using our service
				</Text>
			</View>,
		}));
	};

	const assetPrefix = <Image
		style={styles.currencyIcon}
		source={currencyIconSrc}/>;

	const assetSuffix = <StackIcon
		style={styles.stackIcon}
		size={18}/>;

	const maxAmountButton = <TouchableOpacity
		style={styles.embedButtonContainer}
		onPress={() => setAmount(selectedAsset.value)}>
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
			<Input
				caption="ASSET"
				value={selectedAsset.currency}
				inputStyle={{ paddingHorizontal: 8, }}
				prefix={assetPrefix}
				suffix={assetSuffix}
				onPress={onAssetSelect}/>
			<Input
				caption="AMOUNT"
				rightCaption={rightAssetCaption}
				value={amount}
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
				caption="Send"
				onPress={onSend}/>
		</View>
	</RouteContainer>;
};

export default SendRoute;

const currencyIconSize = 24;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	scrollContentContainer: {
		paddingVertical: 30,
		paddingHorizontal: 20,
	},
	currencyIcon: {
		marginLeft: 16,
		width: currencyIconSize,
		height: currencyIconSize,
	},
	stackIcon: {
		marginRight: 16,
	},
	commandContainer: {
		flexDirection: 'row',
		paddingTop: 8,
		paddingBottom: 20,
		paddingHorizontal: 12,
	},
	embedButtonContainer: {
		backgroundColor: '#EEF3FB',
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
	messageLine: {
		lineHeight: 22,
	},
	boldText: {
		fontWeight: '700',
	},
});