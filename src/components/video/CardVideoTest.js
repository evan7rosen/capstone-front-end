import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

const CardVideoTest = props => {
  const classes = useStyles();

  return (
    <Card className={classes.root} style={{ width: "auto" }}>
      <CardContent>
        <CardMedia
          media
          component="iframe"
          src={props.videos.selectedVideo.url}
          title={props.videos.selectedVideo.title}
        />
        <Typography variant="h5" component="h2">
          {props.videos.selectedVideo.title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {props.videos.selectedVideo.date}
        </Typography>
      </CardContent>
    </Card>
  );
};

const mapStateToProps = state => {
  return {
    videos: state.videos
  };
};

export default connect(mapStateToProps)(CardVideoTest);
