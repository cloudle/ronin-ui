import React from 'react';
import { StyleSheet, View, Image, Text, } from 'react-native';

import type { IAsset, } from 'typeDefinitions';
import { colors, textColors, sizes, } from 'utils/global';

type Props = {
	item?: IAsset,
};

const AssetRow = (props: Props) => {
	const { item, } = props;
	const currencyIconSrc = { uri: './yen-coin.png', };

	return <View style={styles.container}>
		<Image
			style={styles.currencyIcon}
			source={currencyIconSrc}/>
		<View style={styles.innerContainer}>
			<Text style={styles.primaryValue}>
				{item.value} {item.currency}
			</Text>
			<Text style={styles.localValue}>
				{item.value}
			</Text>
		</View>
	</View>;
};

export default AssetRow;

const currencyIconSize = 32;

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		backgroundColor: colors.cloud,
		borderRadius: sizes.normalRadius,
		paddingVertical: 16,
		paddingHorizontal: 20,
		marginBottom: 10,
	},
	currencyIcon: {
		width: currencyIconSize,
		height: currencyIconSize,
	},
	innerContainer: {
		flex: 1,
		marginLeft: 20,
	},
	primaryValue: {
		fontSize: 14,
		color: textColors.gray,
		fontWeight: '600',
	},
	localValue: {
		fontSize: 12,
		color: 'rgba(0, 0, 0, 0.3)',
		marginTop: 4,
	},
});