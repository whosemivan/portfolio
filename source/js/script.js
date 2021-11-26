const nav = document.querySelector('.main-nav');
const button = document.querySelector('.header__btn');
const headerWrapper = document.querySelector('.header__wrapper');
// for the animation pseudo elemet - ufo
const mainLink = document.querySelector('.header__link');
const header = document.querySelector('.header');

button.classList.remove('visually-hidden');
nav.classList.add('visually-hidden');

button.addEventListener('click', function() {
  nav.classList.toggle('visually-hidden');
  button.classList.toggle('page-header__btn--opened');
});

console.log(mainLink);
console.log(headerWrapper);

mainLink.addEventListener('click', () => {
  headerWrapper.classList.add('header__wrapper--animation');

  setTimeout(() => {
    header.classList.add('header--decoration-element-animation');
  }, 2000)
});