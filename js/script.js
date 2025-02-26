document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".contact-form form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Form submitted! We will contact you soon.");
    });

    const ctaButton = document.querySelector(".cta-button");
    ctaButton.addEventListener("click", function() {
        alert("You clicked the Call to Action button!");
    });
});
