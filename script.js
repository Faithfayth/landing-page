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



/*const menu = document.querySelector("#bars");
const navbar = document.querySelector(".nav");

menu.onclick = () => {
    navbar.classList.toggle("active");
    if (menu.classList.contains("fa-bars")) {
        menu.classList.remove("fa-bars");
        menu.classList.add("fa-xmark");
    }else {
        menu.classList.remove("fa-xmark");
        menu.classList.add("fa-bars");
    }
};*/