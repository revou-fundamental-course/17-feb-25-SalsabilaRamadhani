document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".contact-form form");
    const nameInput = form.querySelector("input[type='text']");
    const emailInput = form.querySelector("input[type='email']");
    const selectInput = form.querySelector("select");
    const submitButton = form.querySelector("button");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        if (nameInput.value.trim() === "") {
            alert("Harap isi nama terlebih dahulu.");
            nameInput.focus();
            return;
        }

        if (emailInput.value.trim() === "") {
            alert("Harap isi email terlebih dahulu.");
            emailInput.focus();
            return;
        }

        if (selectInput.value === "") {
            alert("Harap pilih salah satu opsi.");
            selectInput.focus();
            return;
        }

        alert("Form submitted! We will contact you soon.");
        form.submit();
    });

      const ctaButton = document.querySelector(".cta-button");
    ctaButton.addEventListener("click", function() {
        alert("You clicked the Call to Action button!");
    });
});
