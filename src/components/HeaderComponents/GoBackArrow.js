import React from 'react';
import { useNavigate } from 'react-router-dom';
import { red } from '@mui/material/colors';
import { FaArrowLeft } from 'react-icons/fa';
import styled from 'styled-components';

export const GoBackArrow = () => {
	const navigate = useNavigate();
	return <NavagationButton size="35px" onClick={() => navigate(-1)} />;
};
const NavagationButton = styled(FaArrowLeft)`
	margin-left: 20px;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	&:hover {
		cursor: pointer;
		color: ${red[500]};
		transition: 0.33s ease;
	}
`;
