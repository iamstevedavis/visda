import {
  AppBar, Button, Grid, IconButton, Toolbar,
} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { makeStyles } from '@material-ui/styles';
import * as React from 'react';
// import resume from '../images/Stephen_Davis_Software_Developer.pdf';

const useStyles = makeStyles(() => ({
}));
const Header = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Grid container direction="row" spacing={2}>
            <Grid item>
              <Button variant="contained" href="/">
                Home
              </Button>
            </Grid>
            {/* <Grid item>
              <Button variant="contained" href="/calc">
                FV Calc.
              </Button>
            </Grid> */}
          </Grid>
          <Grid container direction="row-reverse" spacing={2}>
            <Grid item>
              <IconButton onClick={(event) => window.location.href = 'https://github.com/iamstevedavis'}><GitHubIcon className={classes.iconStyles} /></IconButton>
            </Grid>
            <Grid item>
              <IconButton onClick={(event) => window.location.href = 'https://www.linkedin.com/in/iamstevedavis'}><LinkedInIcon className={classes.iconStyles} /></IconButton>
            </Grid>
            {/* <Grid item>
              <IconButton download href={resume}>
                <DescriptionIcon className={classes.iconStyles} />
              </IconButton>
            </Grid> */}
          </Grid>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default Header;
