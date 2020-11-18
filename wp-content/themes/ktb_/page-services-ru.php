<?php
get_header();
?>

<section class="services-page">
    <div class="ktb">
        <h2 class="h2 services-page__title">
<!--    ПОСЛУГИ-->
            <?php pll_e( "title-services" ); ?>


        </h2>
        <div class="small-line-services"></div>
    </div>

    <div class="services__block-slider">
        <div class="slider-services">
            <?php

            $args = array(
                'posts_per_page' => -1,
                'post_status'      => 'publish',
                'suppress_filters' => false,
                'cat' => 4,
                'order' => 'ASC'
            );

            $recent_posts = get_posts( $args );

            $list_items_markup = '';

            foreach ( $recent_posts as $post ) {

                $query = new WP_Query($args);
                $title = get_the_title( $post );
                $content = $post->post_content;
                $contentTrim = wp_trim_words( $content, 14, '...' );

                $img =  get_the_post_thumbnail( $post->ID, 'full');
                echo '
                    <div>
                        <div class="ktb">
                        <table class="slider-services__title">
                            <tr>
                                <td class="slider-services__td-one">
                                    <p class="slider-services__img">' . $img . '</p>
                                </td>   
                                <td class="slider-services__td-two">
                                    <p class="block-title">' . $title . '</p>
                                </td>
                            </tr>
                        </table>
                        </div>

                        <table class="slider-services__content">
                            <tr>
                                <td class="ktb">
                                    <div class="block-descriptions">
                                      ' . $content . ' 
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                ';
            }
            ?>
        </div>
    </div>


</section>


<?php
get_footer();
?>

<script>

    $( document ).ready(function() {

        function animationTitle() {
            // $(".services-page__title").css("color", "red");
            $('.services-page__title').addClass('scroll-title');
        }

        setTimeout(animationTitle, 100);

        function animationLine() {
            // $(".services-page__title").css("color", "red");
            $('.small-line-services').addClass('scroll-line');
        }

        function animationImg() {
            // $(".services-page__title").css("color", "red");
            $('.slick-active .slider-services__img').addClass('animation-img');
        }

        function animationBlockTitle() {
            $('.slick-active .block-title').addClass('animation-block-title');
        }

        setTimeout(animationLine, 100);
        setTimeout(animationImg, 200);
        setTimeout(animationBlockTitle, 200);

        $(".slick-next").click(function() {
            $(".block-title").removeClass("animation-block-title");
            $(".slider-services__img").removeClass("animation-img");

            setTimeout(animationBlockTitle, 600);
            setTimeout(animationImg, 600);



            $(".slick-slide ul li").removeClass("slick-active-li");
            $(function() {
                $.each($('.slick-active ul li'), function(i, el) {
                    setTimeout(function() {
                        $(el).addClass("slick-active-li");
                    }, 500 + (i * 500));

                });
            });
        });

        $(".slick-prev").click(function() {
            $(".block-title").removeClass("animation-block-title");
            $(".slider-services__img").removeClass("animation-img");

            setTimeout(animationBlockTitle, 600);
            setTimeout(animationImg, 600);

            $(".slick-slide ul li").removeClass("slick-active-li");
            $(function() {
                $.each($('.slick-active ul li'), function(i, el) {
                    setTimeout(function() {
                        $(el).addClass("slick-active-li");
                    }, 500 + (i * 500));

                });
            });
        });


        // var i = 0;

        // $('.slick-active ul').each(function(){
        //     let countLi = $(this).find('li').length;
        //
        //     for (var i = 0; i <= countLi; i++) {
        //         $(".slick-active li").addClass("test")
        //     }
        //
        // });

    });

    $(function() {
        $.each($('.slick-active ul li'), function(i, el) {
            setTimeout(function() {
                $(el).addClass("slick-active-li");
            }, 500 + (i * 500));

        });
    });



    // function focus() {
    //     var var1 = 'var';
    //     var cor = 'cor';
    //     var lor = 'lor';
    //
    //
    //
    // }


</script>