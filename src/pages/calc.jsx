import {
  FormControl, Grid, InputLabel, MenuItem, Paper, Select, Typography,
} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import 'normalize.css/normalize.css';
import * as React from 'react';
import { useMediaQuery } from 'react-responsive';
import Header from '../components/Header';
import foto50GIF from '../images/foto_50.gif';

const darkTheme = createTheme({
  palette: {
    type: 'dark',
  },
  shape: {
    borderRadius: 10,
  },
});

const lightTheme = createTheme({
  palette: {
    type: 'light',
  },
  shape: {
    borderRadius: 10,
  },
});

const useStyles = makeStyles({
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
  imageStyles: {
    width: '100%',
  },
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
  hiStyles: {
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

const FotoPage = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 760px)' });
  const topLevelDark = isMobile;
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div style={{ overflow: 'hidden' }}>
      <MuiThemeProvider theme={topLevelDark ? darkTheme : lightTheme}>
        <CssBaseline />
        <Header />
        <Grid container item direction="column" spacing={2}>
          {/* Top Intro Grid */}
          <Grid item container spacing={2}>
            <Grid item xs={0} sm={1} />
            <Grid item container xs={12} sm={5}>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={age}
                  onChange={handleChange}
                  label="Age"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item container xs={12} sm={5} justify="center" direction="column">
              <Grid item xs={0} sm={1} />
              <Grid item container xs={12} sm={10} direction="column">
                <Paper elevation={5} className={classes.backgroundGadient}>
                  <Grid container item>
                    <Grid item xs={0} sm={1} />
                    <Grid item xs={12} sm={10}>
                      <Typography variant="h5" component="h2">
                        Embedded
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        Foto
                      </Typography>
                    </Grid>
                    <Grid item xs={0} sm={1} />
                  </Grid>
                  <Grid
                    item
                    container
                    justify="center"
                    alignItems="center"
                    style={{ minHeight: '65vh' }}
                  >
                    <img className={classes.imageStyles} src={foto50GIF} alt="Foto" />
                  </Grid>
                </Paper>
              </Grid>
              <Grid item xs={0} sm={1} />
            </Grid>
            <Grid item xs={0} sm={1} />
          </Grid>
          <Grid item container spacing={2} />
        </Grid>
        <br />
        <br />
      </MuiThemeProvider>
    </div>
  );
};

export default FotoPage;
