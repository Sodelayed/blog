import { ROLE } from '../../constants/role';
import { setPostData, getPost, getComments } from '../api';
import { sessions } from '../sessions';

export const updatePostContent = async (
	userSession,
	id,
	currentImageUrl,
	currentTitle,
	currentContent,
) => {
	const accessRoles = [ROLE.ADMINISTRATOR];
	const access = await sessions.access(userSession, accessRoles);
	if (!access)
		return {
			error: 'Доступ запрещен',
			response: null,
		};

	await setPostData(id, currentImageUrl, currentTitle, currentContent);
	const post = await getPost(id);
	const comments = await getComments(id);
	return {
		error: null,
		response: {
			...post,
			comments,
		},
	};
};
