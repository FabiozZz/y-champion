import React from 'react';
import { Input as Text } from 'antd';
const Input = ({ placeholder = 'Не указано', disabled = false }) => {
	return (
		<>
			<Text placeholder={placeholder} disabled={disabled} />
		</>
	);
};

export default Input;
