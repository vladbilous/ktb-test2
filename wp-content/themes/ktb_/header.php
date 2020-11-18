<!DOCTYPE html>
<html lang="uk">
<head>
    <title>"КИЇВТРАНСБУД" - головні будівельники.</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="КИЇВТРАНСБУД – будівельна компанія, що працює з 2006 року. Спеціалізуємося на
    швидкому зведенні виробничих та торгових об’єктів використовуючи сучасні технології.">
    <meta name="keywords" content="Земляні роботи, монтаж та облаштування конструкцій, внутрішні оздоблювальні роботи,
    монтаж інженерних систем, покрівельні роботи, фасадні роботи, проектні роботи, інжиніринг, будівництво, Епіцентр,
    ремонт, реконструкція.">
    <meta name="robots" content="index,follow">
    <link rel="shortcut icon" href="<?php echo get_stylesheet_directory_uri(); ?>/favicon.png" />
    <link rel="stylesheet" type="text/css" href="<?= bloginfo('template_directory'); ?>/slick/slick.css"/>
    <link rel="stylesheet" type="text/css" href="<?= bloginfo('template_directory'); ?>/slick/slick-theme.css"/>
    <link rel="stylesheet" href="<?php echo get_template_directory_uri() ?>/style.css">

    <?php wp_head() ?>
</head>

<body class="body-over">
    <header>


        <div style="position: relative; z-index: 6" class="menu-mobile">
            <a class="menu-triger" href="#"></a>
            <div class="menu-popup">
                <a class="menu-close" href="#"></a>
                <div class="mob-menu-plashka"></div>
                <div class="mobile-lang in-mob-menu">
                    <ul class="block-lang-mobile">
                        <?php pll_the_languages(); ?>
                    </ul>
                </div>

                <?php
                wp_nav_menu( array(
                    'menu_class'=>'menu-mobile',
                    'theme_location'=>'top',
                ));
                ?>
            </div>

        </div>

        <section class="ktb logo-menu">


            <div class="block-logo">
                <a href="../">
                    <img class="logo" src="<?php echo get_template_directory_uri() ?>/images/logo.png" alt="ктб">
                    <img class="logo-mobile" src="<?php echo get_template_directory_uri() ?>/images/logo-mobile.png" alt="ктб">
                </a>
            </div>
            <div class="mobile-lang">
                <ul class="block-lang-mobile">
                    <?php pll_the_languages(); ?>
                </ul>
            </div>

            <div class="block-menu">
                <?php
                    wp_nav_menu( array(
                        'menu_class'=>'menu',
                        'theme_location'=>'top',
                    ));
                ?>

                <ul class="block-lang">
                    <?php pll_the_languages(); ?>
                </ul>
            </div>

        </section>

    </header>

    <main>

