import { createPost, getPosts } from '../api';
import { sessions } from '../sessions';
import { ROLE } from '../../constants';

export const newPost = async (userSession, url, title, content) => {
	const accessRoles = [ROLE.ADMINISTRATOR];
	const access = await sessions.access(userSession, accessRoles);
	if (!access)
		return {
			error: 'Доступ запрещен',
			response: null,
		};

	await createPost(url, title, content);
	const posts = await getPosts();
	return {
		error: null,
		response: posts,
	};
};
