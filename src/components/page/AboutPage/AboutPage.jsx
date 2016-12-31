import React from 'react';
import Helmet from 'react-helmet';
import MainLayout from 'layout/MainLayout/MainLayout';

const AboutPage = () => (
  <MainLayout>
    <Helmet
      title="About"
      meta={[
        { name: 'description', content: 'About page description' },
      ]}
    />
    <div className="about-page">
      <div className="about-page__col">
        <h2>Another Page</h2>
        <p>This page has differenct content.</p>
      </div>
    </div>
  </MainLayout>
);

export default AboutPage;
