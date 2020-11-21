import React, {useState, useEffect} from "react"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';

import axios from 'axios';

import swal from 'sweetalert';


const useStyles = makeStyles((theme) => ({
    pizz: {
      fontFamily: 'Nunito',
      marginRight:'25%',
      marginLeft:'25%',
    },
    cardPizz: {
        maxWidth: 345,
      },
      media: {
        height: 140,
      },
  }));



  async function makeGetRequest() {
      
    let res = await axios.get('https://protected-atoll-60548.herokuapp.com/pizzas');

    let data = res.data;

    return data;
}

export const cart = []

export let total = 0;

const addToCart = (pizza) => {
  cart.push({"id":pizza._id,"nom":pizza.nom,"desc":pizza.desc,"prix":pizza.prix})
  total = total + pizza.prix;
  console.log("id "+pizza._id," nom "+pizza.nom," desc "+pizza.desc," prix "+pizza.prix);
  console.log(cart);
  swal("La pizza a été ajouté a votre panier !", pizza.nom, "success");
}




//fonction qui permet de mettre la premiere lettre d'une string en majuscule
function Capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}


  export default function Pizza() {

    const classes = useStyles();
    const [pizzas, setPizzas] = useState([]);
    
    useEffect(() => {
        fetchPizzas();
    }, []);

    const fetchPizzas = () =>{
        makeGetRequest()
        .then(( data ) => setPizzas(data))
        .catch((err) => console.log(err))
    }

    console.log(pizzas);
  
    return (
    <div className={classes.pizz}>
        <Grid container spacing={3} justify = "center">
        {pizzas.map((value, index) => (
            <Grid key={value.nom} item xs={6}>
            <Card className={classes.cardPizz}>
                <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={value.url}
                    title={value.nom}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {Capitalize(value.nom)}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                         {value.desc}
                    </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
                <Button size="small" color="primary" onClick={() => addToCart(value)}>
                    Commander
                </Button>
                <Button size="small" color="primary" disabled>
                    {value.prix+ ' euros'}
                </Button>
                </CardActions>
            </Card>
            </Grid>
        ))}
        </Grid>
      </div>
    );
  }
