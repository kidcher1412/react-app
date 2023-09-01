import React, { useEffect } from "react";
import $ from 'jquery';

const FillterWidget_Tag = ({ data, formik }) => {
    useEffect(() => {
        $(".fw-tags input[type='checkbox']").on('change', function () {
            $(".pd-color-choose .cc-item label").removeClass('active');
            if ($(this).is(':checked'))
                $(this).siblings('label').addClass('active');
            else
                $(this).siblings('label').removeClass('active');
        });
    }, [data]); // Dependency array includes 'data' to ensure useEffect runs after data is fetched and component is rendered

    return (
        <div className="filter-widget">
            <h4 className="fw-title">Tags</h4>
            <div className="fw-tags">
                {data && data.map((item, index) => (
                    <div key={index} style={{ display: "inline-block" }}>
                        <input style={{ visibility: "hidden", position: "absolute" }} name="Tags" type="checkbox" value={item.name} checked={formik.values.Tags.includes(item.name)} onChange={formik.handleChange} id={`tag-${index}`} />
                        <label key={index} htmlFor={`tag-${index}`} href="#" className="fw-tag">
                            {item.name}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default FillterWidget_Tag;
