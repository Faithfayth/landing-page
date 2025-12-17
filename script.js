let menu = document.querySelector('#bars');
let navbar = document.querySelector('.header .nav');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};
