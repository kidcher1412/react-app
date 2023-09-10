// import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useAuthStore } from "../../store/store";
import { getAccount } from "../../helper/getaccount";
import NotFound404 from './NotFound404';

import axios from '../../axios.js';


const Header = () => {
    
    const [data, setData] = useState([]);
    const [userlogin, setUserLogin] = useState("");
    const [error, setError] = useState(null);
    // const usernameLoged = useAuthStore.getState().auth.username; 
    const usernameLoged = Cookies.get('token');
    useEffect( () => {
        axios.post('api/getheader')
            .then(response => {
                if (response != error)
                setData(response.data.data);
            })
            .catch(err => {
                console.log(err);
                setError(err);
            });
            const fetchUserLogin = async () => {
                const checkerLogin = await getAccount(usernameLoged);
                if (checkerLogin !== null) {
                    setUserLogin(checkerLogin);
                }
                console.log(userlogin);
            };
            fetchUserLogin();
    }, []);
    const logout = async ()=>{
        localStorage.removeItem('usernameLoged');
        localStorage.removeItem('passwordLoged');
        localStorage.removeItem('passwordLoged');
        Cookies.remove('token');
        setUserLogin('')
        return
    }
    if (error)
        return <NotFound404/>
    if(data.brand)
        return (
            <header className="header-section">
                {error && <p>Error loading data</p>}
                <div className="header-top">
                    <div className="container">
                        <div className="ht-left">
                            <div className="mail-service">
                                <i className=" fa fa-envelope"></i>
                                hello.colorlib@gmail.com
                            </div>
                            <div className="phone-service">
                                <i className=" fa fa-phone"></i>
                                +65 11.188.888
                            </div>
                        </div>
                        <div className="ht-right">
                            {userlogin!=='' ? (
                                <a href="#" onClick={logout} className="login-panel"><i className="fa fa-user"></i>xin chào {userlogin}</a>
                            ) : (
                                <a href="#" className="login-panel"><i className="fa fa-user"></i>Login</a>
                            )}
                            <div className="lan-selector">
                                {/* <select className="language_drop" name="countries" id="countries" style={{ width: "300px" }}>
                                    <option value='yt' data-image="assets/img/flag-1.jpg" data-imagecss="flag yt"
                                        data-title="English">English</option>
                                    <option value='yu' data-image="assets/img/flag-2.jpg" data-imagecss="flag yu"
                                        data-title="Bangladesh">German </option>
                                </select> */}
                            </div>
                            <div className="top-social">
                                <a href="#"><i className="ti-facebook"></i></a>
                                <a href="#"><i className="ti-twitter-alt"></i></a>
                                <a href="#"><i className="ti-linkedin"></i></a>
                                <a href="#"><i className="ti-pinterest"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="inner-header">
                        <div className="row">
                            <div className="col-lg-2 col-md-2">
                                <div className="logo">
                                    <a href="/">
                                        <img src="assets/img/logo.png" alt=""/>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-7">
                                <div className="advanced-search">
                                    <button type="button" className="category-btn">All Categories</button>
                                    <form action="#" className="input-group">
                                        <input type="text" placeholder="What do you need?"/>
                                            <button type="button"><i className="ti-search"></i></button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-3 text-right col-md-3">
                                <ul className="nav-right">
                                    <li className="heart-icon"><a href="#">
                                        <i className="icon_heart_alt"></i>
                                        <span>1</span>
                                    </a>
                                    </li>
                                    <li className="cart-icon"><a href="#">
                                        <i className="icon_bag_alt"></i>
                                        <span>3</span>
                                    </a>
                                        <div className="cart-hover">
                                            <div className="select-items">
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <td className="si-pic"><img src="assets/img/select-product-1.jpg" alt=""/></td>
                                                            <td className="si-text">
                                                                <div className="product-selected">
                                                                    <p>$60.00 x 1</p>
                                                                    <h6>Kabino Bedside Table</h6>
                                                                </div>
                                                            </td>
                                                            <td className="si-close">
                                                                <i className="ti-close"></i>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="si-pic"><img src="assets/img/select-product-2.jpg" alt=""/></td>
                                                            <td className="si-text">
                                                                <div className="product-selected">
                                                                    <p>$60.00 x 1</p>
                                                                    <h6>Kabino Bedside Table</h6>
                                                                </div>
                                                            </td>
                                                            <td className="si-close">
                                                                <i className="ti-close"></i>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="select-total">
                                                <span>total:</span>
                                                <h5>$120.00</h5>
                                            </div>
                                            <div className="select-button">
                                                <a href="#" className="primary-btn view-card">VIEW CARD</a>
                                                <a href="#" className="primary-btn checkout-btn">CHECK OUT</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="cart-price">$150.00</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="nav-item">
                    <div className="container">
                        <div className="nav-depart">
                            <div className="depart-btn">
                                <i className="ti-menu"></i>
                                <span>All departments</span>
                                <ul className="depart-hover">
                                    {data.brand && data.brand.map((item) => (
                                        <li key={item.id}><a href={"/shop/" + item.id}>{item.name}</a></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <nav className="nav-menu mobile-menu">
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/shop">Shop</a></li>
                                <li><a href="#">Collection</a>
                                    <ul className="dropdown">
                                        <li><a href="#">Men's</a></li>
                                        {data.category && data.category.map((item) => (
                                            <li key={item.id}><a href={"/shop/" + item.id}>{item.name}</a></li>
                                        ))}
                                    </ul>
                                </li>
                                <li><a href="./blog">Blog</a></li>
                                <li><a href="./check-out">Contact</a></li>
                                <li><a href="#">Pages</a>
                                    <ul className="dropdown">
                                        <li><a href="./blog-details.html">Blog Details</a></li>
                                        <li><a href="./shopping-cart.html">Shopping Cart</a></li>
                                        <li><a href="./check-out.html">Checkout</a></li>
                                        <li><a href="./faq.html">Faq</a></li>
                                        <li><a href="./register">Register</a></li>
                                        <li><a href="./login">Login</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                        <div id="mobile-menu-wrap"></div>
                    </div>
                </div>
            </header>
        );
};

export default Header;
