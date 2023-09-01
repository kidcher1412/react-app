import React, { useEffect } from "react";
import { Formik, Form, Field, FastField } from 'formik';
import { useFormik } from 'formik';
import $ from 'jquery';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

// import * as Yup from 'yup';
const ProductInfo = ()=>{
    useEffect(()=>{
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
        $('.sc-item input[type="radio"], .cc-item input[type="radio"]').each(function () {
            if ($(this).is(':checked')) {
                $(this).siblings('label').addClass('active');
            } else {
                $(this).siblings('label').removeClass('active');
            }
        });
        // handleChange input
        $(".fw-size-choose .sc-item input[type='checkbox'], .pd-size-choose .sc-item input[type='radio']").on('change', function () {
            $(".pd-size-choose .sc-item label").removeClass('active');
            if ($(this).is(':checked'))
                $(this).siblings('label').addClass('active');
            else
                $(this).siblings('label').removeClass('active');
        });
        $(".fw-tags input[type='checkbox']").on('change', function () {
            $(".pd-color-choose .cc-item label").removeClass('active');
            if ($(this).is(':checked'))
                $(this).siblings('label').addClass('active');
            else
                $(this).siblings('label').removeClass('active');
        });
    },[])
    const ProductPortCart = useFormik({
        initialValues: {
            quantity: '1',
            coLors: ["cc-black"],
            size: ["sm-size"], // Sử dụng mảng rỗng hoặc mảng các giá trị ban đầu nếu có
        },
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async values => {
            console.log('Quantity:', values.quantity);
            console.log('Selected Attributes:', values.size);
            console.log('Selected Colors:', values.coLors);
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
    return (
        <div className="col-lg-9">
            <div className="row">
                <div className="col-lg-6">
                    <div className="product-pic-zoom">
                        <img className="product-big-img" src="assets/img/product-single/product-1.jpg" alt=""/>
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
                                src="assets/img/product-single/product-1.jpg" alt=""/></div>
                            <div className="pt" data-imgbigurl="assets/img/product-single/product-2.jpg"><img
                                src="assets/img/product-single/product-2.jpg" alt=""/></div>
                            <div className="pt" data-imgbigurl="assets/img/product-single/product-3.jpg"><img
                                src="assets/img/product-single/product-3.jpg" alt=""/></div>
                            <div className="pt" data-imgbigurl="assets/img/product-single/product-3.jpg"><img
                                src="assets/img/product-single/product-3.jpg" alt=""/></div>
                        </OwlCarousel>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="product-details">
                        <div className="pd-title">
                            <span>oranges</span>
                            <h3>Pure Pineapple</h3>
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
                            <p>Lorem ipsum dolor sit amet, consectetur ing elit, sed do eiusmod tempor sum dolor
                                sit amet, consectetur adipisicing elit, sed do mod tempor</p>
                            <h4>$495.00 <span>629.99</span></h4>
                        </div>
                        <div className="pd-color">
                            <h6>Color</h6>
                            <div className="pd-color-choose">
                                <div className="cc-item">
                                    <input type="radio" name="coLors" value="cc-black" id="cc-black"
                                        checked={ProductPortCart.values.coLors.includes('cc-black')}
                                        onChange={ProductPortCart.handleChange}
                                    />
                                        <label htmlFor="cc-black"></label>
                                </div>
                                <div className="cc-item">
                                    <input type="radio" name="coLors" value="cc-yellow" id="cc-yellow"
                                        checked={ProductPortCart.values.coLors.includes('cc-yellow')}
                                        onChange={ProductPortCart.handleChange}
                                    />
                                        <label htmlFor="cc-yellow" className="cc-yellow"></label>
                                </div>
                                <div className="cc-item">
                                    <input type="radio" name="coLors" value="cc-violet" id="cc-violet"
                                        checked={ProductPortCart.values.coLors.includes('cc-violet')}
                                        onChange={ProductPortCart.handleChange}
                                    />
                                        <label htmlFor="cc-violet" className="cc-violet"></label>
                                </div>
                            </div>
                        </div>
                        <div className="pd-size-choose">
                            <div className="sc-item">
                                <input type="radio" id="sm-size" name="size"
                                    value="sm-size"
                                    checked={ProductPortCart.values.size.includes('sm-size')}
                                    onChange={ProductPortCart.handleChange} />
                                <label htmlFor="sm-size">SM</label>
                            </div>
                            <div className="sc-item">
                                <input type="radio" id="l-size" name="size"
                                    value="l-size"
                                    checked={ProductPortCart.values.size.includes('l-size')}
                                    onChange={ProductPortCart.handleChange} />
                                <label htmlFor="l-size">L</label>
                            </div>
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
            <div className="product-tab">
                <div className="tab-item">
                    <ul className="nav" role="tablist">
                        <li>
                            <a className="active" data-toggle="tab" href="#tab-1" role="tab">DESCRIPTION</a>
                        </li>
                        <li>
                            <a data-toggle="tab" href="#tab-2" role="tab">SPECIFICATIONS</a>
                        </li>
                        <li>
                            <a data-toggle="tab" href="#tab-3" role="tab">Customer Reviews (02)</a>
                        </li>
                    </ul>
                </div>
                <div className="tab-item-content">
                    <div className="tab-content">
                        <div className="tab-pane fade-in active" id="tab-1" role="tabpanel">
                            <div className="product-content">
                                <div className="row">
                                    <div className="col-lg-7">
                                        <h5>Introduction</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in </p>
                                        <h5>Features</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in </p>
                                    </div>
                                    <div className="col-lg-5">
                                        <img src="assets/img/product-single/tab-desc.jpg" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="tab-2" role="tabpanel">
                            <div className="specification-table">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="p-catagory">Customer Rating</td>
                                            <td>
                                                <div className="pd-rating">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star-o"></i>
                                                    <span>(5)</span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-catagory">Price</td>
                                            <td>
                                                <div className="p-price">$495.00</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-catagory">Add To Cart</td>
                                            <td>
                                                <div className="cart-add">+ add to cart</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-catagory">Availability</td>
                                            <td>
                                                <div className="p-stock">22 in stock</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-catagory">Weight</td>
                                            <td>
                                                <div className="p-weight">1,3kg</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-catagory">Size</td>
                                            <td>
                                                <div className="p-size">Xxl</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-catagory">Color</td>
                                            <td><span className="cs-color"></span></td>
                                        </tr>
                                        <tr>
                                            <td className="p-catagory">Sku</td>
                                            <td>
                                                <div className="p-code">00012</div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                        <div className="tab-pane fade" id="tab-3" role="tabpanel">
                            <div className="customer-review-option">
                                <h4>2 Comments</h4>
                                <div className="comment-option">
                                    <div className="co-item">
                                        <div className="avatar-pic">
                                            <img src="assets/img/product-single/avatar-1.png" alt=""/>
                                        </div>
                                        <div className="avatar-text">
                                            <div className="at-rating">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star-o"></i>
                                            </div>
                                            <h5>Brandon Kelley <span>27 Aug 2019</span></h5>
                                            <div className="at-reply">Nice !</div>
                                        </div>
                                    </div>
                                    <div className="co-item">
                                        <div className="avatar-pic">
                                            <img src="assets/img/product-single/avatar-2.png" alt=""/>
                                        </div>
                                        <div className="avatar-text">
                                            <div className="at-rating">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star-o"></i>
                                            </div>
                                            <h5>Roy Banks <span>27 Aug 2019</span></h5>
                                            <div className="at-reply">Nice !</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="personal-rating">
                                    <h6>Your Ratind</h6>
                                    <div className="rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star-o"></i>
                                    </div>
                                </div>
                                {/* <div className="leave-comment">
                                    <h4>Leave A Comment</h4>
                                    <form action="#" className="comment-form">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <input type="text" placeholder="Name"/>
                                            </div>
                                            <div className="col-lg-6">
                                                <input type="text" placeholder="Email"/>
                                            </div>
                                            <div className="col-lg-12">
                                                <textarea placeholder="Messages"></textarea>
                                                <button type="submit" className="site-btn">Send message</button>
                                            </div>
                                        </div>
                                    </form>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductInfo