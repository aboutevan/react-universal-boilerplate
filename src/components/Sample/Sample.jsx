import React from 'react';
import template from './SampleComponent';

if (process.env.BROWSER) {
  require('./Sample.sass');
}

if (module.hot) {
  module.hot.accept();
}

export default class Sample extends React.Component {
  render() {
    return template;
  }
}
