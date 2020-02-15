import React from "react";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";

import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
  const listOfVideos = videos.all.map(video => (
    <VideoItem key={video.id} video={video} />
  ));

  return (
    <Grid container spacing={2} p={5}>
      {listOfVideos}
    </Grid>
  );
};

const mapStateToProps = state => {
  return {
    videos: state.videos
  };
};

export default connect(mapStateToProps)(VideoList);
