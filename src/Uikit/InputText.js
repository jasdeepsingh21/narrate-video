/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { TextField } from '@material-ui/core';
// import PropTypes from 'prop-types';

const InputText = ({ multiline, field, form, ...props }) => {
  return (
    <>
      <TextField
        {...field}
        {...props}
        margin="normal"
        variant="outlined"
      />

      {/* {error && <span>{error}</span>} */}
    </>
  );
};

export default InputText;

// RenderField.propTypes = {
//   input: PropTypes.shape({
//     name: PropTypes.string,
//     value: PropTypes.any,
//   }).isRequired,
//   label: PropTypes.string.isRequired,
//   type: PropTypes.string.isRequired,
//   upperCase: PropTypes.string,
//   maxLength: PropTypes.number,
//   meta: PropTypes.shape({
//     touched: PropTypes.bool,
//     error: PropTypes.string,
//     active: PropTypes.bool,
//     // asyncValidating: PropTypes.bool,
//     // autofilled: PropTypes.bool,
//     // dirty: PropTypes.bool,
//     // invalid: PropTypes.bool,
//     // pristine: PropTypes.bool,
//     // submitting: PropTypes.bool,
//     // submitFailed: PropTypes.bool,
//     // valid: PropTypes.bool,
//     // visited: PropTypes.bool,
//   }).isRequired,
//   disabled: PropTypes.bool,
// };

// RenderField.defaultProps = {
//   disabled: false,
//   maxLength: 75,
//   upperCase: '',
// };
