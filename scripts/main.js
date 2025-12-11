// Tailwind config
tailwind.config = {
  theme: {
    extend: {
      colors: { primary: '#0ea5a4' }
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".nav-link");

  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // prevent default jump

      const targetId = link.getAttribute("href").replace("#", "");
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        // Scroll so that the section is centered in the viewport
        const topOffset = targetSection.getBoundingClientRect().top + window.scrollY;
        const middleOffset = topOffset - (window.innerHeight / 2) + (targetSection.offsetHeight / 2);

        window.scrollTo({
          top: middleOffset,
          behavior: "smooth"
        });
      }
    });
  });
});
