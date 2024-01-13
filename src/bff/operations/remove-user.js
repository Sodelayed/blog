import { ROLE } from '../../constants/role';
import { deleteUser, getUsers, getRoles } from '../api';
import { sessions } from '../sessions';

export const removeUser = async (userSession, userId) => {
	const accessRoles = [ROLE.ADMINISTRATOR];
	const access = await sessions.access(userSession, accessRoles);
	if (!access)
		return {
			error: 'Доступ запрещен',
			response: null,
		};

	await deleteUser(userId);

	const users = await getUsers();
	const roles = await getRoles();
	return {
		error: null,
		response: {
			users,
			roles,
		},
	};
};
