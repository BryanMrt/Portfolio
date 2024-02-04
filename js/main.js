// MOBILE NAV
const hamburgerIcon = document.querySelector(".menu_toggle");
const navigation = document.querySelector("nav");

hamburgerIcon.addEventListener("click",toggleNav);

function toggleNav() {
    hamburgerIcon.classList.toggle("active");
    navigation.classList.toggle("active");
}

// CLICKED CLASS

const currentSpan = document.querySelector(".current span");

addEventListener("click",function () {
        currentSpan.classList.add("current");
      })
