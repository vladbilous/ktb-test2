<?php
get_header()
?>

<section class="about-us">
    <div class="ktb about-us__title">
        <h2 class="h2 about-us__title-h2">
            <?php pll_e( "title-about-us" ); ?>
<!--    ПРО НАС-->
        </h2>
        <div class="small-line-about-us"></div>
    </div>

    <div class="block-text-img">
        <div class="ktb about-us__text-img">
            <div class="about-us-block__img">
                <img class="about-us__img" src="<?php echo get_template_directory_uri() ?>/images/about-us.png" alt=""/>
            </div>
            <div class="about-us__text">
                <p>
                    <?php pll_e( "description-about-us" ); ?>


                    <!--            «КИЇВТРАНСБУД» – будівельна компанія, що працює на будівельно ринку з 2006 року.-->
<!--            Ми спеціалізуємося на швидкому зведенні виробничих та торгових об’єктів використовуючи сучасні технології.-->
<!--            Ми пишаємося нашою командою, вони роблять спільну справу, тому ми можемо гарантувати вам порядність, відповідальність та професіоналізм при виконанні роботи.-->
<!--            Кожного дня ми стаємо кращими та більшими. Ми змінюємо простір та покращуємо життя людей.-->
<!--            Логіка та холодний професіоналізм – головні аспекти нашої роботи (діяльності).-->
<!--            В нашій справі є ряд норм, законів та правил, яких ми маємо притримуватися для правильного виконання роботи.-->
                </p>

            </div>
        </div>


    </div>



</section>


<?php
get_footer()
?>



<script>
    $( document ).ready(function() {


        function animationTitle() {
            // $(".services-page__title").css("color", "red");
            $('.about-us__title-h2').addClass('scroll-title');

        }

        setTimeout(animationTitle, 100);

        function animationLine() {
            // $(".services-page__title").css("color", "red");
            $('.small-line-about-us').addClass('scroll-line');

        }
        function animationText() {
            // $('.about-us__text').addClass('about-us__text-anime');

        }

        function animationImg() {
            // $('.about-us__img').addClass('about-us__img-anime');

        }

        function animationTextImg() {
            $('.about-us__text-img').addClass('about-us__text-img-anime');

        }

        setTimeout(animationLine, 100);
        animationText();
        setTimeout(animationImg, 100);
        setTimeout(animationTextImg, 100);

    });

</script>