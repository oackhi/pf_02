// const parentMenu = document.querySelectorAll(".l-header__menu li a");
// for (let i = 0; i < parentMenu.length; i++) {
//     parentMenu[i].addEventListener("click", function (e) {
//         e.preventDefault();
//         this.nextElementSibling.classList.toggle("active");
//     })
// }


// $(function () {
//     $('.ac-parent').on('click', function () {
//         $(this).next().slideToggle();
//         //openクラスをつける
//         $(this).toggleClass("open");
//         //クリックされていないac-parentのopenクラスを取る
//         $('.ac-parent').not(this).removeClass('open');

//         // 一つ開くと他は閉じるように
//         $('.ac-parent').not($(this)).next('.ac-child').slideUp();
//     });
// });


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
    arrows: true,
    dots: true
});

const mql = window.matchMedia('screen and (max-width: 768px)');
function checkBreakPoint(mql) {
    if (mql.matches) {
        // スマホ向け（768px以下のとき）
        $('.p-news__list').not('.slick-initialized').slick({
            arrows: false,
            variableWidth: true
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

