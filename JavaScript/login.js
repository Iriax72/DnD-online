let isLoginOpend = false;
const login_buttons = [...document.querySelectorAll(".b-login")];
const login_pop = document.querySelector("#login_pop");
const login_form = document.querySelector("#login_form");
const login_values = {
    get pseudo(){
        return login_form.querySelector("#pseudo").value;
    },
    get password(){
        return login_form.querySelector("#password").value;
    }
};

let isCreateAccountOpend = false;
const signin_buttons = [...document.querySelectorAll(".b-signin")];
const signin_pop = document.querySelector("#signin_pop");
const signin_form = document.querySelector("#signin_form");
const signin_values = {
    get new_pseudo(){
        return signin_form.querySelector("#new_pseudo").value;
    },
    get new_password(){
        return signin_form.querySelector("#new_password").value;
    },
    get confirm_new_password(){
        return signin_form.querySelector("#confirm_new_password").value;
    },
    get new_email(){
        return signin_form.querySelector("#new_email").value;
    }
};

const cross_buttons = [...document.querySelectorAll(".close-pop")];

function toggle_login(){
    if(isLoginOpend){
        login_pop.classList.add("hidden");
    } else {
        login_pop.classList.remove("hidden");
    }
    isLoginOpend = !isLoginOpend;
};

function toggle_signin(){
    if(isCreateAccountOpend){
        signin_pop.classList.add("hidden");
    } else {
        signin_pop.classList.remove("hidden");
    }
    isCreateAccountOpend = !isCreateAccountOpend;
};

function verify_no_empty(form, values, event){
    values.forEach(v => {
        if(values[v] === ""){
            event.preventDefault();
            form.querySelector(`#${v}_label`).classList.add("missing-value");
            form.querySelector(`#${v}`).classList.add("missing-value");
        }
    })
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

login_form.addEventListener('submit', (event) => {
    verify_no_empty(login_form, login_values, event);
    }
);

signin_form.addEventListener('submit', (event) => {
    verify_no_empty(signin_form, signin_values, event);
});