import React from 'react';
import styled from 'styled-components';
import {
	NewCommentComponent,
	FirstApploadedMessage,
	SecondApploadedMessage,
} from './CommentComponents';
import { useSelector } from 'react-redux';
import { selectUserRole } from '../../redux/selectors';
import PropTypes from 'prop-types';
export const Comments = ({ comments, postId }) => {
	const role_id = useSelector(selectUserRole);
	return (
		<>
			{role_id === 0 ? <div></div> : <NewCommentComponent postId={postId} />}
			<hr />
			<AploadedComments>
				{comments.map(({ id, author, content, published_at }) => {
					if (Number(id) % 2)
						return (
							<FirstApploadedMessage
								key={id}
								id={id}
								postId={postId}
								author={author}
								content={content}
								published_at={published_at}
							/>
						);
					else
						return (
							<SecondApploadedMessage
								key={id}
								id={id}
								postId={postId}
								author={author}
								content={content}
								published_at={published_at}
							/>
						);
				})}
			</AploadedComments>
		</>
	);
};

const AploadedComments = styled.div`
	margin: auto;
	width: 1200px;
`;

Comments.propType = {
	comments: PropTypes.array.isRequired,
	postId: PropTypes.string.isRequired,
};
