import { setUsersData } from './setUsersData';

export const loadUsersData = (requestServer) => (dispatch) => {
	requestServer('fetchUsersRows').then((postsData) => {
		console.log(postsData);
		dispatch(setUsersData(postsData.response));
	});
};
