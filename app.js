const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

const menu = () => {
  nav.classList.toggle("menu");
  document.removeEventListener("click", menu);
};

const handleMenu = (e) => {
  e.stopPropagation();
  nav.classList.toggle("menu");
  if (nav.classList.contains("menu")) {
    document.addEventListener("click", menu);
  }
};

hamburger.addEventListener("click", handleMenu);
