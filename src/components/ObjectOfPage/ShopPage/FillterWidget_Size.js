import { Formik } from "formik";
import React, { useEffect } from "react";
import $ from 'jquery';

const FillterWidget_Size = ({ data, formik }) => {
    useEffect(() => {
        $(".fw-size-choose .sc-item input[type='checkbox'], .pd-size-choose .sc-item input[type='radio']").on('change', function () {
            $(".pd-size-choose .sc-item label").removeClass('active');
            if ($(this).is(':checked'))
                $(this).siblings('label').addClass('active');
            else
                $(this).siblings('label').removeClass('active');
        });
    }, [data]); // Dependency array includes 'data' to ensure useEffect runs after data is fetched and component is rendered
    return (
        <div className="filter-widget">
            <h4 className="fw-title">Size</h4>
            <div className="fw-size-choose">
                {data && data.map((item, index) => (
                    <div className="sc-item" key={item.name}> {/* Thêm key cho mỗi phần tử */}
                        <input type="checkbox" name="Sizes" value={item.name} onChange={formik.handleChange} checked={formik.values.Sizes.includes(item.name)} id={item.name} />
                        <label htmlFor={item.name}>{item.name}</label>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default FillterWidget_Size;
