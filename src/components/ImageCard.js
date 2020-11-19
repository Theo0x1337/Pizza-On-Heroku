import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles';


import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import EuroIcon from '@material-ui/icons/Euro';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import { Collapse } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 645,
    background: 'rgba(0,0,0,0.5)',
    margin: '20px',
    justifyContent: 'center',
  },
  media: {
    height: 440,
  },
  title: {
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize: '2rem',
    color: '#fff',
  },
  desc: {
    fontFamily: 'Nunito',
    fontSize: '1.1rem',
    color: '#ddd',
  },
  button: {
     background: 'linear-gradient(45deg, #ec0101 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    marginBottom: '20px',
  },
  secondBut: {
    color: 'white',
    backgroundColor: 'red',
    marginLeft:'20px',
    marginBottom: '20px',
  },
  butBeforeP: {
    marginBottom: '20px',
  },
});


const theme = createMuiTheme({
  palette: {
    action: {
      disabledBackground: '#f6685e',
      disabled: 'white',
    }
  }
});


export default function ImageCard({ place, checked }) {
  const classes = useStyles();

  return (
    <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={place.imageUrl}
          title="Contemplative Reptile"
        />
        <CardContent>
        <Grid container justify="center">
          <Typography
            gutterBottom
            variant="h5"
            component="h1"
            className={classes.title}
          >
            {place.title}
          </Typography>
        </Grid>
        <ThemeProvider theme={theme}>
          <Button disabled
              className={classes.butBeforeP}
              variant="contained"
              color="secondary"
              startIcon={<PeopleAltIcon />}
              component="p"
            >
            {place.persons}
          </Button>
        </ThemeProvider>
        <Button disabled
            className={classes.secondBut}
            variant="contained"
            color="secondary"
            startIcon={<EuroIcon />}
            component="p"
          >
           {place.price}
        </Button>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.desc}
          >
            {place.description}
          
          </Typography>
        </CardContent>
        <Grid container justify="center">
          <Button 
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<ShoppingCartIcon />}
          >
          Commander
          </Button>
         </Grid>
      </Card>
    </Collapse>
  );
}
