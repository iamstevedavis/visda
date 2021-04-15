import Grid from '@material-ui/core/Grid';
import ProjectCard from "./ProjectCard";
import React from 'react';
import { StaticImage } from "gatsby-plugin-image";

export default function ImgMediaCard() {
  const projects = [
    {
      alt: "sanctuary-refugee",
      imageComponent: () => 
        <div style={{display: "flex", justifyContent: "center"}}>
          <StaticImage 
            src="../../images/sanctuary_blood_drop.png" 
            alt="blood_drop" 
            layout="fixed"
            width={200}
            height={200}
          />
        </div>,
      imageTitle: "sanctuaryBloodDrop",
      title: "Sanctuary Refugee App",
      info: "Patient messaging app for Sanctuary Refugee Health Centre (Client)",
      learnMoreLink: "https://github.com/SanctuaryRefugeeHealth"
    },
    {
      alt: "foto",
      imageComponent: () =>         
        <div style={{display: "flex", justifyContent: "center"}}>
          <StaticImage 
            src="../../images/rasp_pi_logo.png" 
            alt="rasp_pi" 
            layout="fixed"
            width={200}
            height={200}
          />
        </div>,
      imageTitle: "fotoImage",
      title: "Foto App",
      info: "Email Enabled Digital Picture Frame",
      learnMoreLink: "https://github.com/iamstevedavis/foto"
    },
    {
      alt: "happyBirthday",
      imageComponent: () =>         
        <div style={{display: "flex", justifyContent: "center"}}>
          <StaticImage 
            src="../../images/happy_birthday.png" 
            alt="happy_birthday" 
            layout="fixed"
            width={200}
            height={200}
          />
        </div>,
      imageTitle: "fotoImage",
      title: "Happy Birthday App",
      info: "Leverage Twilio and AWS to automatically text Happy Birthday! to Google contacts",
      learnMoreLink: "https://github.com/iamstevedavis/happy-birthday"
    },
    {
      alt: "cambridge_metalsmiths",
      imageComponent: () =>         
        <div style={{display: "flex", justifyContent: "center"}}>
          <StaticImage 
            src="../../images/cambridge_metalsmiths.jpg" 
            alt="cambridge_metalsmiths" 
            layout="fixed"
            width={200}
            height={200}
          />
        </div>,
      imageTitle: "cambridge_metalsmiths",
      title: "Cambridge Metalsmiths",
      info: "Custom website design and domain management",
      learnMoreLink: "https://github.com/iamstevedavis/cambridgemetalsmiths"
    },
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