const modalTrigger = document.querySelector('[data-target]');
const modalWindow = document.querySelector('.modal');

modalTrigger.addEventListener('click', () => {
   modalWindow.classList.add('show');
});

const closeModal = document.querySelector('.modal__close');

closeModal.addEventListener('click', () => {
   modalWindow.classList.remove('show'); // Убираем класс 'show'
});
// Закрытие при клике на фон (за пределами содержимого окна)
// modalWindow.addEventListener('click', (e) => {
//    if (e.target === modalWindow) {
//       modalWindow.classList.remove('show');
//    }
// });
