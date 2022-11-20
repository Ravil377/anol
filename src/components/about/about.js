import Swiper, { Pagination, Navigation } from "swiper";
Swiper.use([Pagination, Navigation]);

const adv = '.about__adv-slider-js';

if(document.querySelector(adv)) {
    advSlider = new Swiper(adv, {
        slidesPerView: 1,
        loop: true,
        spaceBetween: 2,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1300: {
              slidesPerView: 4,
            },
        },
        navigation: {
            nextEl: '.about__adv__button-next-js',
            prevEl: '.about__adv__button-prev-js',
        },
    })
}