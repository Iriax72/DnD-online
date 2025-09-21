const body = document.body

const header = body.querySelector("header")

const nav_button = document.querySelector("#nav_button")

let isHamburgerOpend = false

const nav = document.querySelector("nav")

const nav_buttons = [...document.querySelector("#ulnav").children]
const sections = [...document.querySelector("main").children]

const accueil_section = document.querySelector("#accueil")
const account_section = document.querySelector("#account")
const play_section = document.querySelector("#play")
const social_section = document.querySelector("#social")
const infos_section = document.querySelector("#infos")
const settings_section = document.querySelector("#settings")

let visible_section = "accueil"

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
        header.classList.add("header_without_nav")
    }
}

function toggle_nav(){
    if(isHamburgerOpend){
        nav.classList.add("hidden")
    }
    else{
        nav.classList.remove("hidden")
    }
    isHamburgerOpend = !isHamburgerOpend
    adjust_body_grid();
}

function init(){
    isHamburgerOpend = false;
    visible_section = "accueil";
    nav.classList.add("hidden")
    adjust_body_grid();
    update_visible_section();
}

function update_visible_section(){
    sections.forEach(section => {
        if (section.children[0].textContent.toLowerCase() != visible_section){
            section.classList.add("hidden")
        }
        else{
            section.classList.remove("hidden")
        }
    })
}

init();
nav_button.onclick = toggle_nav;
nav_buttons.forEach(element => {
    element.onclick = () => {
        visible_section = element.textContent.toLowerCase();
        update_visible_section();
    }
});