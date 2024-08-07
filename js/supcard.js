document.getElementById("menuNav").addEventListener("click", function () {
  var menuContent = document.getElementById("menuContent");
  if (menuContent.classList.contains("hidden")) {
    menuContent.classList.remove("hidden");
    menuContent.classList.add("show");
  } else {
    menuContent.classList.remove("show");
    menuContent.classList.add("hidden");
  }
});

document.getElementById("overlay").addEventListener("click", function () {
  var sidePanel = document.getElementById("menuNav");
  var overlay = document.getElementById("overlay");
  sidePanel.classList.remove("show");
  sidePanel.classList.add("hidden");
  overlay.classList.add("hidden");
});
