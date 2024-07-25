// script.js
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", function () {
      const contentId = "content-service-" + this.id.split("-")[1];
      const content = document.getElementById(contentId);
      document
        .querySelectorAll(".content")
        .forEach((c) => c.classList.remove("active"));
      content.classList.add("active");
    });
  });
});
