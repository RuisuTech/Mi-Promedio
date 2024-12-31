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

const ajustarMenu = () => {
  if (window.innerWidth > 798) {
    navMenu.style.display = "flex";
    navMenu.style.opacity = "1";
    btnAbrir.style.display = "none";
    btnCerrar.style.display = "none";
  } else {
    navMenu.style.transition = "0s";
    navMenu.style.opacity = "0";
    btnAbrir.style.display = "block";
    btnCerrar.style.display = "none";
  }
};

window.addEventListener("resize", ajustarMenu);
window.addEventListener("load", ajustarMenu);

document.getElementById('calcular').addEventListener('click', function () {
  const nota1 = parseFloat(document.getElementById('nota1').value);
  const valor1 = parseFloat(document.getElementById('valor1').value);
  const nota2 = parseFloat(document.getElementById('nota2').value);
  const valor2 = parseFloat(document.getElementById('valor2').value);

  if (isNaN(nota1) || isNaN(valor1) || isNaN(nota2) || isNaN(valor2)) {
    alert('Por favor, llena todos los campos correctamente.');
    return;
  }

  if (valor1 + valor2 !== 100) {
    alert('La suma de los valores debe ser 100%.');
    return;
  }

  const promedio = (nota1 * valor1 / 100) + (nota2 * valor2 / 100);
  document.querySelector('#resultado span').textContent = promedio.toFixed(2);
});
