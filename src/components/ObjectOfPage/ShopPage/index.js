import React, { useEffect, useState } from "react";
import { useFormik } from "formik";

import FillterWidget_Category from "./FillterWidget_Category";
import FillterWidget_Brand from "./FillterWidget_Brand";
import FillterWidget_Price from "./FillterWidget_Price";
import FillterWidget_Color from "./FillterWidget_Color";
import FillterWidget_Size from "./FillterWidget_Size";
import FillterWidget_Tag from "./FillterWidget_Tag";
import ProductOptionShow from "./ProductOptionShow";
import ProductItem from "./ProductItem";
import { Helmet } from 'react-helmet';
import { data } from "jquery";
import axios from "../../../axios";


const ProductShop = ()=>{
    const [datafillter, setData] = useState([]);
    const [productfillter, setDatafillter] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.post('api/getfillter')
            .then(response => {
                setData(response.data.data);
            })
            .catch(err => {
                console.log(err);
                setError(err);
            });
    }, []);
    const FilerData = useFormik({
        initialValues: {
            brand: [],
            MinCost: "",
            MaxCost: "",
            Colors: [],
            Sizes: [],
            Tags: [],
            SortType: "asc",
            FillType: "price",
        },
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async values => {
            setDatafillter(values);
        },
    });
    return(<div>
        <Helmet>
            <title>Shoping</title>
        </Helmet>
        <section className="product-shop spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-8 order-2 order-lg-1 produts-sidebar-filter">

                        <FillterWidget_Category data={datafillter.category}></FillterWidget_Category>
                        <FillterWidget_Brand data={datafillter.brand} formik={FilerData} ></FillterWidget_Brand>
                        <FillterWidget_Price formik={FilerData}></FillterWidget_Price>
                        <FillterWidget_Color data={datafillter.color} formik={FilerData}></FillterWidget_Color>
                        <FillterWidget_Size data={datafillter.size} formik={FilerData}></FillterWidget_Size>
                        <FillterWidget_Tag data={datafillter.tags} formik={FilerData}></FillterWidget_Tag>


                    </div>
                    <div className="col-lg-9 order-1 order-lg-2">
                        <ProductOptionShow formik={FilerData}></ProductOptionShow>
                        <div className="product-list">
                            <div className="row">
                                <ProductItem datafill={productfillter}></ProductItem>
                                {/* <ProductItem></ProductItem>
                                <ProductItem></ProductItem> */}
                            </div>
                        </div>
                        <div className="loading-more">
                            <i className="icon_loading"></i>
                            <a href="#">
                                Loading More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>);
}
export default ProductShop;