//スクロール
$(function () {
    $(window).scroll(function () {
        $('.fadein').each(function () {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight + 30) {
                $(this).addClass('scroll-fadein');
            }
        });
    });
});


//スクロール　ヘッダー固定
let start_position = 0,//初期位置０
    window_position,
    $window = $(window),
    $header = $('header')
// スクロールイベントを設定
$window.on('scroll', function () {
    // スクロール量の取得
    window_position = $(this).scrollTop();
    // スクロール量が初期位置より小さければ，
    // 上にスクロールしているのでヘッダーフッターを出現させる
    // if (width > 870) {
    if (window_position <= start_position) {
        $header.css('top', '0');
    } else {
        $header.css('top', '-150px');
    }
    // 現在の位置を更新する
    start_position = window_position;
});
// 中途半端なところでロードされても良いようにスクロールイベントを発生させる
$window.trigger('scroll');


//アコーディオンアイコン
function mediaQueriesWin() {
    var width = $(window).width();
    if (width > 870) {
        $(".has-child>a").off('click');
        $(".has-child>a").on('click', function () {
            console.log("Clicked!");
            var parentElem = $(this).parent();
            // 他のメニューを閉じる
            $('.has-child').not(parentElem).removeClass('active');
            $('.has-child').not(parentElem).children('ul').slideUp();
            // クリックしたメニューを開閉する
            $(parentElem).toggleClass('active');
            $(parentElem).children('ul').slideToggle();
            return false;
        });
    } else {
        $(".has-child>a").off('click');
        $(".has-child").removeClass('active');
        $('.has-child').children('ul').css("display", "");
    }
}
$(window).resize(function () {
    mediaQueriesWin();
});
$(window).on('load', function () {
    mediaQueriesWin();
});


// 検索ボックス
$(".open-btn1").click(function () {
    $(this).toggleClass('active');//.open-btnは、クリックごとにbtnactiveクラスを付与＆除去。1回目のクリック時は付与
    $("#search-wrap").fadeToggle();
    $("#search-wrap").toggleClass('active');//#search-wrapへpanelactiveクラスを付与

});

// ハンバーガー
$(function () {
    $('.humberger').on('click', function () {
        $('.humberger').toggleClass('isClosed');
    });
    $('.humberger').on('click', function () {
        $('header').toggleClass('active');
        $('.l-header__menu').toggleClass('active');
        $('.p-humbergerBottom').toggleClass('active');
    });
});



//アコーディオン
document.addEventListener('DOMContentLoaded', function () {

    const accordionTitle = document.querySelectorAll('.bl_accordionTitle');

    for (let i = 0; i < accordionTitle.length; i++) {
        accordionTitle[i].addEventListener("click", function () {
            for (let j = 0; j < accordionTitle.length; j++) {
                if (accordionTitle[i] !== accordionTitle[j]) {
                    accordionTitle[j].classList.remove("active");
                    accordionTitle[j].nextElementSibling.classList.remove('open');
                }
            }
            this.classList.toggle('active');
            this.nextElementSibling.classList.toggle('open');
        });
    }
});


//slick
$('.p-slider__list').slick({
    dots: true,
    prevArrow: '<button class="slick-arrow prev-arrow"></button>',
    nextArrow: '<button class="slick-arrow next-arrow"></button>',
});

const mql = window.matchMedia('screen and (max-width: 869px)');
function checkBreakPoint(mql) {
    if (mql.matches) {
        $('.p-news__list').on("init", function (event, slick) {
            $(this).append('<div class="slick-num"><span class="now-count"></span> / <span class="all-count"></span></div>');
            $(".now-count").text(slick.currentSlide + 1); // 現在のスライド番号(+1が無いと0からスタートしてしまう)
            $(".all-count").text(slick.slideCount); // スライドの総数
        })
        $('.p-news__list').not('.slick-initialized').slick({
            // dots: true,
            centerMode: true,
            slidesToShow: 1,
            prevArrow: '<button class="slick-arrow prev-arrow"></button>',
            nextArrow: '<button class="slick-arrow next-arrow"></button>',
        });
        $('.p-news__list').on("beforeChange", function (event, slick, currentSlide, nextSlide) {
            $(".now-count").text(nextSlide + 1); // 現在のスライド番号の次のスライドになったら番号を+1
        });
    } else {
        // PC向け
        $('.p-news__list.slick-initialized').slick('unslick');
    }
}
// ブレイクポイントの瞬間に発火
mql.addListener(checkBreakPoint);
// 初回チェック
checkBreakPoint(mql);

