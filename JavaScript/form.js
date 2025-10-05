alert("script chargé");

import * as func from './form_functions.js'

let isLoginOpend = false;
const login_buttons = [...document.querySelectorAll(".b-login")];
const login_pop = document.querySelector("#login_pop");
const login_form = document.querySelector("#login_form");

let isCreateAccountOpend = false;
const signin_buttons = [...document.querySelectorAll(".b-signin")];
const signin_pop = document.querySelector("#signin_pop");
const signin_form = document.querySelector("#signin_form");

const cross_buttons = [...document.querySelectorAll(".close-pop")];

function toggle_login() {
    alert("toggle");
    if (isLoginOpend) {
        login_pop.classList.add("hidden");
    } else {
        login_pop.classList.remove("hidden");
    }
    isLoginOpend = !isLoginOpend;
    clear_error_value(login_form);
};

function toggle_signin() {
    alert("toggle");
    if (isCreateAccountOpend) {
        signin_pop.classList.add("hidden");
    } else {
        signin_pop.classList.remove("hidden");
    }
    isCreateAccountOpend = !isCreateAccountOpend;
    clear_error_value(signin_form);
};

function verify_no_empty(form) {
    let empty = [];
    const inputs = [...form.querySelectorAll("input")];
    inputs.forEach(input => {
        if (!input.dataset.optional && input.value === "") {
            empty.push(input);
        }
    });
    if (empty.length > 0) {
        add_error(form, empty);
        return "Veuillez remplir tous les champs nécessaires.";
    }
    return "";
};

function verify_confirm (form) {
    const password = form.querySelector("#new_password") ?? null;
    const confirmation = form.querySelector("#confirm_new_password") ?? null;
    if (password && confirmation && password.value != confirmation.value) {
        add_error(form, [password, confirmation]);
        return "Erreur dans la confirmation du mot de passe";
    }
    return "";
}

function clear_error_value(form) {
    const labels = [...form.querySelectorAll("label")];
    const inputs = [...form.querySelectorAll("input")];
    labels.forEach(l => {
        l.classList.remove("error-value-label");
    });
    inputs.forEach(i => {
        i.classList.remove("error-value");
    });
    form.querySelector(".error-div").classList.add("hidden");
}

function add_error(form, inputs) {
    inputs.forEach(i => {
        i.classList.add("error-value");
        const label = form.querySelector(`#${i.id}_label`);
        label.classList.add("error-value-label");
    })
}

function intercept_submit(form) {
    form.addEventListener("submit", (event) => {
        let error = [];
        clear_error_value(form);
        let empty = verify_no_empty(form);
        if (empty) {
            error.push(empty);
        }
        let confirm = verify_confirm(form);
        if (confirm) {
            error.push(confirm);
        }
        error_form(form, event, error[0])
    });
}

function error_form(form, event, error =false) {
    const error_div = form.querySelector(".error-div");
    error_div.querySelector("p").textContent = error;
    if(error){
        error_div.classList.remove("hidden");
        event.preventDefault();
    } else if(!error_div.classList.contains("hidden")){
        error_div.classList.add("hidden");
    }
}

alert(login_buttons);
login_buttons.forEach(b => {
    b.onclick = () => {
        alert("login oppend");
        if (!isLoginOpend) {
            toggle_login();
        }
    };
});

alert(signin_buttons);
signin_buttons.forEach(b => {
    b.onclick = () => {
        alert("signin oppend");
        if (!isCreateAccountOpend) {
            toggle_signin();
        }
    };
});

cross_buttons.forEach(b => {
    b.onclick = () => {
        if (isLoginOpend) {
            toggle_login();
        } else if (isCreateAccountOpend) {
            toggle_signin();
        }
    };
});

intercept_submit(login_form);
intercept_submit(signin_form);