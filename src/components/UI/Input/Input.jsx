import React from 'react';
import { Input as Text } from 'antd';
import classes from './input.module.css';
import cn from 'classnames';

const Input = ({
	label = '',
	placeholder = 'Не указано',
	disabled = false,
	error = '',
	...props
}) => {
	return (
		<>
			<label className={classes.label}>{label}</label>
			<Text
				{...props}
				className={cn({ [classes.error]: error })}
				placeholder={placeholder}
				disabled={disabled}
			/>
			{error && <p className={'form-fail'}>{error}</p>}
		</>
	);
};

export default Input;
