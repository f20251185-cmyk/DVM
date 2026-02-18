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

nextBtn.addEventListener("click", () => {
  if (index < track.children.length - 2) {
    index++;
    track.style.transform = `translateX(-${index * 220}px)`;
  }
});

prevBtn.addEventListener("click", () => {
  if (index > 0) {
    index--;
    track.style.transform = `translateX(-${index * 220}px)`;
  }
});
