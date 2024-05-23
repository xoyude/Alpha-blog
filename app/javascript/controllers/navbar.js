// navbar.js

document.addEventListener("DOMContentLoaded", function() {
    const dropdownToggle = document.querySelector(".dropdown-toggle");
    const dropdownMenu = document.querySelector(".dropdown-menu");
  
    dropdownToggle.addEventListener("click", function() {
      if (dropdownMenu.classList.contains("show")) {
        dropdownMenu.classList.remove("show");
      } else {
        dropdownMenu.classList.add("show");
      }
    });
  
    // Cerrar el menú desplegable al hacer clic fuera de él
    document.addEventListener("click", function(event) {
      if (!dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.remove("show");
      }
    });
  });
  