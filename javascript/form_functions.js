export function intercept_submit(form) {
    form.addEventListener("submit", (event) => {
        let error = [];
        clear_error_value(form);
        error.push(verify_no_empty(form));
        error.push(verify_char_number(form));
        error.push(verify_password(form));
        error.push(verify_confirm(form));
        error.push(verify_email_valid(form));
        error_form(form, event, error);
    });
}

function verify_no_empty(form) {
    let empty = [];
    const inputs = [...form.querySelectorAll("input")];
    inputs.forEach(input => {
        if (!input.dataset.optional && input.value === "") {
            empty.push(input);
        }
    });
    if (empty.length > 0) {
        add_error_class(form, empty);
        return "Veuillez remplire tous les champs nécéssaires.";
    }
    return "";
}

function verify_char_number(form) {
    const inputs = [...form.querySelectorAll("input")];
    let wrong_inputs = [];
    inputs.forEach(i => {
        const v = i.value;
        const isString = typeof v === "string";
        let hasGoodSize = null;
        if (! (i.id === "email" || i.id === "new_email")) {
            hasGoodSize = v.length >= 5 && v.length <= 22;
        } else {
            hasGoodSize = v.length >= 5 && v.length <= 50;
        }
        const isOptional = i.dataset.optional ?? false;
        const hasValue = v !== "";
        if ((!isOptional || hasValue) && isString && !hasGoodSize) {
            wrong_inputs.push(i);
        }
    });
    if (wrong_inputs.length > 0) {
        add_error_class(form, wrong_inputs);
        return "Veuillez entrez entre 5 et 22 charactères.";
    }
    return "";
}

function verify_password(form){
    //ca c'est pas ideal, il daudraut changer mais bon
    const password_input = form.querySelector("#new_password") ?? null;
    if (password_input){
        const password = password_input.value;
        if (password.length < 8) {
            add_error_class(form, [password_input])
            return "Le mot de passe doit faire au moins 8 charactères.";
        }
        if (!/\d/.test(password)) {
            add_error_class(form, [password_input]);
            return "Le mot de passe doit contenur au moins un chiffre."
        }
    }
    return "";
}

function verify_email_valid(form) {
    const email_input = form.querySelector("#new_email") ?? false;
    if (email_input && email_input.validity.typeMismatch) {
        add_error_class(form, [email_input]);
        return "Adresse mail invalide";
    }
    return "";
}

function add_error_class(form, inputs) {
    inputs.forEach(i => {
        i.classList.add("error-value");
        const label = form.querySelector(`#${i.id}_label`);
        label.classList.add("error-value-label");
    });
}

function error_form(form, event, error = []) {
    //il faudrait pas querySelectorAll() ?
    const error_div = form.querySelector(".error-div");
    if (error.some(e => e !== "")) {
        error_div.classList.remove("hidden");
        event.preventDefault();
    } else if (!error_div.classList.contains("hidden")) {
        error_div.classList.add("hidden");
    }
    const error_msg = error.find(e => e !== "");
    error_div.querySelector("p").textContent = error_msg;
}

function verify_confirm(form) {
    //ca c'est pas idéal, il faudrait changer mais bon.
    const password = form.querySelector("#new_password") ?? null;
    const confirmation = form.querySelector("#confirm_new_password") ?? null;
    if (password && confirmation && password.value != confirmation.value) {
        add_error_class(form, [password, confirmation]);
        return "Erreur dans la confirmation du mot de passe";
    }
    return "";
}

function clear_error_value(form) {
    const label = [...form.querySelectorAll("label")];
    const inputs = [...form.querySelectorAll("input")];
    label.forEach(l => {
        l.classList.remove("error-value-label");
    });
    inputs.forEach(i => {
        i.classList.remove("error-value");
    });
    form.querySelector(".error-div").classList.add("hidden");
}