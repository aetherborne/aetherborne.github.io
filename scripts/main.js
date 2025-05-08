document.addEventListener("DOMContentLoaded", () => {
  // Manejo de secciones desplegables
  const sectionTitles = document.querySelectorAll(".section-title");

  sectionTitles.forEach(title => {
    title.addEventListener("click", () => {
      const content = title.nextElementSibling;

      if (content.classList.contains("active")) {
        content.style.height = "0";
        content.classList.remove("active");
      } else {
        document.querySelectorAll(".section-content").forEach(other => {
          other.style.height = "0";
          other.classList.remove("active");
        });

        content.style.height = content.scrollHeight + "px";
        content.classList.add("active");
      }
    });
  });

  // Efecto Tilt en imágenes dentro de elementos .tilt
  const tiltElements = document.querySelectorAll(".tilt");

  tiltElements.forEach(tilt => {
    const inner = tilt.querySelector(".tilt-inner");

    tilt.addEventListener("mousemove", (e) => {
      const { width, height, left, top } = tilt.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;

      const rotateX = ((y / height) - 0.5) * -15;
      const rotateY = ((x / width) - 0.5) * 15;

      inner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    tilt.addEventListener("mouseleave", () => {
      inner.style.transform = "rotateX(0deg) rotateY(0deg)";
    });
  });
});
