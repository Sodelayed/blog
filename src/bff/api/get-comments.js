export const getComments = (postId) =>
	fetch(`http://localhost:4000/comments?post_id=${postId}`).then((loadedComments) =>
		loadedComments.json(),
	);
