import React from "react";
import { Grid, Box, Typography, Button } from "@material-ui/core";

import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const VideoItem = props => {
  return (
    <Grid item xs={12}>
      <Box style={{ display: "flex", alignItems: "center", padding: "10px" }}>
        <img
          style={{ marginRight: "20px", height: "100px" }}
          alt="thumbnail"
          src={`https://img.youtube.com/vi/${props.video.url}/hqdefault.jpg`}
        />
        <Typography variant="subtitle1" style={{ flex: 1 }}>
          <b>{props.video.title}</b>
          <p> {props.video.date} </p>
        </Typography>
        <Typography variant="h6" style={{ marginRight: "25px" }}>
          ${props.video.price}.00
        </Typography>
        <Button
          onClick={() => props.addToCart(props.video)}
          variant="contained"
          color="default"
          startIcon={<AddShoppingCartIcon />}
        >
          Add to Cart
        </Button>
      </Box>
    </Grid>
  );
};

export default VideoItem;
