import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
}));

export default function DemoReel() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7}>
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
              src={`https://www.youtube.com/embed/76Fen4BEhgo`}
            />
          </div>
          {/* <Paper p={2}>
          <Typography variant="h5">
            {props.videos.selectedVideo.title}
          </Typography>
          <Typography variant="subtitle1">
            {props.videos.selectedVideo.date}
          </Typography>
        </Paper> */}
        </Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={0} square>
          <div className={classes.paper}>
            <Typography>Double R Video Licks Donkey Nutz</Typography>
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
