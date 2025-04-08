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
