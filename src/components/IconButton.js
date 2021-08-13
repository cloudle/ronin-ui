import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, } from 'react-native';

import { Style, Element, } from 'typeDefinitions';
import UserIcon from 'svg/user';
import CopyIcon from 'svg/copy';
import SendIcon from 'svg/send';
import { colors, textColors, sizes, } from 'utils/global';

type Props = {
	style?: Style,
	buttonContainerStyle?: Style,
	icon?: 'user' | 'copy' | 'send',
	size?: number,
	iconSize?: number,
	caption?: string,
	disabled?: boolean,
	children?: Element,
};

const IconButton = (props: Props) => {
	const {
		style,
		buttonContainerStyle,
		icon,
		size,
		iconSize,
		caption,
		disabled,
		children,
		...iconProps
	} = props;
	const IconComponent = iconMap[icon];
	const disabledStyle = disabled && { opacity: 0.5, };

	return <View style={style}>
		<TouchableOpacity
			disabled={disabled}
			style={[styles.container, buttonContainerStyle, disabledStyle]}>
			{children || <IconComponent size={iconSize} color={colors.roninBlue} {...iconProps}/>}
		</TouchableOpacity>
		{caption && <Text numberOfLine={1} style={styles.caption}>
			{caption}
		</Text>}
	</View>;
};

IconButton.defaultProps = {
	iconSize: 32,
};

export default IconButton;

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.cloud,
		borderRadius: sizes.normalRadius,
		alignItems: 'center',
		justifyContent: 'center',
	},
	caption: {
		color: textColors.gray,
		fontSize: 12,
		fontWeight: '600',
		textAlign: 'center',
		marginTop: 5,
	},
});

const iconMap = {
	user: UserIcon,
	copy: CopyIcon,
	send: SendIcon,
};