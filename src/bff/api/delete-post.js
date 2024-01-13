export const deletePost = (id) =>
	fetch(`http://localhost:4000/posts/${id}`, {
		method: 'DELETE',
	});
