// $(document).on('click','.full-region',function() {
//     $(".map *").removeClass("active-region");
//     $(this).parent().addClass("active-region");
//
// });


    // function sayHi() {
    //     $(window).scrollTop($(window).scrollTop() + 500);
    // }
    //
    // setTimeout(sayHi, 500);

// $(document).on('click','.one-region',function() {
//
//     $(".map *").removeClass("active-region");
//     $(this).addClass("active-region");
//
//     $(document).on("click", ".map g", function(e){
//         var id_click = $(this).attr("id");
//         console.log('класс куда кликнули = '+id_click);
//
//         $(this).css("display", "block");
//
//     });
//
//     $(document).on("click", ".map g", function(e){
//         var id_click = $(this).attr("class");
//         console.log('класс куда кликнули = '+id_click);
//
//
//
//
//
//
//         if("kiev one-region active-region" === id_click){
//             // $(".reg").css("display", "none");
//             $(".region-kiev").css("display", "block");
//
//         }else if("vinitsa one-region active-region" === id_click){
//                 // $(".reg").css("display", "none");
//
//                 $(".region-vinnitsa").css("display", "block");
//         }else {
//
//         }
//     });
//
// });

// $(document).on("click", ".map g", function(e){
//     var id_click = $(this).attr("class");
//     console.log('класс куда кликнули = '+id_click);
// });



$(document).ready(function (){
    $(".map").addClass('map-anime');
})

// клик по карте

function clickPlus() {
    // $(window).scrollTop($(window).scrollTop() + 1000);

    $(".map *").removeClass("active-region");

    // $(".reg").css("display", "none");
    $(".reg").css("height", "0");
    $(".reg").removeClass('min-active-region');
}

function scrollBottom() {
    // $("html, body").animate({scrollTop: $("header").height()+ 7200 },"slow");

    $("html, body").animate({scrollTop: $("header").height()+ 1200 }, 1000);

}

$(document).on('click','.kiev',function() {

    clickPlus();
    $(this).addClass("active-region");

    // $(".region-kiev").css("display", "block");
    $(".region-kiev").addClass('min-active-region');
    scrollBottom();
});

$(document).on('click','.kharkiv',function() {
    clickPlus();
    $(this).addClass("active-region");

    // $(".region-kharkiv").css("display", "block");
    $(".region-kharkiv").addClass('min-active-region');
    scrollBottom();
});

$(document).on('click','.sum',function() {
    clickPlus();
    $(this).addClass("active-region");

    // $(".region-sum").css("display", "block");
    $(".region-sum").addClass('min-active-region');
    scrollBottom();
});

$(document).on('click','.dnipro',function() {
    clickPlus();
    $(this).addClass("active-region");

    // $(".region-dnipro").css("display", "block");
    $(".region-dnipro").addClass('min-active-region');
    scrollBottom();
});
$(document).on('click','.mykolaiv',function() {
    clickPlus();
    $(this).addClass("active-region");

    // $(".region-mykolaiv").css("display", "block");
    $(".region-mykolaiv").addClass('min-active-region');
    scrollBottom();
});

$(document).on('click','.vinitsa',function() {
    clickPlus();
    $(this).addClass("active-region");

    // $(".region-vinnitsa").css("display", "block");
    $(".region-vinnitsa").addClass('min-active-region');
    scrollBottom();
});
$(document).on('click','.cherkasy',function() {
    clickPlus();
    $(this).addClass("active-region");

    // $(".region-cherkasy").css("display", "block");
    $(".region-cherkasy").addClass('min-active-region');
    scrollBottom();
});
$(document).on('click','.khmelnitskyi',function() {
    clickPlus();
    $(this).addClass("active-region");

    // $(".region-khmelnitskyi").css("display", "block");
    $(".region-khmelnitskyi").addClass('min-active-region');
    scrollBottom();
});
$(document).on('click','.chernivtsi',function() {
    clickPlus();
    $(this).addClass("active-region");

    // $(".region-chernivtsi").css("display", "block");
    $(".region-chernivtsi").addClass('min-active-region');
    scrollBottom();
});
$(document).on('click','.rivne',function() {
    clickPlus();
    $(this).addClass("active-region");

    // $(".region-rivne").css("display", "block");
    $(".region-rivne").addClass('min-active-region');
    scrollBottom();
});
$(document).on('click','.lviv',function() {
    clickPlus();
    $(this).addClass("active-region");

    // $(".region-lviv").css("display", "block");
    $(".region-lviv").addClass('min-active-region');
    scrollBottom();
});
$(document).on('click','.ivano-frankivsk',function() {
    clickPlus();
    $(this).addClass("active-region");

    // $(".region-ivano-frankivsk").css("display", "block");
    $(".region-ivano-frankivsk").addClass('min-active-region');
    scrollBottom();
});
$(document).on('click','.zakarpattia',function() {
    clickPlus();
    $(this).addClass("active-region");

    // $(".region-zakarpattia").css("display", "block");
    $(".region-zakarpattia").addClass('min-active-region');
    scrollBottom();
});


// end клик по карте

function click() {
    var clickNew = 'clickNew';
    var click = 'click';
    var log = 'log'
    var logNew


    var clickPlusClick = clicNew + click;




    console.log(clickPlusClick);




}

//  клик по маркеру на карте

function clickMarker() {
    $(".one-region-map *").removeClass("active-place");
    // $(".st2").removeClass("active-place");
    $(".place").css("display", "none");
}

$(document).on('click','.zzz',function() {
    clickMarker();
    $(this).addClass("active-place");
    $(".brovaru").css("display", "block");
});

// $(document).on('click','.test2',function() {
//     clickMarker();
//     $(this).addClass("active-place");
//     $(".borispol").css("display", "block");
// });

$(document).on('click','.epicenter-k7',function() {
    clickMarker();
    $(this).addClass("active-place");
    $(".brovaru").css("display", "block");
});


$(document).on('click','.hust-marker',function() {
    $(".region-zakarpattia *").removeClass("active-place");
    // $(".st2").removeClass("active-place");
    $(".region-zakarpattia .place").css("display", "none");
    $(this).addClass("active-place");
    $(".hust").css("display", "block");
});

$(document).on('click','.mukachevo-marker',function() {
    $(".region-zakarpattia *").removeClass("active-place");
    // $(".st2").removeClass("active-place");
    $(".region-zakarpattia .place").css("display", "none");
    $(this).addClass("active-place");
    $(".mukachevo").css("display", "block");
});

$(document).on('click','.chernivtsi-epicentr-marker',function() {
    $(".region-chernivtsi *").removeClass("active-place");
    // $(".st2").removeClass("active-place");
    $(".region-chernivtsi .place").css("display", "none");
    $(this).addClass("active-place");
    $(".chernivtsi-epicentr").css("display", "block");
});
$(document).on('click','.chernivtsi-gipermarket-marker',function() {
    $(".region-chernivtsi *").removeClass("active-place");
    // $(".st2").removeClass("active-place");
    $(".region-chernivtsi .place").css("display", "none");
    $(this).addClass("active-place");
    $(".chernivtsi-gipermarket").css("display", "block");
});

$(document).on('click','.ivano-frankivsk-kolomyia-marker',function() {
    $(".ivano-frankivsk *").removeClass("active-place");
    // $(".st2").removeClass("active-place");
    $(".ivano-frankivsk .place").css("display", "none");
    $(this).addClass("active-place");
    $(".ivano-frankivsk-kolomyia").css("display", "block");
});

$(document).on('click','.lviv-chervonograd-marker',function() {
    $(".region-lviv *").removeClass("active-place");
    // $(".st2").removeClass("active-place");
    $(".region-lviv .place").css("display", "none");
    $(this).addClass("active-place");
    $(".lviv-chervonograd").css("display", "block");
});

$(document).on('click','.lviv-drohobych-marker',function() {
    $(".region-lviv *").removeClass("active-place");
    // $(".st2").removeClass("active-place");
    $(".region-lviv .place").css("display", "none");
    $(this).addClass("active-place");
    $(".lviv-drohobych").css("display", "block");
});

$(document).on('click','.lviv-strui-marker',function() {
    $(".region-lviv *").removeClass("active-place");
    // $(".st2").removeClass("active-place");
    $(".region-lviv .place").css("display", "none");
    $(this).addClass("active-place");
    $(".lviv-strui").css("display", "block");
});
$(document).on('click','.khmelnitskyi-marker',function() {
    $(".region-khmelnitskyi *").removeClass("active-place");
    // $(".st2").removeClass("active-place");
    $(".region-khmelnitskyi .place").css("display", "none");
    $(this).addClass("active-place");
    $(".khmelnitskyi").css("display", "block");
});
$(document).on('click','.pruzhne-marker',function() {
    $(".region-khmelnitskyi *").removeClass("active-place");
    // $(".st2").removeClass("active-place");
    $(".region-khmelnitskyi .place").css("display", "none");
    $(this).addClass("active-place");
    $(".pruzhne").css("display", "block");
});
$(document).on('click','.starokostiantyniv-marker',function() {
    $(".region-khmelnitskyi *").removeClass("active-place");
    // $(".st2").removeClass("active-place");
    $(".region-khmelnitskyi .place").css("display", "none");
    $(this).addClass("active-place");
    $(".starokostiantyniv").css("display", "block");
});
$(document).on('click','.shepetivka-marker',function() {
    $(".region-khmelnitskyi *").removeClass("active-place");
    // $(".st2").removeClass("active-place");
    $(".region-khmelnitskyi .place").css("display", "none");
    $(this).addClass("active-place");
    $(".shepetivka").css("display", "block");
});
$(document).on('click','.slavyta-marker',function() {
    $(".region-khmelnitskyi *").removeClass("active-place");
    // $(".st2").removeClass("active-place");
    $(".region-khmelnitskyi .place").css("display", "none");
    $(this).addClass("active-place");
    $(".slavyta").css("display", "block");
});
$(document).on('click','.kharkiv-epicenter-marker',function() {
    $(".region-kharkiv *").removeClass("active-place");
    // $(".st2").removeClass("active-place");
    $(".region-kharkiv .place").css("display", "none");
    $(this).addClass("active-place");
    $(".kharkiv-epicenter").css("display", "block");
});
$(document).on('click','.kharkiv-torgcenter-marker',function() {
    $(".region-kharkiv *").removeClass("active-place");
    // $(".st2").removeClass("active-place");
    $(".region-kharkiv .place").css("display", "none");
    $(this).addClass("active-place");
    $(".kharkiv-torgcenter").css("display", "block");
});
$(document).on('click','.kiev-epicenter-k7-marker',function() {
    $(".region-kiev *").removeClass("active-place");
    // $(".st2").removeClass("active-place");
    $(".region-kiev .place").css("display", "none");
    $(this).addClass("active-place");
    $(".kiev-epicenter-k7").css("display", "block");
});
$(document).on('click','.kiev-epicenter-paladina-k6-marker',function() {
    $(".region-kiev *").removeClass("active-place");
    // $(".st2").removeClass("active-place");
    $(".region-kiev .place").css("display", "none");
    $(this).addClass("active-place");
    $(".kiev-epicenter-paladina-k6").css("display", "block");
});
$(document).on('click','.kiev-epicenter-k2-marker',function() {
    $(".region-kiev *").removeClass("active-place");
    // $(".st2").removeClass("active-place");
    $(".region-kiev .place").css("display", "none");
    $(this).addClass("active-place");
    $(".kiev-epicenter-k2").css("display", "block");
});
$(document).on('click','.kiev-epicenter-viskozna-marker',function() {
    $(".region-kiev *").removeClass("active-place");
    // $(".st2").removeClass("active-place");
    $(".region-kiev .place").css("display", "none");
    $(this).addClass("active-place");
    $(".kiev-epicenter-viskozna").css("display", "block");
});
$(document).on('click','.kiev-epicenter-bukovecka-k6-marker',function() {
    $(".region-kiev *").removeClass("active-place");
    // $(".st2").removeClass("active-place");
    $(".region-kiev .place").css("display", "none");
    $(this).addClass("active-place");
    $(".kiev-epicenter-bukovecka-k6").css("display", "block");
});
$(document).on('click','.kiev-zelenogorsk-marker',function() {
    $(".region-kiev *").removeClass("active-place");
    // $(".st2").removeClass("active-place");
    $(".region-kiev .place").css("display", "none");
    $(this).addClass("active-place");
    $(".kiev-zelenogorsk").css("display", "block");
});
$(document).on('click','.kiev-sabodana2b-marker',function() {
    $(".region-kiev *").removeClass("active-place");
    // $(".st2").removeClass("active-place");
    $(".region-kiev .place").css("display", "none");
    $(this).addClass("active-place");
    $(".kiev-sabodana2b").css("display", "block");
});
$(document).on('click','.kiev-polyarna-marker',function() {
    $(".region-kiev *").removeClass("active-place");
    // $(".st2").removeClass("active-place");
    $(".region-kiev .place").css("display", "none");
    $(this).addClass("active-place");
    $(".kiev-polyarna").css("display", "block");
});
$(document).on('click','.kiev-str-crystal-marker',function() {
    $(".region-kiev *").removeClass("active-place");
    // $(".st2").removeClass("active-place");
    $(".region-kiev .place").css("display", "none");
    $(this).addClass("active-place");
    $(".kiev-str-crystal").css("display", "block");
});
$(document).on('click','.kiev-kalinivka-marker',function() {
    $(".region-kiev *").removeClass("active-place");
    // $(".st2").removeClass("active-place");
    $(".region-kiev .place").css("display", "none");
    $(this).addClass("active-place");
    $(".kiev-kalinivka").css("display", "block");
});
$(document).on('click','.kiev-bila-tserkva-marker',function() {
    $(".region-kiev *").removeClass("active-place");
    // $(".st2").removeClass("active-place");
    $(".region-kiev .place").css("display", "none");
    $(this).addClass("active-place");
    $(".kiev-bila-tserkva").css("display", "block");
});
$(document).on('click','.kiev-kalunivka-indystrialna-marker',function() {
    $(".region-kiev *").removeClass("active-place");
    // $(".st2").removeClass("active-place");
    $(".region-kiev .place").css("display", "none");
    $(this).addClass("active-place");
    $(".kiev-kalunivka-indystrialna").css("display", "block");
});
$(document).on('click','.kiev-kalunivka-indystrialna-marker2',function() {
    $(".region-kiev *").removeClass("active-place");
    // $(".st2").removeClass("active-place");
    $(".region-kiev .place").css("display", "none");
    $(this).addClass("active-place");
    $(".kiev-kalunivka-indystrialna2").css("display", "block");
});
$(document).on('click','.kiev-brovaru-sholom-marker2',function() {
    $(".region-kiev *").removeClass("active-place");
    // $(".st2").removeClass("active-place");
    $(".region-kiev .place").css("display", "none");
    $(this).addClass("active-place");
    $(".kiev-brovaru-sholom").css("display", "block");
});
$(document).on('click','.kiev-grygorenka1-marker2',function() {
    $(".region-kiev *").removeClass("active-place");
    // $(".st2").removeClass("active-place");
    $(".region-kiev .place").css("display", "none");
    $(this).addClass("active-place");
    $(".kiev-grygorenka1").css("display", "block");
});
$(document).on('click','.kiev-grygorenka2-marker2',function() {
    $(".region-kiev *").removeClass("active-place");
    // $(".st2").removeClass("active-place");
    $(".region-kiev .place").css("display", "none");
    $(this).addClass("active-place");
    $(".kiev-grygorenka2").css("display", "block");
});
$(document).on('click','.kiev-brovaru-chornovola-marker2',function() {
    $(".region-kiev *").removeClass("active-place");
    // $(".st2").removeClass("active-place");
    $(".region-kiev .place").css("display", "none");
    $(this).addClass("active-place");
    $(".kiev-brovaru-chornovola").css("display", "block");
});
$(document).on('click','.kiev-brovaru-mcdonalds-marker2',function() {
    $(".region-kiev *").removeClass("active-place");
    // $(".st2").removeClass("active-place");
    $(".region-kiev .place").css("display", "none");
    $(this).addClass("active-place");
    $(".kiev-brovaru-mcdonalds").css("display", "block");
});
$(document).on('click','.kiev-epicentr-boruspil-marker2',function() {
    $(".region-kiev *").removeClass("active-place");
    // $(".st2").removeClass("active-place");
    $(".region-kiev .place").css("display", "none");
    $(this).addClass("active-place");
    $(".kiev-epicentr-boruspil").css("display", "block");
});
$(document).on('click','.kiev-brovaru-gryshevskogo-marker2',function() {
    $(".region-kiev *").removeClass("active-place");
    // $(".st2").removeClass("active-place");
    $(".region-kiev .place").css("display", "none");
    $(this).addClass("active-place");
    $(".kiev-brovaru-gryshevskogo").css("display", "block");
});






// $('.js-select-region').click(function () {
//     var regionId = $(this).attr('data-region');
//     $('.js-region').removeClass('region-active');
//     $('.js-region[data-map-region="' + regionId + '"]').addClass('region-active');
// });

// $('.js-region').click(function () {
//     var regionId = $(this).attr('data-map-region');
//     $('.js-region').removeClass('region-active');
//     $('.js-region[data-map-region="' + regionId + '"]').addClass('region-active');
//     $('.col-map-desc').removeClass('active');
//     $('.js-select-region[data-region="' + regionId + '"]').addClass('active');
// });


// end клик по маркеру на карте


