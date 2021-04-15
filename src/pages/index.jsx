import * as React from 'react';

import Foot from '../components/Foot';
import Navbar from '../components/navbar/Navbar';
import ProjectCards from '../components/projects/ProjectCards';
import StyledBackgroundSection from '../components/Head';

const pageStyles = {
  color: '#232129',
  paddingTop: 16,
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};

const IndexPage = () => (
  <>
    <title>iamstevedavis</title>
    <Navbar />
    <main style={pageStyles}>
      <div id="about">
        <StyledBackgroundSection />
      </div>
      <div id="projects" />
      <div style={{ flexGrow: 1, paddingTop: 16 }}>
        <ProjectCards />
      </div>
      <div id="contact">
        <Foot />
      </div>
    </main>
  </>
);

export default IndexPage;
