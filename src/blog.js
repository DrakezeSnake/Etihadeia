const header = document.querySelector(".hero-bar");
const menu = document.querySelector(".hero-bar__menu");

menu?.addEventListener("click", () => {
  const open = !header?.classList.contains("is-open");
  header?.classList.toggle("is-open", open);
  menu.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".hero-bar__nav-panel a").forEach((link) => {
  link.addEventListener("click", () => {
    header?.classList.remove("is-open");
    menu?.setAttribute("aria-expanded", "false");
  });
});

document.querySelectorAll("[data-current-year]").forEach((node) => {
  node.textContent = String(new Date().getFullYear());
});
