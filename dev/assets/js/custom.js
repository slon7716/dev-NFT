const btnburger = document.querySelector('.burger');
const mobileContainer = document.querySelector('.mobile-container');
const toggleMobileMenu = () => {
  mobileContainer.classList.toggle('show');
  btnburger.classList.toggle('active');
}
btnburger.addEventListener('click', toggleMobileMenu);

const bannerSlider = new Swiper('.banner-slider', {
  speed: 900,
  slidesPerView: 2,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const carouselWeekly = new Swiper('.carousel-weekly', {
  speed: 900,
  slidesPerView: 'auto',
  spaceBetween: 28,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: '.weekly-button-next',
    prevEl: '.weekly-button-prev',
  },
  breakpoints: {
    1025: {
      spaceBetween: 40,
    }
  }
});

if (document.querySelector('.widget')) {
  installwidget();
}
//другой вариант: document.querySelector('widget') ? installwidget() : null;

if (document.querySelector('.tab')) {
  installtab();
}
