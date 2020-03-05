import React from "react";
import {
  Grid,
  Paper,
  Typography,
  Button,
  ButtonGroup
} from "@material-ui/core";
import { NavLink } from "react-router-dom";

import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const VideoItem = props => {
  return (
    <Grid item xs={12}>
      <Paper
        style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
      >
        <img
          style={{ marginRight: "20px", height: "100px" }}
          alt="thumbnail"
          src={`https://img.youtube.com/vi/${props.video.url}/hqdefault.jpg`}
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
            <Button onClick={() => props.addToCart(props.video)}>
              <AddShoppingCartIcon />
            </Button>
          </NavLink>
        </ButtonGroup>
      </Paper>
    </Grid>
  );
};

export default VideoItem;
