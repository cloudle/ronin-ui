import AsyncStorage from '@react-native-community/async-storage';
import { all, takeEvery, put, call, } from 'redux-saga/effects';
import * as appActions from 'store/action/app';
import * as Actions from 'store/actions';
import { router, } from 'utils/global';
import { graphQlClient, } from 'utils/graphql';
import * as queries from 'utils/graphql/query';

function* signInSaga({ payload, }) {
	try {
		const { id, password, } = payload;

		yield call(AsyncStorage.setItem, 'userId', id);
		yield put(appActions.syncProfile({
			id,
		}));
		router.navigate('/');
	} catch (err) {
		console.log(err);
	}
}

function* signOutSaga({ payload, }) {
	try {
		yield call(AsyncStorage.removeItem, 'userId');
		router.navigate('/login');
	} catch (err) {
		console.log(err);
	}
}

function* getProfileSaga({ payload, }) {
	try {
		const { data: userResponse, } = yield call(graphQlClient.query, {
			query: queries.User,
		});

		yield put(appActions.syncProfile(userResponse.user));
	} catch (err) {
		console.log(err);
	}
}

export default function* appSagas() {
	yield all([
		takeEvery(Actions.App.SignIn, signInSaga),
		takeEvery(Actions.App.SignOut, signOutSaga),
		takeEvery(Actions.App.GetProfile, getProfileSaga),
	]);
}