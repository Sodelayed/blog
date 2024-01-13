import React from 'react';
import { Grid, Paper } from '@mui/material';
import { red } from '@mui/material/colors';
import { GoComment } from 'react-icons/go';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Card = ({ el }) => {
	return (
		<Grid item className="gladAnim">
			<NewItem elevation={0}>
				<img className="card image" src={el.image_url} alt="Не загрузилось :(" />
				<h5 className="card header">{el.title}</h5>
				<div className="card footer">
					<div className="card comments">
						<GoComment size="1.5em" />
						<div className="card comments count">{el.commentsCount}</div>
					</div>
					<div className="card date">{el.published_at}</div>
				</div>
			</NewItem>
		</Grid>
	);
};

const NewItem = styled(Paper)`
	font-family: 'Overpass Regular';
	width: 380px;
	background-color: rgb(245, 245, 245) !important ;
	transition: 1.2s ease;
	cursor: pointer;
	&:hover {
		transition: 0.5s ease;
		box-shadow:
			0px 2px 4px -1px rgba(0, 0, 0, 0.2),
			0px 4px 5px 0px rgba(0, 0, 0, 0.14),
			0px 1px 10px 0px rgba(0, 0, 0, 0.12);
	}

	& .card.image {
		width: 100%;
		height: 250px;
		border-radius: 4px 4px 0 0;
	}
	& .card.header {
		margin: 0;
		font-size: 1.375rem;
		letter-spacing: 0.04em;
		margin: 0 10px;
		user-select: none;
		transition: 1.2s ease;
	}
	& .card.header:hover {
		color: ${red[500]};
		text-shadow: 0px 0px 0px rgb(9, 9, 9);
		transition: 0.002s ease;
	}
	& .card.comments {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
	}
	& .card.comments.count {
		position: relative;
		bottom: -1px;
		margin-left: 0.2em;
		font-size: 20px;
	}
	& .card.footer {
		margin-left: 1em;
		margin-right: 1em;
		margin-top: 1.7em;
		display: flex;
		justify-content: space-between;
		color: rgb(9, 9, 9, 0.25);
	}
	& .card.date {
		font-size: 20px;
		position: relative;
		bottom: -1px;
	}
`;

Card.propTypes = {
	el: PropTypes.object.isRequired,
};
