import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, debounce } from '@mui/material';
import { CustomPagination, SearchInput, Card } from './MainPageComponents';
import { loadPosts } from '../redux/actions';
import { ClearedLink } from '../utils';
import { useServerRequest } from '../hooks';
import styled from 'styled-components';
import { selectPosts } from '../redux/selectors';

export const MainPage = () => {
	const [count, setCount] = useState(1);
	const [searchText, setSearchText] = useState('');
	const [shouldSearch, setShouldSearch] = useState(false);
	const dispatch = useDispatch();
	const requestServer = useServerRequest();
	useEffect(() => {
		dispatch(loadPosts(requestServer, searchText.trim()));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dispatch, requestServer, shouldSearch]);

	const goSearch = useMemo(() => debounce(setShouldSearch, 2000), []);

	const onSearch = (value) => {
		setSearchText(value);
		if (searchText.trim() !== '') {
			goSearch(!shouldSearch);
		}
	};

	const posts = useSelector(selectPosts);

	return (
		<PostsContainer>
			<SearchInput onChange={onSearch} searchText={searchText} />
			<CustomPagination count={count} setCount={setCount} num={posts.length} />
			<GridTemplate container>
				{posts.map((el, index) => {
					if (index < count * 21 && index >= (count - 1) * 21)
						return (
							<CardLink to={`/post/${el.id}`} key={el.id}>
								<Card el={el} />
							</CardLink>
						);
					else return false;
				})}
			</GridTemplate>
			<CustomPagination count={count} setCount={setCount} num={posts.length} />
		</PostsContainer>
	);
};

const PostsContainer = styled.div`
	margin: 10px 100px;
`;
const GridTemplate = styled(Grid)`
	justify-content: space-evenly;
	margin: 0;
	padding: 0;
	margin-top: 50px;
`;
const CardLink = styled(ClearedLink)`
	height: fit-content;
	margin-bottom: 3em;
`;
