import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { TextField } from '@material-ui/core';

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function InputField(props) {
  const { form, name, label, disabled } = props;
  const {formState: { errors, touchedFields }} = form;

  const hasError = errors[name];
  const touchedField = touchedFields[name];

  // console.log("is touch field: ", touchedField);
  // console.log("hasError: ",hasError);

  return (

    <Controller 
        
        render={({
          field: { onChange, onBlur, value },
        }) => (
          <TextField 
            fullWidth
            label={label}
            disabled={disabled}
      
            name={props.name}
            onChange={onChange}
            onBlur={onBlur}

            error={!!hasError}
            helperText={errors[name]?.message}
          />
        )}
        
        name={name}
        control={form.control} 
        
    />
  );
}

export default InputField;
