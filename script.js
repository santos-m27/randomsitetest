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

// Load current content from the server
function loadCurrentContent() {
  fetch('/api/getContent')
  .then(response => response.json())
  .then(data => {
    console.log('Fetched data:', data);  // Log the data to check it
    
    // Check if elements exist before assigning values
    const titleElement = document.getElementById('title');
    const descriptionElement = document.getElementById('description');
    const projectsElement = document.getElementById('projects');
    
    if (titleElement) {
      titleElement.textContent = data.title || ''; // Default to an empty string if no title
    }
    if (descriptionElement) {
      descriptionElement.textContent = data.description || ''; // Default to an empty string if no description
    }
    if (projectsElement) {
      projectsElement.textContent = data.projects ? data.projects.join(', ') : ''; // Default to empty string if no projects
    }
  })
  .catch(error => console.error('Error loading content:', error));
}

document.addEventListener('DOMContentLoaded', function() {
    loadCurrentContent();
  });