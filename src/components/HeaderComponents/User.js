import React from 'react';
import { useSelector } from 'react-redux';
import { Avatar } from '@mui/material';
import { red } from '@mui/material/colors';
import { FaUserCircle } from 'react-icons/fa';
import { selectUserLogin } from '../../redux/selectors';
import styled from 'styled-components';

export const User = () => {
	const login = useSelector(selectUserLogin);

	return (
		<>
			{login && (
				<UserContainer>
					<Avatar
						sx={{
							bgcolor: red[500],
							width: '50px',
							height: '48px',
						}}
					>
						<FaUserCircle size="60px" />
					</Avatar>
					<p className="user buttonText">{login}</p>
				</UserContainer>
			)}
		</>
	);
};

const UserContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 0 10px;

	& .user.buttonText {
		margin: 0;
		padding: 0;
		font-size: 16px;
	}
`;
