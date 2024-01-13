import { useDispatch } from 'react-redux';
import { useLayoutEffect } from 'react';
import { setUser } from '../redux/actions';

export const useCheckUser = () => {
	const dispatch = useDispatch();
	useLayoutEffect(() => {
		const currentUserDataJSON = sessionStorage.getItem('userData');

		if (!currentUserDataJSON) return;
		const currentUserData = JSON.parse(currentUserDataJSON);
		dispatch(
			setUser({
				...currentUserData,
				role_id: Number(currentUserData.role_id),
			}),
		);
	}, [dispatch]);
};
