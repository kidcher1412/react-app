import { Form, Formik, useFormik } from "formik";
import React from "react";


const ProductOptionShow = ({formik}) => {
    return (
        <div className="product-show-option">
            <div className="row">
                    <Formik {...formik} onSubmit={formik.handleSubmit} onChange={formik.handleChange}>
                <div className="col-lg-7 col-md-7">
                        
                            <div className="select-option">
                                <select
                                    name="SortType"
                                    className="sorting"
                                    value={formik.values.SortType || ''}
                                    onChange={formik.handleChange}  // Sử dụng handleChange ở đây
                                >
                                    <option value="asc" >Tăng Dần</option>
                                    <option value="desc" >Giảm Dần</option>
                                </select>  
                                <select
                                    name="FillType"
                                    className="p-show"
                                    value={formik.values.FillType || ''}
                                    onChange={formik.handleChange}  // Sử dụng handleChange ở đây
                                >
                                    <option value="price" >Theo Giá</option>
                                    <option value="hot" >Theo độ Hot</option>
                                </select>  

                            </div>

                </div>
                    </Formik>
                <div className="col-lg-5 col-md-5 text-right">
                    <p>Show 01- 09 Of 36 Product</p>
                </div>
            </div>
        </div>
    )
}
export default ProductOptionShow