// Mobile Menu Toggle
const toggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


// Carousel Logic
const track = document.getElementById("carousel-track");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let index = 0;
const totalCards = track.children.length;

nextBtn.addEventListener("click", () => {
  index++;
  if (index >= totalCards) {
    index = 0; // reset to beginning
  }
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  index--;
  if (index < 0) {
    index = totalCards - 1; // go to last card
  }
  updateCarousel();
});

function updateCarousel() {
  track.style.transform = `translateX(-${index * 220}px)`;
}
