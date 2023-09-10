document.addEventListener("DOMContentLoaded", function () {
    const loginLink = document.getElementById("login-link");
    const loginContainer = document.getElementById("login-container");
    const loginForm = document.getElementById("login-form");
    const loginMessage = document.getElementById("login-message");

    loginLink.addEventListener("click", function (e) {
        e.preventDefault();
        toggleLogin();
    });

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Replace this with your authentication logic
        if (username === "user" && password === "password") {
            loginMessage.textContent = "Login successful!";
            loginMessage.style.color = "green";
        } else {
            loginMessage.textContent = "Invalid username or password.";
            loginMessage.style.color = "red";
        }
    });

    function toggleLogin() {
        if (loginContainer.style.display === "none" || loginContainer.style.display === "") {
            loginContainer.style.display = "block";
        } else {
            loginContainer.style.display = "none";
            loginMessage.textContent = ""; // Clear any previous login message
        }
    }
});
