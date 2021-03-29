(function () {
    'use strict';

    $('[data-toggle="c-modal"]').click( function(event){
        event.preventDefault();
        var target = $(this).attr('data-target');
        var isActive = $(target).attr('data-visible') === 'true' ? true : false;
        $(target).attr('data-visible', !isActive);

        if(isActive){
            $('#overlay').attr('data-visible', 'false');
            $('html').css('overflow', 'visible');
        }else{
            $('#overlay').attr('data-visible', 'true');
            $('html').css('overflow', 'hidden');
        }
    });

    window.dispatchEvent(new Event('resize'));
})();