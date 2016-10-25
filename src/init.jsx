import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './components/AppRoutes';

ReactDOM.render(<AppRoutes />, document.getElementById('main'));
// document.getElementById('main').classList.remove('no-fouc');

if (process.env === 'development') {
  module.hot.accept('./components/AppRoutes', () => {
    const NewApp = require('./components/AppRoutes').default;
    ReactDOM.render(<NewApp />, document.getElementById('main'));
  });
}
