const nav = document.querySelector("nav");
const nav_button = document.querySelector("#nav_button");
let isHamburgerOpend = false
const elementsQuitNav = [...document.querySelectorAll(".clickToQuitNav")]

function toggle_nav(){
    isHamburgerOpend ? nav.classList.add("hidden") : nav.classList.remove("hidden");
    isHamburgerOpend = !isHamburgerOpend;
}

toggle_nav();

nav_button.onclick = () => toggle_nav();

elementsQuitNav.forEach(e => {
    e.onclick = () => {
        if(isHamburgerOpend){
            toggle_nav();
        }
    }
});