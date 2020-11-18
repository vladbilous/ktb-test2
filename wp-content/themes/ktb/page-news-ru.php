<?php
get_header()
?>

<div class="page-news">
    <div class="single__title-block-other ktb ">
        <h2 class="single__title-h2">
<!--    НОВИНИ-->
            <?php pll_e( "title-news" ); ?>

        </h2>
        <div class="small-line-news"></div>
    </div>

    <div class="ktb">
        <div class="page-news__block-scroll ">

            <?php

            $args = array(
                //                        'posts_per_page' => 5,
                'post_status'      => 'publish',
                'suppress_filters' => false,
                'cat' => 3

                //                        'order' => 'ASC'
            );

            $recent_posts = get_posts( $args );

            $list_items_markup = '';

            foreach ( $recent_posts as $post ) {

                $query = new WP_Query($args);
                $title = get_the_title( $post );
                $content = $post->post_content;
                $contentTrim = wp_trim_words( $content, 50, '...' );

                $img =  get_the_post_thumbnail( $post->ID, 'full');
                echo '
                    <div class="page-news__one-block">
                        <a href="' . get_permalink($post) . '">
                            <div class="row11__block-date-img">
                                <p class="block-date"> ' . get_the_date('d/m/Y') . '</p>
                               ' . $img . '
                            </div>
        
                            <div class="block-slider-page-news__content">
                                <p class="block-title">' . $title . '</p>
                                <!--<div class="small-line-news"></div>-->
                                <div class="block-descriptions">
                                  ' . $contentTrim . ' 
                                </div>
                            </div>
                        </a>
                    </div>
                ';
            }
            ?>
        </div>
    </div>
</div>


<?php
get_footer()
?>


<script>
    $( document ).ready(function() {
        $("body").removeClass('body-over');

        function animationLine() {
            // $(".services-page__title").css("color", "red");
            $('.small-line-news').addClass('scroll-line');

        }

        setTimeout(animationLine, 100);

        function animationTitle() {
            // $(".services-page__title").css("color", "red");
            $('.single__title-h2').addClass('scroll-title');

        }

        function animationTitleNews() {
            // $(".services-page__title").css("color", "red");
            $('.block-slider-page-news__content .block-title').addClass('load-title-news');

        }
        function animationDescNews() {
            // $(".services-page__title").css("color", "red");
            $('.block-descriptions').addClass('load-block-descriptions');

        }
        function animationDateNews() {
            // $(".services-page__title").css("color", "red");
            $('.block-date').addClass('load-block-date');

            $('.wp-post-image').addClass('wp-post-image-load')

        }



        setTimeout(animationTitle, 100);
        setTimeout(animationTitleNews, 100);
        setTimeout(animationDescNews, 200);
        setTimeout(animationDateNews, 200);


    });

</script>