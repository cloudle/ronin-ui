import React from 'react';
import { StyleSheet, View, ScrollView, Text, } from 'react-native';
import { useDispatch, useSelector, } from 'react-redux';
import { useNavigate, } from 'react-router';

import DiamondIcon from 'svg/diamond';
import IconButton from 'components/IconButton';
import RouteContainer from 'components/RouteContainer';
import { colors, textColors, sizes, } from 'utils/global';
import { useUserProfile, } from 'utils/effect';
import * as appActions from 'store/action/app';
import Wallet from './Wallet';
import AssetRow from './AssetRow';

type Props = {

};

const DashboardRoute = (props: Props) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const profile = useUserProfile(true);
	const wallet = useSelector(({ wallet }) => wallet);
	const exchange = useSelector(({ exchange }) => exchange);

	return <RouteContainer style={styles.container}>
		{particles.map((configs, i) => <DiamondIcon key={i} {...configs}/>)}
		<View style={styles.contentContainer}>
			<View style={styles.headerContainer}>
				<View style={styles.appNameContainer}>
					<View style={styles.appNameDot}/>
					<Text style={styles.appNameTitle}>Ronin Wallet</Text>
				</View>
				<View style={styles.headingCommandContainer}>
					<IconButton
						icon="user"
						onPress={() => dispatch(appActions.signOut())}/>
				</View>
			</View>
			<ScrollView contentContainerStyle={styles.scrollContentContainer}>
				<Wallet
					balance={wallet.balance}
					profile={profile}
					exchange={exchange}/>
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
						caption="Send"
						onPress={() => navigate('/send')}/>
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
					{wallet.assets.map((item, i) => <AssetRow
						key={i}
						item={item}
						exchange={exchange}/>)}
				</View>
			</ScrollView>
		</View>
	</RouteContainer>;
};

export default DashboardRoute;

const dotSize = 8;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	contentContainer: {
		position: 'absolute',
		top: 0, left: 0, bottom: 0, right: 0,
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
		paddingVertical: 20,
		paddingHorizontal: 20,
	},
	commandContainer: {
		flexDirection: 'row',
		marginTop: 30,
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

const particles = [{
	size: 12,
	color: '#E9F5FE',
	style: { position: 'absolute', top: 20, right: 120, },
}, {
	size: 6,
	color: '#FFC729',
	style: { position: 'absolute', top: 45, right: 100, },
}, {
	size: 12,
	color: '#E9F5FE',
	style: { position: 'absolute', top: 260, left: 16, },
}, {
	size: 12,
	color: '#E9F5FE',
	style: { position: 'absolute', top: 290, right: 30, },
}, {
	size: 6,
	color: '#FFC729',
	style: { position: 'absolute', top: 342, left: 60, },
}, {
	size: 12,
	color: '#EC9FFF',
	style: { position: 'absolute', top: 345, right: 60, },
}, ];
