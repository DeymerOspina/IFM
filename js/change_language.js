// script.js
document.getElementById("languageToggle").addEventListener("click", () => {
  const currentLang = document.documentElement.lang;
  const newLang = currentLang === "es" ? "en" : "es";
  document.documentElement.lang = newLang;

  const elements = document.querySelectorAll("[data-en]");
  elements.forEach((element) => {
    element.textContent = element.getAttribute(`data-${newLang}`);
  });

  document.getElementById("languageToggle").textContent =
    newLang === "es" ? "En / Es" : "Es / En";
  // document.getElementById("languageToggle").textContent =
  //   newLang === "es" ? "English" : "Español";
});
