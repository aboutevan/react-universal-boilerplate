import React from 'react';
import Helmet from 'react-helmet';

const AboutPage = () => (
  <div className="about-page">
    <Helmet
      title="About"
      meta={[
        { name: 'description', content: 'About page description' },
      ]}
    />
    <div className="about-page__col">
      <h1>the about page</h1>
    </div>
  </div>
);

export default AboutPage;
