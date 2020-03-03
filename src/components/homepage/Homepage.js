import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

import Footer from "../layout/Footer";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Parallax from "./Parallax";

import styles from "./styles/HomepageStyles";

import ProductSection from "./ProductSection";

const useStyles = makeStyles(styles);

export default function Homepage(props) {
  const classes = useStyles();
  return (
    <div>
      <Parallax filter image={require("./tempe.jpg")}>
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
          <ProductSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
