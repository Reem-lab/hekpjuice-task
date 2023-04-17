const menuIcon = document.querySelector('.menu');
const mainNav = document.querySelector('.second-navbar');
const exitIcon = document.querySelector('.exit');
const navLinks = document.querySelectorAll('.nav-links li');
const body = document.querySelector('body');
const closeBtn = document.querySelector('.closebtn')
const topNavBar = document.querySelector('.top-navbar');
const rightSideImg = document.querySelector('.rightSide-img')
const closeImg = document.querySelector('.closeBtn-icon')

closeBtn.addEventListener('click', () => {
  topNavBar.classList.add('display-hidden');
} )

closeImg.addEventListener('click', () => {
  rightSideImg.classList.add('rightSideImg-hidden');
})

const removeMenu = () => {
  mainNav.classList.remove('main-nav-active');
  body.classList.remove('overflow-hidden');
}

  menuIcon.addEventListener('click', () => {
    mainNav.classList.add('main-nav-active');
    body.classList.add('overflow-hidden');
  });

  exitIcon.addEventListener('click', removeMenu);

  navLinks.forEach((link) => {
    link.addEventListener('click', removeMenu )
  });
