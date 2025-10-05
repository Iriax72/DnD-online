export function verify_no_empty(form) {
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