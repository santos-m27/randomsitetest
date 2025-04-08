const passwordInput = document.getElementById('password');
const loginBtn = document.getElementById('loginBtn');
const loginForm = document.querySelector('.login-form');
const editSection = document.querySelector('.edit-section');
const editForm = document.getElementById('editForm');

// Login handler
loginBtn.addEventListener('click', function() {
  const password = passwordInput.value;
  if (password === '2025') {
    loginForm.style.display = 'none'; // Hide login form
    editSection.style.display = 'block'; // Show the edit section
    loadCurrentContent(); // Load current content from API
  } else {
    alert('Incorrect password!');
  }
});

// Save the changes to the server
editForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const projects = document.getElementById('projects').value.split(',');

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
