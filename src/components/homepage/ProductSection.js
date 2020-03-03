import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chat from "@material-ui/icons/Chat";
import Typography from "@material-ui/core/Typography";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
import Grid from "@material-ui/core/Grid";
import InfoArea from "./InfoArea";

import styles from "./styles/productStyle";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <Grid container justify="center">
        <Grid item xs={12} sm={12} md={8}>
          <Typography
            className={classes.title}
            variant="h4"
            component="h4"
            align="center"
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
              title="Free Chat"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={Chat}
              iconColor="info"
              vertical
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <InfoArea
              title="Verified Users"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <InfoArea
              title="Fingerprint"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={Fingerprint}
              iconColor="danger"
              vertical
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
