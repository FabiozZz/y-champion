import React, { useEffect } from 'react';
import HeaderNav from 'components/NavHeader';
import 'styles/general.css';
import { useDispatch } from 'react-redux';
import { index_load_data_start } from '../store/action_creator/general_creators';

const General = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(index_load_data_start());
	});
	return (
		<div className={'general_wrapper'}>
			<HeaderNav />
		</div>
	);
};

export default General;
