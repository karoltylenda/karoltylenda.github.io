const darkModeSpan = document.getElementById("darkModeSpan");

function toggleDarkMode() {
    const lightMode = "light_mode";
    const darkMode = "dark_mode";

    htmlTag.classList.toggle("theme-dark");
    darkModeSpan.classList.toggle("has-text-warning");
    darkModeSpan.classList.toggle("has-text-link");

    if (darkModeSpan.innerText.trim() === lightMode) {
        darkModeSpan.innerText = darkMode;
    } else {
        darkModeSpan.innerText = lightMode;
    }
}

if (!darkModeSpan.innerText) {
    darkModeSpan.innerText = "light_mode";
}

document.addEventListener("DOMContentLoaded", () => {
    const $navbarBurgers = Array.prototype.slice.call(
        document.querySelectorAll(".navbar-burger"),
        0
    );

    $navbarBurgers.forEach((el) => {
        el.addEventListener("click", () => {
            const target = el.dataset.target;
            const $target = document.getElementById(target);
            el.classList.toggle("is-active");
            $target.classList.toggle("is-active");
        });
    });
});
