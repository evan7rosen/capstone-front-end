import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import VideocamIcon from "@material-ui/icons/Videocam";
import PeopleIcon from "@material-ui/icons/People";
import ShopIcon from "@material-ui/icons/Shop";
import React from "react";
import { NavLink } from "react-router-dom";

export const sideNavItems = (
  <div>
    <NavLink to="/videos/1" style={{ textDecoration: "none", color: "black" }}>
      <ListItem button>
        <ListItemIcon>
          <VideocamIcon />
        </ListItemIcon>
        <ListItemText primary="Your Videos" />
      </ListItem>
    </NavLink>
    <NavLink
      to="/videos/store"
      style={{ textDecoration: "none", color: "black" }}
    >
      <ListItem button>
        <ListItemIcon>
          <ShopIcon />
        </ListItemIcon>
        <ListItemText primary="Browse Videos" />
      </ListItem>
    </NavLink>
    <NavLink
      to="/videos/settings"
      style={{ textDecoration: "none", color: "black" }}
    >
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Account Settings" />
      </ListItem>
    </NavLink>
  </div>
);
