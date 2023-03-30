const btnMobile = document.getElementById("btnMobile");

function toggleMenu(e) {
  if (e.type === "touchstart") e.preventDefault();

  const nav = document.querySelector(".menu");
  nav.classList.toggle("ativo");
  const active = nav.classList.contains("ativo");
  e.currentTarget.setAttribute("aria-expanded", active);
  if (active) {
    e.currentTarget.setAttribute("aria-label", "Fechar menu");
  } else {
    e.currentTarget.setAttribute("aria-label", "Abrir menu");
  }
}
btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);
