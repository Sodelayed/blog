import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { red } from '@mui/material/colors';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { ROLE } from '../../constants';
import { selectUserRole, selectUserSession } from '../../redux/selectors';
import { logOut } from '../../redux/actions';
import { ClearedLink } from '../../utils';
import styled from 'styled-components';

export const LogInLogOutButtons = () => {
	const role_id = useSelector(selectUserRole);
	const dispatch = useDispatch();
	const session = useSelector(selectUserSession);
	const navigate = useNavigate();

	const onLogOut = () => {
		dispatch(logOut(session));
		sessionStorage.removeItem('userData');
		navigate('/');
	};
	return (
		<>
			{role_id === ROLE.GUEST ? (
				<LogInContainer to="/login">
					<LogInButton size="35px" />
					<ButtonText>войти</ButtonText>
				</LogInContainer>
			) : (
				<LogOutContainer onClick={onLogOut}>
					<LogOutButton size="35px" />
					<ButtonText>выйти</ButtonText>
				</LogOutContainer>
			)}
		</>
	);
};

const LogInContainer = styled(ClearedLink)`
	display: flex;
	flex-direction: column;
	align-items: center;
	&:hover {
		cursor: pointer;
		color: ${red[500]};
		transition: 0.33s ease;
	}
`;
const LogInButton = styled(FaSignInAlt)`
	margin: 0 10px;
	box-sizing: border-box;
	width: 50px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
const LogOutContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	&:hover {
		cursor: pointer;
		color: ${red[500]};
		transition: 0.33s ease;
	}
`;
const LogOutButton = styled(FaSignOutAlt)`
	margin: 0 10px;
	box-sizing: border-box;
	width: 50px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
const ButtonText = styled.p`
	margin: 0;
	padding: 0;
	font-size: 16px;
`;
