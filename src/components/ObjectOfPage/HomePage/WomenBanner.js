import React from "react";
const WomenBanner = () => {
    return (
        <section className="women-banner spad">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="product-large set-bg" data-setbg="assets/img/products/women-large.jpg">
                            <h2>Women’s</h2>
                            <a href="#">Discover More</a>
                        </div>
                    </div>
                    <div className="col-lg-8 offset-lg-1">
                        <div className="filter-control">
                            <ul>
                                <li className="active">Clothings</li>
                                <li>HandBag</li>
                                <li>Shoes</li>
                                <li>Accessories</li>
                            </ul>
                        </div>
                        <div className="product-slider owl-carousel">
                            <div className="product-item">
                                <div className="pi-pic">
                                    <img src="assets/img/products/women-1.jpg" alt="" />
                                    <div className="sale">Sale</div>
                                    <div className="icon">
                                        <i className="icon_heart_alt"></i>
                                    </div>
                                    <ul>
                                        <li className="w-icon active"><a href="#"><i className="icon_bag_alt"></i></a></li>
                                        <li className="quick-view"><a href="#">+ Quick View</a></li>
                                        <li className="w-icon"><a href="#"><i className="fa fa-random"></i></a></li>
                                    </ul>
                                </div>
                                <div className="pi-text">
                                    <div className="catagory-name">Coat</div>
                                    <a href="#">
                                        <h5>Pure Pineapple</h5>
                                    </a>
                                    <div className="product-price">
                                        $14.00
                                        <span>$35.00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="product-item">
                                <div className="pi-pic">
                                    <img src="assets/img/products/women-2.jpg" alt="" />
                                    <div className="icon">
                                        <i className="icon_heart_alt"></i>
                                    </div>
                                    <ul>
                                        <li className="w-icon active"><a href="#"><i className="icon_bag_alt"></i></a></li>
                                        <li className="quick-view"><a href="#">+ Quick View</a></li>
                                        <li className="w-icon"><a href="#"><i className="fa fa-random"></i></a></li>
                                    </ul>
                                </div>
                                <div className="pi-text">
                                    <div className="catagory-name">Shoes</div>
                                    <a href="#">
                                        <h5>Guangzhou sweater</h5>
                                    </a>
                                    <div className="product-price">
                                        $13.00
                                    </div>
                                </div>
                            </div>
                            <div className="product-item">
                                <div className="pi-pic">
                                    <img src="assets/img/products/women-3.jpg" alt="" />
                                    <div className="icon">
                                        <i className="icon_heart_alt"></i>
                                    </div>
                                    <ul>
                                        <li className="w-icon active"><a href="#"><i className="icon_bag_alt"></i></a></li>
                                        <li className="quick-view"><a href="#">+ Quick View</a></li>
                                        <li className="w-icon"><a href="#"><i className="fa fa-random"></i></a></li>
                                    </ul>
                                </div>
                                <div className="pi-text">
                                    <div className="catagory-name">Towel</div>
                                    <a href="#">
                                        <h5>Pure Pineapple</h5>
                                    </a>
                                    <div className="product-price">
                                        $34.00
                                    </div>
                                </div>
                            </div>
                            <div className="product-item">
                                <div className="pi-pic">
                                    <img src="assets/img/products/women-4.jpg" alt="" />
                                    <div className="icon">
                                        <i className="icon_heart_alt"></i>
                                    </div>
                                    <ul>
                                        <li className="w-icon active"><a href="#"><i className="icon_bag_alt"></i></a></li>
                                        <li className="quick-view"><a href="#">+ Quick View</a></li>
                                        <li className="w-icon"><a href="#"><i className="fa fa-random"></i></a></li>
                                    </ul>
                                </div>
                                <div className="pi-text">
                                    <div className="catagory-name">Towel</div>
                                    <a href="#">
                                        <h5>Converse Shoes</h5>
                                    </a>
                                    <div className="product-price">
                                        $34.00
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default WomenBanner;