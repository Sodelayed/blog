import { useDispatch } from 'react-redux';
import { CLOSE_MODAL, openModal, removeComment } from '../../../redux/actions';
import { useServerRequest } from '../../../hooks';

export const useOpenModalForComments = (id, postId) => {
	const dispatch = useDispatch();
	const requestServer = useServerRequest();
	const onCommentDelete = () => {
		dispatch(
			openModal({
				text: 'Удалить комментарий?',
				onConfirm: () => {
					dispatch(removeComment(requestServer, id, postId));
					dispatch(CLOSE_MODAL);
				},
				onCancel: () => dispatch(CLOSE_MODAL),
			}),
		);
	};

	return { onCommentDelete };
};
