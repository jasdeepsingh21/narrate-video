const validate = (values) => {
  const errors = {};
  const requiredFields = [
    'email',
    'password',
    'confirmPassword',
    'otp',
  ];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address!';
  }
  if (values.password !== values.confirmPassword) {
    errors.confirmPassword = 'Password did not match!';
  }
  return errors;
};

export default validate;
