import React from 'react';
import { StyleSheet, TouchableOpacity, Text, } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import type { Style, } from 'typeDefinitions';
import { colors, sizes, } from 'utils/global';

type Props = {
	style?: Style,
	contentContainerStyle?: Style,
	captionStyle?: Style,
	caption?: string,
	disabled?: boolean,
	onPress?: Function,
};

const Button = (props: Props) => {
	const { style, contentContainerStyle, captionStyle, caption, disabled, onPress, } = props;
	const backgroundColors = disabled ? ['#F7F9FC', '#F7F9FC'] : ['#1273EA', '#1C94F4'];

	return <TouchableOpacity
		style={style}
		onPress={onPress}>
		<LinearGradient
			style={[styles.contentContainer, contentContainerStyle]}
			colors={backgroundColors}
			start={{ x: 0, y: 0.5 }}
			end={{ x: 1, y: 0.5 }}>
			<Text style={[styles.caption, disabled && styles.disabledCaption, captionStyle]}>
				{caption}
			</Text>
		</LinearGradient>
	</TouchableOpacity>;
};

Button.defaultProps = {
	caption: 'Caption',
};

export default Button;

const styles = StyleSheet.create({
	contentContainer: {
		borderRadius: sizes.normalRadius,
		padding: 12,
	},
	disabledContainer: {
		backgroundColor: colors.cloud,
	},
	caption: {
		color: '#FFFFFF',
		textAlign: 'center',
		fontWeight: '600',
	},
	disabledCaption: {
		color: colors.roninBlue,
	},
});