  function mostrarOcultar(boton) {
    // Encuentra el párrafo relacionado con el botón clickeado
    var p = boton.previousElementSibling;
    
    // Cambia la visibilidad del párrafo y el texto del botón
    if (p.style.display === "none") {
      p.style.display = "block"; // Muestra el párrafo
      boton.textContent = "-"; // Cambia el texto del botón a "-"
    } else {
      p.style.display = "none"; // Oculta el párrafo
      boton.textContent = "+"; // Cambia el texto del botón a "+"
    }
  }


  var backToTopButton = document.getElementById("flecha");

  // Cuando el usuario hace scroll hacia abajo 20px desde el inicio de la página, muestra el botón
  window.onscroll = function() {
    scrollFunction();
  };
  
  function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  }
  
  // Función para volver al inicio cuando se hace clic en el botón
    backToTopButton.addEventListener("click", function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });


    // menu 
    function myFunction() {
      var x = document.getElementById("nav-links");
      if (x.className === "nav_links") {
          x.className += " responsive";
      } else {
          x.className = "nav_links";
      }
      }



