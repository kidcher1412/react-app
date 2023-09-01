import React from "react";
import { Helmet } from 'react-helmet';

import FillterWidget_Category from "../ShopPage/FillterWidget_Category";
import FillterWidget_Brand from "../ShopPage/FillterWidget_Brand";
import FillterWidget_Price from "../ShopPage/FillterWidget_Price";
import FillterWidget_Color from "../ShopPage/FillterWidget_Color";
import FillterWidget_Size from "../ShopPage/FillterWidget_Size";
import FillterWidget_Tag from "../ShopPage/FillterWidget_Tag";

import ProductInfo from "./ProductInfo";
import RelateProduct from "./RelateProduct";
import { useFormik } from "formik";

const ProductView = ()=>{
        const FilerData = useFormik({
        initialValues: {
            brand: [],
            MinCost: "100",
            MaxCost: "1000",
            Colors: [],
        },
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async values => {
            console.log(values.brand)
            console.log(values.MinCost)
            console.log(values.MaxCost)
            console.log(values.Colors)
            console.log(values.Sizes)
            console.log(values.Tags)
        },
    });
    const dataTags = [{ name: "Towel" }, { name: "Shoes" }]
    const dataSize = [{ name: "S" }, { name: "M" }, { name: "L" }, { name: "XS" }]
    return (<div>
        <Helmet>
            <title>Product Info</title>
        </Helmet>
        <section className="product-shop spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 d-none d-lg-block ">

                        <FillterWidget_Category></FillterWidget_Category>

                        <FillterWidget_Brand formik={FilerData} ></FillterWidget_Brand>
                        <FillterWidget_Price formik={FilerData}></FillterWidget_Price>
                        <FillterWidget_Color formik={FilerData}></FillterWidget_Color>

                    </div>
                    <ProductInfo></ProductInfo>
                </div>
            </div>
        </section>
        <RelateProduct></RelateProduct>
    </div>);
}
export default ProductView