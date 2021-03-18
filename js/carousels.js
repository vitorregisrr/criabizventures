(function () {
    'use strict';

    // Deps Carousel //
    const homeCarousel = $(".home-banner__carousel");
    homeCarousel.owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        center: true,
        dots: true,
        nav: false,
        slideBy: 1,
        startPosition: 0,
        autoplay: true,
        autoHeight: true,
        autoplayHoverPause: false
    });
    
})();