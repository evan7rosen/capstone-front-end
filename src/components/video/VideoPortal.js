import React from "react";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";

import { SearchBar, VideoList, VideoDetail } from "./";

import { selectVideo } from "../../store/videos/actions";

const VideoPortal = props => {
  return (
    <Grid style={{ justifyContent: "center" }} container spacing={10}>
      <Grid item xs={11}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <SearchBar />
          </Grid>
          <Grid item xs={8}>
            <VideoDetail video={props.selectedVideo} />
          </Grid>
          <Grid item xs={4}>
            <VideoList videos={props.videos.all} onVideoSelect={selectVideo} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = state => {
  console.log("STATE", state);
  return {
    users: state.users,
    videos: state.videos
  };
};

export default connect(mapStateToProps)(VideoPortal);
