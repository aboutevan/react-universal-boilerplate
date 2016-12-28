import React from 'react';
import Sample from 'presentation/Sample/Sample';
import Helmet from 'react-helmet';
// import Modernizr from 'modernizr';

// console.log(Modernizr);

const IndexPage = () => (
  <div className="index-page">
    <Helmet
      title="My title"
      meta={[
        { name: 'description', content: 'Index Page description' },
      ]}
    />

    <div className="index-page__col">
      <h2>Universal React App</h2>
      <Sample />
    </div>
  </div>
);

export default IndexPage;
