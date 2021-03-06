import type { ICurrency, } from 'typeDefinitions';
import * as Actions from 'store/actions';

const mockAssets: Array<ICurrency> = [{
	currency: 'EUR',
	value: 50,
}, {
	currency: 'YEN',
	value: 10000,
}, ];

const initialState = {
	assets: mockAssets,
	balance: 1000,
};

export default (state = initialState, action) => {
	const { type, payload, } = action;

	switch (type) {
	default:
		return state;
	}
};