import * as yup from 'yup';

export const loginSchema = yup.object().shape({
	login: yup.string().required('Пожалуйста, заполните это поле.'),
	password: yup.string().required('Пожалуйста, заполните это поле.'),
});
