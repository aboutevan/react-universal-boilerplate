import React from 'react';
import Sample from 'presentation/Sample/Sample';
import Helmet from 'react-helmet';
// import Modernizr from 'modernizr';

// console.log(Modernizr);

const IndexPage = () => (
  <div className="index-page">
    <Helmet
      title="My Title"
      meta={[
        { name: 'description', content: 'Index Page description' },
      ]}
    />
    <Sample />
  </div>
);

export default IndexPage;
