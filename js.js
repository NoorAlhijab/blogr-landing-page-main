const hamburger = document.getElementById('hamburger');
const mainNav = document.getElementById('main-nav');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('show');
  mainNav.classList.toggle('show');
});
