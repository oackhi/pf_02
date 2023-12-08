function mediaQueriesWin() {
    var width = $(window).width();
    if (width >= 768) {
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
        // var state = false;
        // var pos;
        // if (state == false) {
        //     pos = $(window).scrollTop();
        //     $('.humberger-wrap, header').addClass('fixed').css({ 'top': -pos });
        //     state = true;
        // } else {
        //     $('.humberger-wrap, header').removeClass('fixed').css({ 'top': 0 });
        //     window.scrollTo(0, pos);
        //     state = false;
        // }
    });
    $('.humberger').on('click', function () {
        $('header').toggleClass('active');
        $('.l-header__menu').toggleClass('active');
        $('.p-humbergerBottom').toggleClass('active');
    });
});




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


$('.p-slider__list').slick({
    dots: true,
    prevArrow: '<button class="slick-arrow prev-arrow"></button>',
    nextArrow: '<button class="slick-arrow next-arrow"></button>',
});

const mql = window.matchMedia('screen and (max-width: 869px)');
function checkBreakPoint(mql) {
    if (mql.matches) {
        // スマホ向け（768px以下のとき）
        $('.p-news__list').not('.slick-initialized').slick({
            arrows: false,
            variableWidth: true,
            slidesToShow: 1
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

