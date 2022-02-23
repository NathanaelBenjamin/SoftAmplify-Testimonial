const open = document.querySelector(".open");
const close = document.querySelector(".close");
const navbar = document.querySelector("nav");
const body = document.querySelector("body");

open.addEventListener("click", ( ) => {
    navbar.classList.add("nav-open");
    open.style.display = "none";
});s

close.addEventListener("click", ( ) => {
    navbar.classList.remove("nav-open");
    open.style.display = "inline-block";
});
