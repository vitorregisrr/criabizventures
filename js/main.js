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
            $('#home-banner-more').css("opacity", 1 - $(window).scrollTop() / ($('#home-banner-more').height() + 400) );
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
                .top - 300
        }, 500);
    });

    $('[data-toggle="produto-tab"]').click( function(){
        var isActive = $(this).attr('data-active') === 'true' ? true : false;
        
        if(isActive){
            $(this).attr('data-active', false);
        }else{
            $('[data-toggle="produto-tab"]').attr('data-active', false);
            $(this).attr('data-active', true);
        }

        // var target = $(this).attr('data-target');
        // var screenW = window.innerWidth;

        // if(screenW < 1200){
        //     $('.home-produtos__tab').attr('data-active', false);
        //     $(target).attr('data-active', !isActive);
        //     $('.home-produtos__tabs').attr('data-active', !isActive);
        // }else{
        //     $(target).attr('data-active', !isActive);
        //     $('.home-produtos__tabs').attr('data-active', true);
        // }
    });

    $('[data-toggle="popup"]').click(function(event){
        event.preventDefault();
        var target = $(this).attr('data-target');
        console.log(target)
        $(target).toggleClass('visible');
    });

    scrollTopBtn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '300');
    });

    var isIE = function msieversion() {

        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");
    
        if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))  // If Internet Explorer, return version number
        {
            return true;
        }
    
        return false;
    }

    if (isIE()) {
        $('#popup-explorer').addClass('visible');
    }

    window.dispatchEvent(new Event('resize'));

})();