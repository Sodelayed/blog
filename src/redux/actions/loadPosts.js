import { setPostsData } from './setPostsData';

export const loadPosts = (requestServer, searchText) => (dispatch) => {
	requestServer('fetchPosts', searchText).then((postsData) => {
		dispatch(setPostsData(postsData.response));
	});
};
