const navToggle = document.querySelector(".nav-toggle");
const menuLinks = document.querySelector(".menu-links");

navToggle.addEventListener("click", () => {
	menuLinks.classList.toggle("show-links");
});