import React from 'react';
import { TextField, InputAdornment, Stack } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components';
import PropTypes from 'prop-types';
export const SearchInput = ({ searchText, onChange }) => {
	return (
		<SearchContainer component="form" noValidate autoComplete="off">
			<CustomTextField
				variant="standard"
				helperText="Lorem ipsum...."
				value={searchText}
				onChange={(e) => onChange(e.target.value)}
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<SearchIcon
								sx={{
									color: 'rgb(9,9,9)',
								}}
							/>
						</InputAdornment>
					),
				}}
			/>
		</SearchContainer>
	);
};

const SearchContainer = styled(Stack)`
	width: 700px;
	margin: auto;
`;

const CustomTextField = styled(TextField)`
	& .MuiFormHelperText-root {
		margin-bottom: 32px;
		position: relative;
		left: 50px;
		width: 150px;
		font-family: 'BoldText';
	}
	& .css-v4u5dn-MuiInputBase-root-MuiInput-root:after {
		border: 1px solid #f44336;
	}
	& .MuiInputBase-input {
		height: 32px;
		font-family: 'Overpass Thin';
		font-size: 24px;
		color: rgb(9, 9, 9);
		letter-spacing: 0.1em;
		text-indent: 0.8em;
	}
	&
		.MuiFormHelperText-root.MuiFormHelperText-sizeMedium.css-1d1r5q-MuiFormHelperText-root {
		user-select: none;
	}
`;

SearchInput.propTypes = {
	searchText: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
};
