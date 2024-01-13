const inititalWeatherState = {
	weather: {},
};

export const weatherReducer = (state = inititalWeatherState, action) => {
	switch (action.type) {
		case 'SET_WEATHER': {
			return {
				weather: action.payload,
			};
		}
		default:
			return state;
	}
};
