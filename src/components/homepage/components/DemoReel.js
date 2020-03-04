import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  main: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10)
  },
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
      <Grid
        container
        component="main"
        className={classes.main}
        justify="center"
      >
        <Typography
          component="h1"
          variant="h4"
          gutterBottom
          style={{ color: "initial" }}
        >
          Watch our Demo Reel
        </Typography>
        <Grid container>
          <CssBaseline />
          <Container>
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
          </Container>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
