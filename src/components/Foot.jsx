import Grid from '@material-ui/core/Grid';
import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import resume from '../resources/Stephen_Davis_Software_Developer.pdf';

const resourcesComponents = (
  <Grid
    container
    item
    xs={12}
    lg={4}
    style={{ justifyContent: 'center', padding: 8 }}
  >
    <Grid
      container
      item
      xs={12}
      style={{ justifyContent: 'center', padding: 8 }}
    >
      <h2>Resources</h2>
    </Grid>
    <Grid
      container
      item
      xs={12}
      style={{ justifyContent: 'center', padding: 8 }}
    >
      <Grid
        container
        item
        xs={4}
        style={{ justifyContent: 'center' }}
      >
        <a href="https://github.com/iamstevedavis" target="_blank" aria-label="Follow @iamstevedavis on GitHub" rel="noreferrer">
          <StaticImage
            src="../images/github.png"
            alt="github"
            layout="fixed"
            width={50}
            height={50}
          />
        </a>
      </Grid>
      <Grid
        container
        item
        xs={4}
        style={{ justifyContent: 'center' }}
      >
        <a href="https://www.linkedin.com/in/iamstevedavis" target="_blank" aria-label="Follow Stephen Davis on LinkedIn" rel="noreferrer">
          <StaticImage
            src="../images/linkedin.png"
            alt="linkedin"
            layout="fixed"
            width={50}
            height={50}
          />
        </a>
      </Grid>
      <Grid
        container
        item
        xs={4}
        style={{ justifyContent: 'center' }}
      >
        <a id="pdf" href={resume} target="_blank" aria-label="View Resume" rel="noreferrer">
          <StaticImage
            src="../images/resume.png"
            alt="resume"
            layout="fixed"
            width={50}
            height={50}
          />
        </a>
      </Grid>
    </Grid>
  </Grid>
);

const projectReferenceComponents = (
  <Grid
    container
    item
    xs={12}
    lg={4}
    style={{ justifyContent: 'center', padding: 8 }}
  >
    <Grid
      container
      item
      xs={12}
      style={{ justifyContent: 'center', padding: 8 }}
    >
      <h2>Reference</h2>
    </Grid>
    <Grid
      container
      item
      xs={12}
      style={{ justifyContent: 'center', padding: 8 }}
    >
      <Grid
        container
        item
        xs={12}
        style={{ justifyContent: 'center' }}
      >
        <a href="https://github.com/SanctuaryRefugeeHealth" target="_blank" aria-label="Sanctuary Refugee Health" rel="noreferrer">
          Sanctuary Refugee Health
        </a>
      </Grid>
      <Grid
        container
        item
        xs={12}
        style={{ justifyContent: 'center' }}
      >
        <a href="https://github.com/iamstevedavis/foto" target="_blank" aria-label="Foto" rel="noreferrer">
          Foto
        </a>
      </Grid>
      <Grid
        container
        item
        xs={12}
        style={{ justifyContent: 'center' }}
      >
        <a href="https://github.com/iamstevedavis/happy-birthday" target="_blank" aria-label="Happy Birthday" rel="noreferrer">
          Happy Birthday
        </a>
      </Grid>
      <Grid
        container
        item
        xs={12}
        style={{ justifyContent: 'center' }}
      >
        <a href="https://github.com/iamstevedavis/cambridgemetalsmiths" target="_blank" aria-label="Cambridge Metalsmiths" rel="noreferrer">
          Cambridge Metalsmiths
        </a>
      </Grid>
    </Grid>
  </Grid>
);

export default function Foot() {
  return (
    <Grid container>
      <Grid
        container
        item
        xs={12}
        lg={4}
        style={{ justifyContent: 'center', padding: 8 }}
      >
        <Grid
          container
          item
          xs={12}
          style={{ justifyContent: 'center', padding: 8 }}
        >
          <h2>Contact</h2>
        </Grid>
        <a href="mailto:steve@visda.ca">steve@visda.ca</a>
      </Grid>
      {resourcesComponents}
      {projectReferenceComponents}
    </Grid>
  );
}
