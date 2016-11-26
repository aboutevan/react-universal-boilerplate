import React from 'react';

import Header from 'presentation/Header/Header';

const template = props => (
  <div className="layout">
    <Header />
    <div className="layout__content">{props.children}</div>
  </div>
);

template.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default template;
