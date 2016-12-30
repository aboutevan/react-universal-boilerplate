import React from 'react';

const PageWrapper = props => (
  <div className="page-wrapper">{props.children}</div>
);

PageWrapper.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default PageWrapper;
