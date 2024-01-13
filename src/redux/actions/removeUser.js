import { setUsersData } from './setUsersData';

export const removeUser = (requestServer, userId) => (dispatch) =>
	requestServer('removeUser', userId).then((postData) => {
		dispatch(setUsersData(postData.response));
	});
