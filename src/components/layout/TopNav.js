import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import { NavLink } from "react-router-dom";

import Logo from "./logo.jpg";

const TopNav = props => {
  return (
    <Grid>
      <AppBar color="inherit">
        <Toolbar>
          <div style={{ flex: 1 }}>
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
          </div>
          <div>
            <NavLink
              to="/login"
              style={{ textDecoration: "none", color: "black", padding: "5px" }}
            >
              <Button color="inherit">Login</Button>
            </NavLink>
          </div>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

export default TopNav;
