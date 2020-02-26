import React from "react";
import { connect } from "react-redux";
import TableBody from "@material-ui/core/TableBody";

import UserItem from "./UserItem";

const UserList = ({ users }) => {
  const listOfUsers = users.all.map(user => (
    <UserItem key={user.id} user={user} />
  ));

  return <TableBody>{listOfUsers}</TableBody>;
};

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default connect(mapStateToProps)(UserList);
