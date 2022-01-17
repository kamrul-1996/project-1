$(function () {


    // banner h3 typed;
    var typed = new Typed('#type', {
        // Waits 1000ms after typing "First"
        strings: ['Template for night club', ],
        typeSpeed: 100,
        backSpeed: 100,
        smartBackspace: true,
        loop: true,
    });


    // gallery venobox ;
    $('.venobox').venobox({
        spinner: 'cube-grid',
        spinColor: '#ff5f83',
        closeColor: 'red',
        autoplay: 'true',
    });

    //dj part center mode;
    $(".bird-slider").slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 1500,
        centerMode: true,
        centerPadding: "0",
        prevArrow: "<i class='fas fa-chevron-left slick-prev'></i>",
        nextArrow: "<i class='fas fa-chevron-right slick-next'></i>",
    })

    //event countdown;
    $('#simply-countdown-losange').simplyCountdown({
        year: 2022,
        month: 12,
        day: 12,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });


    // event slid_div;
    $('.slid_div').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: "<i class='fas fa-chevron-left slick-prev'></i>",
        nextArrow: "<i class='fas fa-chevron-right slick-next'></i>",
    });

    // blog blog_slid ;
    $(".blog_slider").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        centerMode: true,
        centerPadding: "0",
        prevArrow: "<i class='fas fa-chevron-left slick-prev'></i>",
        nextArrow: "<i class='fas fa-chevron-right slick-next'></i>",
    })

    // testimonial test_slider ;
    $(".test_slider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: "<i class='fas fa-chevron-left slick-prev'></i>",
        nextArrow: "<i class='fas fa-chevron-right slick-next'></i>",
    })

    // wow animate;
    new WOW().init();




});

















// $('.venobox').venobox({
//  	spinner: 'cube-grid',
//  	spinColor: '#ff5f83',
//  	closeColor: 'red',
//  	autoplay: 'true',
//  });

// $(function (){
// 	$('.item_slid').slick({
// 		arrows: true,
// 		slidesToShow: 5,
// 		slidesToScroll: 1,
// 		autoplay: true,
// 		autoplaySpeed: 1500,
// 	});
// });
