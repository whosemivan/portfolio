const nav = document.querySelector('.main-nav');
const button = document.querySelector('.header__btn');
const headerTitle = document.querySelector('.header__title');
// for the animation pseudo elemet - ufo
const mainLink = document.querySelector('.header__link');
const header = document.querySelector('.header');

button.classList.remove('visually-hidden');
nav.classList.add('visually-hidden');

button.addEventListener('click', function() {
  nav.classList.toggle('visually-hidden');
  button.classList.toggle('header__btn--opened');
});

mainLink.addEventListener('click', () => {
  headerTitle.classList.add('header__title__wrapper--animation');

  setTimeout(() => {
    headerTitle.classList.add('header__title--decoration-element-animation');
  }, 2000)
});
