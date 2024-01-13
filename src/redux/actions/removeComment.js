import { setPostData } from './setPostData';

export const removeComment = (requestServer, id, postId) => (dispatch) =>
	requestServer('removeComment', id, postId).then((postData) => {
		dispatch(setPostData(postData.response));
	});
