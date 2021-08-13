import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, } from 'react-native';

import type { Style, } from 'typeDefinitions';
import { colors, sizes, } from 'utils/global';

type Props = {
	style?: Style,
	captionStyle?: Style,
	caption?: string,
	disabled?: boolean,
};

const Button = (props: Props) => {
	const { style, captionStyle, caption, disabled, } = props;

	return <TouchableOpacity
		style={[styles.container, disabled && styles.disabledContainer, style]}>
		<Text style={[styles.caption, disabled && styles.disabledCaption, captionStyle]}>
			{caption}
		</Text>
	</TouchableOpacity>;
};

Button.defaultProps = {
	caption: 'Caption',
};

export default Button;

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.roninBlue,
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