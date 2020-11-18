<?php
get_header();
?>

<div class="main-page">

    <div class="ktb">
        <img class="arrow-scroll-top scroll-top" src="<?php echo get_template_directory_uri() ?>/images/scroll-top-arr.png" alt=""/>
    </div>
    <section class="slider row1">

        <div class="block-slide"><img src="<?php echo get_template_directory_uri() ?>/images/slide.png" alt=""/>
            <div class="slider__text-block">
                <div class="slider__text-block-all">
                    <div class="block-text-in-slide">
                        <p class="title-slide">
                            <!--                НАЗВА ОБ’ЄКТУ-->
                            <?php pll_e( "slide1-title" ); ?>
                        </p>
                        <p class="desc-slide">
                            <!--                ОПИС ОБ’ЄКТУ-->
                            <?php pll_e( "slide1-desc" ); ?>

                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div><img src="<?php echo get_template_directory_uri() ?>/images/slide.png" alt=""/>
            <div class="slider__text-block">
                <div class="slider__text-block-all">
                    <div class="block-text-in-slide">
                        <p class="title-slide">
                            <!--                НАЗВА ОБ’ЄКТУ-->
                            <?php pll_e( "slide2-title" ); ?>

                        </p>
                        <p class="desc-slide">
                            <?php pll_e( "slide2-desc" ); ?>

                            <!--                ОПИС ОБ’ЄКТУ-->
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div><img src="<?php echo get_template_directory_uri() ?>/images/slide.png" alt=""/>
            <div class="slider__text-block">
                <div class="slider__text-block-all">

                    <div class="block-text-in-slide">
                        <p class="title-slide">
                            <!--                НАЗВА ОБ’ЄКТУ-->
                            <?php pll_e( "slide3-title" ); ?>

                        </p>
                        <p class="desc-slide">
                            <?php pll_e( "slide3-desc" ); ?>

                            <!--                ОПИС ОБ’ЄКТУ-->
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div><img src="<?php echo get_template_directory_uri() ?>/images/slide.png" alt=""/>
            <div class="slider__text-block">
                <div class="slider__text-block-all">
                    <div class="block-text-in-slide">
                        <p class="title-slide">
                            <!--                НАЗВА ОБ’ЄКТУ-->
                            <?php pll_e( "slide4-title" ); ?>

                        </p>
                        <p class="desc-slide">
                            <!--                ОПИС ОБ’ЄКТУ-->
                            <?php pll_e( "slide4-desc" ); ?>

                        </p>
                    </div>
                </div>
            </div>
        </div>

    </section>

    <div class="big-line"></div>

    <section class="row2" id="about">
        <div class="row2__title ktb">
            <h1 class="h1">
                <a href="/about-us/">
                    <?php pll_e( "who-we-are-title" ); ?>
                    <!--            ХТО МИ ТАКІ-->
                </a>
            </h1>
            <div class="small-line"></div>
        </div>
        <div class="row2__description ">
            <p class="ktb">
                <!--        «КИЇВТРАНСБУД» – будівельна компанія, що працює на будівельно ринку з 2006 року.-->
                <!--        Ми спеціалізуємося на швидкому зведенні виробничих та торгових об’єктів використовуючи сучасні технології.-->
                <!--        Ми пишаємося нашою командою, вони роблять спільну справу, тому ми можемо гарантувати вам порядність,-->
                <!--        відповідальність та професіоналізм при виконанні роботи.-->
                <!--        Кожного дня ми стаємо кращими та більшими. Ми змінюємо простір та покращуємо життя людей.-->

                <?php pll_e( "who-we-are-desc" ); ?>

                <span class="demo-scroll-main-js"></span>

            </p>
        </div>
    </section>

    <section class="row3 ktb">
        <div class="row3__title ">
            <h2 class="news"><a href="/news/">
                    <!--            НОВИНИ-->
                    <?php pll_e( "news-title" ); ?>

                </a></h2>
            <div class="small-line-main-news"></div>
        </div>

        <div class="slider-news">

            <?php

            $args = array(
                'posts_per_page' => 3,
                'post_status'      => 'publish',
                'suppress_filters' => false,
                'cat' => 3
                //                        'order' => 'ASC'
            );

            $recent_posts = get_posts( $args );

            $list_items_markup = '';

            foreach ( $recent_posts as $key => $post ) {

                $query = new WP_Query($args);
                $title = get_the_title( $post );
                $content = $post->post_content;
//                    $contentTrim = wp_trim_words( $content, 14, '...' );
                $contentTrim = wp_trim_words( $content, 10, '...' );
                $img =  get_the_post_thumbnail( $post->ID, 'full');
                echo '
                        <div class="slider-news__slide slide-block'.$key.'">
                            <a href="' . get_permalink($post) . '">
                                <div class="block-date-img">
                                    <p class="block-date"> ' . get_the_date('d/m/Y') . '</p>
                                    <div class="row11__block-img">
                                       ' . $img . '
                                    </div>
                                </div>
    
                                <p class="block-title">' . $title . '</p>
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



    </section>





    <section class="timer row4 position-relative">
        <img class="row4__banner" src="<?php echo get_template_directory_uri() ?>/images/banner-backg.png" alt=""/>

        <div class=" ktb">
            <div class=" row4__blocks">
                <div class=" row4__block">
                    <span class="timer__single row4__title" data-from="1" data-to="85" data-speed="3000" data-refresh-interval="50"></span>
                    <span class="row4__descriptions">
<!--                шт.-->
                        <?php pll_e( "block1-count-od-vumiry" ); ?>


                    </span>

                    <p class="row4__descriptions">
                        <?php pll_e( "block1-count-desc" ); ?>

                        <!--                виконаних-->
                        <!--                <br>-->
                        <!--                об’єктів-->

                    </p>
                    <!--            <p class="row4__descriptions">-->
                    <!---->
                    <!--            </p>-->
                </div>
                <div class=" row4__block">
                    <span class="timer__single row4__title" data-from="1" data-to="400" data-speed="3000" data-refresh-interval="50"></span>
                    <span class="row4__descriptions">
<!--                тис. м2-->
                        <?php pll_e( "block2-count-od-vumiry" ); ?>
                    </span>
                    <p class="row4__descriptions">
                        <?php pll_e( "block2-count-desc" ); ?>


                        <!--                загальна площа-->
                        <!--                <br>-->
                        <!--                виконаних робіт-->
                    </p>
                    <!--            <p class="row4__descriptions">-->
                    <!--                -->
                    <!--            </p>-->
                </div>
                <div class=" row4__block">
                    <span class="timer__single row4__title" data-from="1" data-to="14" data-speed="3000" data-refresh-interval="50"></span>
                    <span class="row4__descriptions">
                        <?php pll_e( "block3-count-od-vumiry" ); ?>
<!--                років-->
                    </span>
                    <p class="row4__descriptions">
                        <?php pll_e( "block3-count-desc" ); ?>


                        <!--                плідної праці на-->
                        <!--                <br>-->
                        <!--                будівельному ринку-->
                    </p>
                    <!--            <p class="row4__descriptions">-->
                    <!--                -->
                    <!--            </p>-->
                </div>

            </div>
        </div>
    </section>


    <section class="row5" id="row5">
        <div class="row5__title ktb services-block">
            <h2 class="services"><a href="/services/">
                    <?php pll_e( "main-services-title" ); ?>
                    <!--            ПОСЛУГИ-->
                </a></h2>
            <div class="row5__small-line"></div>
        </div>
        <div class="row5__block-icons">
            <div class="ktb">
                <table>
                    <tr>
                        <td class="row5__td row5__td1">
                            <img src="<?php echo get_template_directory_uri() ?>/images/Icon_1.png" alt="">
                            <p>
                                <!--                        ЗЕМЛЯНІ РОБОТИ-->
                                <?php pll_e( "main-services1-title" ); ?>
                            </p>
                        </td>
                        <td class="row5__td row5__td2">
                            <img src="<?php echo get_template_directory_uri() ?>/images/Icon_2.png" alt="">
                            <p>
                                <!--                        МОНТАЖ І ОБЛАШТУВАННЯ-->
                                <!--                        КОНСТРУКЦІЇ-->

                                <?php pll_e( "main-services2-title" ); ?>

                            </p>
                        </td>
                        <td class="row5__td row5__td3">
                            <img src="<?php echo get_template_directory_uri() ?>/images/Icon_3.png" alt="">
                            <p>
                                <!--                        ВНУТРІШНІ-->
                                <!--                        ОЗДОБЛЮВАЛЬНІ-->
                                <!--                        РОБОТИ-->

                                <?php pll_e( "main-services3-title" ); ?>

                            </p>
                        </td>
                        <td class="row5__td row5__td4">
                            <img src="<?php echo get_template_directory_uri() ?>/images/Icon_4.png" alt="">
                            <p>
                                <!--                        МОНТАЖ-->
                                <!--                        ІНЖЕНЕРНИХ-->
                                <!--                        СИСТЕМ-->
                                <?php pll_e( "main-services4-title" ); ?>

                            </p>
                        </td>
                        <td class="row5__td row5__td5">
                            <img src="<?php echo get_template_directory_uri() ?>/images/Icon_5.png" alt="">
                            <p>
                                <!--                        ПОКРІВЕЛЬНІ РОБОТИ-->
                                <?php pll_e( "main-services5-title" ); ?>

                            </p>
                        </td>
                        <td class="row5__td row5__td6">
                            <img src="<?php echo get_template_directory_uri() ?>/images/Icon_6.png" alt="">
                            <p>
                                <!--                        ФАСАДНІ РОБОТИ-->
                                <?php pll_e( "main-services6-title" ); ?>

                            </p>
                        </td>
                        <td class="row5__td row5__td7">
                            <img src="<?php echo get_template_directory_uri() ?>/images/Icon_7.png" alt="">
                            <p>
                                <!--                        ПРОЕКТНІ РОБОТИ-->
                                <?php pll_e( "main-services7-title" ); ?>

                            </p>
                        </td>
                        <td class="row5__td row5__td8">
                            <img src="<?php echo get_template_directory_uri() ?>/images/Icon_8.png" alt="">
                            <p>
                                <!--                        ІНЖИНІРИНГ-->
                                <?php pll_e( "main-services8-title" ); ?>

                            </p>
                        </td>
                    </tr>
                </table>


            </div>

        </div>

    </section>


    <section class="row6 ktb">
        <div class="row6__title ">
            <h2 class="project"><a href="/objects/">
                    <!--            ПРОЕКТИ-->
                    <?php pll_e( "title-projects-main-page" ); ?>

                </a></h2>
            <div class="row6__small-line"></div>
        </div>
        <div class="row6__block-blocks">

            <div class="row6__block rb1">
                <img src="<?php echo get_template_directory_uri() ?>/images/row6-img1.png" alt="">

                <div class="row6__block-none">
                    <div class="row6__block-none-title-desc">
                        <p class="row6__block-none-title">
                            <!--                    НАЗВА ОБ’ЄКТУ-->
                            <?php pll_e( "object1-title" ); ?>

                        </p>
                        <p class="row6__block-none-desc">
                            <!--                    АДРЕСА: ....-->
                            <?php pll_e( "object1-description" ); ?>

                        </p>
                    </div>
                </div>
            </div>
            <div class="row6__block rb2">
                <img src="<?php echo get_template_directory_uri() ?>/images/row6-img2.png" alt="">

                <div class="row6__block-none">
                    <div class="row6__block-none-title-desc">
                        <p class="row6__block-none-title">
                            <!--                    НАЗВА ОБ’ЄКТУ-->
                            <?php pll_e( "object2-title" ); ?>

                        </p>
                        <p class="row6__block-none-desc">
                            <!--                    АДРЕСА: ....-->
                            <?php pll_e( "object2-description" ); ?>

                        </p>
                    </div>
                </div>
            </div>
            <div class="row6__block rb3">
                <img src="<?php echo get_template_directory_uri() ?>/images/row6-img3.png" alt="">

                <div class="row6__block-none">
                    <div class="row6__block-none-title-desc">
                        <p class="row6__block-none-title">
                            <?php pll_e( "object3-title" ); ?>

                            <!--                    НАЗВА ОБ’ЄКТУ-->
                        </p>
                        <p class="row6__block-none-desc">
                            <!--                    АДРЕСА: ....-->
                            <?php pll_e( "object3-description" ); ?>

                        </p>
                    </div>
                </div>
            </div>
            <div class="row6__block rb4">
                <img src="<?php echo get_template_directory_uri() ?>/images/row6-img4.png" alt="">

                <div class="row6__block-none">
                    <div class="row6__block-none-title-desc">
                        <p class="row6__block-none-title">
                            <!--                    НАЗВА ОБ’ЄКТУ-->
                            <?php pll_e( "object4-title" ); ?>

                        </p>
                        <p class="row6__block-none-desc">
                            <!--                    АДРЕСА: ....-->
                            <?php pll_e( "object4-description" ); ?>

                        </p>
                    </div>
                </div>
            </div>
            <div class="row6__block rb5">
                <img src="<?php echo get_template_directory_uri() ?>/images/row6-img5.png" alt="">

                <div class="row6__block-none">
                    <div class="row6__block-none-title-desc">
                        <p class="row6__block-none-title">
                            <!--                    НАЗВА ОБ’ЄКТУ-->
                            <?php pll_e( "object5-title" ); ?>

                        </p>
                        <p class="row6__block-none-desc">
                            <!--                    АДРЕСА: ....-->
                            <?php pll_e( "object5-description" ); ?>

                        </p>
                    </div>
                </div>
            </div>
            <div class="row6__block rb6">
                <img src="<?php echo get_template_directory_uri() ?>/images/row6-img6.png" alt="">

                <div class="row6__block-none">
                    <div class="row6__block-none-title-desc">
                        <p class="row6__block-none-title">
                            <!--                    НАЗВА ОБ’ЄКТУ-->
                            <?php pll_e( "object6-title" ); ?>

                        </p>
                        <p class="row6__block-none-desc">
                            <!--                    АДРЕСА: ....-->
                            <?php pll_e( "object6-description" ); ?>

                        </p>
                    </div>
                </div>
            </div>
            <div class="row6__block rb7">
                <img src="<?php echo get_template_directory_uri() ?>/images/row6-img7.png" alt="">

                <div class="row6__block-none">
                    <div class="row6__block-none-title-desc">
                        <p class="row6__block-none-title">
                            <!--                    НАЗВА ОБ’ЄКТУ-->
                            <?php pll_e( "object7-title" ); ?>

                        </p>
                        <p class="row6__block-none-desc">
                            <!--                    АДРЕСА: ....-->
                            <?php pll_e( "object7-description" ); ?>

                        </p>
                    </div>
                </div>
            </div>
            <div class="row6__block rb8">
                <img src="<?php echo get_template_directory_uri() ?>/images/row6-img8.png" alt="">

                <div class="row6__block-none">
                    <div class="row6__block-none-title-desc">
                        <p class="row6__block-none-title">
                            <!--                    НАЗВА ОБ’ЄКТУ-->
                            <?php pll_e( "object8-title" ); ?>

                        </p>
                        <p class="row6__block-none-desc">
                            <!--                    АДРЕСА: ....-->
                            <?php pll_e( "object8-description" ); ?>

                        </p>
                    </div>
                </div>
            </div>
            <div class="row6__block rb9">
                <img src="<?php echo get_template_directory_uri() ?>/images/row6-img9.png" alt="">

                <div class="row6__block-none">
                    <div class="row6__block-none-title-desc">
                        <p class="row6__block-none-title">
                            <!--                    НАЗВА ОБ’ЄКТУ-->
                            <?php pll_e( "object9-title" ); ?>

                        </p>
                        <p class="row6__block-none-desc">
                            <!--                    АДРЕСА: ....-->
                            <?php pll_e( "object9-description" ); ?>

                        </p>
                    </div>
                </div>
            </div>
            <div class="row6__block rb10">
                <img src="<?php echo get_template_directory_uri() ?>/images/row6-img10.png" alt="">

                <div class="row6__block-none">
                    <div class="row6__block-none-title-desc">
                        <p class="row6__block-none-title">
                            <!--                    НАЗВА ОБ’ЄКТУ-->
                            <?php pll_e( "object10-title" ); ?>

                        </p>
                        <p class="row6__block-none-desc">
                            <!--                    АДРЕСА: ....-->
                            <?php pll_e( "object10-description" ); ?>

                        </p>
                    </div>
                </div>
            </div>
        </div>

    </section>

    <section class="row7 ktb">
        <div class="block-menu-footer">
            <?php
            wp_nav_menu( array(
                'menu_class'=>'menu',
                'theme_location'=>'top',
            ) );
            ?>
        </div>
    </section>

</div>




<?php
get_footer();
?>

<script>

    $(document).ready(function () {
        $(".slider__text-block").addClass("load-block");
        $('.slider button').addClass('slick-arrow-load');

    })
</script>
