import { generateDate } from '../utils';

export const createComment = (postId, user, content) =>
	fetch('http://localhost:4000/comments', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			author: user,
			post_id: postId,
			content: content,
			published_at: generateDate(),
		}),
	});
