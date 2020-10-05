import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export default function DatePicker(props){
  const {label, value, onChange} = props;
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        margin="normal"
        color="secondary"
        id="date-picker-dialog"
        label={label}
        format="dd/MM/yyyy"
        value={value}
        onChange={onChange}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
        style={{width: 200, margin: '0 8px'}}
      />
    </MuiPickersUtilsProvider>
  );
}
