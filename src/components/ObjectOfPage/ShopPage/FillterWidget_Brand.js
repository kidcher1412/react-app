import { Formik,Form } from "formik";
import React, { useEffect } from "react";
import $ from 'jquery';


const FillterWidget_Brand = ({data, formik }) => {
    useEffect(() => {
    }, [data]); // Dependency array includes 'data' to ensure useEffect runs after data is fetched and component is rendered
    return(
        <Formik {...formik} onSubmit={formik.handleSubmit} onChange={formik.handleChange}>
            <Form>
                <div className="filter-widget">
                    <h4 className="fw-title">Brand</h4>
                    <div className="fw-brand-check">
                        {data && data.map((item, index) => (
                            <div key={index} className="bc-item">
                                <label htmlFor={"bc-"+item.id}>
                                    {item.name}
                                    <input type="checkbox" name="brand" id={"bc-"+item.id} value={item.name} onChange={formik.handleChange} checked={formik.values.brand.includes(item.name)} />
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                        ))}
                        <div className="bc-item">
                            <label htmlFor="bc-calvin">
                                Calvin Klein
                                <input type="checkbox" id="bc-calvin"/>
                                <span className="checkmark"></span>
                            </label>
                        </div>
                    </div>
                    <button type="submit" value="Xem" >Sign In</button>
                </div>
            </Form>

        </Formik>
    )
}
export default FillterWidget_Brand