import React from 'react';
import { Paper, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Field } from 'formik';
import InputText from '../../../Uikit/InputText';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
function PersonalDetails() {
  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Grid container direction="row" spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h6" className="title">
                Contact Person Details
              </Typography>
            </Grid>
          </Grid>
          <Grid container direction="row" spacing={3}>
            <Grid item xs={6}>
              <Field
                className="field-textbox"
                name="name"
                component={InputText}
                type="text"
                label="First Name"
              />
            </Grid>
            <Grid item xs={6}>
              <Field
                className="field-textbox"
                name="name"
                component={InputText}
                type="text"
                label="First Name"
              />
            </Grid>
          </Grid>
          <Grid container direction="row" spacing={3}>
            <Grid item xs={6}>
              <Field
                className="field-textbox"
                name="name"
                component={InputText}
                type="text"
                label="Email"
              />
            </Grid>
            <Grid item xs={6}>
              <Field
                className="field-textbox"
                name="name"
                component={InputText}
                type="text"
                label="Contact Number"
              />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default PersonalDetails;
