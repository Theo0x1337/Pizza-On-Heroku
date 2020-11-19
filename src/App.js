import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './components/Header';
import PlaceToVisit from './components/PlaceToVisit';
import Pizza from './components/Pizza';


const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    //backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bg1.jpg'})`,
    //backgroundRepeat: 'no-repeat',
    //backgroundSize: 'cover',
    backgroundColor:'#6d6875',
  },
  title:{
    textAlign:'center',
    width:'100%',
    color:'white',
    fontFamily: 'Nunito',
  }
}));
export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <div className={classes.title} id="place-to-visit">
        <h1>
          Les stars du moment !
        </h1>
      </div>
      <PlaceToVisit />
      <div className={classes.title} id="place-to-visit">
        <h1>
          Nos pizzas !
        </h1>
      </div>
      <Pizza />
    </div>
  );
}
