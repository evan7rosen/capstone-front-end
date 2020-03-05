import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

import VideoItem from "./VideoItem";
import ShoppingCart from "./ShoppingCart";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around"
  }
}));

const VideoList = props => {
  const classes = useStyles();
  const [cart, addToCart] = useState({});

  let listOfVideos = props.videos.all.map(video => (
    <VideoItem key={video.id} video={video} cart={cart} addToCart={addToCart} />
  ));

  return (
    <Grid container>
      <Grid item xs={18} sm={9}>
        Video Store
        {listOfVideos}
      </Grid>
      <Grid item xs={6} sm={3}>
        Shopping Cart
        <ShoppingCart cart={cart} />
      </Grid>
    </Grid>
  );
};

const mapStateToProps = state => {
  return {
    videos: state.videos
  };
};

export default connect(mapStateToProps)(VideoList);
