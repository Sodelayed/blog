import { createComment, getComments, getPost } from '../api';
import { sessions } from '../sessions';
import { ROLE } from '../../constants';

export const newComment = async (userSession, postId, user, content) => {
	const accessRoles = [ROLE.ADMINISTRATOR, ROLE.MODERATOR, ROLE.READER];
	const access = await sessions.access(userSession, accessRoles);
	if (!access)
		return {
			error: 'Доступ запрещен',
			response: null,
		};

	await createComment(postId, user, content);

	const post = await getPost(postId);
	const comments = await getComments(postId);
	return {
		error: null,
		response: {
			...post,
			comments,
		},
	};
};
