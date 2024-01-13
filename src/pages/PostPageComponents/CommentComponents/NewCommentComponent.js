import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectUserLogin } from '../../../redux/selectors';
import { addComment } from '../../../redux/actions';
import { useServerRequest } from '../../../hooks';
import PropTypes from 'prop-types';
export const NewCommentComponent = ({ postId }) => {
	const [newComment, setNewComment] = useState('');
	const dispatch = useDispatch();
	const user = useSelector(selectUserLogin);
	const requestServer = useServerRequest();
	const onNewCommentAdd = () => {
		dispatch(addComment(requestServer, postId, user, newComment));
		setNewComment('');
	};
	return (
		<NewComment>
			<textarea
				className="area"
				rows="5"
				maxLength="300"
				value={newComment}
				onChange={(e) => setNewComment(e.target.value)}
			></textarea>
			<button className="sendButton" onClick={onNewCommentAdd}>
				Отправить
			</button>
		</NewComment>
	);
};

const NewComment = styled.div`
	margin: 30px auto;
	width: 700px;
	& .area {
		width: 700px;
		border-radius: 15px;
		font-size: 18px;
		padding: 10px;
		resize: none;
		box-sizing: border-box;
		border: none;
		outline: 1px solid rgb(230, 73, 73);
		font-family: 'Overpass Regular';
	}
	& .area:hover,
	& .area:focus-visible {
		outline: 2px solid #b71c1c;
	}
	& .sendButton {
		width: 100px;
		height: 40px;
		border-radius: 5px;
		background-color: rgb(255, 88, 81);
		color: white;
		border: 2px solid rgb(230, 73, 73);
		margin-left: 15px;
		cursor: pointer;
		font-family: 'Overpass Regular';
	}
	& .sendButton:hover {
		background-color: rgb(255, 88, 81, 0.8);
		border: 2px solid rgb(230, 73, 73, 0.8);
	}
	& .sendButton:active {
		background-color: rgb(183, 28, 28);
	}
`;
NewCommentComponent.propTypes = {
	postId: PropTypes.string.isRequired,
};
