// Select elements
const menu = document.querySelector(".humberger");
const icon = document.querySelector("#bars");
const navbar = document.querySelector(".nav");

// Safety check (prevents silent failure)
if (menu && icon && navbar) {
    menu.addEventListener("click", () => {
        navbar.classList.toggle("active");

        // Toggle Font Awesome icon
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-xmark");
    });
}



