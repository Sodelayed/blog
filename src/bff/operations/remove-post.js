import { ROLE } from '../../constants';
import { sessions } from '../sessions';
import { deletePost, getPosts, getComments, deleteComment } from '../api';

export const removePost = async (hash, postId) => {
	const accessRoles = [ROLE.ADMINISTRATOR];

	const access = await sessions.access(hash, accessRoles);

	if (!access) {
		return {
			error: 'Доступ запрещен',
			response: null,
		};
	}

	await deletePost(postId);
	const comments = await getComments(postId);
	await Promise.all(comments.map(({ id: commentId }) => deleteComment(commentId)));
	const posts = await getPosts();
	return {
		error: null,
		response: posts,
	};
};
