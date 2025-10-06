export function intercept_submit (form) {
    form.addEventListener("submit", (event) => {
        let error = [];
        clear_error_value(form);
        const empty = verify_no_empty(form);
        if (empty) {
            error.push(empty);
        }
        const char_number = verify_char_number(form);
        if (char_number) {
            error.push(char_number);
        }
        const confirm = verify_confirm(form);
        if (confirm) {
            error.push(confirm);
        }
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
        add_error(form, empty);
        return "Veuillez remplire tous les champs nécéssaires.";
    }
    return "";
}

function verify_char_number(form) {
    alert('debut de charNumber()')
    const inputs = [...form.querySelectorAll("input")];
    const values = inputs.map(input => input.value);
    let wrong_value = [];
    values.forEach(v => {
        if(typeof v === "string" && (v.length < 5 || v.length > 20)){
            wrong_value.push(v)
        }
    });
    if (wrong_value.length > 0){
        alert('wrong_value.length > 0')
        let wrong_input = [];
        wrong_value.forEach(v => {
            alert(inputs[values.indexOf(v)])
            wrong_input.push(values.inputs[indexOf(v)]);
        });
        alert(wrong_input)
        add_error(form, wrong_input);
        return "Veuillez entrez entre 5 et 20 charactères.";
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
    if (error.length > 0) {
        error_div.classList.remove("hidden");
        preventDefault();
    } else if (!error_div.classList.contains("hidden")) {
        error_div.classList.add("hidden");
    }
    const error_msg = "";
    error.forEach(e => {
        if (e) {
            error_msg = e;
            break;
        }
    })
    error_div.querySelector("p").textContent = error_msg;
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