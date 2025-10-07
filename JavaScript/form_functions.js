export function intercept_submit(form) {
    form.addEventListener("submit", (event) => {
        let error = [];
        clear_error_value(form);
        error.push(verify_no_empty(form));
        alert(1);
        error.push(verify_char_number(form));
        alert(2);
        error.push(verify_confirm(form));
        alert("error_form mtn")
        error_form(form, event, error)
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
        v = i.value;
        isString = typeof v === "string";
        hasGoodSize = v.length >= 5 && v.length <= 20;
        isOptional = i.dataset.optional ?? false;
        hasValue = v !== ""
        if ((!isOptional || hasValue) && isString && !hasGoodSize) {
            wrong_inputs.push(i);
        }
    });
    if (wrong_inputs.length > 0) {
        add_error_class(form, wrong_inputs);
        return "Veuillez entrez entre 5 et 20 charactères.";
    }
    return "";
}

function add_error_class(form, inputs) {
    inputs.forEach(i => {
        i.classList.add("error-value");
        const label = form.querySelector(`#${i.id}_label`);
        label.classList.add("error-value-label")
    });
}

function error_form(form, event, error = []) {
    //il faudrait pas querySelectorAll() en l.60 ?
    const error_div = form.querySelector(".error-div");
    alert(error.some(e => e !== "") + 'error: ' + error);
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
        add_error_class(form, [password, confirmation])
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