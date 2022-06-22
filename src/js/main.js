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

// const login = document.querySelector('#login');

// login.addEventListener('click', (e) => {
//   e.preventDefault();

  
// })

let myModal = document.getElementById('myModal')
let myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})