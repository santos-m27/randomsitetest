const passwordInput = document.getElementById('password');
const loginBtn = document.getElementById('loginBtn');
const loginForm = document.querySelector('.login-form');
const editSection = document.querySelector('.edit-section');
const editForm = document.getElementById('editForm');

// Login handler
loginBtn.addEventListener('click', function() {
  const password = passwordInput.value;
  
  // Validate password input
  if (!password) {
    alert('Please enter a password!');
    return;
  }

  if (password === '2025') {
    loginForm.style.display = 'none'; // Hide login form
    editSection.style.display = 'block'; // Show the edit section
    loadCurrentContent(); // Load current content from API
  } else {
    alert('Incorrect password!');
  }
});

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
        titleElement.value = data.title || ''; // Default to an empty string if no title
      }
      if (descriptionElement) {
        descriptionElement.value = data.description || ''; // Default to an empty string if no description
      }
      if (projectsElement) {
        projectsElement.value = data.projects ? data.projects.join(', ') : ''; // Default to empty string if no projects
      }
    })
    .catch(error => console.error('Error loading content:', error));
}

// Save the changes to the server
editForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const projects = document.getElementById('projects').value
    .split(',')
    .map(project => project.trim()); // Remove leading/trailing spaces from each project name

  const updatedContent = {
    title: title,
    description: description,
    projects: projects
  };

  fetch('/api/updateContent', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedContent)
  })
  .then(response => response.json())
  .then(data => {
    alert(data.message);
  })
  .catch(error => console.error('Error updating content:', error));
});
