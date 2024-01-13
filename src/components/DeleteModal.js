import React from 'react';
import { useSelector } from 'react-redux';
import {
	selectModalIsOpen,
	selectModalOnCancel,
	selectModalOnConfirm,
	selectModalText,
} from '../redux/selectors';
import styled from 'styled-components';

export const DeleteModal = () => {
	const isOpen = useSelector(selectModalIsOpen);
	const text = useSelector(selectModalText);
	const onConfirm = useSelector(selectModalOnConfirm);
	const onCancel = useSelector(selectModalOnCancel);

	if (!isOpen) return null;

	return (
		<Overlay>
			<div className="modal window">
				<h1 className="modal header">{text}</h1>
				<div className="modal buttonsContainer">
					<button className="modal confirmButton" onClick={onConfirm}>
						Удалить
					</button>
					<button className="modal canselButton" onClick={onCancel}>
						Отмена
					</button>
				</div>
			</div>
		</Overlay>
	);
};
const Overlay = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 2;
	cursor: pointer;

	& .window {
		cursor: default;
		width: 500px;
		background-color: white;
		border-radius: 15px;
		border: 2px solid rgb(9, 9, 9, 0.7);
		user-select: none;
	}
	& .header {
		font-family: 'Archivo';
		letter-spacing: 0.09em;
		text-align: center;
		color: rgb(9, 9, 9);
	}
	& .buttonsContainer {
		margin: 40px 0;
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
	}

	& .confirmButton,
	.canselButton {
		width: 180px;
		height: 50px;
		margin: 0;
		border: none;
		font-size: 20px;
		border-radius: 7px;
		background-color: white;
		border: 1px solid rgb(9, 9, 9, 0.7);
		cursor: pointer;
		transition: 1.2s ease;
	}
	& .confirmButton:hover {
		transition: 0.5s ease;
		background-color: rgb(254, 24, 0, 0.8);
		color: white;
	}
	& .canselButton:hover {
		transition: 0.5s ease;
		background-color: rgb(9, 9, 9, 0.8);
		color: white;
	}
`;
