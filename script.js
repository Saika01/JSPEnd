const menuActive = document.querySelector('.menu');
const burger = document.querySelector('.navigation-right');
const burgerMobile = document.querySelector('.nav-burger');

function toggleMenu() {
    menuActive.classList.toggle('hidden');
}

burger.addEventListener('click', toggleMenu);
burgerMobile.addEventListener('click', toggleMenu);