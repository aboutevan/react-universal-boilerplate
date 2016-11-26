import React from 'react';

const template = props => (
  <div className="layout">
    <div className="layout__content">{props.children}</div>
  </div>
);

template.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default template;
