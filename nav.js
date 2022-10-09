const primaryNav = document.querySelector(".navbar");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute("data-visible")

    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else if (visibility === "true") {
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
});

const dropdownButton = document.querySelector(".dropdown-button");
const dropdownContent = document.querySelector(".dropdown-content");

dropdownButton.addEventListener("click", () => {
    const dropdownVisibility = dropdownContent.getAttribute("menu-visible")
    
    if (dropdownVisibility === "false") {
        dropdownContent.setAttribute("menu-visible", true);
    } else if (dropdownVisibility === "true") {
        dropdownContent.setAttribute("menu-visible", false);
    }
})