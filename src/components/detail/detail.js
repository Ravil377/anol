import Swiper, { Navigation, Thumbs, EffectFade } from "swiper";
Swiper.use([Navigation, Thumbs, EffectFade]);

const detail = '.detail__slider-js';

if(document.querySelector(detail)) {
    const detailThumbs= new Swiper(".detail__thumbnail-js", {
        spaceBetween: 20,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
        direction: 'horizontal',
        breakpoints: {
            576: {
                direction: 'vertical',
            },
        }
    });
    const detailSlider = new Swiper(detail, {
        slidesPerView: 1,
        spaceBetween: 30,
        effect: "fade",
        fadeEffect: {
          crossFade: true
        },
        thumbs: {
            swiper: detailThumbs,
        },
        navigation: {
            nextEl: '.detail__button-next-js',
            prevEl: '.detail__button-prev-js',
        },
    })
}
