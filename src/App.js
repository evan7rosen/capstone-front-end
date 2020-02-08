import React, { useEffect } from "react";
import "typeface-roboto";

import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { fetchAllUsers } from "./store/users/actions";
import { fetchAllVideos } from "./store/videos/actions";

import Homepage from "./components/Homepage";

const App = props => {
  useEffect(() => {
    props.fetchAllUsers();
    props.fetchAllVideos();
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
    </Router>
  );
};

export default connect(null, {
  fetchAllUsers,
  fetchAllVideos
})(App);
