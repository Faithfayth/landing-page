const menu = document.querySelector("#bars");
const navbar = document.querySelector(".nav");

menu.onclick = () => {
    navbar.classList.toggle("active");
    if (menu.classList.contains("fa-bars")) {
        menu.classList.replace("fa-bars", "fa-times");
    }else {
        menu.classList.replace("fa-times", "fa-bars");
    }
};