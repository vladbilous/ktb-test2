<?php
get_header();
?>



    <div class="single">


        <div class="single__title-block ktb ">
            <h2 class="single__title-one">НОВИНИ</h2>
            <div class="small-line-one-news"></div>
        </div>
        <div class="post common ">

            <?php the_post(); // Получаем данные о записи ?>
            <article class="post__article background-color-00131b ktb ">

                <?php
                if (get_bloginfo('language')== 'ru-RU'):?>
                <a href="/ru/#news">
                    <?php
                    endif;
                    ?>

                    <?php
                    if (get_bloginfo('language')== 'en-US'):?>
                    <a href="/en/#news">
                        <?php
                        endif;
                        ?>

                        <?php
                        if (get_bloginfo('language')== 'uk'):?>
                        <a href="/#news">
                            <?php
                            endif;
                            ?>
<!--                    <img class="img-krest" src="--><?php //echo get_template_directory_uri() ?><!--/img/krest.png">-->
                        </a>

                        <div class="post__title-img-descriptions  ">


                            <div class="navigationarrows navigationarrows-prev">
                                <p class="previous">
                                    <?php previous_post_link('%link','<img class="arr-left" src=" ' . get_template_directory_uri() . '/images/arr-left-single.png"/>', TRUE, '4'); ?>
                                </p>
                            </div>
                            <div class="navigationarrows navigationarrows-next">
                                <p class="previous">
                                    <?php next_post_link('%link','<img class="arr-right" src=" ' . get_template_directory_uri() . '/images/arr-right-single.png"/>', TRUE, '4'); ?>
                                </p>
                            </div>


                            <div class="post__img">
                                <?php the_post_thumbnail("full"); ?>
                            </div>
                            <h1 class="post__title"><?php the_title(); // Заголовок записи ?></h1>

                            <div class="post__description-title">

                                <?php the_content(); // Выводим содержимое записи ?>
                            </div>

                        </div>
            </article>

        </div> <!-- .post .common -->

        <div class="single__title-block-other ktb ">
            <h2 class="single__title">ІНШІ НОВИНИ</h2>
            <div class="small-line-news"></div>
        </div>
        <div class="block-slider ktb">

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
                $contentTrim = wp_trim_words( $content, 14, '...' );

                $img =  get_the_post_thumbnail( $post->ID, 'full');
                echo '
                    <div>
                        <a href="' . get_permalink($post) . '">
                            <div class="block-date-img">
                                <p class="block-date"> ' . get_the_date('d/m/Y') . '</p>
                                <div class="row11__block-img">
                                   ' . $img . '
                                </div>
                            </div>

                            <p class="block-title">' . $title . '</p>
                            <div class="small-line-news"></div>
                            <div class="small-line"></div>
                            <div class="block-descriptions">
                              ' . $contentTrim . ' 
                            </div>
                        </a>
                    </div>
                ';
            }
            ?>
        </div>


    </div> <!-- .content -->


<?php
get_footer();
?>



<script>
    $( document ).ready(function() {


        function animationTitle() {
            // $(".services-page__title").css("color", "red");
            $('.single__title-one').addClass('scroll-title');

        }

        setTimeout(animationTitle, 100);

        function animationLine() {
            // $(".services-page__title").css("color", "red");
            $('.small-line-one-news').addClass('scroll-line');

        }

        setTimeout(animationLine, 100);

        function animationPostTitle() {
            // $(".services-page__title").css("color", "red");
            $('.post__title').addClass('load-post__title');
        }

        function animationPostDesc() {
            // $(".services-page__title").css("color", "red");
            $('.post__description-title').addClass('load-post__description-title');
            $('.wp-post-image').addClass('wp-post-image-load')

        }

        setTimeout(animationPostTitle, 100);
        setTimeout(animationPostDesc, 100);




    });

</script>
