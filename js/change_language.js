// script.js

document.getElementById("languageToggle").addEventListener("click", () => {
  const currentLang = document.documentElement.lang;
  const newLang = currentLang === "es" ? "en" : "es";
  document.documentElement.lang = newLang;

  const elements = document.querySelectorAll("[data-en]");
  elements.forEach((element) => {
    element.textContent = element.getAttribute(`data-${newLang}`);
  });

  const languageToggle = document.getElementById("languageToggle");
  const languageImage = document.getElementById("languageImage");

  if (newLang === "es") {
    languageToggle.textContent = " En/Es";
    languageImage.src = "assets/images/Flag_of_the_United_States.png";
  } else {
    languageToggle.textContent = " Es/En";
    languageImage.src = "assets/svg/Flag_Spain.svg";
  }
  // Move the image back to the beginning of the button text
  languageToggle.insertBefore(languageImage, languageToggle.firstChild);
});

// document.getElementById("languageToggle").addEventListener("click", () => {
//   const currentLang = document.documentElement.lang;
//   const newLang = currentLang === "es" ? "en" : "es";
//   document.documentElement.lang = newLang;

//   const elements = document.querySelectorAll("[data-en]");
//   elements.forEach((element) => {
//     element.textContent = element.getAttribute(`data-${newLang}`);
//   });

//   document.getElementById("languageToggle").textContent =
//     newLang === "es" ? "En/Es" : "Es/En";

// });
