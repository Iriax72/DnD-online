let isLoginOpend = false;
const login_buttons = [...document.querySelectorAll(".b-login")];
const login_form = document.querySelector("#login-form");

let isCreateAccountOpend = false;
const signin_buttons = [...document.querySelectorAll(".b-signin")];
const signin_form = document.querySelector("#signin-form");

const cross_buttons = [...document.querySelectorAll(".close-pop")];

function toggle_login(){
    if(isLoginOpend){
        login_form.classList.add("hidden");
    } else {
        login_form.classList.remove("hidden");
    }
    isLoginOpend = !isLoginOpend;
};

function toggle_signin(){
    if(isCreateAccountOpend){
        signin_form.classList.add("hidden");
    } else {
        signin_form.classList.remove("hidden");
    }
    isCreateAccountOpend = !isCreateAccountOpend;
};

login_buttons.forEach(b => {
    b.onclick = () => {
        if(!isLoginOpend){
            toggle_login();
        }
    };
});

signin_buttons.forEach(b => {
    b.onclick = () => {
        if(!isCreateAccountOpend){
            toggle_signin();
        }
    };
});

cross_buttons.forEach(b => {
    b.onclick = () => {
        if(isLoginOpend){
            toggle_login();
        } else if(isCreateAccountOpend){
            toggle_signin();
        }
    };
});