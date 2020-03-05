import React from "react";
import { GridList } from "@material-ui/core";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

import VideoCard from "./VideoCard";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around"
  }
}));

const VideoList = props => {
  const classes = useStyles();

  // const user = props.users.all.filter(user => user.id === Number(id));

  // console.log("list props.user", props.user);
  // let videos = props.user ? props.user[0].videos : []

  let listOfVideos = props.videos.all.map(video => (
    <VideoCard key={video.id} video={video} />
  ));

  return (
    <GridList className={classes.root} cols={3}>
      {listOfVideos}
    </GridList>
  );
};

const mapStateToProps = state => {
  return {
    videos: state.videos,
    users: state.users
  };
};

export default connect(mapStateToProps)(VideoList);
