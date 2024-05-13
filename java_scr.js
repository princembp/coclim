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



    // Inicializa el mapa
    var map = L.map('map').setView([41.2166700, 1.5333300],13);// Coordenadas de El Vendrell

    // Añade una capa de mosaicos de OpenStreetMap
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);


    // Crea un marcador para El Vendrell
    var marker = L.marker([41.2166700, 1.5333300]).addTo(map);
     marker.bindPopup("<b>El Vendrell</b><br>").openPopup();

     L.circleMarker(
      [41.2166700, 1.5333300 - 0.001], 
      {radius: 50, color: "black", fillColor: "red"}
      ).addTo(map);


