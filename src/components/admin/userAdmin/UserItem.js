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

import { editUser, removeUser, selectUser } from "../../../store/users/actions";

const UserItem = ({ user, selectUser, removeUser }) => {
  function deleteButtonClick(user) {
    var r = window.confirm(`Are you sure you want to delete ${user.title}?`);
    if (r === true) {
      removeUser(user.id);
    }
  }

  return (
    <Grid item xs={12}>
      <Paper
        style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
      >
        <Typography variant="subtitle1" style={{ flex: 1 }}>
          <b>{user.name}</b>
          <p> {user.email} </p>
        </Typography>
        <ButtonGroup
          variant="text"
          color="primary"
          aria-label="text primary button group"
          style={{ float: "right" }}
        >
          <NavLink to="/users/form/edit">
            <Button onClick={() => selectUser(user)}>
              <EditIcon />
            </Button>
          </NavLink>
          <Button onClick={() => deleteButtonClick(user)}>
            <DeleteIcon />
          </Button>
        </ButtonGroup>
      </Paper>
    </Grid>
  );
};

export default connect(null, {
  removeUser,
  editUser,
  selectUser
})(UserItem);
