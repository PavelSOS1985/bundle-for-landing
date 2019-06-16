/*$(document).ready(() => {
    let body = $('body');
    let mobileMenuItems = document.getElementsByClassName("mobile__menu-item");
    console.log(mobileMenuItems);

    function mobileItemToggle(elem) {
        setTimeout(function () {
            elem.classList.toggle("mobile__menu-item_open")
        }, 1000);
        return elem;
    }

    console.log(mobileMenuItems);

    function mobileMenuOpen() {
        for (var i in mobileMenuItems) {
            mobileItemToggle(i);
        }


    }

    mobileMenuOpen();
});*/
window.onload = function () {
    /* работа мобильного меню*/
    const mobileMenuItems = document.querySelectorAll(".mobile__menu-item");
/*
    const arrayMobileMenuItems = Array.from(mobileMenuItems);
*/
    const mobileToggle = document.querySelector(".mobile__toggle-label");

    mobileToggle.onclick = function () {
        let currentIndex = 0;
        let delay;
        mobileMenuItems[currentIndex].classList.contains("mobile__menu-item_open") ? delay = 0 : delay = 200;
        let int = setInterval(function () {
            mobileMenuItems[currentIndex].classList.toggle("mobile__menu-item_open");
            currentIndex++;
            if (currentIndex >= mobileMenuItems.length) {
                clearInterval(int);
                currentIndex = 0;
                delay = 0;
            }
        }, delay);
    };

    /* slick slider */
    $('.news__slider').slick({
        speed: 800,
        autoplay: true,
        fade: true,
        cssEase: 'linear',
        arrows: true,
        dots: false,
        prevArrow: '<div class="news__arrow news__arrow_prev"></div>',
        nextArrow: '<div class="news__arrow news__arrow_next"></div>'
    });
};