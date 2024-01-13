import React, { useState } from 'react';
import styled from 'styled-components';
import { MdOutlineSaveAlt } from 'react-icons/md';
import { BsTrash } from 'react-icons/bs';
import { FormControl, IconButton, NativeSelect, Tooltip } from '@mui/material';
import { useServerRequest } from '../../hooks/use-server-request';
import PropTypes from 'prop-types';
export const UserRow = ({
	login,
	id,
	registeredAt,
	roleId: userRoleId,
	roles,
	onUserRemove,
}) => {
	const [selectedRoleId, setSelectedRoleId] = useState(userRoleId);
	const [initialRoleId, setInitialRoleID] = useState(userRoleId);
	const saveIsDisabled = selectedRoleId === initialRoleId;
	const requestServer = useServerRequest();

	const onRoleChange = ({ target }) => {
		setSelectedRoleId(Number(target.value));
	};

	const onRoleSave = (userId, newRoleId) => {
		requestServer('updateUserRole', userId, newRoleId).then((newUserRoleId) => {
			setInitialRoleID(newRoleId);
		});
	};

	return (
		<UserRowContainer>
			<div className="row item login">{login}</div>
			<div className="row item date">{registeredAt}</div>
			<div className="row item role">
				<FormControl>
					<CustomSelection
						defaultValue={selectedRoleId}
						onChange={onRoleChange}
					>
						{roles.map(({ id: roleId, name: roleName }) => (
							<option className="row option" key={roleId} value={roleId}>
								{roleName}
							</option>
						))}
					</CustomSelection>
				</FormControl>
				<Tooltip title="Необходимо сохранить изменение?" placement="top" arrow>
					<CustomIconButton disabled={saveIsDisabled}>
						<StyledSaveButton
							size="24px"
							disabled={saveIsDisabled}
							onClick={() => onRoleSave(id, selectedRoleId)}
						/>
					</CustomIconButton>
				</Tooltip>
				<Tooltip title="Удалить пользователя?" placement="top" arrow>
					<CustomIconButton>
						<StyledTrashButton size="24px" onClick={onUserRemove} />
					</CustomIconButton>
				</Tooltip>
			</div>
		</UserRowContainer>
	);
};

const UserRowContainer = styled.div`
	display: flex;
	flex-flow: row;
	border: 1px solid rgb(9, 9, 9);
	padding: 10px 0;
	font-family: 'Overpass Regular';
	& .row.item {
		display: flex;
		flex-grow: 1;
		text-align: center;
		align-items: center;
		justify-content: center;
		font-size: 24px;
	}
	& .row.item.login {
		width: 20%;
	}
	& .row.item.date {
		width: 30%;
	}
	& .row.item.role {
		width: 50%;
		gap: 10px;
	}
`;
const CustomSelection = styled(NativeSelect)`
	& .MuiInput-input {
		font-size: 20px;
	}
	&.MuiInput-root:after {
		border-bottom: 2px solid red;
	}
	& .row.option input:not([multiple]) {
		border-radius: 15px;
	}
`;
const CustomIconButton = styled(IconButton)`
	padding: 2px !important;
`;
const StyledSaveButton = styled(MdOutlineSaveAlt)`
	cursor: pointer;
	color: ${({ disabled }) => (disabled ? '#ccc' : 'rgb(9,9,9)')};
	&:hover {
		color: rgb(60 172 5);
	}
`;
const StyledTrashButton = styled(BsTrash)`
	color: rgb(9, 9, 9);
	transition: 1.2s ease;
	&:hover {
		color: red;
		transition: 0.2s ease;
	}
`;

UserRow.propTypes = {
	login: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	registeredAt: PropTypes.string.isRequired,
	roleId: PropTypes.string.isRequired,
	roles: PropTypes.array.isRequired,
	onUserRemove: PropTypes.func.isRequired,
};
