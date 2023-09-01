import React from "react";
const ProductItem = ({data}) => {
return(
    <div className="col-lg-4 col-sm-6">
        <div className="product-item">
            <div className="pi-pic">
                <img src="assets/img/products/product-1.jpg" alt="" />
                <div className="sale pp-sale">Sale</div>
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
                <div className="catagory-name">Ther loai</div>
                <a href="#">
                    <h5>{data.name}</h5>
                </a>
                <div className="product-price">
                    {data.productsrescolors[0].price}
                    <span>{data.productsrescolors[0].price+10}</span>
                </div>
            </div>
        </div>
    </div>
)
}
export default ProductItem;