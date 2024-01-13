import React from 'react';
import { Pagination } from '@mui/material';
import PropTypes from 'prop-types';
export const CustomPagination = ({ count, setCount, num }) => {
	return (
		<Pagination
			count={Math.ceil(num / 21)}
			siblingCount={0}
			boundaryCount={1}
			page={count}
			size="large"
			onChange={(event, value) => {
				setCount(value);
			}}
			sx={{
				display: 'flex',
				justifyContent: 'center',
			}}
		/>
	);
};

CustomPagination.propTypes = {
	count: PropTypes.number.isRequired,
	setCount: PropTypes.func.isRequired,
	num: PropTypes.number.isRequired,
};
