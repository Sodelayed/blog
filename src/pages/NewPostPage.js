import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useServerRequest } from '../hooks';
import { createPost } from '../redux/actions';
import { Button } from '@mui/material';
import { Send } from '@mui/icons-material';
import { NewPostInput } from './NewPostPageComponents/NewPostInput';
import styled from 'styled-components';
import { selectUserRole } from '../redux/selectors';
import { ROLE } from '../constants';
import { AccessDeniedPage } from './AccessDeniedPage';

export const NewPostPage = () => {
	const role_id = useSelector(selectUserRole);

	if (role_id !== ROLE.ADMINISTRATOR) return <AccessDeniedPage></AccessDeniedPage>;
	else return <NewPostPageContainer />;
};

const NewPostPageContainer = () => {
	const [url, setUrl] = useState('');
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');

	const dispatch = useDispatch();
	const requestServer = useServerRequest();
	const navigate = useNavigate();

	const onCreatePost = () => {
		dispatch(createPost(requestServer, url, title, content));
		navigate('/');
	};

	return (
		<CreatePostContainer>
			<h1 className="newPost header">Новая статья</h1>
			<NewPostInput label="Адрес картинки" rows={1} value={url} setValue={setUrl} />
			<NewPostInput label="Заголовок" rows={1} value={title} setValue={setTitle} />
			<NewPostInput label="Текст" rows={5} value={content} setValue={setContent} />

			<Button
				variant="contained"
				color="success"
				size="large"
				endIcon={<Send />}
				onClick={onCreatePost}
			>
				Создать
			</Button>
		</CreatePostContainer>
	);
};

const CreatePostContainer = styled.div`
	margin: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 15px 50px;
	box-sizing: border-box;
	width: 700px;
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
	& .newPost.header {
		font-family: 'Archivo';
		letter-spacing: 0.09em;
		text-align: center;
		font-size: 48px;
	}
`;
