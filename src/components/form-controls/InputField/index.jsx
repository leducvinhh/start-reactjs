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
    const { formState } = form;
    const hasErrors = formState.touchedFields[name] && formState.errors[name];

    return (
        <Controller
            name={name}
            control={form.control}
            render={({ field, fieldState }) => (
                <TextField
                    {...field}
                    label={label}
                    disabled={disabled}
                    fullWidth
                    error={!!hasErrors}
                    helperText={formState.errors[name]?.message}
                />
            )}
        />
    );
}

export default InputField;
