let isLoginOpend = false;
const login_buttons = [...document.querySelectorAll(".b-login")];
const login_pop = document.querySelector("#login_pop");
const login_form = document.querySelector("#login_form");
const login_values = {
    get pseudo() {
        return login_form.querySelector("#pseudo").value;
    },
    get password() {
        return login_form.querySelector("#password").value;
    }
};

let isCreateAccountOpend = false;
const signin_buttons = [...document.querySelectorAll(".b-signin")];
const signin_pop = document.querySelector("#signin_pop");
const signin_form = document.querySelector("#signin_form");
const signin_values = {
    get new_pseudo() {
        return signin_form.querySelector("#new_pseudo").value;
    },
    get new_password() {
        return signin_form.querySelector("#new_password").value;
    },
    get confirm_new_password() {
        return signin_form.querySelector("#confirm_new_password").value;
    },
    get new_email() {
        return signin_form.querySelector("#new_email").value;
    }
};

const cross_buttons = [...document.querySelectorAll(".close-pop")];

function toggle_login() {
    if (isLoginOpend) {
        login_pop.classList.add("hidden");
    } else {
        login_pop.classList.remove("hidden");
    }
    isLoginOpend = !isLoginOpend;
    clear_missing_value(login_form);
};

function toggle_signin() {
    if (isCreateAccountOpend) {
        signin_pop.classList.add("hidden");
    } else {
        signin_pop.classList.remove("hidden");
    }
    isCreateAccountOpend = !isCreateAccountOpend;
    clear_missing_value(signin_form);
};

function verify_no_empty(form, event) {
    has_empty = false;
    inputs = [...form.querySelectorAll("input")];
    inputs.forEach(input => {
        if (!input.dataset.optional && input.value === "") {
            has_empty = true;
            form.querySelector(`#${input.id}_label`).classList.add("missing-value-label");
            form.querySelector(`#${input.id}`).classList.add("missing-value");
        }
    });
    if (has_empty) {
        event.preventDefault()
        error_div = form.querySelector(".error-div");
        error_div.classList.remove("hidden");
        error_div.querySelector("p").textContent = "Veuillez remplir tous les champs nécessaires.";
    };
};

function clear_missing_value(form) {
    const labels = [...form.querySelectorAll("label")];
    const inputs = [...form.querySelectorAll("input")];
    labels.forEach(l => {
        l.classList.remove("missing-value-label");
    });
    inputs.forEach(i => {
        i.classList.remove("missing-value");
    });
    form.querySelector(".error-div").classList.add("hidden");
}

function intercept_submit(form) {
    form.addEventListener("submit", (event) => {
        clear_missing_value(form);
        verify_no_empty(form, event);
    });
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