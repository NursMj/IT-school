new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const burger = document.querySelector('.navbar-toggler');

burger.addEventListener('click', () => {
  document.querySelector('#navbarNav').classList.toggle('collapse')
})