import React from 'react';
import { useGetWeather } from '../hooks';
import { WeatherGuide, FooterTitle, FooterLinks } from './FooterComponents';
import styled from 'styled-components';

export const Footer = () => {
	useGetWeather();

	return (
		<FooterContainer>
			<WeatherGuide />
			<FooterTitle />
			<FooterLinks></FooterLinks>
		</FooterContainer>
	);
};

const FooterContainer = styled.div`
	width: 100%;
	height: 150px;
	display: flex;
	background-color: rgb(9, 9, 9);
	justify-content: space-between;
	box-shadow: 0px -19px 8px 0px rgba(34, 60, 80, 0.2);
`;
