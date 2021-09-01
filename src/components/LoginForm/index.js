import React from 'react';
import { Formik, Field, Form, withFormik } from 'formik';

import { Box, FormControlLabel, Checkbox } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InputText from '../../Uikit/InputText';

// import './login.scss';

let LoginForm = ({ handleLogin }) => {
  return (
    <Formik
      initialValues={{
        password: '',
        userName: '',
      }}
      onSubmit={(values, actions) => {
        actions.setSubmitting(false);
        handleLogin(values);
      }}
    >
      <Form>
        <Typography variant="h4" gutterBottom className="dark-text">
          <span>Sign in</span> to your account
        </Typography>
        <Field
          className="login-textbox"
          name="userName"
          component={InputText}
          type="text"
          label="User Name"
        />

        <Field
          className="login-textbox"
          name="password"
          component={InputText}
          type="password"
          label="Password"
        />

        <Box alignItems="left">
          <FormControlLabel
            control={<Checkbox name="checkedC" color="primary" />}
            label="Remember Me"
          />
        </Box>

        <Button
          variant="contained"
          className="loginBtn"
          // color="secondary"
          type="submit"
          size="large"
        >
          Login
        </Button>
      </Form>
    </Formik>
  );
};
export default LoginForm = withFormik({
  displayName: 'loginForm',
})(LoginForm);
