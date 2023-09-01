import React from 'react';
import $ from 'jquery'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const brandSlider = () => {
    // const dataScop = {
    //     0: { items: 1, }, 576: { items: 2, }, 992: { items: 2, }, 1200: { items: 3, }
    // }
    const dataScop = {
        0: {
            items: 3,
        },
        768: {
            items: 5,
        }
    }
    return (
        <div className="partner-logo">
            <div className="container">
                <OwlCarousel className="logo-carousel owl-carousel" navText= {['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>']}
                     loop nav={true} items={4} smartSpeed={1200} autoplay={true} autoHeightClass={false} 
                    margin={25} responsive={dataScop} dots={true}
                >
                    <div className="logo-item">
                        <div className="tablecell-inner">
                            <img src="assets/img/logo-carousel/logo-1.png" alt=""/>
                        </div>
                    </div>
                    <div className="logo-item">
                        <div className="tablecell-inner">
                            <img src="assets/img/logo-carousel/logo-2.png" alt=""/>
                        </div>
                    </div>
                    <div className="logo-item">
                        <div className="tablecell-inner">
                            <img src="assets/img/logo-carousel/logo-3.png" alt=""/>
                        </div>
                    </div>
                    <div className="logo-item">
                        <div className="tablecell-inner">
                            <img src="assets/img/logo-carousel/logo-4.png" alt=""/>
                        </div>
                    </div>
                    <div className="logo-item">
                        <div className="tablecell-inner">
                            <img src="assets/img/logo-carousel/logo-5.png" alt=""/>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        </div>

    );
};

export default brandSlider;
