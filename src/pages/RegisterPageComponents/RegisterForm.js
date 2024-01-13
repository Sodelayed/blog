import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box } from '@mui/material';
import { Input, NavigateButton, CompleteButton } from '../FormComponents';
import styled from 'styled-components';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectUserRole } from '../../redux/selectors';
import { server } from '../../bff';
import { ROLE } from '../../constants';
import { setUser } from '../../redux/actions/setUser';
import { registerSchema } from './registerSchema';

export const RegisterForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		defaultValues: {
			login: null,
			password: null,
			repeatPassword: null,
		},
		resolver: yupResolver(registerSchema),
	});

	let loginError = errors.login?.message;
	let passwordError = errors.password?.message;
	let repeatPasswordError = errors.repeatPassword?.message;
	const [serverError, setServerError] = useState(null);

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const store = useStore();
	const role_id = useSelector(selectUserRole);

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
		server.register(login, password).then(({ error, response }) => {
			if (error) {
				setServerError(`Ошибка запроса: ${error}`);
				return;
			}

			dispatch(setUser(response));
			sessionStorage.setItem('userData', JSON.stringify(response));
		});
	};

	if (role_id !== ROLE.GUEST) {
		navigate('/');
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
				register={register('login')}
			/>
			<Input
				label="Password"
				type="password"
				error={passwordError}
				register={register('password')}
			/>
			<Input
				label="Repeat your password"
				type="password"
				error={repeatPasswordError}
				register={register('repeatPassword')}
			/>
			<CustomButtonContainer>
				<NavigateButton text="Авторизация" path="/login" />
				<CompleteButton
					text="Зарегистрироваться"
					error1={loginError}
					error2={passwordError}
					error3={repeatPasswordError}
				/>
			</CustomButtonContainer>
			{serverError && <div className="register error">{serverError}</div>}
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
	& .register.error {
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
	.css-9y1egq-MuiButtonBase-root-MuiButton-root
		+ .css-mkazzp-MuiButtonBase-root-MuiButton-root {
		font-size: 14px;
	}
`;
