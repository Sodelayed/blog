import { Routes, Route } from 'react-router-dom';
import { useCheckUser } from './hooks';
import { Header, Footer, DeleteModal } from './components';
import {
	MainPage,
	LoginPage,
	UsersPage,
	RegisterPage,
	NewPostPage,
	PostPage,
	Page404,
} from './pages';
import styled from 'styled-components';

export function Blog() {
	useCheckUser();

	return (
		<>
			<Header />
			<Content>
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/register" element={<RegisterPage />} />
					<Route path="/users" element={<UsersPage />} />
					<Route path="/post" element={<NewPostPage />} />
					<Route path="/post/:postId" element={<PostPage />} />
					<Route path="/post/:postId/edit" element={<PostPage />} />
					<Route path="*" element={<Page404 />} />
				</Routes>
			</Content>
			<Footer />
			<DeleteModal />
		</>
	);
}

const Content = styled.div`
	padding: 120px 0;
	min-height: calc(100vh - 485.6px);
`;
