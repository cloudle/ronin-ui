import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import numeral from 'numeral';

import type { IUserProfile, IExchange, } from 'typeDefinitions';
import CopyIcon from 'svg/copy';
import LogoIcon from 'svg/logo';
import { colors, } from 'utils/global';

type Props = {
	profile?: IUserProfile,
	balance?: number,
	exchange?: IExchange,
};

const Wallet = (props: Props) => {
	const { profile, balance, exchange, } = props;
	const usdBalance = balance || 0;
	const localBalance = usdBalance * exchange.rates.USD;

	return <LinearGradient
		style={styles.container}
		colors={['#1273EA', '#1C94F4']}
		start={{ x: 0, y: 0.5, }}
		end={{ x: 1, y: 0.5, }}>
		<View style={styles.headerContainer}>
			<Text numberOfLines={1} style={styles.walletTitle}>
				<Text>My Wallet</Text>
				<Text style={styles.walletId}>
					({profile?.id})
				</Text>
			</Text>
			<TouchableOpacity>
				<CopyIcon color="#FFFFFF"/>
			</TouchableOpacity>
		</View>
		<View style={styles.footerContainer}>
			<View style={styles.balanceContainer}>
				<Text style={styles.primaryBalance}>
					{numeral(usdBalance).format('0,0')} USD
				</Text>
				<Text style={styles.localBalance}>
					{numeral(localBalance).format('0,0')} {exchange.baseCurrency}
				</Text>
			</View>
			<View style={styles.brandContainer}>
				<LogoIcon
					invert
					color="#1C94F4"
					width={28}
					height={40}/>
			</View>
		</View>
	</LinearGradient>;
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
		paddingBottom: 20,
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
		paddingTop: 14,
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