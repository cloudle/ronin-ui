import * as Actions from 'store/actions';

const initialState = {
	baseCurrency: 'VND',
	rates: {
		VND: 1,
		USD: 22832.50,
		EUR: 26938.35,
		YEN: 208.35,
	},
};

export default (state = initialState, action) => {
	const { type, payload, } = action;

	switch (type) {
	default:
		return state;
	}
};