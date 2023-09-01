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
import LoginPage from '../ObjectOfPage/LoginPage';
import RegisterPage from '../ObjectOfPage/RegisterPage';
import CartPage from '../ObjectOfPage/CartPage';
import axios from 'axios';
import NotFound404 from '../ComponentPaging/NotFound404';
import LoadingPage from '../ComponentPaging/loading';

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
        element: <PageNotFound></PageNotFound>
    },
])

const Page = ({ titlePage, namePage }) => {
    const [loading, setLoading] = useState(true);
    const [pageData, setPageData] = useState(null);

    useEffect(() => {
        // Gửi yêu cầu Axios tới server
        axios.get('http://localhost:8080/')
            .then(response => {
                // Xử lý phản hồi thành công và cập nhật dữ liệu trang
                setPageData({
                    title: response.data.title,
                    name: response.data.name,
                });
            })
            .catch(error => {
                // Xử lý lỗi
                setPageData(null);
            })
            .finally(() => {
                setLoading(false); // Kết thúc quá trình tải dữ liệu
            });
    }, []); // Chỉ gọi một lần khi component được mount

    // // Kiểm tra xem liệu nếu đang tải dữ liệu hoặc dữ liệu không có
    // if (loading) {
    //     return <LoadingPage />;
    // }

    // if (!pageData) {
    //     return <NotFound404 />; // Render component 404
    // }

    return (
        <div>
            <Header />
            <main>
                <RouterProvider router={router}></RouterProvider>
            </main>
            <BrandSlider />
            <Footer />
        </div>
    );
};

export default Page;
