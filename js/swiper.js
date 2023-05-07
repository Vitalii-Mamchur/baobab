const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: false,

  pagination: {
    el: '.swiper-pagination',
    // type: 'progressbar',
  },

  // autoplay: {
  //   delay: 5000,
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
