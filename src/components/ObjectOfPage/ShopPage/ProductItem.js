import axios from "axios";
import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
// datafill's Struct
// {
//     Colors: [],
//     FillType: "price",
//     MaxCost: "1000",
//     MinCost: "100",
//     Sizes: [],
//     SortType: "asc",
//     Tags: [],
//     brand: [],
// }
const ProductItem = ({datafill}) => {
    const [dataProduct, setDataProduct] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    const [CantFind, setCantFind] = useState(false);
    const [Error, setError] = useState(null);
    useEffect(() => {
        axios.post('http://localhost:8080/api/listProduct')
            .then(response => {
                setDataProduct(response.data.data);
                setisLoading(false);
            })
            .catch(err => {
                console.log(err);
                setError(err);
            });
    }, []);
    useEffect(() => {
        if (datafill !== null) {
            setisLoading(true);
            console.log(datafill);
            axios
                .post('http://localhost:8080/api/getProductFillted', datafill)
                .then((response) => {
                    console.log(response.data);
                    if (response.data.length==0)
                        setCantFind(true)
                    else{
                        setDataProduct(response.data)
                        setCantFind(false)
                    }
                    setisLoading(false);

                })
                .catch((err) => {
                    console.log(err);
                    setError(err);
                });
        }
    }, [datafill]);
    if (Error)
        return <p>error</p>
    if (CantFind)
        return <p>There're not have any Product</p>
    if (isLoading)
        return (
            <div id="skeleton">
                <SkeletonTheme baseColor="#e4e0e0" highlightColor="#cbc7c7" >
                    <p>
                        <Skeleton height={350} width={280} />
                        <Skeleton height={15} width={200} />
                        <Skeleton height={15} width={200} />
                        <Skeleton height={15} width={200} />
                    </p>
                </SkeletonTheme>
            </div>
            )
    
    return(
         dataProduct.map((item, index) => (
             <div className="col-lg-4 col-sm-6" key={index}>
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
                             <h5>{item.name}</h5>
                         </a>
                         <div className="product-price">
                             {item.productsrescolors[0].price}
                             <span>{item.productsrescolors[0].price + 10}</span>
                         </div>
                     </div>
                 </div>
             </div>  
        ))
    )
}
export default ProductItem;