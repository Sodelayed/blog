import { generateDate } from '../utils';

export const createPost = (url, title, content) =>
	fetch('http://localhost:4000/posts', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			title: title,
			image_url: url,
			content: content,
			published_at: generateDate(),
		}),
	});
