import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  main: {
    padding: theme.spacing(8, 0, 6),
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10)
  },
  buttons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));

export default function Album() {
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
          Existing Double R Video Customer?
        </Typography>
        <Grid container>
          <CssBaseline />
          <Container maxWidth="sm">
            <Typography align="center" color="textSecondary" paragraph>
              Log in to view your purchased videos
            </Typography>
            <div className={classes.buttons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Log In
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
