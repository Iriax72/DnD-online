const body = document.body;
const header = body.querySelector("header");
const nav = document.querySelector("nav");

const nav_button = document.querySelector("#nav_button");
let isHamburgerOpend = false

const elementsOpenNav = [...document.querySelectorAll(".clickToOpenNav")]
const elementsQuitNav = [...document.querySelectorAll(".clickToQuitNav")]

function toggle_nav(){
    if(isHamburgerOpend){
        nav.classList.add("hidden");
    }
    else{
        nav.classList.remove("hidden");
    }
    isHamburgerOpend = !isHamburgerOpend;
}

function init(){
    isHamburgerOpend = false;
    nav.classList.add("hidden");
}

init();

elementsOpenNav.forEach(e => {
    e.onclick = () => {
        if(!isHamburgerOpend){
            toggle_nav();
        }
    }
});
elementsQuitNav.forEach(e => {
    e.onclick = () => {
        if(isHamburgerOpend){
            toggle_nav();
        }
    }
});