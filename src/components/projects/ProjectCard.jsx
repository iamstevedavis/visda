import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import React from 'react';
// import { StaticImage } from "gatsby-plugin-image";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: 400,
  },
  media: {
    // height: 150,
  },
});

export default function ImgMediaCard({ cardData }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea
        target="_blank"
        href={cardData.learnMoreLink}
        style={{ height: '100%' }}
      >
        <CardMedia
          component={cardData.imageComponent}
          alt={cardData.alt}
          image={cardData.image}
          title={cardData.imageTitle}
          className={classes.media}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {cardData.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {cardData.info}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
