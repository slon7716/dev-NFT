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

const btnLayout = document.querySelectorAll('.layout-case__button');
const widjet = document.querySelector('.widjet');
const layoutItem = document.querySelectorAll('[data-layout]');
const customWidjet = document.querySelectorAll('.layout-menu');

btnLayout.forEach(btn => {
  btn.addEventListener('click', function () {
    btn.closest('.layout-menu').classList.toggle('show');
  });
});

function checkLayOutCookie(dataLayout) {
  if (widjet) {
    widjet.classList.remove('list', 'grid');
    widjet.classList.add(dataLayout);
  } else {
    console.warn('Элемент widjet не найден!');
  }

  if (document.cookie === 'layoutCase=grid') {
    widjet.classList.remove('list');
    widjet.classList.add('grid');
  } else {
    widjet.classList.add('list');
    widjet.classList.remove('grid');
  }
}

checkLayOutCookie('list');

layoutItem.forEach(item => {
  item.addEventListener('click', function () {
    let dataLayout = item.getAttribute('data-layout');
    document.cookie = 'layoutCase=' + dataLayout;

    checkLayOutCookie(dataLayout);
    
    const thisNavigation = item.closest('.layout-case');
    if (thisNavigation) {
      const thisNavigationItems = thisNavigation.querySelectorAll('layout-case__item');
      thisNavigationItems.forEach(li => {
        li.classList.remove('active');
      })
      item.classList.add('active');
    } else {
      console.warn('Элемент .layout-case не найден для:', item);
    }
    });
});

function closeAllWidjet() {
  customWidjet.forEach(item => {
    document.addEventListener('click', function (event) {
      const inRoundarries = event.composedPath().includes(item);
      if (!inRoundarries) {
        item.classList.remove('show');
      }
    });
  });
}

closeAllWidjet();

// const openButton = document.querySelectorAll('[data-custom-widjet="open-button"]');
// openButton.forEach(btn => {
  //   btn.addEventListener('click', function(e) {
    //     btn.closest('.layout-menu').classList.toggle('show')
    //   })
    // });
    