import { Redirect, Route, Switch } from 'react-router';
import { privateRoutes, publicRoutes } from './routes';

function App() {
	const auth = false;
	return !auth ? (
		<Switch>
			{publicRoutes.map(route => (
				<Route key={route.path} {...route} />
			))}
			<Redirect to={'/auth'} />
		</Switch>
	) : (
		<Switch>
			{privateRoutes.map(route => (
				<Route key={route.path} {...route} />
			))}
			<Route component={() => <div>404</div>} />
		</Switch>
	);
}

export default App;
