import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import history from './history';
import App from './App';
import './index.css';

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<Switch>
				<App />
			</Switch>
		</Router>
	</Provider>,
	document.getElementById('root'),
);
