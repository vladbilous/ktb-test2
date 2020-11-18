
// анімація елементів на сторінці
// $(window).scroll(function(){
//     if ($(window).scrollTop() > 300) {
//         $('.h1').addClass('scroll-title');
//     }
//     else {
//         $('.h1').removeClass('scroll-title')
//     }
// });
//
// $(window).scroll(function(){
//     if ($(window).scrollTop() > 350) {
//         $('.small-line').addClass('scroll-line');
//     }
//     else {
//         $('.small-line').removeClass('scroll-line')
//     }
// });
//
// $(window).scroll(function(){
//     if ($(window).scrollTop() > 400) {
//         $('.row2__description').addClass('scroll-row2__description');
//     }
//     else {
//         $('.row2__description').removeClass('scroll-row2__description')
//     }
// });

// var blockNews = $('.news');
//
// $(window).scroll(function(){
//     if ($(window).scrollTop() > blockNews.offset().top - $(window).height() / 1.2) {
//         $('.news').addClass('scroll-title');
//     }
//     else {
//         $('.news').removeClass('scroll-title')
//     }
// });

// var blocksRow3 = $('.row3');
//
// $(window).scroll(function(){
//     if ($(window).scrollTop() > blocksRow3.offset().top - $(window).height() / 1.2) {
//         $('.row3').addClass('row3-active');
//     }
//     else {
//         $('.row3').removeClass('row3-active')
//     }
// });


//
// function free() {
//     var red =  'color: red';
//
// var a = '0.5 = 30l'
//
// }


function noneVideo() {
    $('.video-main video').addClass('none');
    $('.close-video').addClass('none');
    $("body").removeClass('body-over');
}

$('.close-video').on('click', function (e){
    $('.video-main').addClass('video-none');
    // $('.video-main video').addClass('none');
    $('.index').addClass('index-auto');
    setTimeout(noneVideo, 700);
    $("body").removeClass('body-over');

});

function closeVideo() {
    $('.video-main').addClass('video-none');
    // $('.video-main video').addClass('none');
    $('.index').addClass('index-auto');
    setTimeout(noneVideo, 300);
    $("body").removeClass('body-over');


}

setTimeout(closeVideo, 30000);


    $(document).ready(function() {
})



// анимация блока h1


var isScrollingH1 = false;

window.addEventListener("scroll", throttleScrollH1, false);

function throttleScrollH1(e) {
    if (isScrollingH1 == false) {
        window.requestAnimationFrame(function() {
            scrollingH1(e);
            isScrollingH1 = false;
        });
    }
    isScrollingH1 = true;
}


document.addEventListener("DOMContentLoaded", scrollingH1, false);

var listItemsH1 = document.querySelectorAll(".row2");
var firstBoxH1 = document.querySelector(".h1");
var secondBoxH1 = document.querySelector(".big-line");

function scrollingH1(e) {

    if (isPartiallyVisibleH1(firstBoxH1)) {
        firstBoxH1.classList.add("scroll-title");
        // $(".row6__small-line").addClass("scroll-line");

        $('.h1').addClass('scroll-title');
        $('.row2__title .small-line').addClass('scroll-line');

        document.body.classList.add("colorOne");
        document.body.classList.remove("colorTwo");
    } else {
        firstBoxH1.classList.remove("scroll-title");

        // $(".row6__small-line").removeClass("scroll-line");
        // $('.h1').removeClass('scroll-title');
        $('.row2__title .small-line').removeClass('scroll-line');
        // $('.row2__description p').removeClass('scroll-row2__description');

        document.body.classList.remove("colorOne");
        document.body.classList.remove("colorTwo");
    }


    if (isFullyVisibleH1(secondBoxH1)) {
        secondBoxH1.classList.add("active");

        document.body.classList.add("colorTwo");
        document.body.classList.remove("colorOne");
    }

    for (var i = 0; i < listItemsH1.length; i++) {

        var listItem2 = listItemsH1[i];

        if (isPartiallyVisibleH1(listItem2)) {
            listItem2.classList.add("active");
        } else {
            listItem2.classList.remove("active");
        }
    }
}


function isPartiallyVisibleH1(el) {
    var elementBoundary = el.getBoundingClientRect();

    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;
    var height = elementBoundary.height;

    return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}

function isFullyVisibleH1(el) {
    var elementBoundary = el.getBoundingClientRect();

    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;

    return ((top >= 0) && (bottom <= window.innerHeight));
}


// end анимация блока h1




// анимация блока текст под h1


var isScrollingDesc = false;

window.addEventListener("scroll", throttleScrollDesc, false);

function throttleScrollDesc(e) {
    if (isScrollingDesc == false) {
        window.requestAnimationFrame(function() {
            scrollingDesc(e);
            isScrollingDesc = false;
        });
    }
    isScrollingDesc = true;
}


document.addEventListener("DOMContentLoaded", scrollingDesc, false);

var listItemsDesc = document.querySelectorAll(".row2__description");
var firstBoxDesc = document.querySelector(".demo-scroll-main-js");
var secondBoxDesc = document.querySelector(".row2__description");

function scrollingDesc(e) {

    if (isPartiallyVisibleDesc(firstBoxDesc)) {
        firstBoxDesc.classList.add("scroll-title");
        // $(".row6__small-line").addClass("scroll-line");

        $('.row2__description p').addClass('scroll-row2__description');

        document.body.classList.add("colorOne");
        document.body.classList.remove("colorTwo");
    } else {
        // firstBoxDesc.classList.remove("scroll-title");

        // $(".row6__small-line").removeClass("scroll-line");
        // $('.h1').removeClass('scroll-title');
        // $('.small-line').removeClass('scroll-line');
        $('.row2__description p').removeClass('scroll-row2__description');

        document.body.classList.remove("colorOne");
        document.body.classList.remove("colorTwo");
    }


    if (isFullyVisibleDesc(secondBoxDesc)) {
        secondBoxDesc.classList.add("active");

        document.body.classList.add("colorTwo");
        document.body.classList.remove("colorOne");
    }

    for (var i = 0; i < listItemsDesc.length; i++) {

        var listItem2 = listItemsDesc[i];

        if (isPartiallyVisibleDesc(listItem2)) {
            listItem2.classList.add("active");
        } else {
            listItem2.classList.remove("active");
        }
    }
}


function isPartiallyVisibleDesc(el) {
    var elementBoundary = el.getBoundingClientRect();

    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;
    var height = elementBoundary.height;

    return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}

function isFullyVisibleDesc(el) {
    var elementBoundary = el.getBoundingClientRect();

    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;

    return ((top >= 0) && (bottom <= window.innerHeight));
}


// end анимация блока текст под h1




// анимация блока news


var isScrollingNews = false;

window.addEventListener("scroll", throttleScrollNews, false);

function throttleScrollNews(e) {
    if (isScrollingNews == false) {
        window.requestAnimationFrame(function() {
            scrollingNews(e);
            isScrollingNews = false;
        });
    }
    isScrollingNews = true;
}


document.addEventListener("DOMContentLoaded", scrollingNews, false);

var listItemsNews = document.querySelectorAll(".row3");
var firstBoxNews = document.querySelector(".slider-news");
var secondBoxNews = document.querySelector(".row3");

function newsFirst() {
    $('.row3 .slide-block0').addClass('slider-news-active');
}

function newsAnother() {
    $('.row3 .slide-block1').addClass('slider-news-active');
}

function newsThird() {
    $('.row3 .slide-block2').addClass('slider-news-active');
}

function newsFirstRemove() {
    $('.row3 .slide-block0').removeClass('slider-news-active');
}

function newsAnotherRemove() {
    $('.row3 .slide-block1').removeClass('slider-news-active');
}

function newsThirdRemove() {
    $('.row3 .slide-block2').removeClass('slider-news-active');
}





function scrollingNews(e) {

    if (isPartiallyVisibleNews(firstBoxNews)) {
        firstBoxNews.classList.add("scroll-title");
        // $(".row6__small-line").addClass("scroll-line");


        // $('.row3 .slick-active:nth-child(2)').addClass('testvlad');

        setTimeout(newsFirst,4200);
        setTimeout(newsAnother,2000);
        setTimeout(newsThird,500);

        if( window.innerWidth >= 600 ){
            console.log('window.innerWidth >= 600')
        } else {
            console.log('window.innerWidth < 600')
        }

        $('.news').addClass('scroll-title');
        $('.arrow-scroll-top').addClass('scroll-arrow')

        // $('.slider-news').addClass('slider-news-active');
        $('.small-line-main-news').addClass('scroll-small-line-main-news');


        document.body.classList.add("colorOne");
        document.body.classList.remove("colorTwo");
    } else if(isPartiallyVisibleArr(firstBoxNews)){
        $('.arrow-scroll-top').removeClass('scroll-arrow')

    }

    else {
        firstBoxNews.classList.remove("scroll-title");

        // setTimeout(newsFirstRemove,100);
        // setTimeout(newsAnotherRemove,100);
        // setTimeout(newsThirdRemove,100);

        $('.news').removeClass('scroll-title');
        // $('.slider-news').removeClass('slider-news-active');
        $('.small-line-main-news').removeClass('scroll-small-line-main-news');


        document.body.classList.remove("colorOne");
        document.body.classList.remove("colorTwo");
    }


    if (isFullyVisibleNews(secondBoxNews)) {
        secondBoxNews.classList.add("active");

        document.body.classList.add("colorTwo");
        document.body.classList.remove("colorOne");
    }

    for (var i = 0; i < listItemsNews.length; i++) {

        var listItem2 = listItemsNews[i];

        if (isPartiallyVisibleNews(listItem2)) {
            listItem2.classList.add("active");
        } else {
            listItem2.classList.remove("active");
        }
    }
}


function isPartiallyVisibleNews(el) {
    var elementBoundary = el.getBoundingClientRect();

    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;
    var height = elementBoundary.height;

    return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}
function isPartiallyVisibleArr(el) {
    var elementBoundary = el.getBoundingClientRect();

    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;
    var height = elementBoundary.height;

    return ((top + height >= 0) );
}

function isFullyVisibleNews(el) {
    var elementBoundary = el.getBoundingClientRect();

    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;

    return ((top >= 0) && (bottom <= window.innerHeight));
}

//
// var test = 'test';
// var three = 3;
// var four = 4;
// var five = 5;
// var six = 6;
// var seven = 7;
// var eight = 8;
// var nine = 9;
// var ten = 10;
// var eleven = 11;
// var twelve = 12;
// var thirteen = 13;
// var fourteen = 14;
// var fifteen = 15;
// var sixteen = 16;
// var seventeen = 17;
// var eigteen = 18;
// var nineteen = 19;
// var tventy = 20;
// var tventyOne = 21;
// var tventyTwo = 22;
// var tventyThree = 23;
// var tventyFour = 24;
// var tventyFive = 25;
//
// var a2 = 2;
//
// var obj = {
//     name: "test",
//     number: 25
// }
//
// var arr = ['arr1', 'arr2', 3, 5, 4];
//
// var lvl  = 'lvl';
// var a = 'a';
// var one = 1;
// var two = 22;
//
// var hz = plus(one, ten);
//
// var hz2 = hz + 100;
//
// console.log(hz2);
//
// function plus(newOne= 2 , newTwo = 1 ) {
//
//
//     summa = newOne + newTwo;
//     console.log(summa);
//
//     return summa;
// }
//
// var summaNew = plus();
// console.log(summaNew + 1 );


// var one = 1;
// var two = 2;
// var curbonFields = 'curbon fields';
// var text = 'animate list text identety';
// var scroling = 'scroling';
// var variacia = 'variacia';
// var attribute = 'atribute';
// var nastroiki = 'nastroiki';
// var shop = 'shop';
// var domen = 'domen';
// var idPolya = 'id polya';
// var defaultZnach = 'default znach';
// var copuright = 'copiright';
// var vidget = 'vidget';


// end анимация блока news


// window.addEventListener("scroll", dealWithScrolling, false);
//
// function dealWithScrolling(e) {
//     // do epic stuff
// }


// var newFalse = 'false';


// var art = 'empty variable'
//
// var nem = 'memu';
// var p300 = '300px';
// var p320 = '320px';
// var p350 = '350px';
// var p400 = '400px';
// var p450 = '450px';
// var p500 = '500px';
// var objP = {
//     320: '320px',
//     350: '350px',
//     400: '400px'
// }
//
// var arrP = [320, 350, 400, 450, 500];
//
// console.log(arrP[3]);

$('.scroll-top').click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 600);
    return false;
});

// анимация блока services

var isScrolling = false;

window.addEventListener("scroll", throttleScroll, false);
window.addEventListener("scroll", throttleScrollProject, false);

function throttleScroll(e) {
    if (isScrolling == false) {
        window.requestAnimationFrame(function() {
            scrolling(e);
            isScrolling = false;
        });
    }
    isScrolling = true;
}

function throttleScrollProject(e) {
    if (isScrolling == false) {
        window.requestAnimationFrame(function() {
            scrolling2(e);
            isScrolling = false;
        });
    }
    isScrolling = true;
}

document.addEventListener("DOMContentLoaded", scrolling, false);
document.addEventListener("DOMContentLoaded", scrolling2, false);

var listItems = document.querySelectorAll(".row5");
var firstBox = document.querySelector(".row5__block-icons");
var secondBox = document.querySelector(".big-line");

function scrolling(e) {

    if (isPartiallyVisible(firstBox)) {
        // firstBox.classList.add("scroll-title");
        $(".services").addClass("scroll-title");
        $(".row5__small-line").addClass("scroll-line");


        function animationOneTd1() {
            $('.row5__td1').addClass('row5__td-active');
        }
        function animationOneTd2() {
            $('.row5__td2').addClass('row5__td-active');
        }
        function animationOneTd3() {
            $('.row5__td3').addClass('row5__td-active');
        }
        function animationOneTd4() {
            $('.row5__td4').addClass('row5__td-active');
        }
        function animationOneTd5() {
            $('.row5__td5').addClass('row5__td-active');
        }
        function animationOneTd6() {
            $('.row5__td6').addClass('row5__td-active');
        }
        function animationOneTd7() {
            $('.row5__td7').addClass('row5__td-active');
        }
        function animationOneTd8() {
            $('.row5__td8').addClass('row5__td-active');
        }

        setTimeout(animationOneTd1, 200);
        setTimeout(animationOneTd2, 700);
        setTimeout(animationOneTd3, 1200);
        setTimeout(animationOneTd4, 1700);
        setTimeout(animationOneTd5, 2200);
        setTimeout(animationOneTd6, 2700);
        setTimeout(animationOneTd7, 3200);
        setTimeout(animationOneTd8, 3700);



        document.body.classList.add("colorOne");
        document.body.classList.remove("colorTwo");
    } else {
        // firstBox.classList.remove("scroll-title");

        $(".services").removeClass("scroll-title");
        $(".row5__small-line").removeClass("scroll-line");
        document.body.classList.remove("colorOne");
        document.body.classList.remove("colorTwo");
    }


    if (isFullyVisible(secondBox)) {
        secondBox.classList.add("active");

        document.body.classList.add("colorTwo");
        document.body.classList.remove("colorOne");
    }

    for (var i = 0; i < listItems.length; i++) {

        var listItem = listItems[i];

        if (isPartiallyVisible(listItem)) {
            listItem.classList.add("active");
        } else {
            listItem.classList.remove("active");
        }
    }
}


function isPartiallyVisible(el) {
    var elementBoundary = el.getBoundingClientRect();

    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;
    var height = elementBoundary.height;

    return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}

function isFullyVisible(el) {
    var elementBoundary = el.getBoundingClientRect();

    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;

    return ((top >= 0) && (bottom <= window.innerHeight));
}

// end анимация блока services


// анимация блока project
function blockOne() {
    $(".rb1").addClass("rb-active");
}
function blockTwo() {
    $(".rb2").addClass("rb-active");
}
function blockThree() {
    $(".rb3").addClass("rb-active");
}
function blockFour() {
    $(".rb4").addClass("rb-active");
}
function blockFive() {
    $(".rb5").addClass("rb-active");
}
function blockSix() {
    $(".rb6").addClass("rb-active");
}
function blockSeven() {
    $(".rb7").addClass("rb-active");
}
function blockEight() {
    $(".rb8").addClass("rb-active");
}
function blockNine() {
    $(".rb9").addClass("rb-active");
}
function blockTen() {
    $(".rb10").addClass("rb-active");
}


var isScrolling2 = false;

window.addEventListener("scroll", throttleScroll2, false);

function throttleScroll2(e) {
    if (isScrolling2 == false) {
        window.requestAnimationFrame(function() {
            scrolling2(e);
            isScrolling2 = false;
        });
    }
    isScrolling2 = true;
}


document.addEventListener("DOMContentLoaded", scrolling2, false);

var listItems2 = document.querySelectorAll(".row5");
var firstBox2 = document.querySelector(".project");
var secondBox2 = document.querySelector(".big-line");

function scrolling2(e) {

    if (isPartiallyVisible2(firstBox2)) {
        firstBox2.classList.add("scroll-title");
        $(".row6__small-line").addClass("scroll-line");
        // $(".row6__block-blocks").addClass("row6__block-blocks-scroll");

        setTimeout(blockOne,200);
        setTimeout(blockNine,700);
        setTimeout(blockTwo,1200);
        setTimeout(blockSeven,1700);
        setTimeout(blockFive,2200);
        setTimeout(blockTen,2700);
        setTimeout(blockThree,3000);
        setTimeout(blockSix,3300);
        setTimeout(blockFour,3600);
        setTimeout(blockEight,3900);

        // setTimeout(blockOne,1000);
        // setTimeout(blockNine,1500);
        // setTimeout(blockTwo,2000);
        // setTimeout(blockSeven,2500);
        // setTimeout(blockFive,3500);
        // setTimeout(blockTen,4000);
        // setTimeout(blockThree,5000);
        // setTimeout(blockSix,6000);
        // setTimeout(blockFour,7000);
        // setTimeout(blockEight,8500);

        document.body.classList.add("colorOne");
        document.body.classList.remove("colorTwo");
    } else {
        firstBox2.classList.remove("scroll-title");

        $(".row6__small-line").removeClass("scroll-line");
        // $(".row6__block").removeClass("rb-active");

        document.body.classList.remove("colorOne");
        document.body.classList.remove("colorTwo");
    }


    if (isFullyVisible2(secondBox2)) {
        secondBox2.classList.add("active");

        document.body.classList.add("colorTwo");
        document.body.classList.remove("colorOne");
    }

    for (var i = 0; i < listItems2.length; i++) {

        var listItem2 = listItems2[i];

        if (isPartiallyVisible2(listItem2)) {
            listItem2.classList.add("active");
        } else {
            listItem2.classList.remove("active");
        }
    }
}


function isPartiallyVisible2(el) {
    var elementBoundary = el.getBoundingClientRect();

    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;
    var height = elementBoundary.height;

    return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}

function isFullyVisible2(el) {
    var elementBoundary = el.getBoundingClientRect();

    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;

    return ((top >= 0) && (bottom <= window.innerHeight));
}


// end анимация блока project




