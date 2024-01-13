import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import styled from 'styled-components';
import PropTypes from 'prop-types';
export const NavigateButton = ({ text, path }) => {
	const navigate = useNavigate();
	return (
		<CustomButton variant="outlined" size="large" onClick={() => navigate(path)}>
			{text}
		</CustomButton>
	);
};

const CustomButton = styled(Button)`
	width: 190px;
`;
NavigateButton.propTypes = {
	text: PropTypes.string.isRequired,
	path: PropTypes.string.isRequired,
};
