import React, { useEffect } from 'react';
import $ from 'jquery'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const Heros = ({data}) => {
    useEffect(() => {
        /*------------------
            Background Set
        --------------------*/
        $('.set-bg').each(function () {
            var bg = $(this).data('setbg');
            $(this).css('background-image', 'url(' + bg + ')');
        });
    },[])
    return (
        <section className="hero-section">
            <OwlCarousel className='hero-items owl-carousel' navText={['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>']}
                loop nav={true} items={1} animateOut={'fadeOut'} smartSpeed={1200} autoplay={true} autoHeightClass={false}
                margin={0} animateIn={'fadeIn'}
            >
                    <div className="single-hero-items set-bg" data-setbg="assets/img/hero-1.jpg">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-5">
                                    <span>Bag,kids</span>
                                    <h1>Black friday</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore</p>
                                    <a href="/shop" className="primary-btn">Shop Now</a>
                                </div>
                            </div>
                            <div className="off-card">
                                <h2>Sale <span>50%</span></h2>
                            </div>
                        </div>
                    </div>

                    <div className="single-hero-items set-bg" data-setbg="assets/img/hero-1.jpg">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-5">
                                    <span>Bag,kids</span>
                                    <h1>Black friday</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore</p>
                                    <a href="/shop" className="primary-btn">Shop Now</a>
                                </div>
                            </div>
                            <div className="off-card">
                                <h2>Sale <span>50%</span></h2>
                            </div>
                        </div>
                    </div>

            </OwlCarousel>
        </section>

    );
};

export default Heros;
