const isActiveSwiper = () => {
  let swiper, isActive;
  // const $window = window;

  swiperFunc();
  window.addEventListener('resize', swiperFunc);
  // window.resizeBy(swiperFunc);

  function swiperFunc() {
    const initNeeded = document.documentElement.clientWidth > 520;

    isActive = isActive !== undefined ? isActive : !initNeeded;

    if (initNeeded && !isActive) {
      swiper = new Swiper('.swiper', {
        loop: false,

        speed: 1200,

        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
      isActive = true;
    }
    if (!initNeeded && isActive) {
      swiper.disable();
      isActive = false;
    }
  }

  swiperFunc();
};

isActiveSwiper();
