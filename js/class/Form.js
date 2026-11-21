export class Form {
    constructor(form){
        this.form = form;
    }

    intercept_submit() {
        this.form.addEventListener("submit", async (event) => {
            event.preventDefault();
            this.clear_error_value();
            const errors = [
                this.verify_no_empty(),
                this.verify_char_number(),
                this.verify_password(),
                this.verify_confirm()
            ];

            try {
                errors.push(await this.verify_email_valid());
            } catch (error) {
                console.error("Impossible de vérifier l'adresse e-mail.", error);
                errors.push("Impossible de vérifier l'adresse e-mail. Veuillez réessayer.");
            }

            if (this.error_form(errors)) {
                return;
            }
            this.form.submit();
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
            this.add_error_class(empty);
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
            this.add_error_class(wrong_inputs);
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
                this.add_error_class([password_input])
                return "Le mot de passe doit faire au moins 8 charactères.";
            }
            if (!/\d/.test(password)) {
                this.add_error_class([password_input]);
                return "Le mot de passe doit contenur au moins un chiffre."
            }
        }
        return "";
    }

    async verify_email_valid() {
        const email_input = this.form.querySelector("#new_email")
            ?? this.form.querySelector("#email");
        if (!email_input || !email_input.value) {
            return "";
        }
        if (email_input.validity.typeMismatch) {
            this.add_error_class([email_input]);
            return "Adresse mail invalide";
        }
        if (email_input.id === "new_email" && !await this.is_email_free(email_input.value)) {
            this.add_error_class([email_input]);
            return "Adresse e-mail déjà associée à un compte DnD Online.";
        }
        return "";
    }

    add_error_class(inputs) {
        inputs.forEach(i => {
            i.classList.add("error-value");
            const label = this.form.querySelector(`#${i.id}_label`);
            label.classList.add("error-value-label");
        });
    }

    error_form(error = []) {
        const error_div = this.form.querySelector(".error-div");
        const error_msg = error.find(e => e !== "");
        if (error_msg !== undefined) {
            error_div.classList.remove("hidden");
        } else if (!error_div.classList.contains("hidden")) {
            error_div.classList.add("hidden");
        }
        error_div.querySelector("p").textContent = error_msg ?? "";
        return error_msg !== undefined;
    }

    verify_confirm() {
        //ca c'est pas idéal, il faudrait changer mais bon.
        const password = this.form.querySelector("#new_password") ?? null;
        const confirmation = this.form.querySelector("#confirm_new_password") ?? null;
        if (password && confirmation && password.value != confirmation.value) {
            this.add_error_class([password, confirmation]);
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
        const response = await fetch(`../php/db/api.php?email=${encodeURIComponent(email)}`);
        if (!response.ok) {
            throw new Error(`La vérification de l'adresse e-mail a échoué (${response.status}).`);
        }
        const availability = await response.json();
        if (
            !Array.isArray(availability)
            || availability.length !== 1
            || typeof availability[0] !== "boolean"
        ) {
            throw new Error("La réponse de vérification des e-mails est invalide.");
        }
        return availability[0];
    }
}