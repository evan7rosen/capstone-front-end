import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import { selectVideo } from "../../../store/videos/actions";
import GridListTile from "@material-ui/core/GridListTile";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 350
  }
}));

const VideoCard = ({ video, selectVideo }) => {
  const classes = useStyles();

  const handleClick = video => {
    window.scrollTo(0, 0);
    selectVideo(video);
  };

  return (
    <GridListTile style={{ marginBottom: "25px" }}>
      <Card
        className={classes.root}
        onClick={() => handleClick(video)}
        variant="outlined"
      >
        <CardMedia
          component="img"
          alt="Video thumbnail"
          height="225"
          image={`https://img.youtube.com/vi/${video.url}/hqdefault.jpg`}
          title={video.title}
        />
        <CardHeader title={video.title} subheader={video.date} />
      </Card>
    </GridListTile>
  );
};

export default connect(null, {
  selectVideo
})(VideoCard);
