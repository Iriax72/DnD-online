const nav = document.querySelector("nav");
const nav_buttons = [...nav.children[0].children];
const nav_button = document.querySelector("#nav_button");
let isNavOpend = false
const elementsQuitNav = [...document.querySelectorAll(".clickToQuitNav")]

function toggle_nav(){
    isNavOpend ? nav.classList.add("hidden") : nav.classList.remove("hidden");
    isNavOpend = !isNavOpend;
}

toggle_nav();

nav_button.onclick = () => toggle_nav();

elementsQuitNav.forEach(e => {
    e.onclick = () => {
        if(isNavOpend){
            toggle_nav();
        }
    }
});

nav_buttons.forEach(b => {
    b.onclick = () => {
        toggle_nav();
    }
});