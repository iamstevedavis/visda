import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  helloThereStyle: {
    color: '#BBBBBB',
  },
  edgeDetector: {
    border: 'red',
    borderStyle: 'solid',
  },
  gridStyles: {
    // height: '75vh',
  },
});

function Item(props) {
  const classes = useStyles();
  return (
    <Paper className={classes.gridStyles}>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>

      <Button className="CheckButton">
        Check it out!
      </Button>
    </Paper>
  );
}

const MyCarousel = () => {
  const items = [
    {
      name: 'Random Name #1',
      description: 'Probably the most random thing you have ever seen!',
    },
    {
      name: 'Random Name #2',
      description: 'Hello World!',
    },
  ];

  return (
    <Carousel style={{ height: '100%' }}>
      {
        items.map((item, i) => <Item key={i} item={item} />)
      }
    </Carousel>
  );
};

export default MyCarousel;
