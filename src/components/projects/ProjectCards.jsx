import Grid from '@material-ui/core/Grid';
import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import ProjectCard from './ProjectCard';

export default function ImgMediaCard() {
  const projects = [
    {
      alt: 'sanctuary-refugee',
      imageComponent: () => (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <StaticImage
            src="../../images/sanctuary_blood_drop.png"
            alt="sanctuary-refugee"
            layout="fixed"
            width={200}
            height={200}
          />
        </div>
      ),
      imageTitle: 'sanctuary-refugee',
      title: 'Sanctuary Refugee App',
      info:
        'Patient messaging app for Sanctuary Refugee Health Centre (Client)',
      learnMoreLink: 'https://github.com/SanctuaryRefugeeHealth',
    },
    {
      alt: 'foto',
      imageComponent: () => (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <StaticImage
            src="../../images/rasp_pi_logo.png"
            alt="foto"
            layout="fixed"
            width={200}
            height={200}
          />
        </div>
      ),
      imageTitle: 'foto',
      title: 'Foto App',
      info: 'Email Enabled Digital Picture Frame',
      learnMoreLink: 'https://github.com/iamstevedavis/foto',
    },
    {
      alt: 'happy_birthday',
      imageComponent: () => (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <StaticImage
            src="../../images/happy_birthday.png"
            alt="happy_birthday"
            layout="fixed"
            width={200}
            height={200}
          />
        </div>
      ),
      imageTitle: 'happy_birthday',
      title: 'Happy Birthday App',
      info:
        'Leverage Twilio and AWS to automatically text Happy Birthday! to Google contacts',
      learnMoreLink: 'https://github.com/iamstevedavis/happy-birthday',
    },
    {
      alt: 'cambridge_metalsmiths',
      imageComponent: () => (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <StaticImage
            src="../../images/cambridge_metalsmiths.jpg"
            alt="cambridge_metalsmiths"
            layout="fixed"
            width={200}
            height={200}
          />
        </div>
      ),
      imageTitle: 'cambridge_metalsmiths',
      title: 'Cambridge Metalsmiths',
      info:
        'Custom website design and domain management (incl. GSuite and SEO)',
      learnMoreLink: 'https://github.com/iamstevedavis/cambridgemetalsmiths',
    },
    {
      alt: 'honourable_mentions',
      imageComponent: () => (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <StaticImage
            src="../../images/professional.png"
            alt="honourable_mentions"
            layout="fixed"
            width={200}
            height={200}
          />
        </div>
      ),
      imageTitle: 'honourable_mentions',
      title: 'Other Experience',
      info:
        'Programming and installation of systems such as the UP55A and DSC1832.',
      learnMoreLink: '',
    },
  ];

  const itemList = projects.map((cardData, index) => (
    <Grid
      key={index}
      container
      item
      xs={12}
      lg={6}
      style={{ justifyContent: 'center', padding: 8 }}
    >
      <ProjectCard cardData={cardData} />
    </Grid>
  ));

  return <Grid container>{itemList}</Grid>;
}
