import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';

export default class Slider {
  constructor() {
    this.mySwiper = null;
  }

  init() {
    Swiper.use([Navigation, Pagination]);
    this.mySwiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      loop: true,
      // wrapperClass: 'swiper-container__wrapper', //даже после замены названия класса и изменения в разметке, выдает ошибку swiper-wrapper is null
      // slideClass: 'swiper-container__slide',
      breakpoints: {
        500: {
          spaceBetween: 8,
          slidesPerView: 1.2,
        },
        768:{
          spaceBetween: 8,
          slidesPerView: 2.2,
        },
        1200: {
          spaceBetween: 8,
          slidesPerView: 2.5,
        },
        1440: {
          centeredSlides: true,
          spaceBetween: 8,
          slidesPerView: 3.3,
        }
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    return this.mySwiper;
  }
}
