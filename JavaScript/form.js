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
    if (isLoginOpend) {
        login_pop.classList.add("hidden");
    } else {
        login_pop.classList.remove("hidden");
    }
    isLoginOpend = !isLoginOpend;
    clear_error_value(login_form);
};

function toggle_signin() {
    if (isCreateAccountOpend) {
        signin_pop.classList.add("hidden");
    } else {
        signin_pop.classList.remove("hidden");
    }
    isCreateAccountOpend = !isCreateAccountOpend;
    clear_error_value(signin_form);
};

function verify_no_empty(form, event) {
    let empty = [];
    const inputs = [...form.querySelectorAll("input")];
    inputs.forEach(input => {
        if (!input.dataset.optional && input.value === "") {
            empty.push(input);
        }
    });
    if (empty) {
        event.preventDefault()
        error_form(form, "Veuillez remplir tous les champs nécessaires.");
        add_error(form, empty);
        return true;
    }
    return false;
};

function verify_confirm (form, event) {
    const password = form.querySelector("#new_password") ?? null;
    const confirmation = form.querySelector("#confirm_new_password") ?? null;
    if (password && confirmation && password.value != confirmation.value) {
        event.preventDefault();
        add_error(form, [password, confirmation]);
        error_form(form, "Erreur dans la confirmation du mot de passe");
        return true;
    }
    return false
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
        clear_error_value(form);
        if (!verify_no_empty(form, event)){
            verify_confirm(form, event);
        }
    });
}

function error_form(form, error) {
    const error_div = form.querySelector(".error-div");
    error_div.classList.remove("hidden");
    error_div.querySelector("p").textContent = error;
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

intercept_submit(login_form);
intercept_submit(signin_form);