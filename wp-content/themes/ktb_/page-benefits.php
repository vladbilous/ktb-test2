<?php
get_header()
?>

<section class="benefits">
    <div class="ktb benefits__title">
        <h2 class="h2 benefits__title-h2">
<!--    ПЕРЕВАГИ-->
            <?php pll_e( "title-benefits" ); ?>

        </h2>
        <div class="small-line-benefits"></div>
    </div>

    <div class="benefits__block-content">
        <div class="ktb row-benefits">
            <div class="one-benefit ob1">
                <div class="one-benefit__img-title">
                    <img class="img-benefist" src="<?php echo get_template_directory_uri() ?>/images/benefits-icon1.png" alt=""/>
                    <p class="row-benefits__title">
<!--                ДОСВІД-->
                        <?php pll_e( "benefit1-title" ); ?>
                    </p>
                </div>
                <p class="row-benefits__description">
                    <?php pll_e( "benefit1-descripton" ); ?>

                    <!--            Досвід фахівців нашої компанії дозволяє якісно виконувати весь перелік окремих робіт,-->
<!--            а також і будувати об'єкти «під ключ» різного цільового призначення.-->
<!--            Від котеджів з індивідуальним проектуванням до великих промислових об'єктів.-->
                </p>
            </div>
            <div class="one-benefit ob2">
                <div class="one-benefit__img-title">
                    <img class="img-benefist" src="<?php echo get_template_directory_uri() ?>/images/benefits-icon2.png" alt=""/>
                    <p class="row-benefits__title">
<!--                ВІДКРИТІСТЬ-->
                        <?php pll_e( "benefit2-title" ); ?>
                    </p>
                </div>
                <p class="row-benefits__description">
                    <?php pll_e( "benefit2-descripton" ); ?>

                    <!--            Замовник може в будь-який момент та на будь-якому етапі отримати всю необхідну йому інформацію і проконтролювати виконання поставленої задачі.-->
<!--            Все це значно зменшує терміни виконання і дозволяє швидше ввести об'єкт в експлуатацію.-->
                </p>
            </div>
            <div class="one-benefit ob3">
                <div class="one-benefit__img-title">
                    <img class="img-benefist" src="<?php echo get_template_directory_uri() ?>/images/benefits-icon3.png" alt=""/>
                    <p class="row-benefits__title">
<!--                ШВИДКІСТЬ-->
                        <?php pll_e( "benefit3-title" ); ?>
                    </p>
                </div>
                <p class="row-benefits__description">
                    <?php pll_e( "benefit3-descripton" ); ?>

                    <!--            Основною спеціалізацією компанії є швидке зведення виробничих і торгових об'єктів з використанням сучасних будівничих та економічних технологій.-->
                </p>
            </div>
            <div class="one-benefit ob4">
                <div class="one-benefit__img-title">
                    <img class="img-benefist" src="<?php echo get_template_directory_uri() ?>/images/benefits-icon4.png" alt=""/>
                    <p class="row-benefits__title">
                        <?php pll_e( "benefit4-title" ); ?>
<!--                ЯКІСТЬ-->
                    </p>
                </div>
                <p class="row-benefits__description">
                    <?php pll_e( "benefit4-descripton" ); ?>

                    <!--            Використання гарних та високо-якісних матеріалів запорука швидкої роботи.-->
<!--            Поєднання якісних матеріалів та новітніх технологій в рази покращує та пришвидшує будівництво об’єктів.-->
                </p>
            </div>
            <div class="one-benefit ob5">
                <div class="one-benefit__img-title">
                    <img class="img-benefist" src="<?php echo get_template_directory_uri() ?>/images/benefits-icon5.png" alt=""/>
                    <p class="row-benefits__title">
                        <?php pll_e( "benefit5-title" ); ?>
<!--                РІШУЧІСТЬ-->
                    </p>
                </div>
                <p class="row-benefits__description">
                    <?php pll_e( "benefit5-descripton" ); ?>

                    <!--            Ми завжди приймаємо виклик від наших замовників та перевершуємо всі очікування.-->
<!--            Наші працівники розуміють, що потрібно не просто виконати поставлене не перед ними завдання,-->
<!--            а зробити більше, перевершити себе та попередні об’єкти. Кожен наступний наш об’єкт стає тільки краще.-->
                </p>
            </div>
            <div class="one-benefit ob6">
                <div class="one-benefit__img-title">
                    <img class="img-benefist" src="<?php echo get_template_directory_uri() ?>/images/benefits-icon6.png" alt=""/>
                    <p class="row-benefits__title">
<!--                ВІДПОВІДАЛЬНІСТЬ-->
                        <?php pll_e( "benefit6-title" ); ?>
                    </p>
                </div>
                <p class="row-benefits__description">
                    <?php pll_e( "benefit6-descripton" ); ?>

                    <!--            Ми ніколи не ховаємося від проблем. Завжди готові відповідати за свої дії.-->
<!--            Ми впевнені в тому, що кожен наш працівник сумлінно та відповідально виконує свою роботу.-->
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
            $('.benefits__title-h2').addClass('scroll-title');
        }

        function animationLine() {
            $('.small-line-benefits').addClass('scroll-line');
        }

        setTimeout(animationTitle, 100);
        setTimeout(animationLine, 100);

        function animationOneBenefit1() {
            $('.ob1').addClass('one-benefit-anime');
        }
        function animationOneBenefit2() {
            $('.ob2').addClass('one-benefit-anime');
        }
        function animationOneBenefit3() {
            $('.ob3').addClass('one-benefit-anime');
        }
        function animationOneBenefit4() {
            $('.ob4').addClass('one-benefit-anime');
        }
        function animationOneBenefit5() {
            $('.ob5').addClass('one-benefit-anime');
        }
        function animationOneBenefit6() {
            $('.ob6').addClass('one-benefit-anime');
        }

        setTimeout(animationOneBenefit1, 200);
        setTimeout(animationOneBenefit2, 700);
        setTimeout(animationOneBenefit3, 1200);
        setTimeout(animationOneBenefit4, 1700);
        setTimeout(animationOneBenefit5, 2200);
        setTimeout(animationOneBenefit6, 2700);


        function animationRemoveOneBenefitImg() {
            $('.one-benefit .img-benefist').removeClass('img-benefist-anime');
        }

        function animationOneBenefitImg1() {
            $('.ob1 .img-benefist').addClass('img-benefist-anime');
            setTimeout(animationRemoveOneBenefitImg, 500);
        }
        function animationOneBenefitImg2() {
            $('.ob2 .img-benefist').addClass('img-benefist-anime');
            setTimeout(animationRemoveOneBenefitImg, 400);
        }
        function animationOneBenefitImg3() {
            $('.ob3 .img-benefist').addClass('img-benefist-anime');
            setTimeout(animationRemoveOneBenefitImg, 400);
        }
        function animationOneBenefitImg4() {
            $('.ob4 .img-benefist').addClass('img-benefist-anime');
            setTimeout(animationRemoveOneBenefitImg, 400);
        }
        function animationOneBenefitImg5() {
            $('.ob5 .img-benefist').addClass('img-benefist-anime');
            setTimeout(animationRemoveOneBenefitImg, 400);
        }
        function animationOneBenefitImg6() {
            $('.ob6 .img-benefist').addClass('img-benefist-anime');
            setTimeout(animationRemoveOneBenefitImg, 400);
        }

        setTimeout(animationOneBenefitImg1, 6000);
        setTimeout(animationOneBenefitImg2, 6700);
        setTimeout(animationOneBenefitImg3, 7400);
        setTimeout(animationOneBenefitImg4, 8100);
        setTimeout(animationOneBenefitImg5, 8900);
        setTimeout(animationOneBenefitImg6, 9600);

    });
</script>