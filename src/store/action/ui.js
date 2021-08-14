import * as Actions from 'store/actions';

export const toggleModal = (flag, options = {}) => {
	return { type: Actions.UI.ToggleFloat, payload: { flag, type: 'MODAL',  options, }, };
};
