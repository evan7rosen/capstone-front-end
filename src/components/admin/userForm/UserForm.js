import React, { useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import FormPage from "./FormPage";
import Review from "./Review";
import SideNav from "../reusable/SideNav";
import { addUser, editUser, selectUser } from "../../../store/users/actions";
import { useLocation } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Double R Video Productions
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  appBar: {
    position: "relative"
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3)
    }
  },
  stepper: {
    padding: theme.spacing(3, 0, 5)
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end"
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1)
  }
}));

const steps = ["Edit Information", "Review and Submit"];

const UserForm = props => {
  const classes = useStyles();
  const location = useLocation();
  const [activeStep, setActiveStep] = useState(0);

  const setName = name => {
    props.selectUser({
      name: name,
      email: props.users.selectedUser.email,
      password: props.users.selectedUser.password
    });
  };

  const setEmail = email => {
    props.selectUser({
      name: props.users.selectedUser.name,
      email: email,
      password: props.users.selectedUser.password
    });
  };

  const setPassword = password => {
    props.selectUser({
      name: props.users.selectedUser.name,
      email: props.users.selectedUser.email,
      password: password
    });
  };

  let form = {};

  if (location.pathname === "/users/admin/form/edit") {
    form = {
      title: "Edit User",
      message: "Success!",
      function: props.editUser
    };
  } else if (location.pathname === "/users/admin/form/new") {
    form = {
      title: "Add New User",
      message: "Success!",
      function: props.addUser
    };
  }

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <FormPage
            setName={setName}
            setEmail={setEmail}
            setPassword={setPassword}
          />
        );
      case 1:
        return (
          <Review
            name={props.users.selectedUser.name}
            email={props.users.selectedUser.email}
            password={props.users.selectedUser.password}
          />
        );
      default:
        throw new Error("Unknown step");
    }
  }

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      handleSubmit();
    }
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSubmit = () => {
    console.log("submit function", form.function);
    let newUser = {
      title: props.users.selectedUser.title,
      url: props.users.selectedUser.url
    };

    form.function(newUser);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Grid container xs={12}>
        <SideNav />
        <main className={classes.layout}>
          <Grid style={{ justifyContent: "center" }} container spacing={2}>
            <Paper className={classes.paper}>
              <Typography component="h1" variant="h4" align="center">
                {form.title}
              </Typography>
              <Stepper activeStep={activeStep} className={classes.stepper}>
                {steps.map(label => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              <React.Fragment>
                {activeStep === steps.length ? (
                  <React.Fragment>
                    <Typography variant="h5" gutterBottom>
                      {form.message}
                    </Typography>
                    <Typography variant="subtitle1">
                      Please review videos page to ensure proper access to User
                    </Typography>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    {getStepContent(activeStep)}
                    <div className={classes.buttons}>
                      {activeStep !== 0 && (
                        <Button onClick={handleBack} className={classes.button}>
                          Back
                        </Button>
                      )}
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                        className={classes.button}
                      >
                        {activeStep === steps.length - 1 ? "Add User" : "Next"}
                      </Button>
                    </div>
                  </React.Fragment>
                )}
              </React.Fragment>
            </Paper>
            <Copyright />
          </Grid>
        </main>
      </Grid>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default connect(mapStateToProps, {
  addUser,
  editUser,
  selectUser
})(UserForm);
