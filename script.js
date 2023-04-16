const menuIcon = document.querySelector('.menu');
const mainNav = document.querySelector('.second-navbar');
const exitIcon = document.querySelector('.exit');
const navLinks = document.querySelectorAll('.nav-links li');
const body = document.querySelector('body');

function mobileMenu() {

  menuIcon.addEventListener('click', () => {
    mainNav.classList.add('main-nav-active');
    body.classList.add('overflow-hidden');
  });
  exitIcon.addEventListener('click', () => {
    mainNav.classList.remove('main-nav-active');
    body.classList.remove('overflow-hidden');
  });
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('main-nav-active');
      body.classList.remove('overflow-hidden');
    });
  });
}

mobileMenu();