$(window).on('load', function async () {
    // Code here will run after the entire page has finished loading.
    /*------------------
        Preloader
    --------------------*/
    $(".loader").fadeOut();
    $("#preloder").delay(200).fadeOut("slow");
    $(window).on('load', function async() {
        // Code here will run after the entire page has finished loading.
        /*------------------
            Preloader
        --------------------*/
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");
    })
    console.log("đã tải xong")


    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });
    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });
    /*------------------
        Hero Slider
    --------------------*/
    $(".hero-items").owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        items: 1,
        dots: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
    });
    /*------------------
        Product Slider
    --------------------*/
    $(".product-slider").owlCarousel({
        loop: true,
        margin: 25,
        nav: true,
        items: 4,
        dots: true,
        navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            992: {
                items: 2,
            },
            1200: {
                items: 3,
            }
        }
    });

    /*------------------
       logo Carousel
    --------------------*/
    $(".logo-carousel").owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        items: 5,
        dots: false,
        navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
        smartSpeed: 1200,
        autoHeight: false,
        mouseDrag: false,
        autoplay: true,
        responsive: {
            0: {
                items: 3,
            },
            768: {
                items: 5,
            }
        }
    });

    /*-----------------------
       Product Single Slider
    -------------------------*/
    $(".ps-slider").owlCarousel({
        loop: false,
        margin: 10,
        nav: true,
        items: 3,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
    });
    /*------------------
    Single Product
    --------------------*/
    $('.product-thumbs-track .pt').on('click', function () {
        $('.product-thumbs-track .pt').removeClass('active');
        $(this).addClass('active');
        var imgurl = $(this).data('imgbigurl');
        var bigImg = $('.product-big-img').attr('src');
        if (imgurl != bigImg) {
            $('.product-big-img').attr({ src: imgurl });
            $('.zoomImg').attr({ src: imgurl });
        }
    });

    $('.product-pic-zoom').zoom();

    /*------------------
        CountDown
    --------------------*/
    // For demo preview
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    if (mm == 12) {
        mm = '01';
        yyyy = yyyy + 1;
    } else {
        mm = parseInt(mm) + 1;
        mm = String(mm).padStart(2, '0');
    }
    var timerdate = mm + '/' + dd + '/' + yyyy;
    // For demo preview end

    console.log(timerdate);


    // Use this for real timer date
    /* var timerdate = "2020/01/01"; */

    $("#countdown").countdown(timerdate, function (event) {
        $(this).html(event.strftime("<div class='cd-item'><span>%D</span> <p>Days</p> </div>" + "<div class='cd-item'><span>%H</span> <p>Hrs</p> </div>" + "<div class='cd-item'><span>%M</span> <p>Mins</p> </div>" + "<div class='cd-item'><span>%S</span> <p>Secs</p> </div>"));
    });


    /*----------------------------------------------------
     Language Flag js 
    ----------------------------------------------------*/
    $(document).ready(function (e) {
        //no use
        try {
            var pages = $("#pages").msDropdown({
                on: {
                    change: function (data, ui) {
                        var val = data.value;
                        if (val != "")
                            window.location = val;
                    }
                }
            }).data("dd");

            var pagename = document.location.pathname.toString();
            pagename = pagename.split("/");
            pages.setIndexByValue(pagename[pagename.length - 1]);
            $("#ver").html(msBeautify.version.msDropdown);
        } catch (e) {
            // console.log(e);
        }
        $("#ver").html(msBeautify.version.msDropdown);

        //convert
        $(".language_drop").msDropdown({ roundedBorder: false });
        $("#tech").data("dd");
    });
    /*-------------------
        Range Slider
    --------------------- */


    /*-------------------
        Radio Btn
    --------------------- */
    // $(".fw-size-choose .sc-item label, .pd-size-choose .sc-item label").on('click', function () {
    //     $(".fw-size-choose .sc-item label, .pd-size-choose .sc-item label").removeClass('active');
    //     $(this).addClass('active');
    // });
    $(".fw-size-choose .sc-item input[type='checkbox'], .pd-size-choose .sc-item input[type='radio']").on('change', function () {
        $(".pd-size-choose .sc-item label").removeClass('active');
        if ($(this).is(':checked'))
            $(this).siblings('label').addClass('active');
        else
            $(this).siblings('label').removeClass('active');
    });
    $(".fw-tags input[type='checkbox']").on('change', function () {
        $(".pd-color-choose .cc-item label").removeClass('active');
        if ($(this).is(':checked'))
            $(this).siblings('label').addClass('active');
        else
            $(this).siblings('label').removeClass('active');
    });
    //scand product Infor
    $(".pd-color-choose .cc-item input[type='radio'], .pd-size-choose .sc-item input[type='radio']").each((index, item) => {
        if ($(item).is(':checked')) {
            $(item).siblings('label').addClass('active');
        } else {
            $(item).siblings('label').removeClass('active');
        }
    });
    // $(".fw-color-choose .cs-item input[type='checkbox'], .pd-color-choose .sc-item input[type='radio']").on('change', function () {
    //     if ($(this).is(':checked'))
    //         $(this).siblings('label').addClass('active');
    //     else
    //         $(this).siblings('label').removeClass('active');
    // });

    /*-------------------
        Nice Select
    --------------------- */
    // $('.sorting, .p-show').niceSelect();

    /*-------------------
        
    --------------------- */
    var proQty = $('.pro-qty');
    proQty.prepend('<span class="dec qtybtn">-</span>');
    proQty.append('<span class="inc qtybtn">+</span>');
    proQty.on('click', '.qtybtn', function () {
        var $button = $(this);
        var oldValue = $button.parent().find('input').val();
        if ($button.hasClass('inc')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find('input').val(newVal);
    });
});





function triggerChange(element) {
    const event = new Event('change', { bubbles: true });
    element.dispatchEvent(event);
}