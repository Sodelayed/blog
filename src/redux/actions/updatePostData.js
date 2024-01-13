import { setPostData } from './setPostData';

export const updatePostData =
	(requestServer, id, currentImageUrl, currentTitle, currentContent) => (dispatch) => {
		requestServer(
			'updatePostContent',
			id,
			currentImageUrl,
			currentTitle,
			currentContent,
		).then((loadedPost) => dispatch(setPostData(loadedPost.response)));
	};
