$(document).ready(function (){
    $('.logo').addClass('logo-anime');
    $('.slider button').addClass('slick-arrow-load');
    $('.block-menu').addClass('block-menu-load');


});


$(function() {
    var $menu_popup = $('.menu-popup');

    $(".menu-triger, .menu-close").click(function(){
        $menu_popup.slideToggle(300, function(){
            if ($menu_popup.is(':hidden')) {
                $('body').removeClass('body_pointer');
            } else {
                $('body').addClass('body_pointer');
            }
        });
        return false;
    });

    $(document).on('click', function(e){
        if (!$(e.target).closest('.menu').length){
            $('body').removeClass('body_pointer');
            $menu_popup.slideUp(300);
        }
    });
});










