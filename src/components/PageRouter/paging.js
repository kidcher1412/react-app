import React, { useEffect, useState } from 'react';
import Header from '../ComponentPaging/header';
import Footer from '../ComponentPaging/footer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
/** import all components */

import PageNotFound from '../PageNotFound';
import BrandSlider from '../ObjectOfPage/HomePage/BrandSlider';
import ShopPage from '../ObjectOfPage/ShopPage/index'
import HomePage from '../ObjectOfPage/HomePage/index'
import ProductView from '../ObjectOfPage/ProductView/index'
import Test from '../test';
import Test1 from '../test1';
import TesterPage from '../ObjectOfPage/ProductView/test';

import LoginPage from '../ObjectOfPage/LoginPage';
import RegisterPage from '../ObjectOfPage/RegisterPage';
import CartPage from '../ObjectOfPage/CartPage';
import LoadingPage from '../ComponentPaging/loading';
import axios from 'axios';
import NotFound404 from '../ComponentPaging/NotFound404';
import NotFound505 from '../ComponentPaging/NotFound505';

/** auth middleware */
// import { AuthorizeUser, ProtectRoute } from ''

//create router
/** root routes */
const router = createBrowserRouter([
    {
        path: '/test',
        element: <Test></Test>,
    },
    {
        path: '/test1',
        element: <Test1></Test1>,
    },
    {
        path: '/tester',
        element: <TesterPage id_product="7"></TesterPage >,
    },
    {
        path: '/',
        element: <HomePage></HomePage>,
    },
    {
        path: '/shop',
        element: <ShopPage></ShopPage>,
    },
    {
        path: '/product',
        element: <ProductView></ProductView>,
    },
    {
        path: '/login',
        element: <LoginPage></LoginPage>,
    },
    {
        path: '/register',
        element: <RegisterPage></RegisterPage>,
    },
    {
        path: '/cart',
        element: <CartPage></CartPage>,
    },

    {
        path: '*',
        element: <NotFound404></NotFound404>
    },
])

const Page = ({titlePage,namePage}) => {
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [pageDataIndex, setPageDataIndex] = useState(null);
    const pageData = {
        title: titlePage,
        name: namePage,
    };
    useEffect(() => {
        // Gửi yêu cầu Axios tới server
        axios.get('http://localhost:8080/')
            .then(response => {
                // Xử lý phản hồi thành công và cập nhật dữ liệu trang
                setPageDataIndex({
                    name: "Fashi",
                });
                setLoading(false)
            })
            .catch(error => {
                // Xử lý lỗi
                setError(error)
            })
            .finally(() => {
            });
    }, []); // Chỉ gọi một lần khi component được mount
    if (error) {
        return <NotFound505 />; // Render component 404
    }
    if (isLoading)
        return <LoadingPage/>
    return (
        <div>
            <Header/>
            <main>
                <RouterProvider router={router}></RouterProvider>
            </main>
            <BrandSlider />
            <Footer />
        </div>
    );
};

export default Page;
