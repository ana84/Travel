$(document).ready(function () {
    //Burger-btn
    $('.js-burger-btn').click(function () {
        $('.js-menu').slideToggle();
    });

    //Video
    const videoSrc = $('.video iframe').attr('data-src');
    $('.play').click(function () {
        $('.video').show();
        $('.video iframe').attr('src', videoSrc);
    });
    $('.close').click(function () {
        $('.video').hide();
        $('.video iframe').attr('src', '');
    });

    //Welcome-slide
    $('.welcome-slide').slick({
        dots: true,
        infinite: false,
        speed: 300,
        autoplay: false,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    //Image-wrapper
    $('.img-wrapper').slick({
        autoplay: false,
        autoplaySpeed: 2000,
        infinite: true,
        slidesToShow: 3,
        rows: 2
    });

    //Destination-slide
    $('.destination-slide').slick({
        dots: false,
        infinite: false,
        speed: 300,
        rows: 2,
        arrows: true,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    //Clients-slide
    $('.clients-slide').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: false
    });
});