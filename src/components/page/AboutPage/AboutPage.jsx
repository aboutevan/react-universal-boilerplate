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
    <h1>the about page</h1>
  </div>
);

export default AboutPage;
