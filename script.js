const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const iconMenu = document.querySelector('.icon-menu');
const navigationMenu = document.querySelector('.navigation-icon-menu');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});

iconMenu.addEventListener('click', () => {
    navigationMenu.classList.add('menu-active');
});

document.addEventListener('click', (e) => {

    if (!navigationMenu.contains(e.target) && !iconMenu.contains(e.target)) {
        navigationMenu.classList.remove('menu-active');
    }

});




