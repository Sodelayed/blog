import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { server } from '../bff';
import { selectUserSession } from '../redux/selectors';

export const useServerRequest = (operation, ...params) => {
	const session = useSelector(selectUserSession);

	return useCallback(
		(operation, ...params) => {
			const request = ['register', 'authorize', 'fetchPosts', 'fetchPost'].includes(
				operation,
			)
				? params
				: [session, ...params];
			return server[operation](...request);
		},
		[session],
	);
};
