import * as React from 'react';
import {
  Paper, Box, Grid, Typography, ButtonBase, Card, CardActionArea, CardMedia, CardContent,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { StaticImage } from 'gatsby-plugin-image';
import foto50GIF from '../images/foto_50.gif';
import happyBirthdayGIF from '../images/happy_birthday.gif';
import moltenMetalGIF from '../images/molten_metal.gif';

const useStyles = makeStyles(() => ({
  backgroundGadient: {
    width: 'inherit',
    // background: 'linear-gradient(to bottom, pink, cyan)',
    background: 'linear-gradient(120deg, pink, purple, cyan)',
    // background: 'linear-gradient(red 0%, orange 25%, yellow 50%, green 75%, blue 100%)',
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
  buttonStyles: {
    // display: 'contents',
  },
  imageStyles: {
    width: 'inherit',
  },
}));

const ContentCard = () => {
  const classes = useStyles();
  const images = [
    {
      title: 'Embdedded',
      subTitle: 'Foto',
      // image: <StaticImage src="../images/rasp_pi_logo.png" alt="rasp_pi_logo" />,
      image: () => (<img className={classes.imageStyles} src={foto50GIF} alt="Otter dancing with a fish" />),
    },
    {
      title: 'Web Dev',
      subTitle: 'Sanctuary Refugee Health Clinic',
      image: () => (<StaticImage src="../images/sanctuary_blood_drop_275x275.png" alt="sanctuary_blood_drop" />),
    },
    {
      title: 'Integrated Services',
      subTitle: 'Happy Birthday',
      // image: <StaticImage src="../images/cell_phone_50.png" alt="happy_birthday" />,
      // image: <iframe src="https://giphy.com/embed/63I6FXZTXks2A" width="326" height="480" frameBorder="0" className="giphy-embed" allowFullScreen />,
      image: () => (<img className={classes.imageStyles} src={happyBirthdayGIF} alt="Otter dancing with a fish" />),
    },
    {
      title: 'Web Dev',
      subTitle: 'Cambridge Metalsmiths',
      // image: <StaticImage src="../images/cambridge_metalsmiths.jpg" alt="cambridge_metalsmiths" />,
      // image: <iframe src="https://giphy.com/embed/Yxpd00FNQTfFK" width="480" height="331" frameBorder="0" className="giphy-embed" allowFullScreen />,
      image: () => (<img className={classes.imageStyles} src={moltenMetalGIF} alt="Otter dancing with a fish" />),

    },
  ];

  return (
    images.map((image, i) => (
      // <Grid key={image.title} item container></Grid>
      <>
        <Grid item xs={0} sm={1} />
        <Grid container item xs={12} sm={10}>
          {/* <Grid classname={classes.edgeDetector} container> */}
          <Card className={classes.backgroundGadient}>
            <CardActionArea
              className={classes.cardActionAreaStyles}
              target="_blank"
              href="http://google.com"
            >
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {image.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {image.subTitle}
                </Typography>
              </CardContent>
              <CardMedia
                alt="alt"
                component={image.image}
                title="Title"
              />
            </CardActionArea>
          </Card>
          {/* </Grid> */}
        </Grid>
        <Grid item xs={0} sm={1} />
      </>
      // </Grid>
    ))
  );
};

export default ContentCard;
