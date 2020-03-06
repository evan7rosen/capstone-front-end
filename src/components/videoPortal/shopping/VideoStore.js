import React, { useState } from "react";
import { Grid, Paper } from "@material-ui/core";
import { connect } from "react-redux";

import VideoItem from "./VideoItem";
import ShoppingCart from "./ShoppingCart";

const VideoStore = props => {
  const [cart, addCart] = useState([]);

  const addToCart = video => {
    addCart(cart => [...cart, video]);
  };

  const clearCart = video => {
    addCart([]);
  };

  let listOfVideos = props.videos.all.map(video => (
    <VideoItem key={video.id} video={video} cart={cart} addToCart={addToCart} />
  ));

  return (
    <Grid container spacing={2}>
      <Grid item xs={15} sm={8}>
        <Paper>{listOfVideos}</Paper>
      </Grid>
      <Grid item xs={7} sm={3}>
        <ShoppingCart cart={cart} clearCart={clearCart} />
      </Grid>
    </Grid>
  );
};

const mapStateToProps = state => {
  return {
    videos: state.videos
  };
};

export default connect(mapStateToProps)(VideoStore);
