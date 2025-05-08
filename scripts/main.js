document.addEventListener("DOMContentLoaded", function() {
  const sectionTitles = document.querySelectorAll(".section-title");

  sectionTitles.forEach(title => {
    title.addEventListener("click", function() {
      const sectionContent = this.nextElementSibling;

      if (sectionContent.classList.contains("active")) {
        sectionContent.style.maxHeight = "0";
        sectionContent.classList.remove("active");
      } else {
        document.querySelectorAll(".section-content").forEach(content => {
          content.style.maxHeight = "0"; 
          content.classList.remove("active");
        });
        sectionContent.style.maxHeight = sectionContent.scrollHeight + "px"; 
        sectionContent.classList.add("active");
      }
    });
  });

  document.querySelectorAll('img').forEach(img => {
    // Crear contenedores para el efecto tilt
    const wrapper = document.createElement('div');
    wrapper.classList.add('tilt');

    const inner = document.createElement('div');
    inner.classList.add('tilt-inner');

    img.parentNode.insertBefore(wrapper, img);
    wrapper.appendChild(inner);
    inner.appendChild(img);

    wrapper.addEventListener('mousemove', (e) => {
      const rect = wrapper.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateX = ((y / rect.height) - 0.5) * 20;
      const rotateY = ((x / rect.width) - 0.5) * -20;

      inner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    wrapper.addEventListener('mouseleave', () => {
      inner.style.transform = 'rotateX(0deg) rotateY(0deg)';
    });
  });
});
