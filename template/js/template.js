const menu = document.querySelector(".menu")
const dropdown_up = document.querySelector(".dropdown-toggle")
const dropdown = document.querySelector(".dropdown-menu")
const logo = document.querySelector(".logo")
const navlistleft = document.querySelector(".nav-list-left")
const navlistright = document.querySelector(".nav-list-right")
const topnav = document.querySelector(".top-nav")
const navOpen = document.querySelector(".hamburger")
const navClose = document.querySelector(".close")

const navLeft = menu.getBoundingClientRect().left;

dropdown_up.addEventListener('click', () =>{
    dropdown.classList.add("show");
})

navOpen.addEventListener('click', () =>{
    if(navLeft < 0) {
        menu.classList.add("show");
        navlistleft.classList.add("show");
        navlistright.classList.add("show");
        topnav.classList.add("show");
        logo.classList.add("show");
    }
})

navClose.addEventListener('click', () =>{
    if(navLeft < 0) {
        menu.classList.remove("show");
        navlistleft.classList.remove("show");
        navlistright.classList.remove("show");
        topnav.classList.remove("show");
        logo.classList.remove("show");
    }
})