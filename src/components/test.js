import React from 'react';
import { useFormik } from 'formik';



const Test = () => {
    const attributesOptions = [
        { value: 'attribute1', label: 'Attribute 1' },
        { value: 'attribute2', label: 'Attribute 2' },
        { value: 'attribute3', label: 'Attribute 3' },
        // Add more options as needed
    ];
    const attributesRadios = [
        { value: 'Nam', label: 'Nam' },
        { value: 'Nữ', label: 'Nữ' },
        { value: 'Khác', label: 'Khác' },
        // Add more options as needed
    ];
    const initialValues = {
        selectedAttributes: [],
        selectedOption: attributesOptions[0].value,
        selectedRadio: attributesRadios[0].value,
        name: 'Thong',
    };
    const formik = useFormik({
        initialValues,
        onSubmit: (values) => {
            console.log('name Attributes:', values.name);
            console.log('Selected Attributes:', values.selectedAttributes);
            console.log('Selected Option:', values.selectedOption);
            console.log('Selected Radio:', values.selectedRadio);
        },
    });

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                />
                <br />
                {attributesOptions.map((option) => (
                    <label key={option.value}>
                        <input
                            type="checkbox"
                            name="selectedAttributes"
                            value={option.value}
                            checked={formik.values.selectedAttributes.includes(option.value)}
                            onChange={formik.handleChange}
                        />
                        {option.label}
                        <br />
                    </label>
                ))}
                <br/>
                <select
                    name="selectedOption"
                    value={formik.values.selectedOption[0] || ''} // Use the first value or an empty string
                    onChange={formik.handleChange}
                >
                    {attributesOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                {attributesRadios.map((option) => (
                    <label key={option.value}>
                        <input
                            type="radio"
                            name="selectedRadio"
                            value={option.value}
                            checked={formik.values.selectedRadio === option.value}
                            onChange={formik.handleChange}
                        />
                        {option.label}
                        <br />
                    </label>
                ))}
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Test;
