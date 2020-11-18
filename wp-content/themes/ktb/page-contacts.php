<?php
get_header()
?>

<section class="contacts relavive-hiden">
    <div class="ktb contacts__title">
        <h2 class="h2 contacts__title-h2">
<!--    КОНТАКТИ-->
            <?php pll_e( "title-contacts" ); ?>
        </h2>
        <div class="small-line-contacts"></div>
    </div>


    <div class=" ktb">
        <table class="contacts__map-info">
            <tr>
                <td class="contacts__map-block">
                    <div>
                        <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5083.300193314911!2d30.66624107381931!3d50.42899056127454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c52756253a1b%3A0xf088b7fbe4226c4a!2z0YPQuy4g0JHQvtGA0LjRgdC_0L7Qu9GM0YHQutCw0Y8sIDksINCa0LjQtdCyLCAwMjAwMA!5e0!3m2!1sru!2sua!4v1599809111765!5m2!1sru!2sua" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>
                </td>
                <td class="contacts__info">
                    <div>
                        <table>
                            <tr>
                                <td class="contacts__info-img">
                                    <img class="con-ic-pc img-icons ic1" src="<?php echo get_template_directory_uri() ?>/images/kontakts-icon1.png" alt=""/>
                                    <img class="con-ic-mob img-icons ic1" src="<?php echo get_template_directory_uri() ?>/images/kontakts-icon1-mobile.png" alt=""/>
                                </td>
                                <td class="contacts__info-text">
                                    <p class="cit contacts__info-text1">
<!--  м. Київ, вул. Бориспільська, 9С-->
                                        <?php pll_e( "address-in-contacts" ); ?>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td class="contacts__info-img">
                                    <img class="con-ic-pc img-icons ic2" src="<?php echo get_template_directory_uri() ?>/images/kontakts-icon2.png" alt=""/>
                                    <img class="con-ic-mob img-icons ic2" src="<?php echo get_template_directory_uri() ?>/images/kontakts-icon2-mobile.png" alt=""/>
                                </td>
                                <td class="contacts__info-text">
                                    <p class="cit contacts__info-text2">
                                        +380 44 369 57 60
                                    </p>

                                </td>
                            </tr>
                            <tr>
                                <td class="contacts__info-img">
                                    <img class="con-ic-pc img-icons ic3" src="<?php echo get_template_directory_uri() ?>/images/kontakts-icon3.png" alt=""/>
                                    <img class="con-ic-mob img-icons ic3" src="<?php echo get_template_directory_uri() ?>/images/kontakts-icon3-mobile.png" alt=""/>
                                </td>
                                <td class="contacts__info-text">
                                    <p class="cit contacts__info-text3">
                                        044 566 52 23
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td class="contacts__info-img">
                                    <img class="con-ic-pc img-icons ic4" src="<?php echo get_template_directory_uri() ?>/images/kontakts-icon4.png" alt=""/>
                                    <img class="con-ic-mob img-icons ic4" src="<?php echo get_template_directory_uri() ?>/images/kontakts-icon4-mobile.png" alt=""/>
                                </td>
                                <td class="contacts__info-text">
                                    <p class="cit contacts__info-text4">
                                        tender.ktb@gmail.com
                                    </p>
                                </td>
                            </tr>


                        </table>

                    </div>
                </td>
            </tr>
        </table>

    </div>






</section>


<?php
get_footer()
?>


<script>
    $( document ).ready(function() {
        $("body").removeClass('body-over');


        function animationTitle() {
            // $(".services-page__title").css("color", "red");
            $('.contacts__title-h2').addClass('scroll-title');

        }

        setTimeout(animationTitle, 100);

        function animationLine() {
            // $(".services-page__title").css("color", "red");
            $('.small-line-contacts').addClass('scroll-line');
        }
        function animationIcons1() {
            $('.img-icons.ic1').addClass('img-icons-anime');
            $('.contacts__info-text1').addClass('contacts__info-text-anime');

        }
        function animationIcons2() {
            $('.img-icons.ic2').addClass('img-icons-anime');
            $('.contacts__info-text2').addClass('contacts__info-text-anime');

        }
        function animationIcons3() {
            $('.img-icons.ic3').addClass('img-icons-anime');
            $('.contacts__info-text3').addClass('contacts__info-text-anime');

        }
        function animationIcons4() {
            $('.img-icons.ic4').addClass('img-icons-anime');
            $('.contacts__info-text4').addClass('contacts__info-text-anime');

        }
        function animationMap() {
            $('.contacts__map-block').addClass('contacts__map-block-anime');

        }



        setTimeout(animationLine, 100);
        setTimeout(animationMap, 100);
        setTimeout(animationIcons1, 200);
        setTimeout(animationIcons2, 500);
        setTimeout(animationIcons3, 800);
        setTimeout(animationIcons4, 1100);

    });

</script>