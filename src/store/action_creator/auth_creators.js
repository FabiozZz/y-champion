import {
	AUTH_ADMIN_FAILURE,
	AUTH_ADMIN_LOAD,
	AUTH_ADMIN_LOGIN,
	AUTH_ADMIN_LOGOUT,
} from '../actions/auth';
import Api from 'Api/Api';

export const login_crm_load = () => ({ type: AUTH_ADMIN_LOAD });

export const login_crm_fail = error => ({ type: AUTH_ADMIN_FAILURE, payload: error });

export const login_crm_done = () => ({ type: AUTH_ADMIN_LOGIN });

export const login_crm_exit = () => ({ type: AUTH_ADMIN_LOGOUT });

export const login_crm_start = admin => dispatch => {
	dispatch(login_crm_load());
	Api.login(admin)
		.then(r => {
			Api.setToken(r.data.access);
			Api.setRefreshToken(r.data.access);
			console.log('после логина получен токен', Api.getToken());
			console.log('после логина получен рефрешь токен', Api.getRefreshToken());
			localStorage.setItem('refresh_token', r.data.refresh);
			localStorage.setItem('access_token', r.data.access);
			dispatch(login_crm_done());
		})
		.catch(e => {
			// dispatch(login_crm_fail(e?.response?.data));
		});
};
