import React from "react";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";

import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const VideoPortal = props => {
  return (
    <Grid style={{ justifyContent: "center" }} container spacing={10}>
      <Grid item xs={11}>
        <Grid container spacing={5}>
          <Grid item>
            {props.videos.selectedVideo.hasOwnProperty("id") ? (
              <VideoDetail video={props.selectedVideo} />
            ) : (
              ""
            )}
          </Grid>
          <Grid item>
            <VideoList />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = state => {
  return {
    users: state.users,
    videos: state.videos
  };
};

export default connect(mapStateToProps)(VideoPortal);
