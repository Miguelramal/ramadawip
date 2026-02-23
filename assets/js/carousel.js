// Apilamiento cíclico usando z-index
const slides = document.querySelectorAll('.carousel img');

// Inicializamos: la primera imagen arriba
slides.forEach((img, i) => {
    img.style.zIndex = slides.length - i;
});

function nextSlide() {
    slides.forEach(img => {
        let z = parseInt(img.style.zIndex);
        z = z - 1;
        if (z < 1) z = slides.length; // la que estaba abajo sube arriba
        img.style.zIndex = z;
    });
}

// Cambia cada 1 segundo
setInterval(nextSlide, 2000);