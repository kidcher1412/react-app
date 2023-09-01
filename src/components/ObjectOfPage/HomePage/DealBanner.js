import React, { useEffect } from "react";
import $ from 'jquery'
import Countdown from 'react-countdown-now';
const DealBanner = () => {
    useEffect(()=>{
        /*------------------
            Background Set
        --------------------*/
        $('.set-bg').each(function () {
            var bg = $(this).data('setbg');
            $(this).css('background-image', 'url(' + bg + ')');
        });
    },[])
    const timerdate = new Date('2023-12-31').getTime(); // Thời gian kết thúc đếm ngược

    // Định dạng thời gian đếm ngược
    const renderer = ({ days, hours, minutes, seconds }) => (
        <div>
            <div className="cd-item"><span>{days}</span> <p>Days</p> </div>
            <div className="cd-item"><span>{hours}</span> <p>Hrs</p> </div>
            <div className="cd-item"><span>{minutes}</span> <p>Mins</p> </div>
            <div className="cd-item"><span>{seconds}</span> <p>Secs</p> </div>
        </div>
    );
    return (
        <section className="deal-of-week set-bg spad" data-setbg="assets/img/time-bg.jpg">
            <div className="container">
                <div className="col-lg-6 text-center">
                    <div className="section-title">
                        <h2>Deal Of The Week</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed<br /> do ipsum dolor sit amet,
                            consectetur adipisicing elit </p>
                        <div className="product-price">
                            $35.00
                            <span>/ HanBag</span>
                        </div>
                    </div>
                    <div className="countdown-timer" id="countdown">
                        {/* <div className="cd-item">
                            <span>56</span>
                            <p>Days</p>
                        </div>
                        <div className="cd-item">
                            <span>12</span>
                            <p>Hrs</p>
                        </div>
                        <div className="cd-item">
                            <span>40</span>
                            <p>Mins</p>
                        </div>
                        <div className="cd-item">
                            <span>52</span>
                            <p>Secs</p>
                        </div> */}
                        <Countdown date={timerdate} renderer={renderer} />
                    </div>
                    <a href="/shop" className="primary-btn">Shop Now</a>
                </div>
            </div>
        </section>
    )
}
export default DealBanner;