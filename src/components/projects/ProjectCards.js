import Grid from '@material-ui/core/Grid';
import ProjectCard from "./ProjectCard";
import React from 'react';
import { StaticImage } from "gatsby-plugin-image";

export default function ImgMediaCard() {
  const projects = [
    {
      alt: "sanctuary-refugee",
      imageComponent: () => 
        <div style={{display: "flex"}}>
          <StaticImage src="../images/sanctuary_blood_drop.png" alt="asd" />
        </div>,
      imageTitle: "sanctuaryBloodDrop",
      title: "Sanctuary Refugee App",
      info: "Patient messaging app for Sanctuary Refugee Health Centre (Client)",
      learnMoreLink: "https://github.com/SanctuaryRefugeeHealth"
    },
    {
      alt: "someAltText",
      imageComponent: () =>         
        <div style={{display: "flex"}}>
          <StaticImage src="../images/sanctuary_blood_drop.png" alt="asd" />
        </div>,
      imageTitle: "someImageTitle",
      title: "CardTitle",
      info: "card info",
      learnMoreLink: "http://www.google.com"
    }
  ]
  
  let itemList = projects.map((cardData,index)=>{
    return (
      <Grid key={index} container item xs={12} lg={6} style={{justifyContent: "center", padding: 8}}>
        <ProjectCard cardData={cardData}/>
      </Grid>
    )
  })
  
  return (
    <Grid container>
      {itemList}
    </Grid>
  );
}