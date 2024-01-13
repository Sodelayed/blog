import React from 'react';
import { red } from '@mui/material/colors';
import { ClearedLink } from '../../utils';
import styled from 'styled-components';

export const TitleContainer = () => {
	return (
		<Hat>
			<ClearedLink to="/">
				<h1 className="hat title">
					<span className="letter first">C</span>
					<span className="letter second">r</span>
					<span className="letter thirst">u</span>
					<span className="letter fourth">m</span>
					<span className="letter fiveth">b</span>
					<span className="letter sixth">l</span>
					<span className="letter seventh">e</span>
				</h1>
			</ClearedLink>
			<h1 className="hat info">Блог о блоге</h1>
		</Hat>
	);
};

const Hat = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	justify-content: center;
	align-items: center;
	color: rgb(245, 245, 245);

	& .hat.title {
		font-size: 6.3rem;
		font-family: 'Archivo';
		margin: 0 auto 5px auto;
		letter-spacing: 0.05em;
		height: 130px;
	}
	& .hat.info {
		font-size: 2rem;
		margin: 0 auto 15px auto;
		font-family: 'Playfair Regular';
		letter-spacing: 0.08em;
		background-image: linear-gradient(45deg, #ef9a9a, #ef9a9a, #fff);
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
	}
	& .letter {
		transition: 1.2s ease;
		text-shadow: 0px 0px 20px rgb(9, 9, 9);
		&:hover {
			transition: 0.002s ease;
			color: ${red[900]};
		}
	}

	& .first,
	.seventh {
		color: ${red[200]};
	}
	& .second,
	.sixth {
		color: ${red[300]};
	}
	& .thirst,
	.fiveth {
		color: ${red[500]};
	}
	& .fourth {
		color: ${red[500]};
	}
`;
