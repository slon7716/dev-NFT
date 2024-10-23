const btnburger = document.querySelector('.btn-burger');
const mobileContainer = document.querySelector('.mobile-container');
const toggleMobileMenu = () => {
   mobileContainer.classList.toggle('show');
   btnburger.classList.toggle('active');
}
btnburger.addEventListener('click', toggleMobileMenu);