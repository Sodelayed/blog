import { getAllComments, getPosts } from '../api';
import { getCommentsCount } from '../utils';

export const fetchPosts = async (searchText) => {
	const posts = await getPosts();
	const comments = await getAllComments();

	if (searchText !== '') {
		const filteredPosts = posts.filter((post) => {
			if (post.title.toLowerCase().includes(searchText.toLowerCase())) return true;
			else return false;
		});
		return {
			error: null,
			response: filteredPosts
				.map((post) => ({
					...post,
					commentsCount: getCommentsCount(post.id, comments),
				}))
				.reverse(),
		};
	}

	return {
		error: null,
		response: posts
			.map((post) => ({
				...post,
				commentsCount: getCommentsCount(post.id, comments),
			}))
			.reverse(),
	};
};
