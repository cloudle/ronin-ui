import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text, } from 'react-native';
import numeral from 'numeral';

import type { Style, IAsset, IExchange, } from 'typeDefinitions';
import { textColors, } from 'utils/global';

type Props = {
	style?: Style,
	index?: number,
	item?: IAsset,
	exchange?: IExchange,
	onSelect?: Function,
};

const AssetRow = (props: Props) => {
	const { style, item, exchange, onSelect, } = props;
	const localValue = item.value * exchange.rates[item.currency];
	const currencyIconSrc = { uri: currencyIconMap[item.currency], };
	const ContainerComponent = onSelect ? TouchableOpacity : View;
	const conditionalProps = onSelect ? {
		onPress: () => onSelect?.(item),
	} : {};

	return <ContainerComponent
		style={[styles.container, style]}
		{...conditionalProps}>
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
	</ContainerComponent>;
};

export default AssetRow;

const currencyIconSize = 32;

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		paddingVertical: 16,
		paddingHorizontal: 20,
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