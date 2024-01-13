import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useParams, useMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useServerRequest } from '../hooks';
import { loadPost, RESET_POST_DATA } from '../redux/actions';
import { selectPost, selectUserRole } from '../redux/selectors';
import { Post, Comments, EditPost } from './PostPageComponents';
import { ROLE } from '../constants';
import { AccessDeniedPage } from './AccessDeniedPage';
import { Page404 } from './Page404';

export const PostPage = () => {
	const { postId } = useParams();
	const role_id = useSelector(selectUserRole);
	const requestServer = useServerRequest();
	const dispatch = useDispatch();
	const post = useSelector(selectPost);
	const isEditing = useMatch('/post/:postId/edit');
	const [error, setError] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	useLayoutEffect(() => {
		dispatch(RESET_POST_DATA);
	}, [dispatch]);

	useEffect(() => {
		dispatch(loadPost(requestServer, postId)).then((postData) => {
			setError(postData.error);
			setIsLoading(false);
		});
	}, [dispatch, requestServer, postId]);

	if (isLoading) {
		return null;
	}
	return (
		<>
			{error ? (
				<Page404 error={error} />
			) : isEditing ? (
				role_id === ROLE.ADMINISTRATOR ? (
					<EditPost post={post} />
				) : (
					<AccessDeniedPage />
				)
			) : (
				<>
					<Post post={post} />
					<Comments comments={post.comments} postId={postId} />
				</>
			)}
		</>
	);
};
