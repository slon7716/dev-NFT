// Получаем текущий URL
const currentPage = window.location.pathname.split('/').pop() || 'index.html';

// Находим все ссылки в навигации
const navLinks = document.querySelectorAll('.header-nav a, .container > a');

// Проверяем каждую ссылку
navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');

    if (linkHref === currentPage) {
        link.classList.add('active'); // Добавляем класс активной ссылке
    }
})

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

// const widgetUserPercent = document.querySelectorAll('.widget-user__percent') // выбор всех элементов с классом .wiget-user__percent
// widgetUserPercent.forEach(item => {
//   let string = item.textContent // Получаем текстовое содержимое элемента
//   let stringComa = /,/g; // Замена запятых на точки
//   let stringPercent = /%/gi; // Удаление знака процента
//   let refactoringString = string.replace(stringComa, '.').replace(stringPercent, '');
//   let val = Number(refactoringString); // Преобразуем обработанную строку в число
//   if (val > 0) {
//     item.classList.add('percent_totop');
//   } else if (val < 0) {
//     item.classList.add('percent_tobottom');
//   } else {
//     item.classList.add('percent_zero');
//   }
// })

const percent = document.querySelectorAll('[class*="__percent"]'); // выбор всех элементов где есть __percent
percent.forEach(item => {
  let string = item.textContent // Получаем текстовое содержимое элемента
  let stringComa = /,/g; // Замена запятых на точки
  let stringPercent = /%/gi; // Удаление знака процента
  let refactoringString = string
    .replace(stringComa, '.') // Заменяем , на .
    .replace(stringPercent, '') // Удаляем знак %
    .replace(/\s/g, ''); // Удаляем все пробелы
  let val = Number(refactoringString); // Преобразуем обработанную строку в число
  if (val > 0) {
    item.classList.add('percent-totop');
  } else if (val < 0) {
    item.classList.add('percent-tobottom');
  } else {
    item.classList.add('percent-zero');
  }
})

const linkBack = document.querySelector('.history-back');
function historyBack() {
  linkBack.addEventListener('click', function () {
    window.historyBack();
  })
}
linkBack ? historyBack : null;

if (document.querySelector('.widget')) {
  installWidget();
}
//другой вариант: document.querySelector('widget') ? installwidget() : null;

if (document.querySelector('.tabs')) {
  installTab();
}

if (document.querySelector('.accordion')) {
  installAccordion();
}