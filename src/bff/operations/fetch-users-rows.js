import { getUsers, getRoles } from '../api';
import { ROLE } from '../../constants/role';
import { sessions } from '../sessions';

export const fetchUsersRows = async (userSession) => {
	const accessRoles = [ROLE.ADMINISTRATOR];
	const access = await sessions.access(userSession, accessRoles);
	if (!access)
		return {
			error: 'Доступ запрещен',
			response: null,
		};

	const users = await getUsers();
	const roles = await getRoles();
	console.log(users);
	return {
		error: null,
		response: {
			users,
			roles,
		},
	};
};
