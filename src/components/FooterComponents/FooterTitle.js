import React from 'react';
import { red } from '@mui/material/colors';
import styled from 'styled-components';

export const FooterTitle = () => {
	const data = new Date();
	return (
		<CiteTitleContainer>
			<h1 className="cite title">Crumble</h1>
			<h3 className="cite description">Блог о блоге</h3>
			<h3 className="cite year">{data.getFullYear()}</h3>
		</CiteTitleContainer>
	);
};

const CiteTitleContainer = styled.div`
	height: inherit;
	width: 500px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	user-select: none;

	& .cite.title {
		color: ${red[500]};
		font-size: 30px;
		letter-spacing: 0.05em;
		margin: 5px 0;
		font-family: 'Archivo';
	}
	& .cite.description,
	.cite.year {
		color: aliceblue;
		font-size: 15px;
		margin: 5px 0;
		font-family: 'Playfair Regular';
		letter-spacing: 0.08em;
	}

	& .cite.description {
		background-image: linear-gradient(45deg, #ef9a9a, #ef9a9a, #fff);
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
	}
`;
