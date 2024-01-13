import { ACTION_TYPE } from './actionType';

export const setUsersData = (usersData) => ({
	type: ACTION_TYPE.SET_USERS_DATA,
	payload: usersData,
});
