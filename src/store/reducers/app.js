import * as Actions from 'store/actions';

const initialState = {
	counter: 0,
	profile: {
		id: 'loading...',
	},
	profileReady: false,
};

export default (state = initialState, action) => {
	const { type, payload, } = action;

	switch (type) {
	case Actions.App.SyncProfile:
		return { ...state, profile: payload, profileReady: true, };
	default:
		return state;
	}
};
