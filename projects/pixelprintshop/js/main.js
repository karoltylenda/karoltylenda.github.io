const filterButtons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".device-card");

const activeFilters = {
    brand: "all",
    spec: "all",
};

filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const group = btn.parentElement.getAttribute("data-filter-group");
        const filter = btn.getAttribute("data-filter");

        btn.parentElement
            .querySelectorAll(".filter-btn")
            .forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        activeFilters[group] = filter;

        cards.forEach((card) => {
            const matchesBrand =
                activeFilters.brand === "all" ||
                card.classList.contains(activeFilters.brand);
            const matchesSpec =
                activeFilters.spec === "all" ||
                card.classList.contains(activeFilters.spec);

            if (matchesBrand && matchesSpec) {
                card.style.display = "block";
                setTimeout(() => (card.style.opacity = "1"), 10);
            } else {
                card.style.opacity = "0";
                setTimeout(() => (card.style.display = "none"), 300);
            }
        });

        setTimeout(() => AOS.refresh(), 400);
    });
});
