import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { server } from '../../bff';
import { ROLE } from '../../constants';
import { setUser } from '../../redux/actions';
import { selectUserRole } from '../../redux/selectors';
import { Input, NavigateButton, CompleteButton } from '../FormComponents';
import { Box } from '@mui/material';
import { loginSchema } from './loginSchema';
import styled from 'styled-components';

export const LoginForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		defaultValues: {
			login: '',
			password: '',
		},
		resolver: yupResolver(loginSchema),
	});

	let loginError = errors.login?.message;
	let passwordError = errors.password?.message;
	const [serverError, setServerError] = useState(null);
	const role_id = useSelector(selectUserRole);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const store = useStore();

	useEffect(() => {
		let curWasLogout = store.getState().appState.wasLogout;
		return store.subscribe(() => {
			let prevWasLogout = curWasLogout;
			curWasLogout = store.getState().appState.wasLogout;

			if (curWasLogout !== prevWasLogout) {
				reset();
			}
		});
	}, [reset, store]);

	const sendFormData = ({ login, password }) => {
		server.authorize(login, password).then(({ error, response }) => {
			if (error) {
				setServerError(`Ошибка запроса: ${error}`);
				return;
			}

			dispatch(setUser(response));
			sessionStorage.setItem('userData', JSON.stringify(response));
		});
	};

	if (role_id !== ROLE.GUEST) {
		navigate(-1);
	}

	return (
		<CustomForm
			component="form"
			autoComplete="off"
			onSubmit={handleSubmit(sendFormData)}
		>
			<Input
				label="Login"
				type="text"
				error={loginError}
				register={register('login', {
					onChange: () => setServerError(null),
				})}
			/>
			<Input
				label="Password"
				type="password"
				error={passwordError}
				register={register('password', {
					onChange: () => setServerError(null),
				})}
			/>
			<CustomButtonContainer>
				<NavigateButton text="Зарегистрироваться" path="/register" />
				<CompleteButton error1={loginError} error2={passwordError} text="Войти" />
			</CustomButtonContainer>
			{serverError && <div className="login error">{serverError}</div>}
		</CustomForm>
	);
};
const CustomForm = styled(Box)`
	display: flex;
	flex-direction: column;
	align-items: center;
	.css-1u3bzj6-MuiFormControl-root-MuiTextField-root {
		margin: 10px;
	}
	& .login.error {
		color: red;
		font-family: 'Playfair Nedium';
		letter-spacing: 0.05em;
	}
`;
const CustomButtonContainer = styled(Box)`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin: 32px 0;
	.css-9y1egq-MuiButtonBase-root-MuiButton-root,
	.css-mkazzp-MuiButtonBase-root-MuiButton-root {
		font-size: 14px;
	}
`;
