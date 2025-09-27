const nav = document.querySelector("nav");
const nav_button = document.querySelector("#nav_button");
let isHamburgerOpend = false
const elementsQuitNav = [...document.querySelectorAll(".clickToQuitNav")]

function toggle_nav(){
    isHamburgerOpend ? nav.classList.remove("hidden") : nav.classList.add("hidden");
    isHamburgerOpend = !isHamburgerOpend;
}

function init(){
    isHamburgerOpend = false;
    nav.classList.add("hidden");
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