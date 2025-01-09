function installWidget() {
   const openButtons = document.querySelectorAll('[data-custom-widget="open-button"]'); // Обработчик клика на кнопку
   const customWidgetsMenu = document.querySelectorAll('[data-custom-widget="menu"]'); // Обработчик клика на .layout-menu
   
   openButtons.forEach(btn => { // Добавляем обработчик событий на кнопки открытия меню
      btn.addEventListener('click', function () { // По событию 'клик'
         btn.closest('.layout-menu').classList.toggle('show'); // находим родительское меню и переключаем класс "show"
      });
   });
   
   function closeAllwidgetMenu() {
      customWidgetsMenu.forEach(item => { //создаётся массив с ссылками на все widjet с классом .layout-menu
         document.addEventListener('click', function (event) { //событие click слушается для всего документа
            const inRoundarries = event.composedPath().includes(item); // проверяем, клик внутри элемента
            if (!inRoundarries) {
               item.classList.remove('show'); // скрываем меню, если клик был вне элемента 
            }
         });
      });
   }
   closeAllwidgetMenu(); // вызываем функцию закрытия виджетов
   
   let date = new Date(Date.now() + 86400e3 * 365);
   date = date.toUTCString();

   function getCookie(name) {
      let matches = document.cookie.match(new RegExp(
         "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
      ));
      return matches ? decodeURIComponent(matches[1]) : undefined;
   }

   customWidgetsMenu.forEach((menu, index) => {// Получаем сохранённое значение из cookies
      let widgetCookie = getCookie('layoutCase-' + (index + 1));
      const widget = menu.closest('.widget');
      const itemList = widget.querySelector('[data-layout="list"]');
      const itemGrid = widget.querySelector('[data-layout="grid"]');

      if (widgetCookie === 'grid') {
         itemList.classList.remove('active'); // Убираем "active" у data-layout="list"
         widget.classList.add('grid');       // Устанавливаем класс для виджета
         itemGrid.classList.add('active');   // Делаем "grid" активным
      } else if (widgetCookie === 'list') {
         itemGrid.classList.remove('active'); // Убираем "active" у data-layout="grid"
         widget.classList.add('list');        // Устанавливаем класс для виджета
         itemList.classList.add('active');    // Делаем "list" активным
      }  else { // Если cookies нет, применяем состояние по умолчанию
         itemGrid.classList.remove('active'); // Убираем "active" у другого элемента
         widget.classList.add('list');        // Устанавливаем класс для виджета
         itemList.classList.add('active');    // Делаем "list" активным
      }

      menu.addEventListener('click', function () {// Устанавливаем слушатели кликов
         const dataLayout = menu.querySelectorAll('[data-layout]');
         dataLayout.forEach(item => {
            item.addEventListener('click', function () {
               const widget = item.closest('.widget');
               const thisNavigation = item.closest('.layout-case');
               const thisNavigationItems = thisNavigation.querySelectorAll('.layout-case__item');

               thisNavigationItems.forEach(navItem => {
                  navItem.classList.remove('active');
               });

               item.classList.add('active');
               const dataLayoutValue = item.getAttribute('data-layout');

               if (dataLayoutValue === 'grid') {
                  widget.classList.remove('list');
                  widget.classList.add('grid');
               } else if (dataLayoutValue === 'list') {
                  widget.classList.remove('grid');
                  widget.classList.add('list');
               }

               let layoutCase = 'layoutCase-' + (index + 1);
               let widgetLayoutCookie = layoutCase + "=" + dataLayoutValue + "; expires=" + date;
               document.cookie = widgetLayoutCookie;
               console.log(widgetLayoutCookie);
            });
         });
      });
   });
}

// const widget = document.querySelector('.widget');
// // Получаем виджет
// const btnLayout = document.querySelectorAll('.layout-case__button');
// // Получаем все кнопки, которые открывают меню компоновки
// const layoutItem = document.querySelectorAll('[data-layout]');
// // Получаем все элементы, которые могут задавать компоновку (list или grid)
// const customwidget = document.querySelectorAll('.layout-menu');
// // Получаем все меню компоновки

// btnLayout.forEach(btn => { // Добавляем обработчик событий на кнопки открытия меню
//   btn.addEventListener('click', function () { // По событию 'клик'
//     btn.closest('.layout-menu').classList.toggle('show'); // находим родительское меню и переключаем класс "show"
//   });
// });

// function checkLayOutCookie(dataLayout) { // Функция для применения стилей на основе значения dataLayout
//   if (widget) {
//     widget.classList.remove('list', 'grid'); // Удаляем классы 'list' и 'grid', чтобы избежать конфликта
//     widget.classList.add(dataLayout); // Применяем новый класс, соответствующий текущему dataLayout
//   } else {
//     console.warn('Елемент widget не знайдено!'); // Если widget не найден выводим в консоль
//   }

//   if (document.cookie === 'layoutCase=grid') { // Проверяем значение куки и устанавливаем соответствующую компоновку
//     widget.classList.remove('list');
//     widget.classList.add('grid');
//   } else {
//     widget.classList.remove('grid');
//     widget.classList.add('list');
//   }
// }

// checkLayOutCookie('list'); // Устанавливаем вид компоновки по умолчанию (например, 'list')

// layoutItem.forEach(item => {
//   item.addEventListener('click', function () {
//     let dataLayout = item.getAttribute('data-layout');
//     document.cookie = 'layoutCase=' + dataLayout;
//     checkLayOutCookie(dataLayout); // передаем layout в функцию

//     const thisNavigation = item.closest('.layout-case'); // ищем ближайший родительский элемент
//     if (thisNavigation) {
//       const thisNavigationItems = thisNavigation.querySelectorAll('.layout-case__item'); // ищем все элементы списка
//       thisNavigationItems.forEach(item => {
//         item.classList.remove('active'); // убираем активный класс со всех элементов
//       })
//       item.classList.add('active'); // добавляем активный класс на текущий элемент
//     } else {
//       console.warn('Елемент .layout-case не знайдено для:', item); // если .layout-case не найден выводим в консоль
//     }
//     });
// });

// function closeAllwidget() {
//   customwidget.forEach(item => {
//     document.addEventListener('click', function (event) {
//       const inRoundarries = event.composedPath().includes(item); // проверяем, клик внутри элемента
//       if (!inRoundarries) {
//         item.classList.remove('show'); // скрываем меню, если клик был вне элемента
//       }
//     });
//   });
// }
// closeAllwidget(); // вызываем функцию закрытия виджетов
