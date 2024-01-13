export const getAllComments = () =>
	fetch(`http://localhost:4000/comments`).then((loadedComments) =>
		loadedComments.json(),
	);
