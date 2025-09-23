const body = document.body;
const header = body.querySelector("header");
const nav = document.querySelector("nav");

const nav_button = document.querySelector("#nav_button");
let isHamburgerOpend = false

const elementsQuitNav = [...document.querySelectorAll(".clickToQuitNav")]

function adjust_body_grid(){
    if(isHamburgerOpend){
        body.classList.remove("body_without_nav");
        body.classList.add("body_with_nav");
        header.classList.remove("header_without_nav");
        header.classList.add("header_with_nav");
    }
    else{
        body.classList.remove("body_with_nav");
        body.classList.add("body_without_nav");
        header.classList.remove("header_with_nav");
        header.classList.add("header_without_nav");
    }
}

function toggle_nav(){
    if(isHamburgerOpend){
        nav.classList.add("hidden");
    }
    else{
        nav.classList.remove("hidden");
    }
    isHamburgerOpend = !isHamburgerOpend;
    adjust_body_grid();
}

function init(){
    isHamburgerOpend = false;
    nav.classList.add("hidden");
    adjust_body_grid();
}

init();
nav_button.onclick = toggle_nav();
elementsQuitNav.forEach(e => {
    e.onclick = () => {
        if(isHamburgerOpend){
            toggle_nav();
        }
    }
});