import React from 'react';
import ReactGA from 'react-ga';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

if (process.env.BROWSER) {
  require('./App.sass');
}

ReactGA.initialize('UA-XXXXXX-XX');

const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

const App = () => (
  <Router history={browserHistory} routes={routes} onUpdate={logPageView} />
);


export default App;
