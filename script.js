// Store the password in the JS (in a real-world application, this should be done server-side)
const correctPassword = '2025';

// When you visit the admin page and enter the password
function authenticate() {
  const enteredPassword = document.getElementById('admin-password').value;
  const errorMessage = document.getElementById('error-message');

  if (enteredPassword === correctPassword) {
    // If the password is correct, redirect to the admin dashboard (the content editor page)
    localStorage.setItem('isAuthenticated', true);  // Store the authentication state
    window.location.href = 'editor.html';  // Redirect to editor page
  } else {
    // If the password is incorrect
    errorMessage.textContent = 'Incorrect password. Please try again.';
  }
}

// Handle displaying content after authentication
document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('isAuthenticated') === 'true') {
    // If authenticated, you can show an editor or any additional features
    window.location.href = 'editor.html';  // Go to the content editor
  }
});

// Editor Logic (on the editor page)
function updateContent() {
  const title = document.getElementById('editor-title').value;
  const description = document.getElementById('editor-description').value;
  const project = document.getElementById('editor-project').value;
  const about = document.getElementById('editor-about').value;

  localStorage.setItem('title', title);
  localStorage.setItem('description', description);
  localStorage.setItem('project', project);
  localStorage.setItem('about', about);

  alert('Content updated successfully!');
}

function loadEditorContent() {
  const title = localStorage.getItem('title') || 'Your Name';
  const description = localStorage.getItem('description') || 'Developer • Creator • Innovator';
  const project = localStorage.getItem('project') || 'Project 1';
  const about = localStorage.getItem('about') || 'Your bio goes here...';

  document.getElementById('editor-title').value = title;
  document.getElementById('editor-description').value = description;
  document.getElementById('editor-project').value = project;
  document.getElementById('editor-about').value = about;
}

// Automatically load editor content if authenticated
if (window.location.pathname === '/editor.html') {
  loadEditorContent();
}
