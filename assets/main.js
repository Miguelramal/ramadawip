const imagePaths = [
  "images/img1.jpg",
  "images/img2.jpg",
  "images/img3.jpg"
];

const carousel = document.getElementById("carousel");
let slides = [];

// Crear imágenes y asignar z-index inicial
imagePaths.forEach((path, index) => {
  const img = document.createElement("img");
  img.src = path;
  img.classList.add("slide");
  img.style.zIndex = imagePaths.length - index;
  carousel.appendChild(img);
  slides.push(img);
});

let currentIndex = 0;

function rotateSlides() {
  const currentSlide = slides[currentIndex];

  // Mandar la imagen actual al fondo
  currentSlide.style.zIndex = 1;

  // Subir z-index de las demás
  slides.forEach((slide, i) => {
    if (i !== currentIndex) {
      slide.style.zIndex = parseInt(slide.style.zIndex) + 1;
    }
  });

  // Avanzar índice
  currentIndex = (currentIndex + 1) % slides.length;
}

// Intervalo 1 segundo
setInterval(rotateSlides, 1000);