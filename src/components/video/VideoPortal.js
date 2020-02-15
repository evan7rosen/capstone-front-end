import React from "react";
import { Grid, Box } from "@material-ui/core";
import { connect } from "react-redux";

import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const VideoPortal = props => {
  return (
    <Grid style={{ justifyContent: "center" }} container spacing={10}>
      <Grid container xs={11}>
        <Box my={5}>
          <Box my={2}>
            {props.videos.selectedVideo.hasOwnProperty("id") ? (
              <VideoDetail />
            ) : (
              ""
            )}
          </Box>
          <Box my={2}>
            <VideoList />
          </Box>
        </Box>
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
