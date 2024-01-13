import React from 'react';
import { useSelector } from 'react-redux';
import { selectUserRole } from '../../../redux/selectors';
import { getRandomColor } from './get-random-color';
import { useOpenModalForComments } from './open-modal';
import { Avatar, Tooltip, IconButton } from '@mui/material';
import { BsTrash } from 'react-icons/bs';
import styled from 'styled-components';
import PropTypes from 'prop-types';
export const SecondApploadedMessage = ({ postId, id, author, content, published_at }) => {
	const role_id = useSelector(selectUserRole);

	const { onCommentDelete } = useOpenModalForComments(postId, id);
	return (
		<SecondContainer>
			{role_id === 2 || role_id === 3 ? (
				<DeleteButton title="Удалить комментарий?" placement="top">
					<ButtonContainer onClick={onCommentDelete}>
						<BsTrash size="20px" />
					</ButtonContainer>
				</DeleteButton>
			) : (
				<div></div>
			)}
			<div className="date">{published_at}</div>
			<div className="comment">{content}</div>
			<div className="logoContainer">
				<div className="commentAuthor">
					<Avatar
						sx={{
							bgcolor: getRandomColor(),
						}}
					>
						{author.slice(0, 1)}
					</Avatar>
					<span>{author}</span>
				</div>
			</div>
		</SecondContainer>
	);
};
const SecondContainer = styled.div`
	display: flex;
	margin: 20px;
	justify-content: center;
	position: relative;
	left: 15px;
	& .comment {
		width: 700px;
		font-size: 18px;
		background-color: rgb(217, 217, 217, 0.4);
		border-radius: 15px;
		height: 130px;
		padding: 10px;
		box-sizing: border-box;
		outline: 1px solid rgb(9, 9, 9);
		white-space: pre-wrap;
		word-wrap: break-word;
		font-family: 'Overpass Regular';
	}

	& .logoContainer,
	.date {
		width: 150px;
		box-sizing: border-box;
	}

	& .commentAuthor {
		display: flex;
		position: relative;
		top: 38px;
		right: 30px;
		align-items: center;
		flex-direction: column;
	}
	& .date {
		position: relative;
		top: 110px;
		left: 705px;
		color: rgb(9, 9, 9, 0.5);
		user-select: none;
		font-family: 'Overpass Regular';
	}
	& span {
		font-family: 'Overpass Regular';
	}
`;
const ButtonContainer = styled(IconButton)`
	box-sizing: content-box !important;
	height: 20px;
`;
const DeleteButton = styled(Tooltip)`
	position: relative;
	right: -150px;
	bottom: 10px;
`;
SecondApploadedMessage.propTypes = {
	postId: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
	published_at: PropTypes.string.isRequired,
};
