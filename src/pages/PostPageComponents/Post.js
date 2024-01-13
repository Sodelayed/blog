import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useServerRequest } from '../../hooks';
import { selectUserRole } from '../../redux/selectors';
import { ROLE } from '../../constants';
import { openModal, CLOSE_MODAL, removePost } from '../../redux/actions';
import { MdEdit, MdOutlineCalendarMonth } from 'react-icons/md';
import { BsTrash } from 'react-icons/bs';
import { IconButton, Tooltip } from '@mui/material';
import styled from 'styled-components';
import PropTypes from 'prop-types';
export const Post = ({ post: { id, title, content, image_url, published_at } }) => {
	const role_id = useSelector(selectUserRole);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const requestServer = useServerRequest();

	const onPostDelete = () => {
		dispatch(
			openModal({
				text: 'Удалить статью?',
				onConfirm: () => {
					dispatch(removePost(requestServer, id)).then(() => navigate('/'));
					dispatch(CLOSE_MODAL);
				},
				onCancel: () => dispatch(CLOSE_MODAL),
			}),
		);
	};

	return (
		<PostPageContainer className="gladAnim">
			<div className="postpage leftside">
				<h1 className="postpage header">{title}</h1>
				<img className="postpage image" src={image_url} alt="фото" />
			</div>
			<div className="postpage rightside">
				{role_id === ROLE.ADMINISTRATOR ? (
					<div className="postpage menu">
						<Tooltip title="Редактировать статью?" placement="top" arrow>
							<CustomIconButton>
								<EditButton
									size="40px"
									onClick={() => navigate(`/post/${id}/edit`)}
								/>
							</CustomIconButton>
						</Tooltip>
						<Tooltip title="Удалить статью?" placement="top" arrow>
							<CustomIconButton>
								<DeleteButton size="40px" onClick={onPostDelete} />
							</CustomIconButton>
						</Tooltip>
					</div>
				) : (
					<div></div>
				)}
			</div>
			<div className="postpage content">{content}</div>
			<div className="postpage date">
				<MdOutlineCalendarMonth />
				{published_at}
			</div>
		</PostPageContainer>
	);
};

const PostPageContainer = styled.div`
	width: 1300px;
	margin: auto;

	& .postpage.leftside {
		width: 700px;
		float: left;
		display: inline;
		margin-right: 25px;
		margin-bottom: 25px;
	}
	& .postpage.header {
		display: inline-block;
		margin-top: 0;
		margin-bottom: 32px;
		font-family: 'Archivo';
		color: rgb(230, 73, 73);
		font-size: 5.4em;
		line-height: 1.1em;
		text-align: right;
		text-decoration: underline 2px rgb(230, 73, 73);
		text-underline-position: from-font;
		-ms-text-underline-position: from-font;
	}
	& .postpage.image {
		width: 600px;
		height: 225px;
		position: relative;
		left: 100px;
	}
	& .postpage.content {
		margin-top: 100px;
		font-size: 20px;
		font-family: 'Overpass Regular';
		white-space: pre-line;
		margin-bottom: 10px;
	}
	& .postpage.content:focus-visible {
		color: rgb(9, 9, 9, 0.8);
		outline: none;
		text-decoration: underline 1px red;
	}
	& .postpage.date {
		display: inline-block;
		width: 1275px;
		text-align: right;
		text-indent: 75px;
		font-size: 18px;
		font-family: 'Overpass Regular';
		color: rgb(9, 9, 9, 0.4);
	}
	& .postpage.menu {
		display: inline-block;
		width: 560px;
		margin-top: 100px;
		text-align: right;
	}
`;

const EditButton = styled(MdEdit)`
	cursor: pointer;
	transition: 1.2s ease;
	&:hover {
		transition: 0.2s ease;
		color: rgb(60 172 5);
	}
`;

const DeleteButton = styled(BsTrash)`
	cursor: pointer;
	transition: 1.2s ease;
	&:hover {
		transition: 0.2s ease;
		color: rgb(230, 73, 73);
	}
`;
const CustomIconButton = styled(IconButton)`
	margin-right: 10px !important;
`;

Post.propTypes = {
	post: PropTypes.shape({
		id: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		content: PropTypes.string.isRequired,
		image_url: PropTypes.string.isRequired,
		published_at: PropTypes.string.isRequired,
	}),
};
