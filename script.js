const body = document.body;
const header = body.querySelector("header");
const nav = document.querySelector("nav");

const nav_button = document.querySelector("#nav_button");
let isHamburgerOpend = false
const nav_buttons = [...document.querySelectorAll("header nav ul li button[data-section]")];
const sections = [...document.querySelector("main").children];

let visible_section = "accueil";

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
    visible_section = "accueil";
    nav.classList.add("hidden");
    adjust_body_grid();
    update_visible_section(visible_section);
}

function update_visible_section(visible_section){
    sections.forEach(section => {
        if (section.id != visible_section){
            section.classList.add("hidden");
        }
        else{
            section.classList.remove("hidden");
        }
    })
}

init();
nav_button.onclick = toggle_nav;
nav_buttons.forEach(element => {
    element.onclick = () => {
        visible_section = element.dataset.section;
        update_visible_section(visible_section);
        toggle_nav();
    }
});
elementsQuitNav.forEach(e => {
    e.onclick = () => {
        if(isHamburgerOpend){
            toggle_nav();
        }
    }
});