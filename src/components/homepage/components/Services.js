import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TodayIcon from "@material-ui/icons/Today";
import VideocamIcon from "@material-ui/icons/Videocam";
import Typography from "@material-ui/core/Typography";
import HeadsetIcon from "@material-ui/icons/Headset";
import Grid from "@material-ui/core/Grid";
import InfoArea from "./InfoArea";

const useStyles = makeStyles(theme => ({
  section: {
    padding: "70px 0",
    textAlign: "center",
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10)
  },
  title: {
    color: "#3C4858",
    margin: "1.75rem 0 0.875rem",
    textDecoration: "none",
    fontWeight: "700",
    fontFamily: `"Roboto Slab", "Times New Roman", serif`,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px"
  },
  description: {
    color: "#999"
  }
}));

export default function Services() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <Grid container justify="center">
        <Grid item xs={12} sm={12} md={8}>
          <Typography
            component="h2"
            variant="h3"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Let us capture your next event!
          </Typography>
          <Typography
            className={classes.description}
            variant="h6"
            component="h6"
            align="center"
          >
            Double R Video strives to be your video production partner of
            choice. We specialize in event video, sports, music videos, digital
            content, and corporate video.
          </Typography>
        </Grid>
      </Grid>
      <div>
        <Grid container>
          <Grid item xs={12} sm={12} md={4}>
            <InfoArea
              title="Event Video"
              description="We will bring our production equipment and professional videographers to capture 
              your next event, anything from sports and arts, to corporate events and confrences."
              icon={TodayIcon}
              iconColor="info"
              vertical
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <InfoArea
              title="Web Content"
              description="We developed a YouTube channel for ABC Cake Decorating Supplies with thousands 
              of subscribers and hundreds of thousands of views, and we can do the same for you."
              icon={VideocamIcon}
              iconColor="success"
              vertical
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <InfoArea
              title="Music Videos"
              description="Whether its a live show in front of thousands of cheering fans, a studio music 
              video shoot, or anything in between, we will be there to capture your performance at its best."
              icon={HeadsetIcon}
              iconColor="danger"
              vertical
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
