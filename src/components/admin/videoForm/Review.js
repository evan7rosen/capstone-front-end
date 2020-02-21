import React from "react";
import { Paper, Typography } from "@material-ui/core";

const Review = props => {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Review Video
      </Typography>
      <div
        className="video"
        style={{
          position: "relative",
          paddingBottom: "56.25%",
          paddingTop: 25,
          height: 0
        }}
      >
        <iframe
          frameBorder="0"
          title="Video Player"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
          src={`https://www.youtube.com/embed/${props.url}`}
        />
      </div>
      <Paper p={2}>
        <Typography variant="h5">{props.title}</Typography>
        <Typography variant="subtitle1">February 30, 2020</Typography>
      </Paper>
    </React.Fragment>
  );
};

export default Review;
