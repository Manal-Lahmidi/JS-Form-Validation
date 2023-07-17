// Function to validate the login form
function validation() {
  // Retrieve form inputs
  var username = document.getElementById('user');
  var password = document.getElementById('pass');

  // Clear previous error messages
  document.getElementById('username').innerHTML = '';
  document.getElementById('passwords').innerHTML = '';

  // Validate username (required field)
  if (username.value.trim() === '') {
    document.getElementById('username').innerHTML = '* Username is required';
    username.focus();
    return false;
  }

  // Validate password (required field)
  if (password.value.trim() === '') {
    document.getElementById('passwords').innerHTML = 'Password is required';
    password.focus();
    return false;
  }

    // Validate password length
    if (password.value.trim().length < 8) {
      document.getElementById('passwords').innerHTML = '* Password should be at least 8 characters long';
      password.focus();
      return false;
    }

  // If all validations pass, the form is valid
  return true;
}
