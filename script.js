function toggleMenu() {
  const menu = document.querySelector('.nav-links');
  const hamburger = document.querySelector('.hamburger');

  menu.classList.toggle('active'); // Activa o desactiva el menú
  hamburger.classList.toggle('active'); // Cambia el color del icono cuando se hace clic
}
