import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, } from 'react-native';

import LogoIcon from 'svg/logo';
import DiamondIcon from 'svg/diamond';
import { colors, textColors, } from 'utils/global';

type Props = {

};

const LoginRoute = (props: Props) => {
	return <View style={styles.container}>
		<View style={styles.logoContainer}>
			{particles.map((configs, i) => <DiamondIcon key={i} {...configs}/>)}
			<LogoIcon
				color={colors.roninBlue}/>
			<Text style={styles.title}>
				Ronin Wallet
			</Text>
		</View>
		<View style={styles.formContainer}>
			<Text style={styles.subTitle}>
				Your Digital Passport
			</Text>
			<Text style={styles.fieldCaption}>
				ENTER PASSWORD
			</Text>
			<TextInput
				secureTextEntry
				style={styles.input}/>
			<TouchableOpacity style={styles.buttonContainer}>
				<Text style={styles.buttonText}>Unlock</Text>
			</TouchableOpacity>
		</View>
	</View>;
};

export default LoginRoute;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	logoContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-end',
	},
	formContainer: {
		flex: 1,
		paddingHorizontal: 20,
	},
	title: {
		fontSize: 32,
		lineHeight: 40,
		fontWeight: '700',
		textAlign: 'center',
		marginTop: 24,
		color: textColors.gray,
	},
	subTitle: {
		fontSize: 14,
		lineHeight: 20,
		fontWeight: '400',
		textAlign: 'center',
		marginTop: 8,
		marginBottom: 32,
		color: textColors.gray,
	},
	fieldCaption: {
		fontSize: 10,
		fontWeight: '700',
		marginLeft: 8,
		marginBottom: 6,
		color: textColors.lightGray,
	},
	input: {
		borderWidth: 1,
		borderColor: '#C5CEE0',
		borderRadius: 8,
		height: 40,
		paddingHorizontal: 16,
	},
	buttonContainer: {
		alignSelf: 'center',
		backgroundColor: colors.roninBlue,
		height: 40,
		borderRadius: 8,
		justifyContent: 'center',
		paddingHorizontal: 20,
		marginTop: 28,
	},
	buttonText: {
		color: '#FFFFFF',
		fontWeight: '600',
		lineHeight: 20,
	},
});

const particles = [{
	size: 12,
	color: '#EC9FFF',
	style: { position: 'absolute', bottom: 60, right: 70, },
}, {
	size: 12,
	color: '#E9F5FE',
	style: { position: 'absolute', bottom: 90, left: 70, },
}, {
	size: 6,
	color: '#FFC729',
	style: { position: 'absolute', bottom: 150, left: 90, },
}, {
	size: 12,
	color: '#E9F5FE',
	style: { position: 'absolute', bottom: 200, left: 30, },
}, {
	size: 12,
	color: '#E9F5FE',
	style: { position: 'absolute', bottom: 240, left: 94, },
}, {
	size: 12,
	color: '#FFC729',
	style: { position: 'absolute', bottom: 242, right: 92, },
}, {
	size: 6,
	color: '#EC9FFF',
	style: { position: 'absolute', bottom: 210, right: 56, },
}, {
	size: 12,
	color: '#E9F5FE',
	style: { position: 'absolute', bottom: 110, right: 20, },
}, ];