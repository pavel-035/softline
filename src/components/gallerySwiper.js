import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'

document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.swiper', {
    loop: true,
    modules: [Navigation, Pagination],
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next'
    },
    pagination: {
      el: '.gallery__pagination',
      bulletClass: 'gallery__bullet',
      bulletActiveClass: 'gallery__bullet_active',
    }
  })
})
