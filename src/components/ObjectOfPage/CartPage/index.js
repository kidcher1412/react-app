import { Field, Form, Formik } from "formik";
import React from "react";

const CartPage =()=>{
    const dataCart =[
        {
            NameProduct: "san phẩm 1",
            PriceProduct: "1000",
            Quality: "12",
            Image: "assets/img/cart-page/product-1.jpg",
        },
        {
            NameProduct: "san phẩm 2",
            PriceProduct: "3000",
            Quality: "1",
            Image: "assets/img/cart-page/product-2.jpg",
        },
    ]
    const DataRender = dataCart.map((item, index) => (
        <tr key={index}>
            <td className="cart-pic"><img src={item.Image} alt="" /></td>
            <td className="cart-title">
                <h5>{item.NameProduct}</h5>
            </td>
            <td className="p-price">{item.PriceProduct}</td>
            <td className="qua-col">
                <div className="quantity">
                    <div className="pro-qty">
                        <input type="text" value={item.Quality} />
                    </div>
                </div>
            </td>
            <td className="total-price">${item.PriceProduct * item.Quality}</td>
            <td className="close-td"><i className="ti-close"></i></td>
        </tr>
    ))
    const initialValues = {
        checkpoint: '',
    };

    const handleSubmit = async values => {
        console.log('checkpoint:', values.checkpoint);
    };
    return(
        <section className="shopping-cart spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="cart-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th className="p-name">Product Name</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {DataRender}
                                </tbody>
                            </table>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="cart-buttons">
                                    <a href="#" className="primary-btn continue-shop">Continue shopping</a>
                                    <a href="#" className="primary-btn up-cart">Update cart</a>
                                </div>
                                <div className="discount-coupon">
                                    <h6>Discount Codes</h6>
                                    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                                        <Form className="coupon-form">
                                            <Field type="text" name="checkpoint" id="checkpoint" />
                                            <button type="submit" className="site-btn coupon-btn">Apply</button>
                                        </Form>
                                    </Formik>
                                </div>
                            </div>
                            <div className="col-lg-4 offset-lg-4">
                                <div className="proceed-checkout">
                                    <ul>
                                        <li className="subtotal">Subtotal <span>$240.00</span></li>
                                        <li className="cart-total">Total <span>$240.00</span></li>
                                    </ul>
                                    <a href="#" className="proceed-btn">PROCEED TO CHECK OUT</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default CartPage