import * as React from "react";

// import Head from "../components/Head"
import Navbar from "../components/navbar/Navbar";
import ProjectCards from "../components/projects/ProjectCards";
import StyledBackgroundSection from "../components/Head2";

// styles
const pageStyles = {
  color: "#232129",
  paddingTop: 16,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
// markup
const IndexPage = () => {
  // const test = {
  //   alt: "sanctuary-refugee",
  //   imageComponent: () => <StaticImage src="../images/sanctuary_blood_drop.png" alt="asd" />,
  //   imageTitle: "sanctuaryBloodDrop",
  //   title: "Sanctuary Refugee App",
  //   info: "Patient messaging app for Sanctuary Refugee Health Centre (Client)",
  //   learnMoreLink: "https://github.com/SanctuaryRefugeeHealth"
  // }
  return (
    <>
      <title>iamstevedavis</title>
      <Navbar />
      <main style={pageStyles}>
        {/* <Head /> */}
        <StyledBackgroundSection />
      </main>
      <div style={{flexGrow: 1, paddingTop: 16}}>
        <ProjectCards />
      </div>
      {/* <ProjectCard cardData={test}/> */}
      {/* <StaticImage src="../images/sanctuary_blood_drop.png" alt="asd" /> */}
    </>
  )
}

export default IndexPage
