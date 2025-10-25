class Form {
    constructor(form){
        this.form = form;
    }

    intercept_submit() {
        this.form.addEventListener("submit", (event) => {
            let error = [];
            this.clear_error_value();
            error.push(this.verify_no_empty());
            error.push(this.verify_email_valid());
            error.push(this.verify_char_number());
            error.push(this.verify_password());
            error.push(this.verify_confirm());
            Promise.all(error).then(
                error_form(event, error)
            );
        });
    }

    verify_no_empty() {
        let empty = [];
        const inputs = [...this.form.querySelectorAll("input")];
        inputs.forEach(input => {
            if (!input.dataset.optional && input.value === "") {
                empty.push(input);
            }
        });
        if (empty.length > 0) {
            add_error_class(empty);
            return "Veuillez remplire tous les champs nécéssaires.";
        }
        return "";
    }

verify_char_number() {
    const inputs = [...this.form.querySelectorAll("input")];
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
        add_error_class(wrong_inputs);
        return "Veuillez entrez entre 5 et 22 charactères.";
    }
    return "";
}

verify_password(){
    //ca c'est pas ideal, il daudraut changer mais bon
    const password_input = this.form.querySelector("#new_password") ?? null;
    if (password_input){
        const password = password_input.value;
        if (password.length < 8) {
            add_error_class([password_input])
            return "Le mot de passe doit faire au moins 8 charactères.";
        }
        if (!/\d/.test(password)) {
            add_error_class([password_input]);
            return "Le mot de passe doit contenur au moins un chiffre."
        }
    }
    return "";
}

verify_email_valid() {
    alert('1')
    const email_input = this.form.querySelector("#new_email") ?? false;
    if (email_input && email_input.validity.typeMismatch) {
        add_error_class([email_input]);
        return "Adresse mail invalide";
    }
    alert('on y va')
    if (! await is_email_free(email_input.value)) {
        alert('on est passé!')
        add_error_class([email_input]);
        return "Adresse mail déjà associée à un compte dnd online. (ajouter un truc style g oublié mon mdp)";
    }
    alert('on est aussi passé')
    return "";
}

add_error_class(inputs) {
    inputs.forEach(i => {
        i.classList.add("error-value");
        const label = this.form.querySelector(`#${i.id}_label`);
        label.classList.add("error-value-label");
    });
}

error_form(event, error = []) {
    //il faudrait pas querySelectorAll() ?
    const error_div = this.form.querySelector(".error-div");
    if (error.some(e => e !== "")) {
        error_div.classList.remove("hidden");
        event.preventDefault();
    } else if (!error_div.classList.contains("hidden")) {
        error_div.classList.add("hidden");
    }
    const error_msg = error.find(e => e !== "");
    error_div.querySelector("p").textContent = error_msg;
}

verify_confirm() {
    //ca c'est pas idéal, il faudrait changer mais bon.
    const password = this.form.querySelector("#new_password") ?? null;
    const confirmation = this.form.querySelector("#confirm_new_password") ?? null;
    if (password && confirmation && password.value != confirmation.value) {
        add_error_class([password, confirmation]);
        return "Erreur dans la confirmation du mot de passe";
    }
    return "";
}

clear_error_value() {
    const label = [...this.form.querySelectorAll("label")];
    const inputs = [...this.form.querySelectorAll("input")];
    label.forEach(l => {
        l.classList.remove("error-value-label");
    });
    inputs.forEach(i => {
        i.classList.remove("error-value");
    });
    this.form.querySelector(".error-div").classList.add("hidden");
}

async is_email_free(email) {
    const reponse = await fetch('../php/db/api.php');
    alert(reponse)
    try {
        const emails = await reponse.json();
    } catch (error) {
        alert(error)
    }
    alert('éatpe 2 ok.')
    emails.forEach(e => {
        if (e === email) {
            return false
        }
    });
    return true;    
}
}