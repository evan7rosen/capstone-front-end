import React, { useEffect } from "react";

import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { fetchAllUsers } from "./store/users/actions";
import { fetchAllVideos } from "./store/videos/actions";

import TopNav from "./components/layout/TopNav";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Video from "./components/video/VideoPortal";
import Admin from "./components/admin/dashboard/Dashboard";
import UserAdmin from "./components/admin/userAdmin/UserAdmin";
import VideoAdmin from "./components/admin/videoAdmin/VideoAdmin";
import UserForm from "./components/admin/userForm/UserForm";
import VideoForm from "./components/admin/videoForm/VideoForm";
import Homepage from "./components/homepage/Homepage";

const App = props => {
  useEffect(() => {
    props.fetchAllUsers();
    props.fetchAllVideos();
    // eslint-disable-next-line
  }, []);

  return (
    <Router>
      <TopNav />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route exact path="/videos" component={Video} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/users/admin" component={UserAdmin} />
        <Route exact path="/videos/admin" component={VideoAdmin} />
        <Route path="/users/admin/form" component={UserForm} />
        <Route path="/videos/admin/form" component={VideoForm} />
      </Switch>
    </Router>
  );
};

export default connect(null, {
  fetchAllUsers,
  fetchAllVideos
})(App);
