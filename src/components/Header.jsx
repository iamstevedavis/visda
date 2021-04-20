import * as React from 'react';
import { Link } from 'gatsby';
import {
  AppBar, Toolbar, Typography, Grid, IconButton,
} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { makeStyles } from '@material-ui/styles';
import DescriptionIcon from '@material-ui/icons/Description';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import resume from '../images/Stephen_Davis_Software_Developer.pdf';

const useStyles = makeStyles(() => ({
  typographyStyles: {
    paddingLeft: '1vw',
    paddingRight: '1vw',
  },
  iconStyles: {
    // paddingLeft: '1vw',
    // paddingRight: '1vw',
  },
}));
const Header = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Grid container direction="row">
            <Typography className={classes.typographyStyles}><Link to="/foto/">Work</Link></Typography>

            <Typography className={classes.typographyStyles}>About</Typography>
            <Typography className={classes.typographyStyles}>Contact</Typography>
          </Grid>
          <Grid container direction="row-reverse" spacing={2}>
            <Grid item>
              <IconButton onClick={(event) => window.location.href = 'https://github.com/iamstevedavis'}><GitHubIcon className={classes.iconStyles} /></IconButton>
            </Grid>
            <Grid item>
              <IconButton onClick={(event) => window.location.href = 'https://www.linkedin.com/in/iamstevedavis'}><LinkedInIcon className={classes.iconStyles} /></IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default Header;
