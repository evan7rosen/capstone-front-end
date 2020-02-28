import React from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

const FormPage = ({ setName, setEmail, setPassword, users }) => {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        User Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="name"
            name="name"
            label="Name"
            value={users.selectedUser.name}
            fullWidth
            onChange={e => setName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="email"
            name="email"
            label="Email Address"
            value={users.selectedUser.email}
            fullWidth
            onChange={e => setEmail(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="password"
            name="password"
            label="Password"
            type="password"
            value={users.selectedUser.password}
            fullWidth
            onChange={e => setPassword(e.target.value)}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default connect(mapStateToProps)(FormPage);
