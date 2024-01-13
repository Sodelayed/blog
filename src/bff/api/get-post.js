export const getPost = async (postId) =>
	fetch(`http://localhost:4000/posts/${postId}`)
		.then((res) => {
			if (res.ok) return res;
			return Promise.reject('Страница не найдена');
		})
		.then((loadedPost) => loadedPost.json())
		.then((loadedPost) => loadedPost);
