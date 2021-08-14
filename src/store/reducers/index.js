import { combineReducers } from 'redux';
import uiReducer from './ui';
import appReducer from './app';
import exchangeReducer from './exchange';
import walletReducer from './wallet';

export default combineReducers({
	ui: uiReducer,
	app: appReducer,
	exchange: exchangeReducer,
	wallet: walletReducer,
});
