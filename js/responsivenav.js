(function () {
    'use strict';

    $('#nav-toggler').click(function () {
        var isActive = $('.main-nav').attr('data-visible') === 'true' ? true : false;
        $('.main-nav').attr('data-visible', !isActive);

        $('.main-nav .wow').css('visibility', 'visible');
    });
})();