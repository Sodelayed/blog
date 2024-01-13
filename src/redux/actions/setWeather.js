export const getWeather = () => {
	return (dispatch) => {
		return fetch(
			'https://api.openweathermap.org/data/2.5/weather?lat=55.830396&lon=37.304120&units=metric&lang=ru&appid=4799c55a2d6b14cd5516d5e4cc96428e',
		)
			.then((response) => response.json())
			.then((result) => {
				let description = result.weather[0].description;
				description =
					description.slice(0, 1).toUpperCase() +
					description.slice(1, description.length);
				dispatch({
					type: 'SET_WEATHER',
					payload: {
						name: result.name,
						temp: Math.round(result.main.temp),
						tempMax: Math.round(result.main.temp_max),
						tempMin: Math.round(result.main.temp_min),
						description: description,
						feelsLike: Math.round(result.main.feels_like),
					},
				});
			});
	};
};
