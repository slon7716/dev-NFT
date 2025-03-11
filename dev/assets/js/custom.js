            // Присваиваем класс 'active' текущей странице
const currentPage = window.location.pathname.split('/').pop() || 'index.html'; // Получаем текущий URL
// Находим все ссылки в навигации
const navLinks = document.querySelectorAll('.header-nav a, .container > a');
// Проверяем каждую ссылку
navLinks.forEach(link => {
  const linkHref = link.getAttribute('href');
  if (linkHref === currentPage) {
    link.classList.add('active'); // Добавляем класс активной ссылке
  }
});
             // Бургер-меню
const btnburger = document.querySelector('.burger');
const mobileContainer = document.querySelector('.mobile-container');
const toggleMobileMenu = () => {
  mobileContainer.classList.toggle('show');
  btnburger.classList.toggle('active');
};
btnburger.addEventListener('click', toggleMobileMenu);

const bannerSlider = new Swiper('.banner-slider', {
  speed: 900,
  slidesPerView: 2,
  spaceBetween: 40,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const carouselWeekly = new Swiper('.carousel-weekly', {
  speed: 700,
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
    },
  },
});

var swiper = new Swiper(".gallery", {
  speed: 700,
  slidesPerView: 'auto',
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
               // Присвоение цветов числам с процентами
const percent = document.querySelectorAll('[class*="__percent"]'); // выбор элементов где есть __percent
percent.forEach(item => {
  let string = item.textContent // Получаем текстовое содержимое элемента
  let stringComa = /,/g; // Поиск запятых
  let stringPercent = /%/gi; // Поиск знака процента
  let refactoringString = string
    .replace(stringComa, '.') // Заменяем , на .
    .replace(stringPercent, '') // Удаляем знак %
    .replace(/\s/g, ''); // Удаляем все пробелы
  let val = Number(refactoringString); // Преобразуем обработанную строку в число
  if (val > 0) { // присваиваем соответствующие классы, для выбора нужного цвета
    item.classList.add('percent-totop');
  } else if (val < 0) {
    item.classList.add('percent-tobottom');
  } else {
    item.classList.add('percent-zero');
  }
});
               // Переключение названия кнопки по клику
const buttons = document.querySelectorAll('.best-sellers .btn');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('unfollow');
    button.textContent = button.classList.contains('unfollow') ? 'unfollow' : 'follow';
  })
});
            // Активизация кнопки 'Product Detail' на странице 'place-bid'
document.querySelector('.history-back')?.addEventListener('click', () => {
  window.history.back();
});
// Классический вариант:
// const linkBack = document.querySelector('.history-back');
// if (linkBack) {
//   function historyBack() {
//     linkBack.addEventListener('click', function () {
//       window.historyBack();
//     })
//   }
// }
                      // Подключение niceSelect (jqerry) для стилизации списков
$(document).ready(function(){
  $('select').niceSelect();
// выбираем все .option элементы и вешаем на них событие клика
  $(".nice-select .list .option").on("click", function () {
    // выбираем ближайший nice-select в кликнутой опции
    const niceSelectContainer = $(this).closest(".nice-select");
    // добавляем класс selected в него
    niceSelectContainer.addClass("selected");
  });
});

if (document.querySelector('.widget')) {
  installWidget();
}
// другой вариант: document.querySelector('widget') ? installwidget() : null;

if (document.querySelector('.tabs')) {
  installTab();
}

if (document.querySelector('.accordion')) {
  installAccordion();
}

// git commit -m "optimization code 'unfollow'"