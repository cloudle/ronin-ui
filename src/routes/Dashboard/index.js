import React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, Text, } from 'react-native';

import UserIcon from 'svg/user';
import Wallet from 'components/Wallet';
import IconButton from 'components/IconButton';
import { colors, textColors, sizes, } from 'utils/global';
import AssetRow from './AssetRow';

type Props = {

};

const DashboardRoute = (props: Props) => {
	return <View style={styles.container}>
		<View style={styles.headerContainer}>
			<View style={styles.appNameContainer}>
				<View style={styles.appNameDot}/>
				<Text style={styles.appNameTitle}>Ronin Wallet</Text>
			</View>
			<View style={styles.headingCommandContainer}>
				<IconButton icon="user"/>
			</View>
		</View>
		<ScrollView contentContainerStyle={styles.scrollContentContainer}>
			<Wallet/>
			<View style={styles.commandContainer}>
				<IconButton
					disabled
					style={styles.button}
					buttonContainerStyle={styles.buttonInner}
					icon="send"
					caption="Deposit"/>
				<IconButton
					style={styles.button}
					buttonContainerStyle={styles.buttonInner}
					icon="send"
					caption="Send"/>
				<IconButton
					disabled
					style={styles.button}
					buttonContainerStyle={styles.buttonInner}
					icon="send"
					caption="Swap"/>
			</View>
			<Text style={styles.sectionTitle}>
				Assets
			</Text>
			<View style={styles.assetsContainer}>
				{mockAssets.map((item, i) => <AssetRow
					key={i}
					item={item}/>)}
			</View>
		</ScrollView>
	</View>;
};

export default DashboardRoute;

const dotSize = 8;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	headerContainer: {
		flexDirection: 'row',
		paddingTop: 18,
		paddingBottom: 9,
		paddingHorizontal: 20,
	},
	appNameContainer: {
		flexDirection: 'row',
		backgroundColor: colors.cloud,
		borderRadius: sizes.normalRadius,
		height: 32,
		alignItems: 'center',
		paddingHorizontal: 14,
	},
	appNameDot: {
		width: dotSize,
		height: dotSize,
		borderRadius: dotSize / 2,
		backgroundColor: colors.roninBlue,
	},
	appNameTitle: {
		fontSize: 12,
		lineHeight: 20,
		fontWeight: '700',
		marginLeft: 8,
		color: textColors.gray,
	},
	headingCommandContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-end',
	},
	scrollContentContainer: {
		paddingVertical: 12,
		paddingHorizontal: 20,
	},
	commandContainer: {
		flexDirection: 'row',
		marginTop: 18,
		justifyContent: 'center',
	},
	button: {
		marginHorizontal: 12,
	},
	buttonInner: {
		width: 48,
		height: 48,
	},
	sectionTitle: {
		fontSize: 16,
		lineHeight: 20,
		color: textColors.gray,
		fontWeight: '700',
		marginLeft: 5,
		marginTop: 24,
		marginBottom: 8,
	},
	assetsContainer: {

	},
});

const mockAssets = [{
	currency: 'EUR',
	value: 50,
}, {
	currency: 'YEN',
	value: 10000,
}, {
	currency: 'YEN',
	value: 9000,
}, {
	currency: 'YEN',
	value: 8000,
}, {
	currency: 'YEN',
	value: 1000,
}, ];