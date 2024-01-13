import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useServerRequest } from '../../hooks';
import { updatePostData } from '../../redux/actions';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { Send } from '@mui/icons-material';
import { NewPostInput } from '../NewPostPageComponents/NewPostInput';
import PropTypes from 'prop-types';
export const EditPost = ({ post: { id, title, content, image_url } }) => {
	const dispatch = useDispatch();
	const requestServer = useServerRequest();
	const navigate = useNavigate();

	const [currentImageUrl, setCurrentImageUrl] = useState(image_url);
	const [currentTitle, setCurrentTitle] = useState(title);
	const [currentContent, setCurrentContent] = useState(content);

	const onContentChange = () => {
		dispatch(
			updatePostData(
				requestServer,
				id,
				currentImageUrl,
				currentTitle,
				currentContent,
			),
		);
		navigate(`/post/${id}`);
	};

	return (
		<UpdatePostContainer>
			<h1 className="updatePost header">Редактирование статьи</h1>
			<NewPostInput
				label="Адрес картинки"
				rows={1}
				value={currentImageUrl}
				setValue={setCurrentImageUrl}
			/>
			<NewPostInput
				label="Заголовок"
				rows={1}
				value={currentTitle}
				setValue={setCurrentTitle}
			/>
			<div
				className="updatePost content"
				contentEditable="true"
				onInput={(e) => setCurrentContent(e.target.innerText)}
			>
				{content}
			</div>

			<Button
				variant="contained"
				color="success"
				size="large"
				endIcon={<Send />}
				onClick={onContentChange}
			>
				Сохранить
			</Button>
		</UpdatePostContainer>
	);
};
const UpdatePostContainer = styled.div`
	margin: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 15px 50px;
	box-sizing: border-box;
	width: 1100px;
	border-radius: 15px;
	-webkit-border-radius: 50px;
	border-radius: 50px;
	background: rgb(245, 245, 245);
	-webkit-box-shadow:
		5px 5px 8px #b4b4b5,
		-5px -5px 8px #ffffff;
	box-shadow:
		5px 5px 8px #b4b4b5,
		-5px -5px 8px #ffffff;

	& .updatePost.header {
		font-family: 'Archivo';
		letter-spacing: 0.09em;
		text-align: center;
		font-size: 48px;
	}
	& .updatePost.content {
		white-space: pre-wrap;
		padding: 10px;
		outline: 1px solid rgba(0, 0, 0, 0.23);
		border-radius: 5px;
		margin-bottom: 20px;
		font-family: 'Overpass Regular' !important;
	}
	& .updatePost.content:focus-visible {
		outline: 2px solid rgb(46, 125, 50);
	}
`;

EditPost.propTypes = {
	post: PropTypes.shape({
		id: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		content: PropTypes.string.isRequired,
		image_url: PropTypes.string.isRequired,
	}),
};
