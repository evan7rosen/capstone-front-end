import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import RoomIcon from "@material-ui/icons/Room";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  main: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(5)
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(15)
  },
  submit: {
    margin: theme.spacing(3, 1, 2)
  },
  list: {
    marginBottom: theme.spacing(2)
  },
  text: {
    color: "initial",
    fontSize: "20px"
  },
  icon: {
    fontSize: "40px"
  }
}));

export default function ContactUs() {
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
          style={{ color: "initial", marginBottom: "25px" }}
        >
          Contact Us
        </Typography>
        <Grid container>
          <CssBaseline />
          <Grid item xs={false} sm={3} md={6}>
            <List
              aria-label="contact information"
              style={{ marginTop: "50px" }}
            >
              <ListItem className={classes.list}>
                <ListItemIcon>
                  <PhoneIcon className={classes.icon} />
                </ListItemIcon>
                <Typography className={classes.text}>(602) 881-4597</Typography>
              </ListItem>
              <ListItem className={classes.list}>
                <ListItemIcon>
                  <EmailIcon className={classes.icon} />
                </ListItemIcon>
                <Typography className={classes.text}>
                  <a
                    href="mailto:evan@doublervideo.com"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    evan@doublervideo.com
                  </a>
                </Typography>
              </ListItem>
              <ListItem className={classes.list}>
                <ListItemIcon>
                  <RoomIcon className={classes.icon} />
                </ListItemIcon>
                <Typography className={classes.text}>Phoenix, AZ</Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={8} md={5}>
            <form className={classes.form}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="name"
                    name="name"
                    variant="outlined"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    type="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="message"
                    label="Message"
                    name="message"
                    multiline
                    rows="4"
                  />
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Send Message
                </Button>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
