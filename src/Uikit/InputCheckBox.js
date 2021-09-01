/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Checkbox, FormControlLabel } from '@material-ui/core';

function InputCheckBox({ field, ...props }) {
  return (
    <FormControlLabel
      control={<Checkbox {...field} {...props} />}
      // value={""}
    />
  );
}

export default InputCheckBox;
