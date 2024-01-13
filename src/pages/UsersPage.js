import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { UserRow } from './UsersPageComponents/UserRow';
import { useServerRequest } from '../hooks';
import { useDispatch, useSelector } from 'react-redux';
import { CLOSE_MODAL, openModal, removeUser } from '../redux/actions';
import { loadUsersData } from '../redux/actions/loadUsersData';
import { selectUsers, selectRoles, selectUserRole } from '../redux/selectors';
import { ROLE } from '../constants';
import { AccessDeniedPage } from './AccessDeniedPage';

export const UsersPage = () => {
	const role_id = useSelector(selectUserRole);
	if (role_id !== ROLE.ADMINISTRATOR) return <AccessDeniedPage />;
	else return <UsersPageContainer />;
};

const UsersPageContainer = () => {
	const [updateUserList, setUpdateUserList] = useState(false);
	const requestServer = useServerRequest();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadUsersData(requestServer));
	}, [dispatch, requestServer]);

	const users = useSelector(selectUsers);
	const roles = useSelector(selectRoles);

	const onUserRemove = (userId) => {
		dispatch(
			openModal({
				text: 'Удалить пользователя?',
				onConfirm: () => {
					dispatch(removeUser(requestServer, userId));
					dispatch(CLOSE_MODAL);
				},
				onCancel: () => dispatch(CLOSE_MODAL),
			}),
		);
		setUpdateUserList(!updateUserList);
	};

	return (
		<UsersContainer>
			<>
				<h1 className="usersList header">Пользователи</h1>
				{users.map(({ id, login, role_id, registed_at }) => {
					return (
						<UserRow
							id={id}
							key={id}
							login={login}
							roleId={role_id}
							registeredAt={registed_at}
							roles={roles.filter(({ name }) => name !== 'Гость')}
							onUserRemove={() => onUserRemove(id)}
						/>
					);
				})}
			</>
		</UsersContainer>
	);
};
const UsersContainer = styled.div`
	margin: auto;
	padding: 15px 50px;
	box-sizing: border-box;
	width: 700px;
	border-radius: 15px;
	-webkit-border-radius: 50px;
	border-radius: 50px;
	background: rgb(245, 245, 245);
	-webkit-box-shadow:
		5px 5px 8px #b4b4b5,
		-5px -5px 8px #ffffff;
	box-shadow:
		5px 5px 8px #b4b4b5,
		-5px -5px 8px #ffffff;
	& .usersList.header {
		font-family: 'Archivo';
		letter-spacing: 0.09em;
		text-align: center;
		font-size: 48px;
	}
`;
