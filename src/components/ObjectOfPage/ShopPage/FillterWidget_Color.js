import { Formik } from "formik";
import React, { useEffect } from "react";
import $ from 'jquery';


const FillterWidget_Color = ({data,formik}) => {
    useEffect(() => {
        $(".fw-color-choose .cs-item input[type='checkbox'], .pd-color-choose .cc-item input[type='radio']").on('change', function () {
            $(".pd-color-choose .cc-item label").removeClass('active');
            if ($(this).is(':checked'))
                $(this).siblings('label').addClass('active');
            else
                $(this).siblings('label').removeClass('active');
        });
    }, [data]); // Dependency array includes 'data' to ensure useEffect runs after data is fetched and component is rendered

    return(
        <Formik {...formik} onSubmit={formik.handleSubmit} onChange={formik.handleChange}>
                    <div className="filter-widget">
                    <h4 className="fw-title">Color</h4>
                    <div className="fw-color-choose">
                        {data && data.map((item, index) => (
                            <div key={index} className="cs-item">
                                <input type="checkbox" name="Colors" value={item.id.toString()} onChange={formik.handleChange} checked={formik.values.Colors.includes(item.id.toString())} id={item.name} />
                                <label className={item.name} htmlFor={item.name}>{item.name}</label>
                            </div>
                        ))}
                    </div>
                </div>

        </Formik>

    )
}
export default FillterWidget_Color