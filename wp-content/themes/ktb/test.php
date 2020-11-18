<meta charset="utf-8">

<!DOCTYPE html>

<!--[if lt IE 7 ]> <html lang="en" class="ie6"> <![endif]-->

<!--[if IE 7 ]>    <html lang="en" class="ie7"> <![endif]-->

<!--[if IE 8 ]>    <html lang="en" class="ie8"> <![endif]-->

<!--[if IE 9 ]>    <html lang="en" class="ie9"> <![endif]-->

<!--[if (gt IE 9)|!(IE)]><!-->

<html  lang="ua">

<!--<![endif]-->



<head>

    <meta charset="utf-8">

    <title>

        <?php get_page_clean_title(); ?> -

        <?php get_site_name(); ?>

    </title>

    <meta name="robots" content="index, follow">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"> -->

    <!-- <link href="<?php get_theme_url(); ?>/libs/bootstrap/css/bootstrap.min.css" rel="stylesheet"> -->
    <link href="<?php get_theme_url(); ?>/libs/swiper/css/swiper.css" rel="stylesheet">
    <link href="<?php get_theme_url(); ?>/libs/slick/slick.css" rel="stylesheet">
    <link href="<?php get_theme_url(); ?>/libs/slick/slick-theme.css" rel="stylesheet">

    <link href="<?php get_theme_url(); ?>/build/fonts/Century Gothic/stylesheet.css" rel="stylesheet">

    <link href="<?php get_theme_url(); ?>/build/css/application.css?v=<?php echo get_site_version(); ?>" rel="stylesheet">

    <?php get_i18n_header(); ?>

    <!-- font awesome -->

    <script src="https://kit.fontawesome.com/8dc2d5a31d.js"></script>

</head>

<body id="<?php get_page_slug(); ?>">
<div style="display:none">&nbsp;</div>
<div class="page">

    <div class="content-wrap">

        <!-- site header -->

        <header>

            <div class="header-top">

                <div class="logo">

                    <a href="/"><img src="data/uploads/logo/logo.svg" alt="logo"></a>

                </div>

                <span class="port-2-div">
				<div class="blockport1">
					<div class="block-sky">
						<img class="header-sky-img" src="data/uploads/logo/header-sky.png" alt="Акваторія порту">
                        <span class="block-sky-span">
							<?php if (htmlspecialchars($_GET["setlang"]) == 'ua' || empty($_GET)): ?>
                                Акваторія порту
                            <?php else:?>
                                Акватория порта
                            <?php endif;?>


						</span>

					<div class="weather-none">


						<div id="SinoptikInformer" style="width:350px;" class="SinoptikInformer type5">
                            <div class="siHeader">
                                <div class="siLh">
                                    <div class="siMh">
                                        <a onmousedown="siClickCount();" class="siLogo" href="https://ua.sinoptik.ua/" target="_blank" rel="nofollow" title="Погода"> </a>
                                        Погода
                                        <span id="siHeader"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="siBody">
                                <a onmousedown="siClickCount();" href="https://ua.sinoptik.ua/погода-миколаїв" title="Погода у Миколаєві" target="_blank">
                                    <div class="siCity">
                                        <div class="siCityName">
											<?php if (htmlspecialchars($_GET["setlang"]) == 'ua' || empty($_GET)): ?>
                                                <span>Миколаїв</span>
                                            <?php else:?>
                                                <span>Николаев</span>


                                            <?php endif;?>

                                        </div>
                                        <div id="siCont0" class="siBodyContent">
                                            <div class="siLeft">
                                                <div class="siTerm"></div>
                                                <div class="siT" id="siT0"></div>
                                                <div id="weatherIco0"></div>
                                            </div>
                                            <div class="siInf">

                                                <p>
													<?php if (htmlspecialchars($_GET["setlang"]) == 'ua' || empty($_GET)): ?>

                                                        вологість:
                                                    <?php else:?>
                                                        влажность:
                                                    <?php endif;?>

													<span id="vl0"></span></p>
                                                <p>
													<?php if (htmlspecialchars($_GET["setlang"]) == 'ua' || empty($_GET)): ?>

                                                        тиск:
                                                    <?php else:?>
                                                        давление:
                                                    <?php endif;?>
													<span id="dav0"></span></p>
                                                <p>
													<?php if (htmlspecialchars($_GET["setlang"]) == 'ua' || empty($_GET)): ?>
                                                        вітер:

                                                    <?php else:?>
                                                        ветер:

                                                    <?php endif;?>



													<span id="wind0"></span></p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <div class="siLinks">Погода на 10 днів від
                                    <a href="https://ua.sinoptik.ua/погода-миколаїв/10-днів" title="Погода на 10 днів" target="_blank" onmousedown="siClickCount();">
                                        sinoptik.ua
                                    </a>
                                </div>
                            </div>
                            <div class="siFooter">
                                <div class="siLf">
                                    <div class="siMf"></div>
                                </div>
                            </div>
                        </div>
                        <script type="text/javascript" charset="UTF-8" src="//sinoptik.ua/informers_js.php?title=4&amp;wind=2&amp;cities=303017267&amp;lang=ua"></script>

					</div>
                    </div>
				</div>

				<div class="blockport2">
					<div class="block-dom">
						<img class="header-dom-img" src="data/uploads/logo/header-dom.png" alt="Завантаженість порту">
                        <span class="block-dom-span">
							<?php if (htmlspecialchars($_GET["setlang"]) == 'ua' || empty($_GET)): ?>

                                Завантаженість
                            <?php else:?>
                                Загруженность
                            <?php endif;?>


                        </span>
                        <div class="traffic-none">
                            <div class="traf-child-block">
                            <div class="traf-child-block-row1">
                                <img src="data/uploads/logo/avto.png">
                                <span class="traf-text">
									<?php if (htmlspecialchars($_GET["setlang"]) == 'ua' || empty($_GET)): ?>

                                        авто на терміналі:
                                    <?php else:?>
                                        авто на терминале:
                                    <?php endif;?>




								</span>
                                <span class="traff-number">8</span>

                            </div>
                            <div class="img-icons-trafic row-two-it">
                                <img src="data/uploads/logo/time.png">
                                <span class="traf-text">
									<?php if (htmlspecialchars($_GET["setlang"]) == 'ua' || empty($_GET)): ?>

                                        час очікування на вивантаження:
                                    <?php else:?>
                                        время ожидания выгрузки:
                                    <?php endif;?>

								</span>
                                <span class="traf-two-our traff-number">
									<?php if (htmlspecialchars($_GET["setlang"]) == 'ua' || empty($_GET)): ?>

                                        2 год
                                    <?php else:?>
                                        2 ч
                                    <?php endif;?>

								</span>

                            </div>
                            <div class="img-icons-trafic">
                                <img src="data/uploads/logo/avto-parking.png">
                                <span class="traf-text">
									<?php if (htmlspecialchars($_GET["setlang"]) == 'ua' || empty($_GET)): ?>

                                        авто на стоянці:
                                    <?php else:?>
                                        авто на стоянке:
                                    <?php endif;?>

								</span>
                                <span class="traff-number">56</span>

                            </div>
                            </div>

                        </div>

					</div>
				</div>
				</span>
                <div class="flex-end">


                    <span class="phone-icons">
                            <div class="phone">

								<a href="mailto:office@evt-port.com"><i class="fas fa-envelope" aria-hidden="true"></i><span>office@evt-port.com</span></a>

                            </div>

                            <div class="header-icons">

                                <a href="/"><i class="fas fa-home" aria-hidden="true"></i></a>

                                <a href="tel:0512719499"><i class="fas fa-mobile-alt" aria-hidden="true"></i></a>

                                <!-- <a href=""><i class="fas fa-file-alt"></i></a>-->

                                <a target="_blank" href="https://www.facebook.com/EVTcompany"><i class="fab fa-facebook-f" aria-hidden="true"></i></a>

                            </div>

                    </span>

                    <div class="language-items ">



                        <div class="language-item l_ua">

                            <a href="http://evt-test.aspirin-adv.com.ua/index.php?id=poslugi&amp;setlang=ua">укр

                            </a>

                        </div>

                        <div class="language-item l_en">

                            <a href="http://evt-test.aspirin-adv.com.ua/index.php?id=poslugi&amp;setlang=en">eng

                            </a>

                        </div>

                        <div class="language-item l_ru">

                            <a href="http://evt-test.aspirin-adv.com.ua/index.php?id=poslugi&amp;setlang=ru">рус

                            </a>

                        </div>

                    </div>

                </div>                <div class="menu-mobile">
                    <div class="menu__icon">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div class="menu__links fon-mob-menu">
                        <div class="menu__links">
                            <!--                        <p class="class-close">close</p>-->
                            <?php get_i18n_navigation(return_page_slug(),0,99, I18N_SHOW_MENU); ?>

                        </div>
                    </div>
                </div>


            </div>

            <div class="header-bottom">

                <ul class="menu">

                    <?php get_i18n_navigation(return_page_slug(),0,99, I18N_SHOW_MENU); ?>

                </ul>



            </div>
            <?php if (return_page_slug()=='index'&& htmlspecialchars($_GET["setlang"]) == 'ua' || empty($_GET)) get_component('main-slider'); ?>
            <?php if (return_page_slug()=='index'&& htmlspecialchars($_GET["setlang"]) == 'en') get_component('main-slider'); ?>
            <?php if (return_page_slug()=='index' && htmlspecialchars($_GET["setlang"]) == 'ru') get_component('main-slider-ru'); ?>





        </header>
