// Typing dots animation
const dots = document.querySelectorAll(".dot");
const loader = document.querySelector(".loader-container");
const mainContent = document.getElementById("main-content");
const captcha = document.getElementById("captcha");

// Sound Effects
const clickSound = new Audio("assets/sound1.mp3");
const typingSound = new Audio("assets/sound2.mp3");

// Animate page transition on captcha completion
captcha.addEventListener("input", () => {
  if (captcha.value >= 100) {
    mainContent.style.display = "block";
    loader.style.display = "none";
    clickSound.play();
    setTimeout(() => {
      mainContent.style.opacity = 1;
    }, 500);
  }
});

// Fade-in transition
window.addEventListener("load", () => {
  setTimeout(() => {
    document.body.style.transition = "opacity 1s ease-in";
    document.body.style.opacity = 1;
  }, 500);
});

document.addEventListener("DOMContentLoaded", function () {
    const loaderContainer = document.querySelector(".loader-container");
    const mainContent = document.getElementById("main-content");
  
    // Check if the user has already visited
    if (localStorage.getItem("visited")) {
      // User has already visited, skip the loader
      loaderContainer.style.display = "none";
      mainContent.style.display = "block";
    } else {
      // User is visiting for the first time
      localStorage.setItem("visited", "true");
  
      // Wait for the loader to finish, then show main content
      setTimeout(function () {
        loaderContainer.style.display = "none";
        mainContent.style.display = "block";
      }, 3000); // Adjust this timeout value to match the duration of the loading animation
    }
  });
  