import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getWeather } from '../redux/actions/setWeather';

export const useGetWeather = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getWeather());
	}, [dispatch]);
};
