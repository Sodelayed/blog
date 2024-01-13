import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ClearedLink = styled(Link)`
	color: white;
	text-decoration: none;
	&:hover,
	&:active {
		text-decoration: none;
	}
`;
