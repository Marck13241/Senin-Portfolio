// Tailwind config
tailwind.config = {
  theme: {
    extend: {
      colors: { primary: '#0ea5a4' }
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const smoothLinks = document.querySelectorAll('a[href^="#"], a[href="index.html"]');

  smoothLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // prevent default jump

      let targetId = link.getAttribute("href");

      // Special case for Home
      if (targetId === "index.html" || targetId === "#top") {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
        return; // stop here
      }

      // For other sections
      targetId = targetId.substring(1); // remove #
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
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