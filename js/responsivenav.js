(function () {
    'use strict';

    $('[data-toggle="nav-links"]').click(function () {
        $('#nav-links').toggleClass('active');
        $(this).toggleClass('active');
        console.log('Toggle menu');
    });
})();