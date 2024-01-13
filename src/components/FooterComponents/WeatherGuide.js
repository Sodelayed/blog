import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectWeather } from '../../redux/selectors';

export const WeatherGuide = () => {
	const weather = useSelector(selectWeather);

	return (
		<WeatherGuideContainer>
			<div className="weather panel">
				<h1 className="weather city">Красногорск ({weather.name})</h1>
				<div className="weather data">
					<h2 className="weather temperature">{weather.temp}°</h2>
					<ul className="weather otherData">
						<li>{weather.description}</li>
						<li>Ощущается как: {weather.feelsLike}°</li>
						<li>
							Макс. {weather.tempMax}° · Мин. {weather.tempMin}°
						</li>
					</ul>
				</div>
			</div>
		</WeatherGuideContainer>
	);
};

const WeatherGuideContainer = styled.div`
	height: inherit;
	width: 500px;
	background-color: rgb(9, 9, 9);
	display: flex;
	justify-content: center;
	align-items: center;

	& .weather.panel {
		width: 400px;
		height: 120px;
		display: flex;
		flex-direction: column;
		backdrop-filter: blur(16px) saturate(180%);
		-webkit-backdrop-filter: blur(16px) saturate(180%);
		background-color: rgba(17, 25, 40, 0.75);
		border-radius: 12px;
		border: 1px solid rgba(255, 255, 255, 0.125);
		user-select: none;
		font-family: 'Archivo';
	}
	& .weather.city {
		color: aliceblue;
		margin: 15px 0 0 0;
		padding: 0 30px;
		font-size: 18px;
	}
	& .weather.data {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		margin-top: 10px;
	}
	& .weather.temperature {
		color: aliceblue;
		margin: 15px 0;
		padding: 0 20px;
		font-size: 20px;
		padding: 0;
		margin: 0;
	}
	& .weather.otherData {
		padding: 0;
		margin: 0;
		color: aliceblue;
		list-style-type: none;
		font-size: 16px;
	}
`;
