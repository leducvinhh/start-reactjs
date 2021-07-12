import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../components/form-controls/InputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

function TodoForm({ onSubmit }) {
    const schema = yup.object().shape({
        title: yup.string().required('Please enter title'),
    });
    const form = useForm({
        defaultValues: {
            title: '',
        },
        resolver: yupResolver(schema),
    });
    const handleSubmit = (values) => {
        if (onSubmit) {
            onSubmit(values);
        }
        form.reset();
    };
    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <InputField form={form} name="title" label="Todo" />
        </form>
    );
}

export default TodoForm;
