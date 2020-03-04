import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

import Footer from "../layout/Footer";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Parallax from "./components/Parallax";
import Divider from "@material-ui/core/Divider";
import styles from "./styles/HomepageStyles";

import Services from "./components/Services";
import Customer from "./components/Customer";
import DemoReel from "./components/DemoReel";
import ContactUs from "./components/ContactUs";

const useStyles = makeStyles(styles);

export default function Homepage(props) {
  const classes = useStyles();
  return (
    <div>
      <Parallax filter image={require("./components/tempe.jpg")}>
        <Grid xs={12} sm={12} md={6}>
          <Typography
            className={classes.text}
            variant="h3"
            component="h3"
            align="center"
          >
            Double R Video Productions
          </Typography>
          <Typography
            className={classes.text}
            variant="h5"
            component="h5"
            align="center"
          >
            Phoenix, AZ based Video Production Company
          </Typography>
        </Grid>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <Services />
          <Divider variant="middle" />
          <DemoReel />
          <Divider variant="middle" />
          <Customer />
          <Divider variant="middle" />
          <ContactUs />
        </div>
      </div>
      <Footer />
    </div>
  );
}
