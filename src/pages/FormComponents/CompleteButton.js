import React from 'react';
import { Button } from '@mui/material';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const CompleteButton = ({ text, error1, error2, error3 = null }) => {
	return (
		<CustomButton
			type="submit"
			variant="contained"
			color="success"
			size="large"
			disabled={!!error1 || !!error2 || !!error3}
		>
			{text}
		</CustomButton>
	);
};
const CustomButton = styled(Button)`
	width: 190px;
`;

CompleteButton.propTypes = {
	text: PropTypes.string.isRequired,
	error1: PropTypes.string.isRequired,
	error2: PropTypes.string.isRequired,
	error3: PropTypes.string.isRequired,
};
