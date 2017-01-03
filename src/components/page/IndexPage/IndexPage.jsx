import React from 'react';
import Counter from 'presentation/Counter/Counter';
import Helmet from 'react-helmet';
import MainLayout from 'layout/MainLayout/MainLayout';
import HeroCanvas
 from 'presentation/HeroCanvas/HeroCanvas';

const IndexPage = () => (
  <MainLayout>
    <Helmet
      title="My title"
      meta={[
        { name: 'description', content: 'Index Page description' },
      ]}
    />
    <HeroCanvas />
    <div className="index-page">
      <div className="index-page__col">
        <h2>Universal React App</h2>
        <Counter />
      </div>
    </div>
  </MainLayout>
);

export default IndexPage;
