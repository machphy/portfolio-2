// Typed JS 
var typed = new Typed(".hero-content-typing", {
    strings: [
        "Front End Web Developer",
        "UI/UX Devloperr",
        "Coder C /JS / Py",
        "Web Developer"
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
});

// Hamburger Menu 
const menuIcon = document.querySelector(".icon");

menuIcon.addEventListener("click", () => {
    menuIcon.className = menuIcon.classList.contains("fa-bars") ? "fa-solid fa-xmark close-icon icon" : "fa-solid fa-bars icon"
});
