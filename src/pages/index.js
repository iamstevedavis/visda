import * as React from "react";

import Navbar from "../components/navbar/Navbar";
import ProjectCards from "../components/projects/ProjectCards";
import StyledBackgroundSection from "../components/Head";

const pageStyles = {
  color: "#232129",
  paddingTop: 16,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const IndexPage = () => {
  return (
    <>
      <title>iamstevedavis</title>
      <Navbar />
      <main style={pageStyles}>
        <StyledBackgroundSection />
      </main>
      <div id="projects"></div>
      <div style={{flexGrow: 1, paddingTop: 16}}>
        <ProjectCards />
      </div>
    </>
  )
}

export default IndexPage
