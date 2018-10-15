<script>
  var navMain = document.querySelector('.main-nav');
  var navToggle = document.querySelector('.header-nav__toggle');

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
</script>
