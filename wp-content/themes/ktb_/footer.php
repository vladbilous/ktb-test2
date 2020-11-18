<div class="big-line"></div>

</main>


<footer>

</footer>

<script src="<?= bloginfo('template_directory'); ?>/js/jquery3-5-1.min.js"></script>

<!-- Add latest fancybox files -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css" />
<script src="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js"></script>
<!-- end fancybox files -->

<!--<script src="--><?//= bloginfo('template_directory'); ?><!--/js/animations-number.js"></script>-->
<!--<script src="--><?//= bloginfo('template_directory'); ?><!--/js/main.js"></script>-->


<?php

    if ( is_page(5) || is_page(84) || is_page(85) ) {
        require_once('inc/include.php');
    }
?>

<script type="text/javascript" src="<?= bloginfo('template_directory'); ?>/slick/slick.min.js"></script>
<script type="text/javascript" src="<?= bloginfo('template_directory'); ?>/js/script.js"></script>


<script type="text/javascript">
    $(document).ready(function(){
        $('.slider').slick(({
            arrows: true,
            dots: true,
            speed: 2000
        }));

        $('.place__slider').slick(({
            arrows: true,
            slidesToShow: 3,
            // speed: 3000
        }));
    });
    // $(document).ready(function(){
    //     $('.slider-news').slick(({
    //         arrows: true,
    //         slidesToShow: 3,
    //     }));
    // });
    $(document).ready(function(){
        $('.block-slider').slick(({
            arrows: false,
            slidesToShow: 3,
            responsive: [
                        {
                            breakpoint: 600,
                            settings: {
                                slidesToShow: 2,
                                arrows: true
                            }
                        }
                    ]
        }));
    });
    $(document).ready(function(){
        $('.slider-services').slick(({
            arrows: true,
            slidesToShow: 1,
            swipe: false

            // speed: 3000
        }));
    });



    // $('.one-region').click(function (){
        // $('.slider-services').slick('setPosition');
        // $('.slider-services')[0].slick.refresh();
    // });





    // $('.row9__slider').slick({
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     autoplay: false,
    //     autoplaySpeed: 2000,
    //     responsive: [
    //         {
    //             breakpoint: 800,
    //             settings: {
    //                 slidesToShow: 3
    //             }
    //         },
    //         {
    //             breakpoint: 600,
    //             settings: {
    //                 slidesToShow: 2
    //             }
    //         }
    //     ]
    // });
    //
    // $(function(){
    //     $('.row10__slider').slick({
    //         vertical: true,
    //         verticalSwiping: true,
    //         slidesToShow: 4,
    //         autoplay: false,
    //         responsive: [
    //             {
    //                 breakpoint: 600,
    //                 settings: {
    //                     slidesToShow: 3,
    //                 }
    //             }
    //         ]
    //     });
    //
    //     $('.some-news__slider').slick({
    //         // vertical: true,
    //         // verticalSwiping: true,
    //         slidesToShow: 3,
    //         autoplay: false,
    //         responsive: [
    //             {
    //                 breakpoint: 1000,
    //                 settings: {
    //                     slidesToShow: 2,
    //
    //                 }
    //             }
    //         ]
    //     });
    // });

</script>



<?php wp_footer(); ?>

</body>

</html>