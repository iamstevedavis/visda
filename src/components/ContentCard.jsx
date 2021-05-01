import * as React from 'react';
import {
  Paper, Grid, Typography, ButtonBase,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { StaticImage } from 'gatsby-plugin-image';
import foto50GIF from '../images/foto_50.gif';
import happyBirthdayGIF from '../images/happy_birthday.gif';
import moltenMetalGIF from '../images/molten_metal.gif';

const useStyles = makeStyles(() => ({
  backgroundGadient: {
    width: 'inherit',
    padding: '2%',
    background: 'linear-gradient(120deg, pink, purple, cyan)',
  },
  cardActionAreaStyles: {
    paddingBottom: '3vh',
    display: 'grid',
    alignItems: 'center',
    textAlign: 'left',
  },
  edgeDetector: {
    border: 'red',
    borderStyle: 'solid',
  },
  imageStyles: {
    width: '100%',
  },
}));

const ContentCard = () => {
  const classes = useStyles();
  const images = [
    {
      title: 'Embdedded',
      subTitle: 'Foto',
      link: 'https://github.com/iamstevedavis/foto',
      image: <img className={classes.imageStyles} src={foto50GIF} alt="Foto" />,
    },
    {
      title: 'Web Dev',
      subTitle: 'Sanctuary Refugee Health Clinic',
      link: 'https://github.com/SanctuaryRefugeeHealth',
      image: <StaticImage src="../images/sanctuary_blood_drop_275x275.png" alt="Sanctuary Refugee Health Clinic" />,
    },
    {
      title: 'Integrated Services',
      subTitle: 'Happy Birthday',
      link: 'https://github.com/iamstevedavis/happy-birthday',
      image: <img className={classes.imageStyles} src={happyBirthdayGIF} alt="Happy Birthday" />,
    },
    {
      title: 'Web Dev',
      subTitle: 'Cambridge Metalsmiths',
      link: 'https://github.com/iamstevedavis/cambridgemetalsmiths',
      image: <img className={classes.imageStyles} src={moltenMetalGIF} alt="Cambridge Metalsmiths" />,
    },
  ];

  return (
    images.map((image, i) => (
      <>
        <Grid key={`${image.title}left`} item xs={0} sm={1} />
        <Grid key={`${image.title}middle`} item container xs={12} sm={10} direction="column">
          <Paper elevation={5} className={classes.backgroundGadient}>
            <Grid container item>
              <Grid item xs={0} sm={1} />
              <Grid item xs={12} sm={10}>
                <Typography variant="h5" component="h2">
                  {image.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {image.subTitle}
                </Typography>
              </Grid>
              <Grid item xs={0} sm={1} />
            </Grid>
            <Grid
              item
              container
              justify="center"
              alignItems="center"
              style={{ minHeight: '60vh' }}
            >
              <ButtonBase href={image.link}>
                {image.image}
              </ButtonBase>
            </Grid>
          </Paper>
        </Grid>
        <Grid key={`${image.title}right`} item xs={0} sm={1} />
      </>
    ))
  );
};

export default ContentCard;
