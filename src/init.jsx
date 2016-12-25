import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(<App />, document.getElementById('main'));

if (process.env.NODE_ENV === 'development') {
  module.hot.accept('./components/App', () => {
    const NewApp = require('./components/App').default;
    ReactDOM.render(<NewApp />, document.getElementById('main'));
  });
}
