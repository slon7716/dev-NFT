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
  }
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

const linkBack = document.querySelector('.history-back');

function historyBack() {
  linkBack.addEventListener('click', function () {
    window.historyBack();
  })
}
linkBack ? historyBack : null;

if (document.querySelector('.widget')) {
  installwidget();
}
//другой вариант: document.querySelector('widget') ? installwidget() : null;

if (document.querySelector('.tabs')) {
  installtab();
}

//   Присваиваем классы с индексами для управления кнопками и контентом:
// const tabs = document.querySelectorAll('.tabs');
// const tabsNav = document.querySelectorAll('.tabs__nav');
// tabs.forEach((item, index) => {
//    item.classList.add('tabs-' + index);
// })
// tabsNav.forEach((item, index) => {
//    item.classList.add('tabs__nav-' + index);
// })
// tabsComtent.forEach((item, index) => {
//    item.classList.add('tabs__content-' + index);
// })
// tabsButton.forEach((item, index) => {
//    item.classList.add('tabs__button-' + index);
// })
//        Более оптимальный вариант:
// function addClass(selectors, className) {
//    selectors.forEach((item, index) => {
//       item.classList.add(className + index);
//    })
// }
// addClass(tabs, 'tabs-');
// addClass(tabsNav, 'tabs__nav-');
// addClass(tabsComtent, 'tabs__content-');
// addClass(tabsButton, 'tabs____button-')
