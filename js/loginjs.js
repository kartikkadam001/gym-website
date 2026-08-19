document
    .getElementById("loginForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value;

        let message = document.getElementById("message");

        // Check empty fields

        if (email === "" || password === "") {

            message.style.color = "red";

            message.innerHTML =
                "Please enter email and password.";

            return;
        }

        // Check password length

        if (password.length < 6) {

            message.style.color = "red";

            message.innerHTML =
                "Password must contain at least 6 characters.";

            return;
        }

        // Login successful

        message.style.color = "lightgreen";

        message.innerHTML =
            "Login successful!";

        // Redirect to home page

        setTimeout(function() {

            window.location.href = "home.html";

        }, 1000);

    });