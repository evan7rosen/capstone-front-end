import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

import { NavLink } from "react-router-dom";

import Logo from "./logo.jpg";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  }
}));

const TopNav = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <NavLink to="/" style={{ textDecoration: "none", color: "black" }}>
            <img
              src={Logo}
              alt="Double R Video Logo"
              style={{
                height: "50px",
                padding: "5px",
                marginLeft: "10px",
                marginRight: "10px"
              }}
            />
          </NavLink>
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
          <NavLink
            to="/"
            style={{ textDecoration: "none", color: "black", padding: "5px" }}
          >
            <Button color="inherit">Logout</Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default TopNav;
