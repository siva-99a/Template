function toggleScrolled() {
  const selectBody = document.querySelector("body");
  const slectNavBar = document.querySelector("#nav");
  if (
    !slectNavBar.classList.contains("scroll-up-sticky") &&
    !slectNavBar.classList.contains("sticky-top") &&
    !slectNavBar.classList.contains("fixed-top")
  )
    return;
  window.scrollY > 100
    ? selectBody.classList.add("scrolled")
    : selectBody.classList.remove("scrolled");
}

document.addEventListener("scroll", toggleScrolled);
window.addEventListener("load", toggleScrolled);
