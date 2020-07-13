import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';

Swiper.use([Navigation, Pagination]);

const mySwiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 10,
  centeredSlides: true,
  breakpoints: {
    768:{
      spaceBetween: 15,
      slidesPerView: 2,
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

export default mySwiper;
