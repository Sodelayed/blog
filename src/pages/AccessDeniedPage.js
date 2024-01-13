import React from 'react';
import error403 from '../images/403.jpg';
import styled from 'styled-components';

export const AccessDeniedPage = () => {
	return (
		<Error>
			<h1 className="error header">Доступ запрещен</h1>
		</Error>
	);
};

const Error = styled.div`
	color: rgb(245, 245, 245);
	width: calc(100% - 40px);
	margin: -100px auto;
	height: 673px;
	background-image: url('${error403}');
	background-size: cover;
	outline: 20px solid rgb(9, 9, 9);
	display: flex;
	justify-content: center;
	align-items: center;

	& .error.header {
		margin: 0;
		padding: 0;
		position: relative;
		bottom: 200px;
		font-family: 'Overpass Regular';
		font-size: 72px;
	}
`;
