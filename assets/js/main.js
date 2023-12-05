


const parentMenu = document.querySelectorAll(".l-header__menu li a");
for (let i = 0; i < parentMenu.length; i++) {
    parentMenu[i].addEventListener("click", function (e) {
        e.preventDefault();
        this.nextElementSibling.classList.toggle("active");
    })
}

$('.l-slider ul').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    dotsClass: "slide-dots" //ここでclass名を変更する（デフォルトはslick-dots）
});