document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-contacto");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Gracias por tu mensaje, pronto te responderé!");
        form.reset();
    });
});

