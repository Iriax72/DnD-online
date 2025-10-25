alert("début")
import {Form} from "./Form.js";
alert("import réussi!");

let isLoginOpend = false;
const login_buttons = [...document.querySelectorAll(".b-login")];
const login_pop = document.querySelector("#login_pop");
const login_form_html = document.querySelector("#login_form");
login_form_object = new Form(login_form_html);

let isCreateAccountOpend = false;
const signin_buttons = [...document.querySelectorAll(".b-signin")];
const signin_pop = document.querySelector("#signin_pop");
const signin_form_html = document.querySelector("#signin_form");
signin_form_object = new Form(signin_form_html);

const cross_buttons = [...document.querySelectorAll(".close-pop")];

function toggle_login() {
    if (isLoginOpend) {
        login_pop.classList.add("hidden");
    } else {
        login_pop.classList.remove("hidden");
    }
    isLoginOpend = !isLoginOpend;
    login_form_object.clear_error_value();
}

function toggle_signin() {
    if (isCreateAccountOpend) {
        signin_pop.classList.add("hidden");
    } else {
        signin_pop.classList.remove("hidden");
    }
    isCreateAccountOpend = !isCreateAccountOpend;
    signin_form_object.clear_error_value();
}

login_buttons.forEach(b => {
    b.onclick = () => {
        if (!isLoginOpend) {
            toggle_login();
        }
    };
});

signin_buttons.forEach(b => {
    b.onclick = () => {
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

alert('is');

login_form_object.intercept_submit();
signin_form_object.intercept_submit();