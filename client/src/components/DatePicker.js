import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';

import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import {DatePicker} from '../styled-components';

export default function(props) {
  const {label, value, onChange} = props;
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker
        id={"date-picker-dialog-" + label}
        label={label}
        format="dd/MM/yyyy"
        value={value}
        onChange={onChange}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      />
    </MuiPickersUtilsProvider>
  );
}
