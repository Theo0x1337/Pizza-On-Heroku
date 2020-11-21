import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import {cart} from './Pizza';
import {total} from './Pizza';

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {cart.map((product) => (
          <ListItem className={classes.listItem} key={product.nom}>
            <ListItemText primary={product.nom} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            {total+ ' euros'}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Shipping
          </Typography>
          <Typography gutterBottom>{props.values.firstName + ' '+ props.values.lastName}</Typography>
          <Typography gutterBottom>{props.values.address}</Typography>
          <Typography gutterBottom>{props.values.zip}</Typography>
          <Typography gutterBottom>{props.values.city}</Typography>
          <Typography gutterBottom>{props.values.country}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Payment details
          </Typography>
          <Grid container>
              <React.Fragment>
                <Grid item xs={6}>
                    <Typography gutterBottom>{'Type de carte : '}</Typography>
                  </Grid>
                <Grid item xs={6}>
                    <Typography gutterBottom>{'VISA'}</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography gutterBottom>{'Nom du titulaire : '}</Typography>
                  </Grid>
                <Grid item xs={6}>
                    <Typography gutterBottom>{props.values.cardName}</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography gutterBottom>{'Numero de carte : '}</Typography>
                  </Grid>
                <Grid item xs={6}>
                    <Typography gutterBottom>{props.values.cardNumber}</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography gutterBottom>{'Date expiration : '}</Typography>
                  </Grid>
                <Grid item xs={6}>
                    <Typography gutterBottom>{props.values.cardExp}</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography gutterBottom>{'CCV : '}</Typography>
                  </Grid>
                <Grid item xs={6}>
                    <Typography gutterBottom>{props.values.cardCcv}</Typography>
                </Grid>
              </React.Fragment>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}