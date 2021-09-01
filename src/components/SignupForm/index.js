import React from 'react';
import { Formik, Field, Form, withFormik } from 'formik';

import {
  Box,
  FormControlLabel,
  Checkbox,
  Grid,
} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InputText from '../../Uikit/InputText';

// import './login.scss';

let SignupForm = ({ handleLogin }) => {
  return (
    <Formik
      initialValues={{
        password: '',
        email: '',
      }}
      onSubmit={(values, actions) => {
        actions.setSubmitting(false);
        handleLogin(values);
      }}
    >
      <Form>
        <Typography
          variant="h4"
          component="h3"
          gutterBottom
          className="dark-text"
        >
          <span>Create Account</span>
        </Typography>
        <Typography variant="body2" gutterBottom>
          Fill in the fields to sign up for an account
        </Typography>
        <Grid md={12} container>
          <Grid md={6} sm={12}>
            <Field
              className="login-textbox"
              name="firstName"
              component={InputText}
              required
              type="text"
              label="First Name"
            />
          </Grid>
          <Grid md={6} sm={12}>
            <Field
              className="login-textbox"
              name="lastName"
              component={InputText}
              type="text"
              label="Last Name"
            />
          </Grid>
        </Grid>

        <Field
          className="login-textbox"
          name="email"
          required
          component={InputText}
          type="email"
          label="Email"
        />

        <Field
          className="login-textbox"
          name="password"
          required
          component={InputText}
          type="password"
          label="Password"
        />
        <Field
          className="login-textbox"
          name="referenceCode"
          component={InputText}
          type="text"
          label="Reference Code"
        />

        <Box alignItems="left">
          <FormControlLabel
            control={<Checkbox name="checkedC" color="primary" />}
          />
          I accept <a href="/tnc">terms &amp; conditions</a>
        </Box>

        <Button
          variant="contained"
          className="primaryBtn"
          type="submit"
          size="large"
        >
          Sign up
        </Button>
      </Form>
    </Formik>
  );
};
export default SignupForm = withFormik({
  displayName: 'SignupForm',
})(SignupForm);
