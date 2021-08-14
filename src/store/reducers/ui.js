import Immutable from 'immutable';

import type { ToggleModalOptions, } from 'typeDefinitions';
import { normalize, } from 'utils/global';
import * as Actions from 'store/actions';

const initialState = Immutable.Map({
	floats: normalize([]),
});

export default (state = initialState, action) => {
	const { type, payload, } = action;

	switch (type) {
	case Actions.UI.ToggleFloat:
		return handleToggleModal(state, payload);
	default:
		return state;
	}
};

type ToggleModalPayload = {
	flag: boolean,
	options: ToggleModalOptions,
};

const handleToggleModal = (state, payload: ToggleModalPayload) => {
	const { flag, type, options, } = payload;

	if (!options.id) options.id = 'default'; options.type = type || 'MODAL';

	if (flag === false) {
		return state.updateIn(['floats', 'entries'], i => i.delete(options.id))
			.deleteIn(['floats', 'entities', options.id]);
	}

	const currentModal = state.getIn(['floats', 'entities', options.id]);

	if (currentModal) {
		return state.setIn(['floats', 'entities', options.id], options);
	}

	return state.updateIn(['floats', 'entries'], i => i.add(options.id))
		.setIn(['floats', 'entities', options.id], options);
};
