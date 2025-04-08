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
  } else {
    alert('Incorrect password!');
  }
});

// Save the changes (This is just an example. You should implement actual saving functionality)
editForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const projects = document.getElementById('projects').value.split(',');

  // Save the changes (you can implement saving to a database or localStorage)
  console.log('New Title:', title);
  console.log('New Description:', description);
  console.log('New Projects:', projects);

  // Here, you can save the data to localStorage or a backend.
  localStorage.setItem('title', title);
  localStorage.setItem('description', description);
  localStorage.setItem('projects', JSON.stringify(projects));

  alert('Changes saved!');
});
