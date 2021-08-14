import React from 'react';
import { StyleSheet, View, Text, } from 'react-native';
import { useDispatch, } from 'react-redux';

import type { ToggleModalOptions, } from 'typeDefinitions';
import { useDenormalized, } from 'utils/effect';
import * as uiActions from 'store/action/ui';
import FloatModal from './Modal';

type Props = {

};

const Modal = (props: Props) => {
	const dispatch = useDispatch();
	const floats = useDenormalized(({ ui, }) => ui.get('floats'));

	return <View
		pointerEvents="box-none"
		style={styles.container}>
		{floats.map((item: ToggleModalOptions) => {
			const onClose = () => {
				dispatch(uiActions.toggleModal(false, item));
			};

			return <FloatModal
				key={item.id}
				item={item}
				close={onClose}
				dispatch={dispatch}/>;
		})}
	</View>;
};

export default Modal;

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		top: 0, left: 0, bottom: 0, right: 0,
		alignItems: 'center',
		justifyContent: 'center',
	},
});