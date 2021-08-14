import React from 'react';
import { StyleSheet, View, TouchableOpacity, FlatList, Text, } from 'react-native';
import { useSelector, } from 'react-redux';

import CloseIcon from 'svg/close';
import AssetRow from 'components/AssetRow';

type Props = {
	close?: Function,
	configs?: {
		onSelect?: Function,
	},
};

const AssetPicker = (props: Props) => {
	const { close, configs, } = props;
	const exchange = useSelector(({ exchange }) => exchange);
	const wallet = useSelector(({ wallet }) => wallet);
	const usdAsset = { currency: 'USD', value: wallet.balance, };
	const assets = [usdAsset, ...wallet.assets];

	const onSelect = (asset) => {
		configs?.onSelect?.(asset);
		close();
	};

	const renderAsset = (props) => <AssetRow
		exchange={exchange}
		onSelect={onSelect}
		{...props}/>;

	return <View style={styles.container}>
		<View style={styles.headerContainer}>
			<Text style={styles.title}>
				Assets
			</Text>
			<TouchableOpacity
				style={styles.closeButton}
				onPress={close}>
				<CloseIcon size={16}/>
			</TouchableOpacity>
		</View>
		<FlatList
			data={assets}
			renderItem={renderAsset}
			keyExtractor={(i) => i.currency}/>
	</View>;
};

export default AssetPicker;

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		top: 20, left: 20, right: 20, bottom: 22,
		backgroundColor: '#FFFFFF',
		borderRadius: 16,
		// padding: 24,
	},
	headerContainer: {
		padding: 20,
		borderBottomWidth: 1,
		borderColor: 'rgba(0, 0, 0, 0.2)',
	},
	title: {
		fontSize: 14,
		lineHeight: 20,
		fontWeight: '600',
		textAlign: 'center',
	},
	closeButton: {
		position: 'absolute',
		top: 0, bottom: 0, right: 0,
		paddingHorizontal: 24,
		alignItems: 'center',
		justifyContent: 'center',
	},
});