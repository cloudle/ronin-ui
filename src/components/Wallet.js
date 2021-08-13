import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, } from 'react-native';

import CopyIcon from 'svg/copy';
import LogoIcon from 'svg/logo';
import { colors, } from 'utils/global';

type Props = {

};

const Wallet = (props: Props) => {
	return <View style={styles.container}>
		<View style={styles.headerContainer}>
			<Text numberOfLines={1} style={styles.walletTitle}>
				<Text>My Wallet</Text>
				<Text style={styles.walletId}>
					(7300 3777 3888 3334)
				</Text>
			</Text>
			<TouchableOpacity>
				<CopyIcon color="#FFFFFF"/>
			</TouchableOpacity>
		</View>
		<View style={styles.footerContainer}>
			<View style={styles.balanceContainer}>
				<Text style={styles.primaryBalance}>
					1,000 USD
				</Text>
				<Text style={styles.localBalance}>
					23,046,000 VND
				</Text>
			</View>
			<View style={styles.brandContainer}>
				<LogoIcon
					invert
					color={colors.roninBlue}
					width={28}
					height={40}/>
			</View>
		</View>
	</View>;
};

export default Wallet;

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.roninBlue,
		borderRadius: 16,
		padding: 20,
		shadowColor: '#000000',
		shadowOpacity: 0.25,
		shadowRadius: 18,
		shadowOffset: { width: 0, height: 3, },
	},
	headerContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderColor: 'rgba(255, 255, 255, 0.2)',
		paddingBottom: 12,
	},
	walletTitle: {
		flex: 1,
		fontSize: 14,
		fontWeight: '600',
		color: '#FFFFFF',
	},
	walletId: {
		fontSize: 14,
		color: 'rgba(255, 255, 255, 0.3)',
		fontWeight: '400',
		marginLeft: 8,
	},
	footerContainer: {
		flexDirection: 'row',
		paddingTop: 12,
	},
	balanceContainer: {
		flex: 1,
	},
	primaryBalance: {
		fontSize: 32,
		lineHeight: 40,
		color: '#FFFFFF',
		fontWeight: '700',
	},
	localBalance: {
		fontSize: 16,
		lineHeight: 24,
		color: 'rgba(255, 255, 255, 0.3)',
		fontWeight: '600',
		marginTop: 2,
	},
	brandContainer: {
		justifyContent: 'flex-end',
	},
});