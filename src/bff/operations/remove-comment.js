import { deleteComment, getComments, getPost } from '../api';
import { sessions } from '../sessions';
import { ROLE } from '../../constants';

export const removeComment = async (userSession, id, postId) => {
	const accessRoles = [ROLE.ADMINISTRATOR, ROLE.MODERATOR];
	const access = await sessions.access(userSession, accessRoles);
	if (!access)
		return {
			error: 'Доступ запрещен',
			response: null,
		};

	await deleteComment(id);

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
