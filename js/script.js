document
    .querySelectorAll(".contact form input, .contact form textarea")
    .forEach((el) => {
        const placeholder = el.getAttribute("placeholder");

        el.addEventListener("focus", () => {
            el.setAttribute("data-placeholder", placeholder);
            el.removeAttribute("placeholder");
        });

        el.addEventListener("blur", () => {
            el.setAttribute("placeholder", el.getAttribute("data-placeholder"));
        });
    });
