import React, { useEffect } from "react";
import "typeface-roboto";

import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { fetchAllUsers } from "./store/users/actions";
import { fetchAllVideos } from "./store/videos/actions";

import TopNav from "./components/layout/TopNav";
import Homepage from "./components/Homepage";
import Video from "./components/video/VideoPortal";
import Admin from "./components/admin/AdminPortal";

const App = props => {
  useEffect(() => {
    props.fetchAllUsers();
    props.fetchAllVideos();
  }, []);

  return (
    <Router>
      <TopNav />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/videos" component={Video} />
        <Route path="/admin" component={Admin} />
      </Switch>
    </Router>
  );
};

export default connect(null, {
  fetchAllUsers,
  fetchAllVideos
})(App);
