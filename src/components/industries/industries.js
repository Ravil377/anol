import Swiper, { Pagination, Navigation } from "swiper";
Swiper.use([Pagination, Navigation]);

const industries = '.industries__slider-js ';

if(document.querySelector(industries)) {
    const industriesSlider = new Swiper(industries, {
        slidesPerView: 'auto',
        centeredSlides: true,
        loop: true,
        initialSlide: 1,
        navigation: {
            nextEl: '.ourwork__next-js',
            prevEl: '.ourwork__prev-js',
        },
    })
}