import React from 'react';
import { red } from '@mui/material/colors';
import { FaTelegram } from 'react-icons/fa6';
import styled from 'styled-components';

export const FooterLinks = () => {
	return (
		<>
			<LinksContainer>
				<div className="footer links info">Контакты:</div>
				<div className="footer links container">
					<div className="footer links email"> diver_space@mail.ru</div>
					<a alt="Telegram" href="https://t.me/sodelayed">
						<TelegramIcon size="70px" />
					</a>
				</div>
			</LinksContainer>
		</>
	);
};
const LinksContainer = styled.div`
	width: 500px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	font-family: 'Playfair Regular';
	& .footer.links.info {
		margin: 0 20px;
		padding: 0;
		color: aliceblue;
		font-size: 30px;
		user-select: none;
	}
	& .footer.links.container {
		display: flex;
		justify-content: space-evenly;
	}
	& .footer.links.email {
		display: flex;
		font-size: 20px;
		color: aliceblue;
		align-items: center;
		justify-content: center;
		transition: 1.5s ease;
		&:hover {
			color: ${red[500]};
			transition: 1.5s ease;
		}
	}
`;

const TelegramIcon = styled(FaTelegram)`
	color: #0499f6;
	background: radial-gradient(
		circle,
		rgba(255, 255, 255, 1) 53%,
		rgba(255, 255, 255, 1) 53%,
		rgba(4, 153, 246, 1) 53%
	);
	border-radius: 50%;
	user-select: none;
`;
