export const getCommentsCount = (postId, comments = []) => {
	const postComments = comments.filter(({ post_id }) => post_id === postId);
	return postComments.length;
};
