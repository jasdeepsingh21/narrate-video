import React from 'react';
import { Formik, Field, Form, withFormik } from 'formik';
import Button from '@material-ui/core/Button';
import InputText from '../../Uikit/InputText';

let ReferForm = ({ handleLogin }) => {
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
        <Field
          className="login-textbox"
          name="userName"
          component={InputText}
          type="text"
          label="Full Name"
        />
        <Field
          className="login-textbox"
          name="email"
          component={InputText}
          type="email"
          label="Email"
        />
        <Field
          className="login-textbox"
          name="mobil"
          component={InputText}
          type="tel"
          label="Mobile"
        />

        <Button
          variant="contained"
          className="loginBtn"
          type="submit"
          // size="la"
        >
          Refer
        </Button>
      </Form>
    </Formik>
  );
};
export default ReferForm = withFormik({
  displayName: 'ReferForm',
})(ReferForm);
