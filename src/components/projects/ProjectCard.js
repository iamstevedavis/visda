import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import React from 'react';
// import { StaticImage } from "gatsby-plugin-image";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function ImgMediaCard({cardData}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component={cardData.imageComponent}
          alt={ cardData.alt }
          // height="100%"
          image={ cardData.image }
          title={ cardData.imageTitle }
          className={classes.media}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            { cardData.title }
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            { cardData.info }
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button target="_blank" href={ cardData.learnMoreLink } size="small" color="primary">
          Check it out!
        </Button>
      </CardActions>
    </Card>
  );
}