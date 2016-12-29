import React from 'react';
import Counter from 'presentation/Counter/Counter';
import Helmet from 'react-helmet';

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
      <Counter />
    </div>
  </div>
);

export default IndexPage;
