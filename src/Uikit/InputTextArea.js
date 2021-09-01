/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import TextField from '@material-ui/core/TextField';

function InputTextArea({ placeholder, field, ...props }) {
  return (
    <div>
      <TextField
        {...field}
        {...props}
        multiline
        rowsMax={4}
        placeholder={placeholder}
        variant="outlined"
      />
    </div>
  );
}

export default InputTextArea;
