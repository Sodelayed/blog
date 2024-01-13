import { setPostsData } from './setPostsData';

export const removePost = (requestServer, id) => (dispatch) =>
	requestServer('removePost', id).then((postData) => {
		dispatch(setPostsData(postData.response));
	});
