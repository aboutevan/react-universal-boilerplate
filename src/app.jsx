import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routes/AppRouter';

if (process.env.BROWSER) {
  require('./core/sass/all.core.sass');
}

$(document).ready(() => {
  $(document).foundation();
  ReactDOM.render(<AppRouter />, document.getElementById('main'));

  if (process.env.NODE_ENV === 'development') {
    module.hot.accept('./routes/AppRouter', () => {
      const NewApp = require('./routes/AppRouter').default;
      ReactDOM.render(<NewApp />, document.getElementById('main'));
    });
  }
});
