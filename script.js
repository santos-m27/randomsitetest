// This will handle the loader and captcha logic
const loaderContainer = document.getElementById("loader-container");
const mainContent = document.getElementById("main-content");
const captchaInput = document.getElementById("captcha");

// Check if the captcha is completed (value = 100)
captchaInput.addEventListener("input", function() {
  if (captchaInput.value == 100) {
    // If the captcha is complete, hide the loader and show the main content
    loaderContainer.style.display = "none";  // Hide loader
    mainContent.style.display = "block";  // Show main content
  }
});

// To prevent showing the loader again if the page is revisited
if (sessionStorage.getItem("visited")) {
  loaderContainer.style.display = "none";
  mainContent.style.display = "block";
} else {
  sessionStorage.setItem("visited", "true");
}
