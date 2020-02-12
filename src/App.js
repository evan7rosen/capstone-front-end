import React, { useEffect } from "react";
import "typeface-roboto";

import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { fetchAllUsers } from "./store/users/actions";
import { fetchAllVideos } from "./store/videos/actions";

import TopNav from "./components/layout/TopNav";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
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
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
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
