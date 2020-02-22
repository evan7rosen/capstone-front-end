import React from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

const FormPage = ({ setTitle, setUrl, videos }) => {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Video Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="title"
            name="title"
            label="Title"
            value={videos.selectedVideo.title}
            fullWidth
            onChange={e => setTitle(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="url"
            name="url"
            label="Video URL"
            value={videos.selectedVideo.url}
            fullWidth
            onChange={e => setUrl(e.target.value)}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    videos: state.videos
  };
};

export default connect(mapStateToProps)(FormPage);
