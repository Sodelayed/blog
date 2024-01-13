import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { ROLE } from '../../constants';
import { Button, Menu, MenuItem, Divider } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { red } from '@mui/material/colors';
import { selectUserRole } from '../../redux/selectors';
import { ClearedLink } from '../../utils/ClearedLink';
import styled from 'styled-components';

export const AdminPanel = () => {
	const role_id = useSelector(selectUserRole);

	return <>{role_id === ROLE.ADMINISTRATOR ? <AdminPanelContainer /> : <div></div>}</>;
};

const AdminPanelContainer = () => {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<Container>
			<CustomAdminButton
				id="basic-button"
				onClick={handleClick}
				endIcon={<KeyboardArrowDownIcon />}
			>
				Панель администратора
			</CustomAdminButton>
			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					'aria-labelledby': 'basic-button',
				}}
				sx={{
					'& .MuiMenu-list': {
						bgcolor: 'rgb(245,245,245)',
					},
					'& .MuiButtonBase-root:hover': {
						bgcolor: 'rgb(9,9,9,0.1)',
					},
				}}
			>
				<MenuItem onClick={handleClose}>
					<AdminLinks to="/post">Новая статья</AdminLinks>
				</MenuItem>
				<Divider />
				<MenuItem onClick={handleClose}>
					<AdminLinks to="/users">Пользователи</AdminLinks>
				</MenuItem>
			</Menu>
		</Container>
	);
};
const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 10px;
`;

const AdminLinks = styled(ClearedLink)`
	color: rgb(9, 9, 9);
	transition: 1.2s ease;
	&:hover {
		color: ${red[500]};
		transition: 0.002s ease;
	}
`;
const CustomAdminButton = styled(Button)`
	font-size: 16px;
	max-width: 150px;
	text-transform: none;
	&.css-1e6y48t-MuiButtonBase-root-MuiButton-root {
		color: rgb(245, 245, 245);
	}
	&:hover {
		color: ${red[500]};
		cursor: pointer;
		background-color: rgb(9, 9, 9);
	}
`;
