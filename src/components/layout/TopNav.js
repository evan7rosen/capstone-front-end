import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

import { NavLink, useLocation } from "react-router-dom";

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
  const location = useLocation();

  return (
    <div className={classes.root}>
      {console.log("top nav location", location)}
      <AppBar position="static" color="transparent">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <NavLink to="/" style={{ textDecoration: "none", color: "black" }}>
            <img
              src={Logo}
              alt="Double R Video Logo"
              style={{ height: "50px", padding: "5px" }}
            />
          </NavLink>
          <NavLink
            to="/videos"
            style={{ textDecoration: "none", color: "black" }}
          >
            <Button color="inherit">Videos</Button>
          </NavLink>
          {location.pathname === "/videos" ? (
            <div className={classes.search} style={{ width: "50%" }}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
          ) : (
            ""
          )}
          <NavLink
            to="/admin"
            style={{ textDecoration: "none", color: "black" }}
          >
            <Button color="inherit">Admin Portal</Button>
          </NavLink>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default TopNav;
