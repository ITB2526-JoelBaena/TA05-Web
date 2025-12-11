// Seleccionamos todos los slides
const slides = document.querySelectorAll(".slide");

// Activar slide al pasar el ratón
slides.forEach(slide => {
  slide.addEventListener("mouseenter", () => {
    removeActive();
    slide.classList.add("active");
  });
});

// Restaurar estado cuando se sale del slider (opcional)
document.querySelector(".accordion-slider").addEventListener("mouseleave", () => {
  removeActive();
});

// Función que quita la clase activa
function removeActive() {
  slides.forEach(s => s.classList.remove("active"));
}
