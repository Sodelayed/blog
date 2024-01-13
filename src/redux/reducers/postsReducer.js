import { ACTION_TYPE } from '../actions';

const inititalPostsState = {
	posts: [],
};

export const postsReducer = (state = inititalPostsState, action) => {
	switch (action.type) {
		case ACTION_TYPE.SET_POSTS_DATA:
			return {
				posts: action.payload,
			};
		default:
			return state;
	}
};
