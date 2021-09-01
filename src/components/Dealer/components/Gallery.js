import React from 'react';
import { Paper, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { DropzoneArea } from 'material-ui-dropzone';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
function Gallery() {
  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Grid container direction="row" spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h6" className="title">
                Gallary
              </Typography>
            </Grid>
          </Grid>
          <Grid container direction="row" spacing={3}>
            <Grid item xs={12}>
              <DropzoneArea
                acceptedFiles={['image/*']}
                dropzoneText="Drag and drop an image here or click"
                onChange={(files) => console.log('Files:', files)}
              />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Gallery;
