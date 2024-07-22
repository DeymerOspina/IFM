// Boton Derecho

document.getElementById("position-left").addEventListener("click", function () {
  var sidePanel = document.getElementById("sidePanel");
  var overlay = document.getElementById("overlay");
  if (sidePanel.classList.contains("show-animation")) {
    sidePanel.classList.remove("show-animation");
    sidePanel.classList.add("hidden");
    overlay.classList.add("hidden");
  } else {
    sidePanel.classList.remove("hidden");
    sidePanel.classList.add("show-animation");
    overlay.classList.remove("hidden");
  }
});

// Boton Izquierdo

document
  .getElementById("position-right")
  .addEventListener("click", function () {
    var sidePanel = document.getElementById("sidePanel2");
    var overlay = document.getElementById("overlay");
    if (sidePanel.classList.contains("show-animation2")) {
      sidePanel.classList.remove("show-animation2");
      sidePanel.classList.add("hidden");
      overlay.classList.add("hidden");
    } else {
      sidePanel.classList.remove("hidden");
      sidePanel.classList.add("show-animation2");
      overlay.classList.remove("hidden");
    }
  });

// Overlay Derecho

document.getElementById("overlay").addEventListener("click", function () {
    var sidePanel = document.getElementById("sidePanel2");
    var overlay = document.getElementById("overlay");
    sidePanel.classList.remove("show-animation2");
    sidePanel.classList.add("hidden");
    overlay.classList.add("hidden");
  });

// Overlay Izquierdo

document.getElementById("overlay").addEventListener("click", function () {
  var sidePanel = document.getElementById("sidePanel");
  var overlay = document.getElementById("overlay");
  sidePanel.classList.remove("show-animation");
  sidePanel.classList.add("hidden");
  overlay.classList.add("hidden");
});

