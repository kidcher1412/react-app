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


    $('.product-pic-zoom').zoom();




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