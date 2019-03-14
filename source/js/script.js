var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.header-nav__toggle');
var cartModal = document.querySelector('.cart-modal');
var promoModalOpen = document.querySelector('.promo-product__btn');
var cardModalOpen = document.querySelectorAll('.card__btn');
var modalOverlay = document.querySelector('.modal-overlay');

var order = document.querySelector('.order__form');
var name = document.querySelectorAll('[name=name]');
var email = document.querySelector('[name=e-mail]');

//проверяем на поддержку js
navMain.classList.remove('main-nav--nojs');

//
navToggle.addEventListener('click', function() {
if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    navToggle.classList.remove('header-nav__toggle--closed');
    navToggle.classList.add('header-nav__toggle--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    navToggle.classList.remove('header-nav__toggle--opened');
    navToggle.classList.add('header-nav__toggle--closed');
  }
});

if (promoModalOpen) {
  promoModalOpen.addEventListener('click', function(evt) {
    evt.preventDefault();
    cartModal.classList.add('cart-modal--opened');
    modalOverlay.classList.add('modal-overlay--show');
  });
};

if (cardModalOpen.length) {
  for (var i = 0; i < cardModalOpen.length; i++) {
    cardModalOpen[i].addEventListener('click', function(evt) {
      evt.preventDefault();
      cartModal.classList.add('cart-modal--opened');
      modalOverlay.classList.add('modal-overlay--show');
    });
  }
};

if (modalOverlay) {
  modalOverlay.addEventListener('click', function(evt) {
    evt.preventDefault();
    cartModal.classList.remove('cart-modal--opened');
    modalOverlay.classList.remove('modal-overlay--show');
  });
};

//закрывает модальное окно по ESC
window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (cartModal.classList.contains("cart-modal--opened")) {
      cartModal.classList.remove("cart-modal--opened");
      modalOverlay.classList.remove("modal-overlay--show");
    }
  }
});
