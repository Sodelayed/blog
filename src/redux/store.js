import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { thunk } from 'redux-thunk';
import {
	appReducer,
	postReducer,
	postsReducer,
	userReducer,
	usersReducer,
	weatherReducer,
} from './reducers';

const reducer = combineReducers({
	appState: appReducer,
	postState: postReducer,
	postsState: postsReducer,
	userState: userReducer,
	usersState: usersReducer,
	weatherState: weatherReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
