import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routes/AppRouter';

ReactDOM.render(<AppRouter />, document.getElementById('main'));

if (process.env.NODE_ENV === 'development') {
  module.hot.accept('./routes/AppRouter', () => {
    const NewApp = require('./routes/AppRouter').default;
    ReactDOM.render(<NewApp />, document.getElementById('main'));
  });
}