import React from 'react';
import { TextField } from '@mui/material';
import styled from 'styled-components';
import PropTypes from 'prop-types';
export const Input = ({ label, type, error, register }) => {
	return (
		<CustomTextField
			id="outlined-basic"
			label={label}
			type={type}
			variant="outlined"
			error={error ? true : false}
			helperText={error}
			{...register}
		/>
	);
};
const CustomTextField = styled(TextField)`
	width: 100%;
`;

Input.propTypes = {
	label: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	error: PropTypes.string.isRequired,
	register: PropTypes.func.isRequired,
};
