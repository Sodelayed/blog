import { setPostData } from './setPostData';

export const loadPost = (requestServer, postId) => (dispatch) =>
	requestServer('fetchPost', postId).then((postData) => {
		if (postData.response) dispatch(setPostData(postData.response));

		return postData;
	});
