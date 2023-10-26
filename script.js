document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for anchor links
  const smoothScrollLinks = document.querySelectorAll("a[href^='#']");
  for (let anchor of smoothScrollLinks) {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      }
    });
  }
});
