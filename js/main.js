// MOBILE NAV
const hamburgerIcon = document.querySelector(".menu_toggle");
const navigation = document.querySelector("nav");

hamburgerIcon.addEventListener("click",toggleNav);

function toggleNav() {
    hamburgerIcon.classList.toggle("active");
    navigation.classList.toggle("active");
}

// ACTIVE NAV

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

// INPUT VERIFY FORM 

const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const notification = document.getElementById("notification");

async function sendMessage(data) {
  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });
    if (response.ok) {
      // return "Votre message a été envoyé avec succès !";
      Swal.fire({
        title: "Good job!",
        text: "Votre message a été envoyé avec succès !",
        icon: "success"
      });
    } else {
      const responseData = await response.json();
      if (responseData.hasOwnProperty('errors')) {
        return responseData.errors.map(error => error.message).join(", ");
      } else {
        return "Oops! There was a problem submitting your form";
      }
    }
  } catch (error) {
    return "Oops! There was a problem submitting your form";
  }
}

function checkInputs() {
  const items = document.querySelectorAll(".item");

  for (const item of items) {
    if ( item.value === "") {
      item.classList.add("error");
      item.parentElement.classList.add("error");
    }
    item.addEventListener("keyup", () => {
      if (item.value !== "") {
        item.classList.remove("error");
        item.parentElement.classList.remove("error");
      } else {
        item.classList.add("error");
        item.parentElement.classList.add("error");
      }
    });
  }
}

async function handleSubmit(event) {
  event.preventDefault();
  checkInputs();

  const data = new FormData(form);
  const message = await sendMessage(data);
  showNotification(message);
}

function showNotification(message) {
  notification.textContent = message;
  notification.style.display = "block";
  setTimeout(() => {
    notification.style.display = "none";
  }, 5000); // Disparition automatique après 5 secondes
}

form.addEventListener("submit", handleSubmit);