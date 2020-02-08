import React from "react";
import { connect } from "react-redux";

const Homepage = props => {
  return (
    <div>
      Hello Fuckers
      {console.log(props)}
    </div>
  );
};

const mapStateToProps = state => {
  console.log("STATE", state);
  return {
    users: state.users,
    videos: state.videos
  };
};

export default connect(mapStateToProps)(Homepage);
