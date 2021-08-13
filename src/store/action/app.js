import * as Actions from 'store/actions';

export const signIn = (id, password) => {
	return { type: Actions.App.SignIn, payload: { id, password, }, };
};

export const signOut = () => {
	return { type: Actions.App.SignOut, };
};

export const syncProfile = (payload) => {
	return { type: Actions.App.SyncProfile, payload, };
};