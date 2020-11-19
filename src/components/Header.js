import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse,Drawer,Button } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import LocalPizzaIcon from '@material-ui/icons/LocalPizza';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import logo from '../assets/Pizzaduchef.gif'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Nunito',
  },
  appbar: {
    background: 'none',
  },
  appbarWrapper: {
    width: '80%',
    margin: '0 auto',
  },
  appbarTitle: {
    flexGrow: '1',
  },
  icon: {
    color: '#fff',
    fontSize: '2rem',
  },
  colorText: {
    color: '#ec0101',
  },
  container: {
    textAlign: 'center',
  },
  title: {
    color: '#fff',
    fontSize: '4.5rem',
  },
  goDown: {
    color: '#ec0101',
    fontSize: '6rem',
  },
  drawStyle: {
    width:'350px',
    backgroundColor: "fff",
    alignItems: 'center',
  },
  buttonDraw: {
    margin: theme.spacing(1),
    width:"50%",
  }, 
  listStyle: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  logoPizza: {
    marginTop:'10%',
    marginBottom:'10%',
  },

}));



export default function Header() {

  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);

  const [drawerOpen, setDrawerOpen] = useState(false);

  const [selectedIndex, setSelectedIndex] = useState();

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  

  return (
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            PizzaDu<span className={classes.colorText}>Chef</span>
          </h1>
          <IconButton onClick={e => setDrawerOpen(!drawerOpen)}>
            <SortIcon 
            
            className={classes.icon} 
            

            />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer 
      anchor="right" onClose={e => setDrawerOpen(false)} open={drawerOpen}
      
      classes={{
        paper: classes.drawStyle, // class name, e.g. `classes-nesting-root-x`
      }}
      
      >
      <div className={classes.logoPizza}>
         <img width="200px" height="200px" src={logo} alt="logo Pizza du chef" />
      </div>

        <div className={classes.listStyle}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem
          button
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemIcon>
            <VpnKeyIcon />
          </ListItemIcon>
          <ListItemText primary="Connexion" />
        </ListItem>
        <ListItem
          button
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemIcon>
            <LocalPizzaIcon />
          </ListItemIcon>
          <ListItemText primary="Nos Pizzas" />
        </ListItem>
        <ListItem
          button
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="Commander" />
        </ListItem>
        <ListItem
          button
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}
        >
          <ListItemIcon>
            <ContactSupportIcon />
          </ListItemIcon>
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folder">
        <ListItem
          button
          selected={selectedIndex === 4}
          onClick={(event) => handleListItemClick(event, 4)}
        >
          <ListItemText primary="Trash" />
        </ListItem>
        <ListItem
          button
          selected={selectedIndex === 5}
          onClick={(event) => handleListItemClick(event, 5)}
        >
          <ListItemText primary="Spam" />
        </ListItem>
      </List>
    </div>


      </Drawer>

      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
            Une envie 
            de<span className={classes.colorText}> Pizza?</span>
          </h1>
          <Scroll to="place-to-visit" smooth>
            <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
}
