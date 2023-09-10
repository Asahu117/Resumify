document.addEventListener("DOMContentLoaded", function () {
    const fastn = require('fastn')({
        // Add any custom settings here
    });

    const loginLink = fastn('a', { href: '#', id: 'login-link' }, 'Login');
    const loginContainer = fastn('div', { id: 'login-container' });
    const loginForm = fastn('form', { id: 'login-form' });
    const loginMessage = fastn('div', { id: 'login-message' });

    loginLink.on('click', function (event) {
        event.preventDefault();
        toggleLogin();
    });

    loginForm.on('submit', function (event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Replace this with your authentication logic
        if (username === "user" && password === "password") {
            loginMessage.text('Login successful!').style({ color: 'green' });
        } else {
            loginMessage.text('Invalid username or password.').style({ color: 'red' });
        }
    });

    function toggleLogin() {
        if (!loginContainer.element.parentNode) {
            fastn('body').appendChild(loginContainer);
        } else {
            loginContainer.detach();
            loginMessage.text(''); // Clear any previous login message
        }
    }

    fastn('body', loginLink, loginContainer);
    fastn(loginContainer, loginForm, loginMessage);

    toggleLogin(); // Initially hide the login form
});
