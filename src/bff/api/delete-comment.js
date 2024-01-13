export const deleteComment = (id) =>
	fetch(`http://localhost:4000/comments/${id}`, {
		method: 'DELETE',
	});
