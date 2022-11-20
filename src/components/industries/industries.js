import Swiper, { Pagination, Navigation } from "swiper";
Swiper.use([Pagination, Navigation]);
import enquire from 'enquire.js'

const industries = '.industries__slider-js ';
var industriesSlider;
var indSlide = document.querySelector('.industries__wrapper-js');

const openHref = (e) => {
    const target = e.target;
    if(target.classList.contains('industries__slide')) {
        location.href=target.dataset.href;
    }
}

indSlide && indSlide.addEventListener('click', openHref);

enquire.register('screen and (min-width: 768px)', {
	match() {
        if(document.querySelector(industries)) {
            indSlide.removeEventListener('click', openHref);

            industriesSlider = new Swiper(industries, {
                slidesPerView: 'auto',
                loop: true,
                centeredSlides: true,
                centeredSlidesBounds: true,
                navigation: {
                    nextEl: '.industries__button-next-js',
                    prevEl: '.industries__button-prev-js',
                },
            })
        }

	},
	unmatch() {
		industriesSlider.destroy(false, true);
        indSlide.addEventListener('click', openHref);
	}
})