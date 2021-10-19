import { Redirect, Route, Switch } from 'react-router';
import { privateRoutes, publicRoutes } from 'routes';
import { Header } from 'components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { useSelector } from 'react-redux';
import NotFound from './pages/404';

function App() {
	const { isAuth } = useSelector(state => state.auth);

	return (
		<>
			{!isAuth ? (
				<Switch>
					{publicRoutes.map(route => (
						<Route key={route.path} {...route} />
					))}
					<Redirect to={'/auth'} />
				</Switch>
			) : (
				<>
					<div className={'container'}>
						<div className={'header'}>
							<Header />
						</div>
						<div className="side-bar">asda</div>
						<div className="content">
							<Switch>
								{privateRoutes.map(route => (
									<Route key={route.path} {...route} />
								))}
								{/*<Redirect to={'/'} />*/}
								<Route component={() => <NotFound />} />
							</Switch>
						</div>
						<Footer />
					</div>
				</>
			)}
		</>
	);
}

export default App;
