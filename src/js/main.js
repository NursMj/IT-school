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

const modal = document.querySelector('#modal-form'),
      modalEmail = document.querySelector('.modal-email'),
      modalPsw = document.querySelector('.modal-psw');

modal.addEventListener('submit', (e) => {
  e.preventDefault();
  if (modalEmail.value === 'beka@gmail.com' && modalPsw.value === 'beka123456') {
    window.location = 'personal.html'
  } else {
    e.target.reset();
    document.querySelector('.error-message').classList.add('error-message_active');
  }
})