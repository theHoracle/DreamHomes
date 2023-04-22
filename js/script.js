// // Change background header
// function scrollHeader() {
//     const scrollY = window.pageYOffset
//     const header = document.getElementById('nav__list');
//     const stickyLink = document.querySelectorAll('.sticky_link')
//     if (scrollY >= 200) {
//         stickyLink.classList.add('scroll-header')
//     }else {
//         stickyLink.classList.remove('scroll-header')
//     }
// }
// window.addEventListener('scroll', scrollHeader)

// 2nd tiral
// const header = document.querySelector('#nav__list');
// const stickyLinks = document.querySelectorAll('.sticky_link');

// function toggleStickyHeader() {
//     if (window.pageYOffset >= 200 && ) {
//         header.classList.add('scroll-header');
//         stickyLinks.forEach(link => link.classList.add('scroll-links'));
//     } else {
//         header.classList.remove('scroll-header');
//         stickyLinks.forEach(link => link.classList.remove('scroll-links'));
//     }
// }

// window.addEventListener('scroll', toggleStickyHeader);

// const hamburger = document.querySelector('.hamburger');
// const popupMenu = document.querySelector('.nav_bar');

// hamburger.addEventListener('click', () => {
//   popupMenu.classList.toggle('popup-menu');
//   hamburger.classList.toggle('active');
//   stickyLinks.forEach(link => link.classList.remove('scroll-links'));
// });


const header = document.querySelector('#nav__list');
const stickyLinks = document.querySelectorAll('.sticky_link');
let hamburgerClicked = false;

function toggleStickyHeader() {
    if (window.pageYOffset >= 200 && !hamburgerClicked) {
        header.classList.add('scroll-header');
        stickyLinks.forEach(link => link.classList.add('scroll-links'));
    } else {
        header.classList.remove('scroll-header');
        stickyLinks.forEach(link => link.classList.remove('scroll-links'));
    }
}

window.addEventListener('scroll', toggleStickyHeader);

const hamburger = document.querySelector('.hamburger');
const popupMenu = document.querySelector('.nav_bar');

hamburger.addEventListener('click', () => {
  hamburgerClicked = !hamburgerClicked;
  popupMenu.classList.toggle('popup-menu');
  hamburger.classList.toggle('active');
  stickyLinks.forEach(link => link.classList.remove('scroll-links'));
});
