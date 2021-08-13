import { all, takeEvery, } from 'redux-saga/effects';
import * as Actions from 'store/actions';
import { router, } from 'utils/global';

function* signInSaga({ payload, }) {
	try {
		router.navigate('/');
	} catch (err) {
		console.log(err);
	}
}

function* signOutSaga({ payload, }) {
	try {
		router.navigate('/login');
	} catch (err) {
		console.log(err);
	}
}

export default function* appSagas() {
	yield all([
		takeEvery(Actions.App.SignIn, signInSaga),
		takeEvery(Actions.App.SignOut, signOutSaga),
	]);
}