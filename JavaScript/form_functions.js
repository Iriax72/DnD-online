export function intercept_submit (form) {
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
        return "Veuillez remplire tous les champs nécéssaires.";
    }
    return "";
}

function add_error (form, inputs) {
    inputs.forEach(i => {
        i.classList.add("error-value");
        const label = form.querySelector(`#${i.id}_label`);
        label.classList.add("error-value-label")
    });
}

function error_form (form, event, error ="") {
    const error_div = form.querySelector(".error-div");
    error_div.querySelector("p").textContent = error;
    if (error) {
        error_div.classList.remove("hidden");
        event.preventDefault();
    } else if (!error_div.classList.contains("hidden")) {
        error_div.classList.add("hidden");
    }
}

function verify_confirm (form) {
    //ca c'est pas idéal, il faudrait changer mais bon.
    const password = form.querySelector("#new_password") ?? null;
    const confirmation = form.querySelector("#confirm_new_password") ?? null;
    if (password && confirmation && password.value != confirmation.value) {
        add_error(form, [password, confirmation])
        return "Erreur dans la confirmation du mot de passe";
    }
    return "";
}

function clear_error_value(form) {
    const label = [...form.querySelectorAll("label")];
    const inputs = [...form.querySelectorAll("inputs")];
    label.forEach(l => {
        l.classList.remove("error-value-label");
    });
    inputs.forEach(i => {
        i.classList.remove("error-value");
    })
    form.querySelector(".error-div").classList.add("hidden");
}