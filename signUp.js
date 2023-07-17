// Function to validate the form
function validation() {
  // Retrieve form inputs
  var name = document.getElementById('name');
  var email = document.getElementById('emails');
  var username = document.getElementById('user');
  var password = document.getElementById('pass');
  var confirmPassword = document.getElementById('conpass');
  var mobileNumber = document.getElementById('mobileNumber');

  // Clear previous error messages
  document.getElementById('Name').innerHTML = '';
  document.getElementById('emailids').innerHTML = '';
  document.getElementById('username').innerHTML = '';
  document.getElementById('passwords').innerHTML = '';
  document.getElementById('confrmpass').innerHTML = '';
  document.getElementById('mobileno').innerHTML = '';

  // Validate name (required field)
  if (name.value.trim() === '') {
    document.getElementById('Name').innerHTML = '* Name is required';
    name.focus();
    return false;
  }

  // Validate email (required field)
  if (email.value.trim() === '') {
    document.getElementById('emailids').innerHTML = '* Email is required';
    email.focus();
    return false;
  }

  // Validate email format
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value.trim())) {
    document.getElementById('emailids').innerHTML = '* Invalid email format';
    email.focus();
    return false;
  }

  // Validate username (required field)
  if (username.value.trim() === '') {
    document.getElementById('username').innerHTML = '* Username is required';
    username.focus();
    return false;
  }

  // Validate password (required field)
  if (password.value.trim() === '') {
    document.getElementById('passwords').innerHTML = '* Password is required';
    password.focus();
    return false;
  }

  // Validate password length
  if (password.value.trim().length < 8) {
    document.getElementById('passwords').innerHTML = '* Password should be at least 8 characters long';
    password.focus();
    return false;
  }

  // Validate confirm password (required field)
  if (confirmPassword.value.trim() === '') {
    document.getElementById('confrmpass').innerHTML = '* Confirm Password is required';
    confirmPassword.focus();
    return false;
  }

  // Validate password and confirm password match
  if (password.value.trim() !== confirmPassword.value.trim()) {
    document.getElementById('confrmpass').innerHTML = '* Passwords does not match';
    confirmPassword.focus();
    return false;
  }

  // Validate mobile number (required field)
  if (mobileNumber.value.trim() === '') {
    document.getElementById('mobileno').innerHTML = '* Mobile Number is required';
    mobileNumber.focus();
    return false;
  }

  // Validate mobile number format
  var mobilePattern = /^06\d{8}$/;
  if (!mobilePattern.test(mobileNumber.value.trim())) {
    document.getElementById('mobileno').innerHTML = '* Invalid mobile number format';
    mobileNumber.focus();
    return false;
  }

  // If all validations pass, the form is valid
  return true;
}
