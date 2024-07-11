const burger = document.querySelector('.header__burger');
const headerClose = document.querySelector('.header__close');
const headerMenu = document.querySelector('.header__menu');
const heroButton = document.querySelector('.hero__button');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.close');

function onBurgerClick() {
  headerMenu.classList.toggle('is-hidden');
}
function onModalClick() {
  modal.classList.toggle('is-hidden');
}

burger.addEventListener('click', onBurgerClick);
headerClose.addEventListener('click', onBurgerClick);

if (heroButton) {
heroButton.addEventListener('click', onModalClick);
modalClose.addEventListener('click', onModalClick);
}