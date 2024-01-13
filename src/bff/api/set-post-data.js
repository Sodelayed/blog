export const setPostData = (id, currentImageUrl, currentTitle, currentContent) =>
	fetch(`http://localhost:4000/posts/${id}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			title: currentTitle,
			image_url: currentImageUrl,
			content: currentContent,
		}),
	});
