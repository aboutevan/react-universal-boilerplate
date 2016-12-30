import React from 'react';
import Helmet from 'react-helmet';
import MainLayout from 'layout/MainLayout/MainLayout';

const AboutPage = () => (
  <div className="about-page">
    <Helmet
      title="About"
      meta={[
        { name: 'description', content: 'About page description' },
      ]}
    />
    <MainLayout>
      <div className="about-page__col">
        <h2>Another Page</h2>
        <p>This page has differenct content.</p>
      </div>
    </MainLayout>
  </div>
);

export default AboutPage;
