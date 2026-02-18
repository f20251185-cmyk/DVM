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

const cardWidth = 220;

nextBtn.addEventListener("click", () => {
  track.style.transition = "transform 0.4s ease";
  track.style.transform = `translateX(-${cardWidth}px)`;

  setTimeout(() => {
    track.style.transition = "none";
    track.appendChild(track.firstElementChild);
    track.style.transform = "translateX(0)";
  }, 400);
});

prevBtn.addEventListener("click", () => {
  track.style.transition = "none";
  track.prepend(track.lastElementChild);
  track.style.transform = `translateX(-${cardWidth}px)`;

  setTimeout(() => {
    track.style.transition = "transform 0.4s ease";
    track.style.transform = "translateX(0)";
  }, 10);
});
