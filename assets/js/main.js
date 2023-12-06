const parentMenu = document.querySelectorAll(".l-header__menu li a");
for (let i = 0; i < parentMenu.length; i++) {
    parentMenu[i].addEventListener("click", function (e) {
        e.preventDefault();
        this.nextElementSibling.classList.toggle("active");
    })
}

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

