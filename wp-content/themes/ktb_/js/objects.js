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

    $("html, body").animate({scrollTop: $("header").height()+ 1100 }, 3000);

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

$(document).on('click','.kirovograd',function() {
    clickPlus();
    $(this).addClass("active-region");

    $(".region-kirovograd").addClass('min-active-region');
    scrollBottom();
});

$(document).on('click','.zaporizhzhia',function() {
    clickPlus();
    $(this).addClass("active-region");

    $(".region-zaporizhzhia").addClass('min-active-region');
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


$(document).on('click','.epicenter-pervomaisk-marker',function() {
    $(".region-mykolaiv *").removeClass("active-place");
    $(this).addClass("active-place");
    // $(".region-zakarpattia .place").css("display", "none");
    // $(".hust").css("display", "block");
    $(".region-mykolaiv .place").removeClass('active-place-info');
    $(".epicenter-pervomaisk").addClass('active-place-info');

});

$(document).on('click','.mykolaiv-marker',function() {
    $(".region-mykolaiv *").removeClass("active-place");
    $(this).addClass("active-place");
    // $(".region-zakarpattia .place").css("display", "none");
    // $(".hust").css("display", "block");
    $(".region-mykolaiv .place").removeClass('active-place-info');
    $(".mykolaiv-epicenter").addClass('active-place-info');

});

$(document).on('click','.nova-liniya-marker',function() {
    $(".region-zaporizhzhia *").removeClass("active-place");
    $(this).addClass("active-place");
    // $(".region-zakarpattia .place").css("display", "none");
    // $(".hust").css("display", "block");
    $(".region-zaporizhzhia .place").removeClass('active-place-info');
    $(".nova-liniya").addClass('active-place-info');
});

$(document).on('click','.epicenter-zaporizhya-marker',function() {
    $(".region-zaporizhzhia *").removeClass("active-place");
    $(this).addClass("active-place");
    // $(".region-zakarpattia .place").css("display", "none");
    // $(".hust").css("display", "block");
    $(".region-zaporizhzhia .place").removeClass('active-place-info');
    $(".epicenter-zaporizhya").addClass('active-place-info');
});

$(document).on('click','.epicenter-melitopol-marker',function() {
    $(".region-zaporizhzhia *").removeClass("active-place");
    $(this).addClass("active-place");
    // $(".region-zakarpattia .place").css("display", "none");
    // $(".hust").css("display", "block");
    $(".region-zaporizhzhia .place").removeClass('active-place-info');
    $(".epicenter-melitopol").addClass('active-place-info');
});



$(document).on('click','.hust-marker',function() {
    $(".region-zakarpattia *").removeClass("active-place");
    $(this).addClass("active-place");
    // $(".region-zakarpattia .place").css("display", "none");
    // $(".hust").css("display", "block");
    $(".region-zakarpattia .place").removeClass('active-place-info');
    $(".hust").addClass('active-place-info');

});

$(document).on('click','.mukachevo-marker',function() {
    $(".region-zakarpattia *").removeClass("active-place");
    $(this).addClass("active-place");
    // $(".region-zakarpattia .place").css("display", "none");
    // $(".mukachevo").css("display", "block");
    $(".region-zakarpattia .place").removeClass('active-place-info');
    $(".mukachevo").addClass('active-place-info');
});

$(document).on('click','.chernivtsi-epicentr-marker',function() {
    $(".region-chernivtsi *").removeClass("active-place");
    $(this).addClass("active-place");
    // $(".region-chernivtsi .place").css("display", "none");
    // $(".chernivtsi-epicentr").css("display", "block");

    $(".region-chernivtsi .place").removeClass('active-place-info');
    $(".chernivtsi-epicentr").addClass('active-place-info');

});
$(document).on('click','.chernivtsi-gipermarket-marker',function() {
    $(".region-chernivtsi *").removeClass("active-place");
    $(this).addClass("active-place");
    // $(".region-chernivtsi .place").css("display", "none");

    // $(".chernivtsi-gipermarket").css("display", "block");

    $(".region-chernivtsi .place").removeClass('active-place-info');
    $(".chernivtsi-gipermarket").addClass('active-place-info');

});

$(document).on('click','.ivano-frankivsk-kolomyia-marker',function() {
    $(".ivano-frankivsk *").removeClass("active-place");
    $(this).addClass("active-place");
    // $(".ivano-frankivsk .place").css("display", "none");

    // $(".ivano-frankivsk-kolomyia").css("display", "block");
    $(".ivano-frankivsk .place").removeClass('active-place-info');
    $(".ivano-frankivsk-kolomyia").addClass('active-place-info');

});

$(document).on('click','.lviv-chervonograd-marker',function() {
    $(".region-lviv *").removeClass("active-place");
    $(this).addClass("active-place");
    // $(".region-lviv .place").css("display", "none");

    // $(".lviv-chervonograd").css("display", "block");
    $(".region-lviv .place").removeClass('active-place-info');
    $(".lviv-chervonograd").addClass('active-place-info');


});

$(document).on('click','.lviv-drohobych-marker',function() {
    $(".region-lviv *").removeClass("active-place");
    $(this).addClass("active-place");
    // $(".region-lviv .place").css("display", "none");

    // $(".lviv-drohobych").css("display", "block");

    $(".region-lviv .place").removeClass('active-place-info');
    $(".lviv-drohobych").addClass('active-place-info');
});

$(document).on('click','.lviv-strui-marker',function() {
    $(".region-lviv *").removeClass("active-place");
    $(this).addClass("active-place");
    // $(".region-lviv .place").css("display", "none");

    // $(".lviv-strui").css("display", "block");

    $(".region-lviv .place").removeClass('active-place-info');
    $(".lviv-strui").addClass('active-place-info');

});

$(document).on('click','.lviv-drive-marker',function() {
    $(".region-lviv *").removeClass("active-place");
    $(this).addClass("active-place");
    // $(".region-lviv .place").css("display", "none");

    // $(".lviv-strui").css("display", "block");

    $(".region-lviv .place").removeClass('active-place-info');
    $(".lviv-drive").addClass('active-place-info');

});

$(document).on('click','.lviv-epicenter-marker',function() {
    $(".region-lviv *").removeClass("active-place");
    $(this).addClass("active-place");
    // $(".region-lviv .place").css("display", "none");

    // $(".lviv-strui").css("display", "block");

    $(".region-lviv .place").removeClass('active-place-info');
    $(".lviv-epicenter").addClass('active-place-info');

});
$(document).on('click','.khmelnitskyi-marker',function() {
    $(".region-khmelnitskyi *").removeClass("active-place");
    $(this).addClass("active-place");
    // $(".region-khmelnitskyi .place").css("display", "none");

    // $(".khmelnitskyi").css("display", "block");

    $(".region-khmelnitskyi .place").removeClass('active-place-info');
    $(".khmelnitskyi").addClass('active-place-info');

});
$(document).on('click','.pruzhne-marker',function() {
    $(".region-khmelnitskyi *").removeClass("active-place");
    $(this).addClass("active-place");
    // $(".region-khmelnitskyi .place").css("display", "none");

    // $(".pruzhne").css("display", "block");

    $(".region-khmelnitskyi .place").removeClass('active-place-info');
    $(".pruzhne").addClass('active-place-info');

});
$(document).on('click','.starokostiantyniv-marker',function() {
    $(".region-khmelnitskyi *").removeClass("active-place");
    $(this).addClass("active-place");
    // $(".region-khmelnitskyi .place").css("display", "none");

    // $(".starokostiantyniv").css("display", "block");

    $(".region-khmelnitskyi .place").removeClass('active-place-info');
    $(".starokostiantyniv").addClass('active-place-info');

});
$(document).on('click','.shepetivka-marker',function() {
    $(".region-khmelnitskyi *").removeClass("active-place");
    $(this).addClass("active-place");
    // $(".region-khmelnitskyi .place").css("display", "none");

    // $(".shepetivka").css("display", "block");
    $(".region-khmelnitskyi .place").removeClass('active-place-info');
    $(".shepetivka").addClass('active-place-info');

});
$(document).on('click','.slavyta-marker',function() {
    $(".region-khmelnitskyi *").removeClass("active-place");
    $(this).addClass("active-place");
    // $(".region-khmelnitskyi .place").css("display", "none");

    // $(".slavyta").css("display", "block");
    $(".region-khmelnitskyi .place").removeClass('active-place-info');
    $(".slavyta").addClass('active-place-info');

});
$(document).on('click','.kharkiv-epicenter-marker',function() {
    $(".region-kharkiv *").removeClass("active-place");
    $(this).addClass("active-place");
    // $(".region-kharkiv .place").css("display", "none");

    // $(".kharkiv-epicenter").css("display", "block");

    $(".region-kharkiv .place").removeClass('active-place-info');
    $(".kharkiv-epicenter").addClass('active-place-info');

});
$(document).on('click','.kharkiv-torgcenter-marker',function() {
    $(".region-kharkiv *").removeClass("active-place");
    $(this).addClass("active-place");
    // $(".region-kharkiv .place").css("display", "none");
    // $(".kharkiv-torgcenter").css("display", "block");

    $(".region-kharkiv .place").removeClass('active-place-info');
    $(".kharkiv-torgcenter").addClass('active-place-info');

});
$(document).on('click','.kiev-epicenter-k7-marker',function() {
    $(".region-kiev *").removeClass("active-place");
    $(this).addClass("active-place");
    // $(".region-kiev .place").css("display", "none");

    // $(".kiev-epicenter-k7").css("display", "block");

    $(".region-kiev .place").removeClass('active-place-info');
    $(".kiev-epicenter-k7").addClass('active-place-info');

});
$(document).on('click','.kiev-epicenter-paladina-k6-marker',function() {
    $(".region-kiev *").removeClass("active-place");
    $(this).addClass("active-place");
    // $(".region-kiev .place").css("display", "none");

    // $(".kiev-epicenter-paladina-k6").css("display", "block");
    $(".region-kiev .place").removeClass('active-place-info');
    $(".kiev-epicenter-paladina-k6").addClass('active-place-info');

});
$(document).on('click','.kiev-epicenter-k2-marker',function() {
    $(".region-kiev *").removeClass("active-place");
    $(this).addClass("active-place");
    // $(".region-kiev .place").css("display", "none");

    // $(".kiev-epicenter-k2").css("display", "block");

    $(".region-kiev .place").removeClass('active-place-info');
    $(".kiev-epicenter-k2").addClass('active-place-info');

});
$(document).on('click','.kiev-epicenter-viskozna-marker',function() {
    $(".region-kiev *").removeClass("active-place");
    $(this).addClass("active-place");
    // $(".region-kiev .place").css("display", "none");

    // $(".kiev-epicenter-viskozna").css("display", "block");

    $(".region-kiev .place").removeClass('active-place-info');
    $(".kiev-epicenter-viskozna").addClass('active-place-info');


});
$(document).on('click','.kiev-epicenter-bukovecka-k6-marker',function() {
    $(".region-kiev *").removeClass("active-place");
    $(this).addClass("active-place");
    // $(".region-kiev .place").css("display", "none");

    // $(".kiev-epicenter-bukovecka-k6").css("display", "block");

    $(".region-kiev .place").removeClass('active-place-info');
    $(".kiev-epicenter-bukovecka-k6").addClass('active-place-info');

});
$(document).on('click','.kiev-zelenogorsk-marker',function() {
    $(".region-kiev *").removeClass("active-place");
    $(this).addClass("active-place");
    // $(".region-kiev .place").css("display", "none");

    // $(".kiev-zelenogorsk").css("display", "block");

    $(".region-kiev .place").removeClass('active-place-info');
    $(".kiev-zelenogorsk").addClass('active-place-info');

});
$(document).on('click','.kiev-sabodana2b-marker',function() {
    $(".region-kiev *").removeClass("active-place");
    $(this).addClass("active-place");
    // $(".region-kiev .place").css("display", "none");

    // $(".kiev-sabodana2b").css("display", "block");
    $(".region-kiev .place").removeClass('active-place-info');
    $(".kiev-sabodana2b").addClass('active-place-info');

});
$(document).on('click','.kiev-polyarna-marker',function() {
    $(".region-kiev *").removeClass("active-place");
    $(this).addClass("active-place");
    // $(".region-kiev .place").css("display", "none");

    // $(".kiev-polyarna").css("display", "block");
    $(".region-kiev .place").removeClass('active-place-info');
    $(".kiev-polyarna").addClass('active-place-info');

});
$(document).on('click','.kiev-str-crystal-marker',function() {
    $(".region-kiev *").removeClass("active-place");
    $(this).addClass("active-place");
    // $(".region-kiev .place").css("display", "none");

    // $(".kiev-str-crystal").css("display", "block");

    $(".region-kiev .place").removeClass('active-place-info');
    $(".kiev-str-crystal").addClass('active-place-info');

});
$(document).on('click','.kiev-kalinivka-marker',function() {
    $(".region-kiev *").removeClass("active-place");
    $(this).addClass("active-place");
    // $(".region-kiev .place").css("display", "none");

    // $(".kiev-kalinivka").css("display", "block");

    $(".region-kiev .place").removeClass('active-place-info');
    $(".kiev-kalinivka").addClass('active-place-info');

});
$(document).on('click','.kiev-bila-tserkva-marker',function() {
    $(".region-kiev *").removeClass("active-place");
    $(this).addClass("active-place");
    // $(".region-kiev .place").css("display", "none");

    // $(".kiev-bila-tserkva").css("display", "block");
    $(".region-kiev .place").removeClass('active-place-info');
    $(".kiev-bila-tserkva").addClass('active-place-info');

});
$(document).on('click','.kiev-kalunivka-indystrialna-marker',function() {
    $(".region-kiev *").removeClass("active-place");
    $(this).addClass("active-place");
    // $(".region-kiev .place").css("display", "none");

    // $(".kiev-kalunivka-indystrialna").css("display", "block");

    $(".region-kiev .place").removeClass('active-place-info');
    $(".kiev-kalunivka-indystrialna").addClass('active-place-info');

});
$(document).on('click','.kiev-kalunivka-indystrialna-marker2',function() {
    $(".region-kiev *").removeClass("active-place");
    $(this).addClass("active-place");
    // $(".region-kiev .place").css("display", "none");

    // $(".kiev-kalunivka-indystrialna2").css("display", "block");

    $(".region-kiev .place").removeClass('active-place-info');
    $(".kiev-kalunivka-indystrialna2").addClass('active-place-info');

});
$(document).on('click','.kiev-brovaru-sholom-marker2',function() {
    $(".region-kiev *").removeClass("active-place");
    $(this).addClass("active-place");
    // $(".region-kiev .place").css("display", "none");

    // $(".kiev-brovaru-sholom").css("display", "block");
    $(".region-kiev .place").removeClass('active-place-info');
    $(".kiev-brovaru-sholom").addClass('active-place-info');

});
$(document).on('click','.kiev-grygorenka1-marker2',function() {
    $(".region-kiev *").removeClass("active-place");
    $(this).addClass("active-place");
    // $(".region-kiev .place").css("display", "none");

    // $(".kiev-grygorenka1").css("display", "block");

    $(".region-kiev .place").removeClass('active-place-info');
    $(".kiev-grygorenka1").addClass('active-place-info');

});
$(document).on('click','.kiev-grygorenka2-marker2',function() {
    $(".region-kiev *").removeClass("active-place");
    $(this).addClass("active-place");
    // $(".region-kiev .place").css("display", "none");

    // $(".kiev-grygorenka2").css("display", "block");
    $(".region-kiev .place").removeClass('active-place-info');
    $(".kiev-grygorenka2").addClass('active-place-info');

});
$(document).on('click','.kiev-brovaru-chornovola-marker2',function() {
    $(".region-kiev *").removeClass("active-place");
    $(this).addClass("active-place");
    // $(".region-kiev .place").css("display", "none");

    // $(".kiev-brovaru-chornovola").css("display", "block");
    $(".region-kiev .place").removeClass('active-place-info');
    $(".kiev-brovaru-chornovola").addClass('active-place-info');

});
$(document).on('click','.kiev-brovaru-mcdonalds-marker2',function() {
    $(".region-kiev *").removeClass("active-place");
    $(this).addClass("active-place");
    // $(".region-kiev .place").css("display", "none");

    // $(".kiev-brovaru-mcdonalds").css("display", "block");
    $(".region-kiev .place").removeClass('active-place-info');
    $(".kiev-brovaru-mcdonalds").addClass('active-place-info');

});
$(document).on('click','.kiev-epicentr-boruspil-marker2',function() {
    $(".region-kiev *").removeClass("active-place");
    $(this).addClass("active-place");
    // $(".region-kiev .place").css("display", "none");

    // $(".kiev-epicentr-boruspil").css("display", "block");
    $(".region-kiev .place").removeClass('active-place-info');
    $(".kiev-epicentr-boruspil").addClass('active-place-info');

});
$(document).on('click','.kiev-brovaru-gryshevskogo-marker2',function() {
    $(".region-kiev *").removeClass("active-place");
    $(this).addClass("active-place");
    // $(".region-kiev .place").css("display", "none");

    // $(".kiev-brovaru-gryshevskogo").css("display", "block");
    $(".region-kiev .place").removeClass('active-place-info');
    $(".kiev-brovaru-gryshevskogo").addClass('active-place-info');

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


