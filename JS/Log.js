window.history.pushState(null,null,"Login.html");
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const usernameError = document.getElementById('usernameError');
const passwordError = document.getElementById('passwordError');
const submitButton = document.getElementById('submitButton');

usernameInput.addEventListener('input', validateForm);
passwordInput.addEventListener('input', validateForm);


function validateForm() {
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    usernameError.textContent = '';
    passwordError.textContent = '';
    submitButton.disabled = true;

    if (username === '') {
        usernameError.textContent = 'Username is required';
    }

    if (password === '') {
        passwordError.textContent = 'Password is required';
    } else if (password.length <= 4) {
        passwordError.textContent = 'Password must be more than 4 characters long';
    }

    if (username !== '' && password !== '' && password.length > 4) {
        submitButton.disabled = false;
    }
}



function checkValue(event) {
    event.preventDefault(); // Prevent default form submission behavior

    if (usernameInput.value.trim() === "Admin" && passwordInput.value.trim() === "admin") {
        // Move to admin page
        window.location.href = 'Admin.html';
    } else if (usernameInput.value.trim() === "Users" && passwordInput.value.trim() === "users") {
        // Move to user page
        window.location.href = 'UserRequest.html';
      
    } else {
        alert("Wrong credentials");
        // Stay on the same page or redirect to the login page as needed
        window.location.href = "Login.html";
    }
}

submitButton.addEventListener('click', checkValue);
