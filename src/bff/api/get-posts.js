export const getPosts = async () =>
	fetch('http://localhost:4000/posts')
		.then((loadedUsers) => loadedUsers.json())
		.then((loadedUsers) => loadedUsers);
