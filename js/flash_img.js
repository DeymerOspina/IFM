// const backgrounds = [
//   document.getElementById("background1"),
//   document.getElementById("background2"),
//   document.getElementById("background3"),
//   document.getElementById("background4"),
//   document.getElementById("background5"),
//   document.getElementById("background6"),
// ];

// let currentIndex = 0;

// function showNextBackground() {
//   backgrounds.forEach((bg) => bg.classList.remove("flash"));
//   backgrounds[currentIndex].classList.add("flash");
//   currentIndex = (currentIndex + 1) % backgrounds.length;
// }

// setInterval(showNextBackground, 2000);

const imageContainers = [
  document.getElementById("image-contain-1"),
  document.getElementById("image-contain-2"),
  document.getElementById("image-contain-3"),
];

let currentIndex = 0;

function showNextImages() {
  imageContainers.forEach((container) => container.classList.remove("flash"));
  imageContainers[currentIndex].classList.add("flash");
  currentIndex = (currentIndex + 1) % imageContainers.length;
}

setInterval(showNextImages, 2000);
