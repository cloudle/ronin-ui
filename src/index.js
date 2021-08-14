import React, { Fragment, useEffect, } from 'react';
import { Provider, useDispatch, } from 'react-redux';
import { SafeAreaProvider, } from 'react-native-safe-area-context';
import { useNavigate, } from 'react-router';

import Floats from 'components/Floats';
import Dashboard from 'routes/Dashboard';
import Login from 'routes/Login';
import Send from 'routes/Send';
import { Router, } from 'utils/router';
import { useRoutes, } from 'utils/effect';
import { setNavigate, } from 'utils/global';
import { store, } from 'store';
import * as appActions from 'store/action/app';

type Props = {

};

const App = (props: Props) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		setNavigate(navigate);
		dispatch(appActions.getProfile());
	}, []);

	const routedElement = useRoutes([{
		path: '/login', element: <Login/>,
	}, {
		path: '/send', element: <Send/>,
	}, {
		path: '/*', element: <Dashboard/>,
	}]);

	return <Fragment>
		{routedElement}
		<Floats/>
	</Fragment>;
};

const AppContainer = () => {
	return <Provider store={store}>
		<SafeAreaProvider>
			<Router>
				<App/>
			</Router>
		</SafeAreaProvider>
	</Provider>;
};

export default AppContainer;
