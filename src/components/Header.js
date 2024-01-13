import React from 'react';
import {
	AdminPanel,
	GoBackArrow,
	LogInLogOutButtons,
	TitleContainer,
	User,
} from './HeaderComponents';
import img from '../images/city-png-33552.png';
import styled from 'styled-components';

export const Header = () => {
	return (
		<HeaderContainer>
			<div className="header interface">
				<GoBackArrow />
				<div className="header panelContainer">
					<User />
					<AdminPanel />
					<LogInLogOutButtons />
				</div>
			</div>
			<TitleContainer />
		</HeaderContainer>
	);
};

const HeaderContainer = styled.header`
	width: 100%;
	margin: auto;
	background-color: rgb(9, 9, 9);
	user-select: none;
	box-shadow: 0px 19px 8px 0px rgba(34, 60, 80, 0.2);
	background-image: url('${img}');
	background-repeat: no-repeat;
	background-size: 950px;
	background-blend-mode: exclusion;
	background-position: 233px -121px;
	background-attachment: fixed;

	& .header.interface {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		height: 90px;
		color: rgb(245, 245, 245);
	}

	& .header.panelContainer {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		min-width: 20%;
	}
`;
