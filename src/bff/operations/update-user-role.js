import { ROLE } from '../../constants/role';
import { setUserRole } from '../api';
import { sessions } from '../sessions';

export const updateUserRole = async (userSession, userId, newRoleId) => {
	const accessRoles = [ROLE.ADMINISTRATOR];
	const access = await sessions.access(userSession, accessRoles);
	if (!access)
		return {
			error: 'Доступ запрещен',
			response: null,
		};

	setUserRole(userId, newRoleId);
	return {
		error: null,
		response: true,
	};
};
