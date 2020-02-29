import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

import { NavLink } from "react-router-dom";

import Logo from "./logo.jpg";

const TopNav = props => {
  return (
    <AppBar color="inherit">
      <Toolbar>
        <NavLink to="/" style={{ textDecoration: "none", color: "black" }}>
          <img
            src={Logo}
            alt="Double R Video Logo"
            style={{
              width: "180px",
              padding: "5px",
              marginLeft: "10px",
              marginRight: "10px"
            }}
          />
        </NavLink>
        <div style={{ flex: 1 }}>
          <NavLink
            to="/videos"
            style={{ textDecoration: "none", color: "black", padding: "5px" }}
          >
            <Button color="inherit">Videos</Button>
          </NavLink>
          <NavLink
            to="/admin"
            style={{ textDecoration: "none", color: "black", padding: "5px" }}
          >
            <Button color="inherit">Admin Portal</Button>
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/"
            style={{ textDecoration: "none", color: "black", padding: "5px" }}
          >
            <Button color="inherit">Logout</Button>
          </NavLink>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default TopNav;
