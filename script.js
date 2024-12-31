const btnAbrir = document.getElementById("btn-abrir");
const btnCerrar = document.getElementById("btn-cerrar");
const navMenu = document.getElementById("nav-menu");

btnAbrir.addEventListener("click", () => {
  navMenu.style.transition = ".5s";
  navMenu.style.opacity = "1";
  navMenu.style.display = "flex";
  btnAbrir.style.display = "none";
  btnCerrar.style.display = "block";
});

btnCerrar.addEventListener("click", () => {
  navMenu.style.opacity = "0";
  btnAbrir.style.display = "block";
  btnCerrar.style.display = "none";
});
