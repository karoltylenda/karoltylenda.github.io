const themeBtn = document.getElementById("themeBtn");
const htmlTag = document.getElementById("htmlTag");
const spanTheme = document.getElementById("spanTheme");

function toggleDarkMode() {
    const lightMode = "light_mode";
    const darkMode = "dark_mode";

    htmlTag.classList.toggle("theme-dark");
    spanTheme.classList.toggle("has-text-warning");
    spanTheme.classList.toggle("has-text-link");

    if (spanTheme.innerText.trim() === lightMode) {
        spanTheme.innerText = darkMode;
    } else {
        spanTheme.innerText = lightMode;
    }
}

if (!spanTheme.innerText) {
    spanTheme.innerText = "light_mode";
}
