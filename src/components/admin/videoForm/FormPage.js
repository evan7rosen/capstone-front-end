import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export default function EditForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Video Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField required id="title" name="title" label="Title" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField id="url" name="url" label="Video URL" fullWidth />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox color="secondary" name="saveAddress" value="yes" />
            }
            label="Checkbox"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
