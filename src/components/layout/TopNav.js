import React from "react";
import { connect } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { userLogin } from "../../store/users/actions";

import { NavLink } from "react-router-dom";

import Logo from "./logo.jpg";

const TopNav = props => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    props.userLogin({});
    setAnchorEl(null);
  };

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
                  marginLeft: "5px",
                  marginRight: "15px"
                }}
              />
            </NavLink>
          </div>
          <div>
            {props.users.loggedInUser.id ? (
              <div>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  <NavLink
                    to="/login"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      padding: "5px"
                    }}
                  >
                    <MenuItem onClick={handleClose}>Log Out</MenuItem>
                  </NavLink>
                  {/* <MenuItem onClick={handleClose}>My Account</MenuItem> */}
                </Menu>
              </div>
            ) : (
              <NavLink
                to="/login"
                style={{
                  textDecoration: "none",
                  color: "black",
                  padding: "5px"
                }}
              >
                <Button color="inherit">Login</Button>
              </NavLink>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default connect(mapStateToProps, {
  userLogin
})(TopNav);
