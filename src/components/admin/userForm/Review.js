import React from "react";
import { Paper, Typography } from "@material-ui/core";

const Review = props => {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Review User
      </Typography>
      <Paper p={2}>
        <Typography variant="h5">{props.name}</Typography>
        <Typography variant="subtitle1">{props.email}</Typography>
        <Typography variant="subtitle1">{props.password}</Typography>
      </Paper>
    </React.Fragment>
  );
};

export default Review;
