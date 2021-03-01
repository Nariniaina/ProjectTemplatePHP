const menu = document.querySelector(".menu")

const dropdown = document.getElementById("navbarDropdownmenu")
const dropdown_up = document.getElementById("dropdown-toggle")
const nav = document.getElementById("navbarDropdown")

const dropdown_up_2 = document.getElementById("dropdown-toggle-2")
const dropdown_2 = document.getElementById("navbarDropdownmenu-2")
const nav_2 = document.getElementById("navbarDropdown-2")

const logo = document.querySelector(".logo")
const navlistleft = document.querySelector(".nav-list-left")
const navlistright = document.querySelector(".nav-list-right")
const topnav = document.querySelector(".top-nav")
const navOpen = document.querySelector(".hamburger")
const navClose = document.querySelector(".close")

const navLeft = menu.getBoundingClientRect().left;

dropdown_up.addEventListener('click', () =>{
    if (dropdown.classList.contains('show')) 
    {
        dropdown.classList.remove('show');
        nav.classList.remove("active");
    }
    else
    {
        dropdown.classList.add('show');
        nav.classList.add("active");
    }
})

dropdown_up_2.addEventListener('click', () =>{
    if (dropdown_2.classList.contains('show'))
    {
        dropdown_2.classList.remove('show');
        nav_2.classList.remove("active");
    }
    else
    {
        dropdown_2.classList.add('show');
        nav_2.classList.add("active");
    }
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