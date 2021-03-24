(function () {
    'use strict';

    // Deps Carousel //
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
    
})();