/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

function InputSelect({ option, field, form, ...props }) {
  return (
    <div>
      <FormControl className="select-box">
        <TextField select {...field} {...props} variant="outlined">
          <MenuItem value={10} selected>
            Ten
          </MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </TextField>
      </FormControl>
    </div>
  );
}

export default InputSelect;
