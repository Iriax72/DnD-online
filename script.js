const body = document.body

const hamburger_button = document.querySelector("#hamburger_button")
const hamburger_opend = document.querySelector("#hamburger_opend")

let isHamburgerOpend = false

const nav = document.querySelector("nav")

const accueil_section = document.querySelector("#accueil")
const account_section = document.querySelector("#account")
const play_section = document.querySelector("#play")
const social_section = document.querySelector("#social")
const infos_section = document.querySelector("#infos")
const settings_section = document.querySelector("#settings")

function adjust_body_grid(){
    if(isHamburgerOpend){
        body.classList.remove("without_nav")
        body.classList.add("with_nav");
    }
    else{
        body.classList.remove("with_nav")
        body.classList.add("without_nav");
    }
}

function toggle_hamburger(){
    if(isHamburgerOpend){
        nav.classList.add("hidden")
        adjust_body_grid()
    }
    else{
        nav.classList.remove("hidden")
        adjust_body_grid()
    }
    isHamburgerOpend = !isHamburgerOpend
}

hamburger_button.onclick = toggle_hamburger;