import React from 'react';
import { StyleSheet, View, Image, Text, } from 'react-native';
import numeral from 'numeral';

import type { IAsset, IExchange, } from 'typeDefinitions';
import { colors, textColors, sizes, } from 'utils/global';

type Props = {
	item?: IAsset,
	exchange?: IExchange,
};

const AssetRow = (props: Props) => {
	const { item, exchange, } = props;
	const localValue = item.value * exchange.rates[item.currency];
	const currencyIconSrc = { uri: currencyIconMap[item.currency], };

	return <View style={styles.container}>
		<Image
			style={styles.currencyIcon}
			source={currencyIconSrc}/>
		<View style={styles.innerContainer}>
			<Text style={styles.primaryValue}>
				{numeral(item.value).format('0,0')} {item.currency}
			</Text>
			<Text style={styles.localValue}>
				{numeral(localValue).format('0,0')} {exchange.baseCurrency}
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

const currencyIconMap = {
	USD: './usd-coin.png',
	EUR: './eur-coin.png',
	YEN: './yen-coin.png',
};