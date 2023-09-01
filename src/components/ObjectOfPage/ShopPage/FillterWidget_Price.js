import React, { useState } from 'react';
import { Formik } from "formik";
import $ from 'jquery'; // Import jQuery
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const FillterWidget_Price = ({ formik }) => {
    const [minValue, setMinValue] = useState(100);
    const [maxValue, setMaxValue] = useState(1000);

    const handleSliderChange = (values) => {
        setMinValue(values[0]);
        setMaxValue(values[1]);
        formik.setFieldValue('MinCost', values[0]);
        formik.setFieldValue('MaxCost', values[1]);
    };


    return(
        <Formik {...formik} onSubmit={formik.handleSubmit} onChange={formik.handleChange}>
            <div className="filter-widget">
                <h4 className="fw-title">Price</h4>
                <div className="filter-range-wrap">
                    <div className="range-slider">
                        <div className="price-input">
                            <input {...formik.getFieldProps('MinCost')} type="text" id="minamount" />
                            <input {...formik.getFieldProps('MaxCost')} type="text" id="maxamount" />
                        </div>
                    </div>
                    <Slider
                        min={100}
                        max={1000}
                        value={[minValue, maxValue]}
                        onChange={handleSliderChange}
                        step={1}
                        range // Thêm tùy chọn range để có 2 đầu kéo
                    />
                </div>
                <a href="#" className="filter-btn">Filter</a>
            </div>            
        </Formik>


    )
}
export default FillterWidget_Price