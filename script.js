const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("closeMenu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
  hamburger.style.display = "none";
  // Toggle aria-label for accessibility
  const isOpen = mobileMenu.classList.contains("open");
  hamburger.setAttribute("aria-label", isOpen ? "Close Menu" : "Open Menu");
  if (isOpen) {
    closeMenu.style.display = "block";
  }
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("open");
  hamburger.style.display = "flex";
  closeMenu.style.display = "none";
});
