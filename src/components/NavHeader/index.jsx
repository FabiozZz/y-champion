import React from 'react';
import classes from './nav.module.css';
import { NavLink } from 'react-router-dom';
// import { SearchBox } from "../../utils/SearchBox/SearchBox";
import Btn from 'components/UI/Btn';

const HeaderNav = () => {
	return (
		<div className={classes.btn_group}>
			<div className={classes.create_adult}>
				<NavLink to={'/add_client'}>
					<Btn factor={'primary'}>добавить клиента</Btn>
				</NavLink>
			</div>
			<div className={classes.search}>{/*<SearchBox />*/}</div>
		</div>
	);
};

export default HeaderNav;
