import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, } from 'react-native';

import BackIcon from 'svg/back';
import { sizes, } from 'utils/global';

type Props = {
	title?: string,
	onBack?: Function,
};

const TopNavigation = (props: Props) => {
	const { title, onBack, } = props;

	return <View style={styles.container}>
		<Text style={styles.title}>
			{title}
		</Text>
		{onBack && <TouchableOpacity
			style={styles.backButtonContainer}
			onPress={onBack}>
			<BackIcon/>
		</TouchableOpacity>}
	</View>;
};

TopNavigation.defaultProps = {
	title: 'Title',
};

export default TopNavigation;

const styles = StyleSheet.create({
	container: {
		height: sizes.navigationHeight,
		justifyContent: 'center',
		shadowColor: '#000000',
		shadowOpacity: 0.04,
		shadowRadius: 12,
		shadowOffset: { width: 0, height: 3, },
	},
	title: {
		textAlign: 'center',
		fontSize: 14,
		lineHeight: 20,
		fontWeight: '600',
	},
	backButtonContainer: {
		position: 'absolute',
		left: 20, top: 0, bottom: 0,
		justifyContent: 'center',
	},
});