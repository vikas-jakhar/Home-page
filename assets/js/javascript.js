const accordion = document.querySelectorAll(".box-faq");
const accordionHeading = document.querySelectorAll(".box-h");

accordionHeading.forEach(e => {
    e.addEventListener("click", () => {
        const activeAccrodion = document.querySelector(".box-faq.active");
        e.parentElement.classList.toggle("active");
        activeAccrodion && activeAccrodion.classList.remove("active");
    })
});

const menuicon = document.querySelector(".menu-icon");
const menulist = document.querySelector(".menu-list");

menuicon.addEventListener("click", function () {
    menulist.classList.toggle("show-menu");
});