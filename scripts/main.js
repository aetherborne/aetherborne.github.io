document.addEventListener("DOMContentLoaded", function() {
  const sectionTitles = document.querySelectorAll(".section-title");

  sectionTitles.forEach(title => {
    title.addEventListener("click", function() {
      const sectionContent = this.nextElementSibling;

      if (sectionContent.classList.contains("active")) {
        sectionContent.style.maxHeight = "0"; // Cerramos la sección gradualmente
        sectionContent.classList.remove("active");
      } else {
        document.querySelectorAll(".section-content").forEach(content => {
          content.style.maxHeight = "0"; // Cerramos todas las demás secciones
          content.classList.remove("active");
        });
        sectionContent.style.maxHeight = sectionContent.scrollHeight + "px"; // Abrimos la sección gradualmente
        sectionContent.classList.add("active");
      }
    });
  });
});
