const btnburger = document.querySelector('.btn-burger');
const mobileContainer = document.querySelector('.mobile-container');
const toggleMobileMenu = () => {
   mobileContainer.classList.toggle('show');
   btnburger.classList.toggle('active');
}
btnburger.addEventListener('click', toggleMobileMenu);

const swiper = new Swiper('.swiper', {
  slidesPerView: 2,
  loop: true,
  speed: 700,
  spaceBetween:20,
  navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
  },
 });