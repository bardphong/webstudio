const burger = document.querySelector('.header__burger');
const headerClose = document.querySelector('.header__close');
const headerMenu = document.querySelector('.header__menu');
const headerContacts = document.querySelector('.header__nav__link__contacts');
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

headerContacts.addEventListener('click', onModalClick);
modalClose.addEventListener('click', onModalClick);
