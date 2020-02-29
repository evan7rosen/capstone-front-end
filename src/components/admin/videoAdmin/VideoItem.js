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

const VideoItem = props => {
  function deleteButtonClick(video) {
    var r = window.confirm(
      `Are you sure you want to delete ${props.video.title}?`
    );
    if (r === true) {
      console.log(props.video.id);
      props.removeVideo(props.video.id);
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
          <b>{props.video.title}</b>
          <p> {props.video.date} </p>
        </Typography>
        <ButtonGroup
          variant="text"
          color="primary"
          aria-label="text primary button group"
          style={{ float: "right" }}
        >
          <NavLink to="/videos/admin/form/edit">
            <Button onClick={() => props.selectVideo(props.video)}>
              <EditIcon />
            </Button>
          </NavLink>
          <Button onClick={() => deleteButtonClick(props.video)}>
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
