const nav = document.querySelector('.main-nav');
const button = document.querySelector('.header__btn');
const headerTitle = document.querySelector('.header__title');
// for the animation pseudo elemet - ufo
const mainLink = document.querySelector('.header__link');
const header = document.querySelector('.header');

const navImage = document.querySelector('.main-nav__image');
const navList = document.querySelector('.main-nav__list');

button.classList.remove('visually-hidden');
nav.classList.add('visually-hidden');
// navImage.classList.add('main-nav__image--hidden');
// navList.classList.add('main-nav__list--hidden');

button.addEventListener('click', function() {
  nav.classList.toggle('visually-hidden');
  // navImage.classList.toggle('main-nav__image--hidden');
  // navList.classList.toggle('main-nav__list--hidden');
  button.classList.toggle('header__btn--opened');
  header.classList.toggle('header--menu-open');
});

mainLink.addEventListener('click', (evt) => {
  evt.preventDefault();
  headerTitle.classList.add('header__title__wrapper--animation');

  setTimeout(() => {
    headerTitle.classList.add('header__title--hidden-decorate-element');
    headerTitle.classList.add('header__title--decoration-element-animation');
  }, 2000)
});
