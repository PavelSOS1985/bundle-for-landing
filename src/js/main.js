window.onload = function () {

    /* работа мобильного меню*/
    const mobileMenuItems = document.querySelectorAll(".mobile__menu-item_normal");
    const burger = document.querySelector("#burger");

    function openMenu(items) {
        let currentIndex = 0;
        let delay = 200;
        let int = setInterval(function () {
            items[currentIndex].classList.add("mobile__menu-item_open");
            currentIndex++;
            if (currentIndex >= items.length) {
                clearInterval(int);
                currentIndex = 0;
            }
        }, delay);
    }

    function closeMenu(items) {
        let currentIndex = 0;
        let delay = 0;
        let int = setInterval(function () {
            items[currentIndex].classList.remove("mobile__menu-item_open");
            currentIndex++;
            if (currentIndex >= items.length) {
                clearInterval(int);
                currentIndex = 0;
            }
        }, delay);
    }

    burger.onclick = function () {
        if (mobileMenuItems[0].classList.contains("mobile__menu-item_open")) {
            closeMenu(mobileMenuItems)
        } else {
            openMenu(mobileMenuItems)
        }
    };

    /* slick slider - news  */
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
    $('.partners__slider').slick({
        autoplay: true,
        centerMode: true,
        centerPadding: '90px',
        slidesToShow: 3,
        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerPadding: '40px',
                }
            },
            {
                breakpoint: 576,
                settings: {
                    centerPadding: '160px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 520,
                settings: {
                    centerPadding: '120px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 430,
                settings: {
                    centerPadding: '90px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 370,
                settings: {
                    centerPadding: '60px',
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.comments__slider').slick({
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 4,
        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 630,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });

    /* паралакс */
    $('.main-content').parallax({imageSrc: 'images/bg-body.jpg'});

    /* transform menu */
    const header = document.querySelector("#header");
    const headerLeftCol = document.querySelector("#header-left-col").classList;
    const headerRightCol = document.querySelector("#header-right-col");
    const headerLogo = document.querySelector("#header-logo").classList;
    const headerRightWrapper = document.querySelector("#header-right-wrapper");
    const headerPhones = document.querySelector("#header-phones").classList;
    const headerIconPhone = document.querySelector("#header-icon-phone").classList;
    const headerSecondPhone = document.querySelector("#header-second-phone").classList;
    const headerBtn = document.querySelector("#header-btn").classList;
    const headerMobile = document.querySelector("#header-mobile");
    const headerMenu = document.querySelector("#header-menu");
    const headerMenuBottom = document.querySelector("#header-menu-bottom").classList;

    window.onscroll = function () {
        let scroll = window.pageYOffset || document.documentElement.scrollTop;
        if (scroll > 1) {
            header.classList.remove("header_normal");
            header.classList.add("header_sticky");
            headerLeftCol.remove("col-sm-4", "col-md-3");
            headerLeftCol.add("col-sm-3", "col-md-2");
            headerRightCol.classList.remove("col-sm-8", "col-md-9");
            headerRightCol.classList.add("col-sm-9", "col-md-10");
            headerLogo.add("logo_sticky");
            headerRightWrapper.classList.remove("header__top", "header__top_normal");
            headerRightWrapper.classList.add("header__wrapper-sticky");
            headerPhones.remove("header__phones_normal");
            headerPhones.add("header__phones_sticky");
            headerIconPhone.remove("icon-phone_normal");
            headerIconPhone.add("icon-phone_sticky");
            headerSecondPhone.add("phone_sticky");
            headerBtn.add("dn");
            headerMobile.classList.remove("mobile_normal");
            headerMobile.classList.add("mobile_sticky");
            headerMenu.classList.remove("header__menu_right");
            headerMenu.classList.add("header__menu_sticky");
            headerRightWrapper.insertBefore(headerMenu, headerMobile);
            headerMenuBottom.add("dn");
        } else {
            header.classList.add("header_normal");
            header.classList.remove("header_sticky");
            headerLeftCol.add("col-sm-4", "col-md-3");
            headerLeftCol.remove("col-sm-3", "col-md-2");
            headerRightCol.classList.add("col-sm-8", "col-md-9");
            headerRightCol.classList.remove("col-sm-9", "col-md-10");
            headerLogo.remove("logo_sticky");
            headerRightWrapper.classList.add("header__top", "header__top_normal");
            headerRightWrapper.classList.remove("header__wrapper-sticky");
            headerPhones.add("header__phones_normal");
            headerPhones.remove("header__phones_sticky");
            headerIconPhone.add("icon-phone_normal");
            headerIconPhone.remove("icon-phone_sticky");
            headerSecondPhone.remove("phone_sticky");
            headerBtn.remove("dn");
            headerMobile.classList.add("mobile_normal");
            headerMobile.classList.remove("mobile_sticky");
            headerMenu.classList.add("header__menu_right");
            headerMenu.classList.remove("header__menu_sticky");
            headerRightCol.insertBefore(headerMenu, null);
            headerMenuBottom.remove("dn");
        }
    };
};