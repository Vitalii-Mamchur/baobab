const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: false,

  // pagination: {
  //   el: '.swiper-pagination',
  //   // type: 'progressbar',
  // },

  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },

  speed: 800,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // effect: 'fade',
  // fadeEffect: {
  //   crossFade: true,
  // },
});
