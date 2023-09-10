import React, { useEffect, useState } from "react";
import { Formik, Form, Field, FastField } from 'formik';
import { useFormik } from 'formik';
import $ from 'jquery';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import axios from "../../../axios";
import Motion from "./motion";

// import * as Yup from 'yup';
const ProductInfo = ({ id_product })=>{
    const [dataProduct, setDataProduct] = useState(null);
    const [selectedColor, setColorChose] = useState(null);

    const [isLoading, setisLoading] = useState(true);
    const [error, setError] = useState(false);
    useEffect(() => {
        if (id_product !== null) {
            // getdata
            const json = {
                id_product: id_product.toString()
            }
            axios.post("api/getproductbyid", json)
                .then(response => {
                    setDataProduct(response.data.data[0]);
                    setisLoading(false);
                    console.log(response.data.data[0])
                }
                )
                .catch(err => {
                    console.log(err);
                    setError(err);
                });
        }
        else
            setError(true)
    }, [id_product])
    useEffect(() => {
        /*------------------
        Single Product
        --------------------*/
        $('.product-thumbs-track .pt').on('click', function () {
            $('.product-thumbs-track .pt').removeClass('active');
            $(this).addClass('active');
            var imgurl = $(this).data('imgbigurl');
            var bigImg = $('.product-big-img').attr('src');
            if (imgurl != bigImg) {
                $('.product-big-img').attr({ src: imgurl });
                $('.zoomImg').attr({ src: imgurl });
            }
        });
        $(".fw-tags input[type='checkbox']").on('change', function () {
            $(".pd-color-choose .cc-item label").removeClass('active');
            if ($(this).is(':checked'))
                $(this).siblings('label').addClass('active');
            else
                $(this).siblings('label').removeClass('active');
        });
        // handleChange input
        $(".fw-size-choose .sc-item input[type='checkbox'], .pd-size-choose .sc-item input[type='radio']").on('change', function () {
            $(".pd-size-choose .sc-item label").removeClass('active');
            if ($(this).is(':checked'))
                $(this).siblings('label').addClass('active');
            else
                $(this).siblings('label').removeClass('active');
        });
        $(".pd-color-choose .cc-item input[type='radio']").on('change', function () {
            $(".pd-color-choose .cc-item label").removeClass('active');
            if ($(this).is(':checked'))
                $(this).siblings('label').addClass('active');
            else
                $(this).siblings('label').removeClass('active');
        });
    }, [dataProduct]); 
    
    useEffect(()=>{
        // set stage 
        if (dataProduct !== null){
            ProductPortCart.setFieldValue('coLors', dataProduct.productsrescolors[0].ColorId.toString());
            $('.cc-item input[type="radio"]').first().siblings('label').addClass('active');
            setColorChose(dataProduct.productsrescolors[0].ColorId.toString())
        }
    },[dataProduct])


    const ProductPortCart = useFormik({
        initialValues: {
            quantity: '1',
            coLors: "",
            size: "", // Sử dụng mảng rỗng hoặc mảng các giá trị ban đầu nếu có
        },
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async values => {
            console.log(values)
        }
    });
    const handleQtyButtonClick = async (inc) => {
        const oldValue = parseFloat(ProductPortCart.values.quantity);
        let newVal;
        
        if (inc) {
            newVal = oldValue + 1;
        } else {
            newVal = oldValue > 1 ? oldValue - 1 : 1;
        }
        // console.log(newVal)  
        ProductPortCart.setFieldValue('quantity', newVal);
    };
    const sizeData = [];
    const colorData = [];
    if (dataProduct !== null) {
        dataProduct.productsrescolors.forEach((item) => {
            if (!sizeData.some((size) => size.SizeId === item.SizeId)) {
                sizeData.push({ SizeId: item.SizeId, SizeName: item.SizeName });
            }
            if (!colorData.some((color) => color.ColorId === item.ColorId)) {
                colorData.push({ ColorId: item.ColorId, ColorName: item.ColorName });
            }
        });
    }
    const handleColorSelection = (SizeId) => {
        $(".pd-size-choose .sc-item label").removeClass('active');
        $(".pd-size-choose input:checked").prop('checked', false);
        const item = dataProduct.productsrescolors.find((item) => item.ColorId === Number(selectedColor) && item.SizeId === Number(SizeId));
        if (item)
            return false
        else
            return true
    };
    if(error)
        return <p>Error....</p>
    return (
        <div className="col-lg-9">
            <div className="row">
                <div className="col-lg-6">
                    <div className="product-pic-zoom">
                        {dataProduct && (<img className="product-big-img" src={dataProduct.image} alt="" />)}
                            <div className="zoom-icon">
                                <i className="fa fa-search-plus"></i>
                            </div>
                    </div>
                    <div className="product-thumbs">
                        <OwlCarousel className="product-thumbs-track ps-slider owl-carousel"
                            navText={['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']}
                            loop={false} nav={true} items={3} smartSpeed={1200} autoplay={true} autoHeightClass={false}
                            margin={25} dots={false}
                        >
                            <div className="pt active" data-imgbigurl="assets/img/product-single/product-1.jpg"><img
                                src="assets/img/product-single/product-1.jpg" alt="" /></div>
                            <div className="pt" data-imgbigurl="assets/img/product-single/product-2.jpg"><img
                                src="assets/img/product-single/product-2.jpg" alt="" /></div>
                            <div className="pt" data-imgbigurl="assets/img/product-single/product-3.jpg"><img
                                src="assets/img/product-single/product-3.jpg" alt="" /></div>
                            <div className="pt" data-imgbigurl="assets/img/product-single/product-3.jpg"><img
                                src="assets/img/product-single/product-3.jpg" alt="" /></div>
                        </OwlCarousel>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="product-details">
                        <div className="pd-title">
                            <span>"dsaasd"</span>
                            {dataProduct && (<h3>{dataProduct.name}</h3>)}

                            <a href="#" className="heart-icon"><i className="icon_heart_alt"></i></a>
                        </div>
                        <div className="pd-rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-o"></i>
                            <span>(5)</span>
                        </div>
                        <div className="pd-desc">
                            {dataProduct && (<p>{dataProduct.description}</p>)}
                            <h4>gia moi<span>gia cu</span></h4>
                        </div>
                        <div className="pd-color">
                            <h6>Color</h6>
                            <div className="pd-color-choose">
                                {colorData.length > 0 && colorData.map((item, index) => (
                                    <div key={index} className="cc-item">
                                        <input type="radio" name="coLors" value={item.ColorId} id={"cc-" + item.ColorId}
                                            checked={ProductPortCart.values.coLors.includes(item.ColorId.toString())}
                                            onChange={() => {
                                                ProductPortCart.setFieldValue("coLors", item.ColorId.toString());
                                                ProductPortCart.setFieldValue("size", "");
                                                setColorChose(item.ColorId.toString());
                                            }}
                                        />
                                        <label htmlFor={"cc-" + item.ColorId}>{item.SizeName}</label>
                                    </div>
                                ))}

                            </div>
                        </div>
                        <div className="pd-size-choose">
                            {sizeData.length > 0 && sizeData.map((item, index) => (
                                <div className={"sc-item checker-"+handleColorSelection(item.SizeId)} key={index}>
                                {/* <div className="" key={index}> */}
                                    <input type="radio" id={"sc-" + item.SizeId} name="size"
                                        value={item.SizeId.toString()}
                                        checked={ProductPortCart.values.size.includes(item.SizeId.toString())}
                                        onChange={ProductPortCart.handleChange}
                                        disabled={handleColorSelection(item.SizeId)}
                                        />
                                    <label htmlFor={"sc-" + item.SizeId}>{item.SizeName}</label>
                                </div>
                            ))}
                        </div>
                        <div className="quantity">
                            <Formik {...ProductPortCart} onSubmit={ProductPortCart.handleSubmit} onChange={ProductPortCart.handleChange} onBlur={ProductPortCart.handleBlur}>
                                <Form>
                                    <div className="pro-qty">
                                        <span type="button" className="qtybtn dec" onClick={() => handleQtyButtonClick(false)}>-</span>
                                        <Field type="number" name="quantity" value={ProductPortCart.values.quantity} />
                                        <span type="button" className="qtybtn inc" onClick={() => handleQtyButtonClick(true)}>+</span>
                                    </div>
                                    <button type="submit" className="primary-btn pd-cart">Add To Cart</button>
                                </Form>
                            </Formik>
                        </div>
                        <ul className="pd-tags">
                            <li><span>CATEGORIES</span>: More Accessories, Wallets & Cases</li>
                            <li><span>TAGS</span>: Clothing, T-shirt, Woman</li>
                        </ul>
                        <div className="pd-share">
                            <div className="p-code">Sku : 00012</div>
                            <div className="pd-social">
                                <a href="#"><i className="ti-facebook"></i></a>
                                <a href="#"><i className="ti-twitter-alt"></i></a>
                                <a href="#"><i className="ti-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Motion></Motion>
        </div>
    )
}

export default ProductInfo