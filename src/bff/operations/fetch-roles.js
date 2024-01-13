import { getRoles } from '../api';
import { ROLE } from '../../constants/role';
import { sessions } from '../sessions';

export const fetchRoles = async (userSession) => {
	const accessRoles = [ROLE.ADMINISTRATOR];
	const access = await sessions.access(userSession, accessRoles);
	if (!access)
		return {
			error: 'Доступ запрещен',
			response: null,
		};

	const roles = await getRoles();

	return {
		error: null,
		response: roles,
	};
};
