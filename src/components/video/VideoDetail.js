import React from "react";
import { connect } from "react-redux";

import { Paper, Typography, Box } from "@material-ui/core";

const VideoDetail = props => {
  if (!props.videos.selectedVideo) return <div>Loading...</div>;

  const videoSrc = `${props.videos.selectedVideo.url}`;

  return (
    <React.Fragment>
      <Box>
        {/* <iframe
          frameBorder="0"
          title="Video Player"
          src={videoSrc}
          style={{ width: "900px", height: "506px" }}
        /> */}

        <video controls>
          <source type="video/mp4" src={videoSrc}></source>
        </video>
        <Paper p={2}>
          <Typography variant="h5">
            {props.videos.selectedVideo.title}
          </Typography>
          <Typography variant="subtitle1">
            {props.videos.selectedVideo.date}
          </Typography>
        </Paper>
      </Box>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    videos: state.videos
  };
};

export default connect(mapStateToProps)(VideoDetail);
