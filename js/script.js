script.js
// Welcome Message
window.onload = function () {
    console.log("Welcome to FitZone Gym!");
};

// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    const icon = document.getElementById("modeIcon");
    if (icon) {
        icon.innerHTML = document.body.classList.contains("dark-mode")
            ? "☀️"
            : "🌙";
    }
}

// Scroll to Top Button
const topButton = document.createElement("button");
topButton.id = "topBtn";
topButton.innerHTML = "↑";
document.body.appendChild(topButton);

window.onscroll = function () {
    if (document.documentElement.scrollTop > 200) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
};

topButton.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

// Counter Animation
function counter(id, target) {

    let count = 0;

    const interval = setInterval(function () {

        count++;

        document.getElementById(id).innerHTML = count;

        if (count >= target) {
            clearInterval(interval);
        }

    }, 20);

}