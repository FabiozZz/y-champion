import React from 'react';
import 'styles/auth.css';
import DatePicker from 'components/UI/DatePicker/DatePicker';
import DatePickerRange from '../components/UI/DatePickerRange/DatePickerRange';
import Input from '../components/UI/Input/Input';

const Auth = () => {
	return (
		<div className={'auth'}>
			<div className={'auth__wrapper'}>
				<h1 className={'auth__title'}>Авторизация</h1>
				<div className={'auth__fields'}>
					<div className={'auth__username'}>
						<DatePickerRange disabled={true} />
					</div>
					<div className={'auth__password'}></div>
				</div>
			</div>
		</div>
	);
};

export default Auth;
