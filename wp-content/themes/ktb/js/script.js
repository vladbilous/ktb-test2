$(document).ready(function (){
    $('.logo').addClass('logo-anime');
    $('.slider button').addClass('slick-arrow-load');
    $('.block-menu').addClass('block-menu-load');
    // $("body").removeClass('body-over');

    // setTimeout(function(){
    //     $('.mejs-button').trigger('click');
    // }, 500);
    //
    // setTimeout(function(){
    //     $('.mejs-button button').trigger('click');
    // }, 1000);




});

// $( ".main-page .row6 .row6__block" ).click(function(){ // задаем функцию при нажатиии на элемент с классом slide-toggle
//
//     console.log('212');
//     $( ".main-page .row6 .row6__block .row6__block-none" ).slideToggle(); // плавно скрываем, или отображаем все элементы <div>
// });



if( window.innerWidth < 600 ){
    console.log('window.innerWidth >= 600')

    $(document).ready(function() {

        // $(".row2__title .h1").addClass("scroll-title")
        // $(".row2__title .small-line").addClass("scroll-line")
        // $(".row2__description .ktb").addClass("scroll-row2__description")

        // $(".main-page .row6 .row6__block").click(function() {
        //
        //     $(".main-page .row6 .row6__block .row6__block-none").removeClass('row6__block-none-mob');
        //
        // });
        $(".main-page .row6 .rb1").click(function() {

            // $(".main-page .row6 .row6__block .row6__block-none").removeClass('row6__block-none-mob');
            $(".main-page .row6 .rb1 .row6__block-none").toggleClass('row6__block-none-mob');

        });
        $(".main-page .row6 .rb2").click(function() {

            // $(".main-page .row6 .row6__block .row6__block-none").removeClass('row6__block-none-mob');
            $(".main-page .row6 .rb2 .row6__block-none").toggleClass('row6__block-none-mob');

        });
        $(".main-page .row6 .rb3").click(function() {

            // $(".main-page .row6 .row6__block .row6__block-none").removeClass('row6__block-none-mob');
            $(".main-page .row6 .rb3 .row6__block-none").toggleClass('row6__block-none-mob');

        });
        $(".main-page .row6 .rb4").click(function() {

            // $(".main-page .row6 .row6__block .row6__block-none").removeClass('row6__block-none-mob');
            $(".main-page .row6 .rb4 .row6__block-none").toggleClass('row6__block-none-mob');

        });
        $(".main-page .row6 .rb5").click(function() {

            // $(".main-page .row6 .row6__block .row6__block-none").removeClass('row6__block-none-mob');
            $(".main-page .row6 .rb5 .row6__block-none").toggleClass('row6__block-none-mob');

        });
        $(".main-page .row6 .rb6").click(function() {

            // $(".main-page .row6 .row6__block .row6__block-none").removeClass('row6__block-none-mob');
            $(".main-page .row6 .rb6 .row6__block-none").toggleClass('row6__block-none-mob');

        });
        $(".main-page .row6 .rb7").click(function() {

            // $(".main-page .row6 .row6__block .row6__block-none").removeClass('row6__block-none-mob');
            $(".main-page .row6 .rb7 .row6__block-none").toggleClass('row6__block-none-mob');

        });
        $(".main-page .row6 .rb8").click(function() {

            // $(".main-page .row6 .row6__block .row6__block-none").removeClass('row6__block-none-mob');
            $(".main-page .row6 .rb8 .row6__block-none").toggleClass('row6__block-none-mob');

        });
        $(".main-page .row6 .rb9").click(function() {

            // $(".main-page .row6 .row6__block .row6__block-none").removeClass('row6__block-none-mob');
            $(".main-page .row6 .rb9 .row6__block-none").toggleClass('row6__block-none-mob');

        });
        $(".main-page .row6 .rb10").click(function() {

            // $(".main-page .row6 .row6__block .row6__block-none").removeClass('row6__block-none-mob');
            $(".main-page .row6 .rb10 .row6__block-none").toggleClass('row6__block-none-mob');

        });


        // $(".main-page .row6 .rb2").click(function() {
        //     $(".main-page .row6 .rb2").find('.row6__block-none').animate({
        //         height: "toggle",
        //         opacity: "toggle"
        //     }, "slow");
        // });


    });

}





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










