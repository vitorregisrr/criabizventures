(function () {
    'use strict';

    // Women Carousel //
    const womenCarousel = $("#women-carousel");
    womenCarousel.owlCarousel({
        loop: true,
        margin: 0,
        items: 8,
        center: false,
        dots: false,
        navigation: false,
        infinite: true,
        navText: ['', ''],
        autoplay: true,
        autoplayTimeout: 1200,
        smartSpeed: 800,
        responsive: {
            0: {
                items: 5,
            },

            500: {
                items: 6
            },

            800: {
                items: 8
            }
        }
        
    });

    // Parceiros Carousel //
    const parceirosCarousel = $("#parceiros-carousel");
    parceirosCarousel.owlCarousel({
        loop: true,
        margin: 0,
        items: 4,
        center: false,
        dots: false,
        nav: true,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
        autoplay: true,
        autoplayHoverPause:true,
        autoplayTimeout: 1400,
        smartSpeed: 800,
        infinite: true,
        responsive: {
            0: {
                items: 2,
            },

            500: {
                items: 3,
            },

            800: {
                items: 4
            },

            1100: {
                items: 5
            }
        }
        
    });
    
})();