var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.header-nav__toggle');
var cartModal = document.querySelector('.cart-modal');
var cartModalOpen = document.querySelector('.promo-product__btn');
var cartModalClose = document.querySelector('.cart-nodal__btn');
var modalOverlay = document.querySelector('.modal-overlay');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
if(navMain.classList.contains('main-nav--closed')) {
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

cartModalOpen.addEventListener('click', function(evt) {
  evt.preventDefault();
  cartModal.classList.add('cart-modal--opened');
  modalOverlay.classList.add('modal-overlay--show');
});

cartModalClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  cartModal.classList.remove('cart-modal--opened');
  modalOverlay.classList.remove('modal-overlay--show');
});

modalOverlay.addEventListener('click', function(evt) {
  evt.preventDefault();
  cartModal.classList.remove('cart-modal--opened');
  modalOverlay.classList.remove('modal-overlay--show');
});
