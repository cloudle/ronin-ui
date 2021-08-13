import React from 'react';
import { StyleSheet, View, Text, TextInput, } from 'react-native';

import type { Style, } from 'typeDefinitions';
import { textColors, sizes, } from 'utils/global';

type Props = {
	style?: Style,
	inputStyle?: Style,
	captionStyle?: Style,
	rightCaptionStyle?: Style,
	caption?: string,
	rightCaption?: string,
	disabled?: boolean,
	prefix?: Element,
	suffix?: Element,
};

const Input = (props: Props) => {
	const {
		style,
		inputStyle,
		captionStyle,
		rightCaptionStyle,
		caption,
		rightCaption,
		disabled,
		prefix,
		suffix,
		...inputProps
	} = props;
	const showCaption = !!caption || !!rightCaption;

	return <View style={[styles.container, style,]}>
		{showCaption && <View style={styles.captionContainer}>
			<Text style={[styles.caption, captionStyle]}>
				{caption}
			</Text>
			<Text style={[styles.rightCaption, rightCaptionStyle]}>
				{rightCaption}
			</Text>
		</View>}
		<View style={[styles.inputContainer, disabled && styles.disabledContainer, ]}>
			{prefix}
			<TextInput style={[styles.input, disabled && styles.disabledInput, inputStyle]} {...inputProps}/>
			{suffix}
		</View>
	</View>;
};

export default Input;

const styles = StyleSheet.create({
	container: {
		marginBottom: 18,
	},
	disabledContainer: {
		backgroundColor: '#EDF1F7',
	},
	captionContainer: {
		flexDirection: 'row',
		marginBottom: 4,
	},
	caption: {
		flex: 1,
		fontSize: 10,
		fontWeight: '700',
		lineHeight: 16,
		color: textColors.lightGray,
		textTransform: 'uppercase',
		marginLeft: 8,
	},
	rightCaption: {
		fontSize: 10,
		fontWeight: '700',
		lineHeight: 16,
		marginRight: 8,
	},
	inputContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		borderWidth: 1,
		borderColor: '#C5CEE0',
		borderRadius: sizes.normalRadius,
	},
	input: {
		flex: 1,
		height: 40,
		paddingVertical: 8,
		paddingHorizontal: 16,
	},
	disabledInput: {
		color: '#8F9BB3',
	},
});