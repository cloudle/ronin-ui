import { combineReducers } from 'redux';
import appReducer from './app';
import exchangeReducer from './exchange';
import walletReducer from './wallet';

export default combineReducers({
	app: appReducer,
	exchange: exchangeReducer,
	wallet: walletReducer,
});
