import {
	AUTH_ADMIN_FAILURE,
	AUTH_ADMIN_LOAD,
	AUTH_ADMIN_LOGIN,
	AUTH_ADMIN_LOGOUT,
} from '../actions/auth';
const initialState = {
	isAuth: false,
	admin: null,
	loading: false,
	errors: null,
};
export const auth_reducer = (state = initialState, action) => {
	switch (action.type) {
		case AUTH_ADMIN_LOAD:
			return {
				...state,
				loading: true,
			};
		case AUTH_ADMIN_LOGIN:
			return {
				...state,
				loading: false,
				isAuth: true,
				errors: null,
			};
		case AUTH_ADMIN_FAILURE:
			return {
				...state,
				loading: false,
				errors: action.payload,
			};
		case AUTH_ADMIN_LOGOUT:
			return {
				...state,
				isAuth: false,
				admin: null,
				errors: null,
			};
		default:
			return state;
	}
};
