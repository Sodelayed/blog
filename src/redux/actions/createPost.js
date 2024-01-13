import { setPostsData } from './setPostsData';

export const createPost = (requestServer, url, title, content) => (dispatch) => {
	requestServer('newPost', url, title, content).then((postsData) => {
		dispatch(setPostsData(postsData.response));
	});
};
