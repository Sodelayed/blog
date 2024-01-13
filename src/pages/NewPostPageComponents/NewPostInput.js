import React from 'react';
import { TextField } from '@mui/material';
import styled from 'styled-components';
import PropTypes from 'prop-types';
export const NewPostInput = ({ label, rows, value, setValue }) => {
	return (
		<NewPostTextField
			fullWidth
			id="fullWidth"
			label={label}
			variant="outlined"
			color="success"
			margin="normal"
			multiline
			rows={rows}
			value={value}
			onChange={(e) => setValue(e.target.value)}
		/>
	);
};
const NewPostTextField = styled(TextField)`
	& .css-1826p56-MuiInputBase-root-MuiOutlinedInput-root {
		font-family: 'Overpass Regular' !important;
	}
`;
NewPostInput.propTypes = {
	label: PropTypes.string.isRequired,
	rows: PropTypes.number.isRequired,
	value: PropTypes.string.isRequired,
	setValue: PropTypes.func.isRequired,
};
