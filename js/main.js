(function () {
    'use strict';

    //Init Libs
    new WOW().init();
    $('.lazy').lazyload();

    //scroll top
    var scrollTopBtn = $('.scroll-top');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            scrollTopBtn.addClass('show');
        } else {
            scrollTopBtn.removeClass('show');
        }

        if ($(window).scrollTop() > 200) {
            $('#home-banner-more').css("opacity", 1 - $(window).scrollTop() / ($('#home-banner-more').height() + 400));
        } else {
            $('#home-banner-more').css("opacity", 1);
        }
    });

    // Navbar stick event
    $(document).on("scroll", function () {
        if ($(document).scrollTop() > 100) {
            $("#main-header").addClass("sticky");
        } else if (!($(".navbar-collapse").hasClass('show'))) {
            $("#main-header").removeClass("sticky");

        }

    });

    //Smooth Scrooling
    $('a[href*=\\#]:not([href$=\\#])').click(function () {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href'))
                .offset()
                .top - 50
        }, 500);
    });

    // Painel Numeros tab toggle JS
    $('[data-toggle="painel-numeros"]').click(function () {
        const curr = $('#painel-numeros-tab-1').attr('data-visible') === 'true'
            ? 1
            : 2;
        if (curr === 1) {
            $(this).addClass('active');
        }
        if (curr === 2) {
            $(this).removeClass('active');
        }
        $(`#painel-numeros-tab-${curr}`).attr('data-visible', false);
        $(`#painel-numeros-tab-${curr == 1
            ? 2
            : 1}`).attr('data-visible', true);
    });

    // Carousel Carteira JS Misc

    const carteiraLength = $('.carteira-sec__carousel-item').length - 1;
    let carteiraCurr = $('.carteira-sec__carousel-item[data-visible="true"]').index();

    const updateCarteira = function(){
        $('.carteira-sec__carousel-item').attr('data-visible', false);
        $(`.carteira-sec__carousel-item:nth-child(${carteiraCurr + 1})`).attr('data-visible', true);
    }
    
    $('[data-toggle="carteira-next"]').click( function(){
        carteiraCurr = carteiraCurr < carteiraLength ? carteiraCurr + 1 : 0;
        updateCarteira();
    });

    $('[data-toggle="carteira-prev"]').click( function(){
        carteiraCurr = carteiraCurr > 0 ? carteiraCurr - 1 : carteiraLength;
        updateCarteira();
    });

    
    $('[data-toggle="carteira-dot"]').click( function(){
        carteiraCurr = $(this).index();
        updateCarteira();
    });
    
    // Misc

    scrollTopBtn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '300');
    });

    var isIE = function msieversion() {

        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");

        if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) { // If Internet Explorer, return version number
            return
            true;
        }

        return
        false;
    }

    if
    (isIE()) {$('#popup-explorer').addClass('visible');
    }

    window.dispatchEvent(newEvent('resize'));

})();