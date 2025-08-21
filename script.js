// Get registration form element
const registrationForm = document.getElementById('registrationForm');
if (registrationForm) {
  // Add event listener for form submission
  registrationForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission
    // Perform validation here (e.g., check if passwords match, required fields are filled)
    // If validation passes, display success message
    alert('Registration Successfully Submitted!');
    console.log(registrationForm);
    // Optionally, submit the form data if needed
    registrationForm.submit();
  });
}

// Get login form element
const loginForm = document.getElementById('loginForm');

if (loginForm) {
  // Add event listener for login form submission
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission
    // Perform login validation here (e.g., check if email and password are valid)
    // If validation passes, display success message
    alert('Login Successfully Submitted!');
    console.log(loginForm);
    // Optionally, submit the form data if needed
    loginForm.submit();
  });
}