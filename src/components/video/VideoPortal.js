import React from "react";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";

import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

import { selectVideo } from "../../store/videos/actions";

const VideoPortal = props => {
  return (
    <Grid style={{ justifyContent: "center" }} container spacing={10}>
      <Grid item xs={11}>
        <Grid container spacing={10}>
          <Grid item>
            {props.selectedVideo ? (
              <VideoDetail video={props.selectedVideo} />
            ) : (
              ""
            )}
          </Grid>
          <Grid item>
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
