import Auth from '../pages/Auth';
import General from '../pages/General';

export const publicRoutes = [
	{
		path: '/auth',
		exact: true,
		component: Auth,
	},
];
export const privateRoutes = [
	{
		path: '/',
		exact: true,
		component: General,
	},
];
