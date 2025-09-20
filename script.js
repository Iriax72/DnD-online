const body = document.body

const hamburger_closed = document.querySelector("#hamburger_closed")
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

function open_hamburger(){
    isHamburgerOpend = true
    nav.classList.remove("hidden")
    hamburger_closed.classList.add("hidden")
    adjust_body_grid()
}

function close_hamburger(){
    isHamburgerOpend = false
    nav.classList.add("hidden")
    hamburger_opend.classList.remove("hidden")
    adjust_body_grid()
}

hamburger_closed.onclick() = open_hamburger
hamburger_opend.onclick() = close_hamburger