const inititalUsersState = {
	users: [],
};

export const usersReducer = (state = inititalUsersState, action) => {
	switch (action.type) {
		case 'SET_USERS_DATA': {
			return {
				...action.payload,
			};
		}
		case 'SET_NEW_USER': {
			return {
				users: [
					...state.users,
					{
						login: action.payload.login,
						password: action.payload.password,
						register_at: action.payload.date,
						role_id: 1,
					},
				],
			};
		}
		default:
			return state;
	}
};
