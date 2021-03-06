import 'normalize.css/normalize.css';

import * as React from 'react';

import { Grid, Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useMediaQuery } from 'react-responsive';
import Header from '../components/Header';
import ContentCard from '../components/ContentCard';
import MyCanvas from '../components/MyCanvas';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
  shape: {
    borderRadius: 10,
  },
});

const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
  },
  shape: {
    borderRadius: 10,
  },
});

const useStyles = makeStyles({
  typographyStyles: {
    padding: 50,
    fontWeight: 600,
  },
  edgeDetector: {
    border: 'red',
    borderStyle: 'solid',
  },
  paperStyles: {
    height: '100%',
    minHeight: '50vh',
    width: '100%',
  },
  gridStyles: {
    minHeight: '70vh',
  },
  colourfulStyles: {
    padding: 50,
    fontWeight: 600,
    backgroundImage: 'linear-gradient(180deg, black, pink, purple, cyan)',
    backgroundClip: 'text',
    // '-webkit-background-clip': 'text',
    // '-moz-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
    '-moz-text-fill-color': 'transparent',
  },
});

const IndexPage = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 760px)' });
  const topLevelDark = isMobile;
  const classes = useStyles();
  return (
    // https://github.com/mui-org/material-ui/issues/7466
    // https://blog.logrocket.com/the-material-ui-grid-system/
    <div style={{ overflow: 'hidden' }}>
      <MuiThemeProvider theme={topLevelDark ? darkTheme : lightTheme}>
        <CssBaseline />
        <Header />
        <Grid container item direction="column" spacing={2}>
          {/* Top Intro Grid */}
          <Grid item container>
            <Grid item xs={0} sm={1} />
            <Grid item container xs={12} sm={5}>
              <Grid item xs={12}>
                <Typography className={isMobile ? classes.colourfulStyles : classes.typographyStyles} variant="h3">Hi. I&apos;m Steve.</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography className={classes.typographyStyles} variant="h4">
                  I love proof of concepts and bringing products to life.
                </Typography>
              </Grid>
            </Grid>
            <Grid item container xs={12} sm={5} justify="center" direction="column">
              <Paper className={classes.paperStyles} elevation={5}>
                <MyCanvas />
              </Paper>
            </Grid>
            <Grid item xs={0} sm={1} />
          </Grid>
          <Grid item container spacing={2}>
            <ContentCard />
          </Grid>
        </Grid>
        <br />
        <br />
      </MuiThemeProvider>
    </div>
  );
};

export default IndexPage;
