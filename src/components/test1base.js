import React from 'react';
import { useForm } from 'react-hook-form';

const Test2 = () => {
    // Sử dụng Hook trong một thành phần React
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit((data) => onSubmit(data))}>
            <input {...register('lastName', { required: true })} />
            {errors.lastName && <p>Last name is required.</p>}
            <input type="submit" />
        </form>
    );
};

export default Test2;
