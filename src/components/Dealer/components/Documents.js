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
function Documents() {
  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Grid container direction="row" spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h6" className="title">
                Upload document
              </Typography>
            </Grid>
          </Grid>
          <Grid container direction="row" spacing={3}>
            <Grid item xs={12}>
              <DropzoneArea
                onChange={(files) => console.log('Files:', files)}
              />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Documents;
