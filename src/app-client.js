import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './components/AppRoutes';

window.onload = () => {
  ReactDOM.render(<AppRoutes/>, document.getElementById('main'));

	module.hot.accept('./components/AppRoutes', () => {
	        const NewApp = require('./components/AppRoutes').default;
	        ReactDOM.render(<NewApp />, document.getElementById('main'));
	    });
};