import React from 'react';
import error404 from '../images/3747371.jpg';
import styled from 'styled-components';
import PropTypes from 'prop-types';
const initialError = 'Такой страницы не существует';
export const Page404 = ({ error = initialError }) => {
	return (
		<ErrorContainer>
			<h1 className="error header">{error}</h1>
			<div className="error image"></div>
		</ErrorContainer>
	);
};
const ErrorContainer = styled.div`
	margin-top: -50px;
	margin-bottom: -50px;
	& .error.header {
		color: rgb(255, 79, 90);
		font-family: 'Overpass Regular';
		font-size: 72px;
		text-shadow: -3px -2px rgb(163, 43, 52);
		text-align: center;
		margin-top: 0;
		margin-bottom: 10px;
		user-select: none;
	}
	& .error.image {
		width: 50%;
		height: 500px;
		background-image: url('${error404}');
		background-size: cover;
		display: flex;
		margin: auto;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
		box-shadow: 0px 0px 80px 100px rgb(255, 255, 255);
	}
`;
Page404.propTypes = {
	error: PropTypes.string.isRequired,
};
