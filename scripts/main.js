document.addEventListener("DOMContentLoaded", function() {
    const sectionTitles = document.querySelectorAll(".section-title");
  
    sectionTitles.forEach(title => {
      title.addEventListener("click", function() {
        const sectionContent = this.nextElementSibling;
  
        if (sectionContent.classList.contains("active")) {
          sectionContent.classList.remove("active");
        } else {
          document.querySelectorAll(".section-content").forEach(content => {
            content.classList.remove("active");
          });
          sectionContent.classList.add("active");
        }
      });
    });
  });
  