import { setPostData } from './setPostData';

export const addComment = (requestServer, postId, userId, content) => (dispatch) => {
	requestServer('newComment', postId, userId, content).then((postData) => {
		dispatch(setPostData(postData.response));
	});
};
