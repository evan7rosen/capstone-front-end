import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import VidImg from "./video.jpg";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <Grid item xs={12}>
      <Paper
        style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        onClick={() => onVideoSelect(video)}
      >
        <img style={{ marginRight: "20px" }} alt="thumbnail" src={VidImg} />
        <Typography variant="subtitle1">
          <b>{video.title}</b>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default VideoItem;
