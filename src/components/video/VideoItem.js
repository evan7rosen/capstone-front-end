import React from "react";
import { connect } from "react-redux";
import { Grid, Paper, Typography } from "@material-ui/core";
import VidImg from "./video.jpg";
import { selectVideo } from "../../store/videos/actions";

const VideoItem = ({ video, selectVideo }) => {
  return (
    <Grid item xs={12}>
      <Paper
        style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        onClick={() => selectVideo(video)}
      >
        <img style={{ marginRight: "20px" }} alt="thumbnail" src={VidImg} />
        <Typography variant="subtitle1">
          <b>{video.title}</b>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default connect(null, {
  selectVideo
})(VideoItem);
