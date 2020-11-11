import { UserActionTypes } from './user.types';

export const setCurrentUser = (user) => ({
	type: UserActionTypes.SET_CURRENT_USER,
	payload: user,
});

export const signOutUser = (user) => ({
	type: UserActionTypes.SIGN_OUT_USER,
});
