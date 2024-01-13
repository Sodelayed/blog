import { getUsers } from '../api';
import { ROLE } from '../../constants/role';
import { sessions } from '../sessions';

export const fetchUsers = async (userSession) => {
	const accessRoles = [ROLE.ADMINISTRATOR];
	const access = await sessions.access(userSession, accessRoles);
	if (!access)
		return {
			error: 'Доступ запрещен',
			response: null,
		};

	const users = await getUsers();

	return {
		error: null,
		response: users,
	};
};
