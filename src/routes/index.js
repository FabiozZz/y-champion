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
	{
		path: '/reports',
		exact: true,
		component: General,
	},
	{
		path: '/stuffs',
		exact: true,
		component: General,
	},
	{
		path: '/clients',
		exact: true,
		component: General,
	},
	{
		path: '/settings',
		exact: true,
		component: General,
	},
	{
		path: '/add_client',
		exact: true,
		component: General,
	},
];
