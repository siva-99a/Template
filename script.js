const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
  // Toggle aria-label for accessibility
  const isOpen = mobileMenu.classList.contains("open");
  hamburger.setAttribute("aria-label", isOpen ? "Close Menu" : "Open Menu");
});
