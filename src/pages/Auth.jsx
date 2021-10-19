import React, { useEffect, useState } from 'react';
import 'styles/auth.css';
import Input from 'components/UI/Input/Input';
import Btn from 'components/UI/Btn';
import { useDispatch, useSelector } from 'react-redux';
import { login_crm_start } from '../store/action_creator/auth_creators';
import { notification } from 'antd';
import { useHistory } from 'react-router';

const Auth = () => {
	const history = useHistory();
	const { errors } = useSelector(state => state.auth);
	const [admin, setAdmin] = useState({ username: '', password: '' });
	const [error, setError] = useState(null);
	const dispatch = useDispatch();
	const handleChange = e => {
		let name = e.target.name;
		let value = e.target.value;
		setAdmin(prevState => ({ ...prevState, [name]: value }));
	};
	const handleSubmit = () => {
		dispatch(login_crm_start(admin));
		history.push('/');
	};

	useEffect(() => {
		setError(errors);
		if (errors?.detail) {
			notification.error({ description: 'Нет администратора с такими данными', duration: 2 });
		}
	}, [errors]);

	return (
		<div className={'auth'}>
			<div className={'auth__wrapper'}>
				<h1 className={'auth__title'}>Авторизация</h1>
				<div className={'auth__fields'}>
					<div className={'auth__username'}>
						<Input
							error={error?.username && error.username[0]}
							label={'введите login'}
							onChange={handleChange}
							name={'username'}
						/>
					</div>
					<div className={'auth__password'}>
						<Input
							error={error?.password && error.password[0]}
							label={'введите пароль'}
							onChange={handleChange}
							name={'password'}
						/>
					</div>
					<div className={'auth__btn'}>
						<Btn onClick={handleSubmit} factor={'primary'}>
							войти
						</Btn>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Auth;
