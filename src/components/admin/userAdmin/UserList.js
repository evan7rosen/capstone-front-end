import React from "react";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";

import UserItem from "./UserItem";

const UserList = ({ users }) => {
  const listOfUsers = users.all.map(user => (
    <UserItem key={user.id} user={user} />
  ));

  return (
    <Grid container spacing={2} p={5}>
      {listOfUsers}
    </Grid>
  );
};

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default connect(mapStateToProps)(UserList);
