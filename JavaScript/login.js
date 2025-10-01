let isLoginOpend = false;
const login_buttons = [...document.querySelectorAll(".b-login")];
const login_form = document.querySelector("#login-form");

let isCreateAccountOpend = false;
const create_account_buttons = [...document.querySelectorAll(".b-create-account")];
const create_account_form = document.querySelector("#create-account-form");

const cross_buttons = [...document.querySelectorAll(".close-pop")];

function toggle_login(){
    if(isLoginOpend){
        login_form.classList.remove("hidden");
    } else {
        login_form.classList.add("hidden");
    }
    isLoginOpend = !isLoginOpend;
};

function toggle_create_account(){
    if(isCreateAccountOpend){
        create_account_form.classList.remove("hidden");
    } else {
        create_account_form.classList.add("hidden");
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

create_account_buttons.forEach(b => {
    b.onclick = () => {
        if(!isCreateAccountOpend){
            toggle_create_account();
        }
    };
});

cross_buttons.forEach(b => {
    b.onclick = () => {
        if(isLoginOpend){
            toggle_login();
        } else if(isCreateAccountOpend){
            toggle_create_account();
        }
    };
});