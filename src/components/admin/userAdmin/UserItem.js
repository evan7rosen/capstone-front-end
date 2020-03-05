import React from "react";
import { connect } from "react-redux";
import { Button, ButtonGroup } from "@material-ui/core";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { NavLink } from "react-router-dom";

import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

import { editUser, removeUser, selectUser } from "../../../store/users/actions";

const UserItem = ({ user, selectUser, removeUser }) => {
  function deleteButtonClick(user) {
    var r = window.confirm(`Are you sure you want to delete ${user.name}?`);
    if (r === true) {
      removeUser(user.id);
    }
  }

  return (
    <TableRow key={user.id}>
      <TableCell component="th" scope="row">
        {user.id}
      </TableCell>
      <TableCell align="right">{user.name}</TableCell>
      <TableCell align="right">{user.email}</TableCell>
      <TableCell align="right">Videos</TableCell>
      <TableCell align="right">
        <ButtonGroup
          variant="text"
          color="primary"
          aria-label="text primary button group"
          style={{ float: "right" }}
        >
          <NavLink to="/admin/users/form/edit">
            <Button onClick={() => selectUser(user)}>
              <EditIcon />
            </Button>
          </NavLink>
          <Button onClick={() => deleteButtonClick(user)}>
            <DeleteIcon />
          </Button>
        </ButtonGroup>
      </TableCell>
    </TableRow>
  );
};

export default connect(null, {
  removeUser,
  editUser,
  selectUser
})(UserItem);
