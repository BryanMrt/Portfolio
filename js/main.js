// MOBILE NAV
const hamburgerIcon = document.querySelector(".menu_toggle");
const navigation = document.querySelector("nav");

hamburgerIcon.addEventListener("click",toggleNav);

function toggleNav() {
    hamburgerIcon.classList.toggle("active");
    navigation.classList.toggle("active");
}

// activ nav

const navLinkElements = document.querySelectorAll('.nav-link');
const sectionElements = document.querySelectorAll('.section');

let currentSection =  'home';

window.addEventListener('scroll', () => {
  sectionElements.forEach(sectionElement => {
    if(window.scrollY >= (sectionElement.offsetTop - sectionElement.clientHeight / 4)) {
      currentSection = sectionElement.id;
    }
  });

  navLinkElements.forEach(navLinkElement => {
    if(navLinkElement.href.includes(currentSection)) {
      document.querySelector('.active-nav').classList.remove('active-nav');
      navLinkElement.classList.add('active-nav');
    }
  });
});
