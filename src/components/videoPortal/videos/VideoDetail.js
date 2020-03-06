import React from "react";
import { connect } from "react-redux";
import { selectVideo } from "../../../store/videos/actions";

import { Paper, Typography, Container, Fab } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const VideoDetail = props => {
  if (!props.videos.selectedVideo) return <div>Loading...</div>;

  const videoSrc = `${props.videos.selectedVideo.url}`;

  return (
    <React.Fragment>
      <Fab
        style={{ display: "flex", align: "right" }}
        color="secondary"
        aria-label="close"
        onClick={() => props.selectVideo({})}
      >
        <CloseIcon />
      </Fab>
      <Container>
        <div
          className="video"
          style={{
            position: "relative",
            paddingBottom: "56.25%",
            paddingTop: 25,
            height: 0
          }}
        >
          <iframe
            frameBorder="0"
            title="Video Player"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%"
            }}
            src={`https://www.youtube.com/embed/${videoSrc}`}
          />
        </div>
        <Paper p={2}>
          <Typography variant="h5">
            {props.videos.selectedVideo.title}
          </Typography>
          <Typography variant="subtitle1">
            {props.videos.selectedVideo.date}
          </Typography>
        </Paper>
      </Container>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    videos: state.videos
  };
};

export default connect(mapStateToProps, { selectVideo })(VideoDetail);
