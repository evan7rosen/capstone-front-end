import React from "react";
import { connect } from "react-redux";
import {
  Grid,
  Paper,
  Typography,
  Button,
  ButtonGroup
} from "@material-ui/core";
import { NavLink } from "react-router-dom";

import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

import VidImg from "./video.jpg";
import {
  editVideo,
  removeVideo,
  selectVideo
} from "../../../store/videos/actions";

const VideoItem = ({ video, selectVideo, removeVideo }) => {
  function deleteButtonClick(video) {
    var r = window.confirm(`Are you sure you want to delete ${video.title}?`);
    if (r === true) {
      console.log(video.id);
      removeVideo(video.id);
    }
  }

  return (
    <Grid item xs={12}>
      <Paper
        style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
      >
        <img
          style={{ marginRight: "20px", height: "100px" }}
          alt="thumbnail"
          src={VidImg}
        />
        <Typography variant="subtitle1" style={{ flex: 1 }}>
          <b>{video.title}</b>
          <p> {video.date} </p>
        </Typography>
        <ButtonGroup
          variant="text"
          color="primary"
          aria-label="text primary button group"
          style={{ float: "right" }}
        >
          <NavLink to="/videos/admin/form/edit">
            <Button onClick={() => selectVideo(video)}>
              <EditIcon />
            </Button>
          </NavLink>
          <Button onClick={() => deleteButtonClick(video)}>
            <DeleteIcon />
          </Button>
        </ButtonGroup>
      </Paper>
    </Grid>
  );
};

export default connect(null, {
  removeVideo,
  editVideo,
  selectVideo
})(VideoItem);
