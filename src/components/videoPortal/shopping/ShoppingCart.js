import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Grid,
  Paper,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const useStyles = makeStyles(theme => ({
  listItem: {
    padding: theme.spacing(1, 0)
  },
  total: {
    fontWeight: 700
  },
  title: {
    marginTop: theme.spacing(2)
  }
}));

const ShoppingCart = props => {
  const classes = useStyles();

  const checkout = () => {
    let r = window.confirm("Are you really going to pay $40 for this crap?");
    if (r === true) {
      props.clearCart();
    }
  };

  return (
    <React.Fragment>
      <Grid item xs={12}>
        <Paper>
          <Box p={1.5}>
            <Typography variant="h5" gutterBottom align="center">
              Shopping Cart
            </Typography>
            {!props.cart[0] ? (
              "Your cart is empty. Buy some videos!"
            ) : (
              <List>
                {props.cart.map(video => (
                  <ListItem className={classes.listItem} key={video.id}>
                    <ListItemText
                      primary={video.title}
                      secondary={video.date}
                    />
                    <Typography variant="body2">${video.price}.00</Typography>
                  </ListItem>
                ))}
                <ListItem className={classes.listItem}>
                  <ListItemText primary="Total" />
                  <Typography variant="subtitle1" className={classes.total}>
                    ${props.cart.length * 40}.00
                  </Typography>
                </ListItem>
                <Button
                  onClick={() => checkout()}
                  fullWidth
                  variant="contained"
                  color="default"
                  startIcon={<ShoppingCartIcon />}
                >
                  Checkout
                </Button>
              </List>
            )}
          </Box>
        </Paper>
      </Grid>
    </React.Fragment>
  );
};

export default ShoppingCart;
