// Scroll fade-in animation using Intersection Observer
document.addEventListener("DOMContentLoaded", function () {
  // Add fade-in-section class to major content sections
  const sections = document.querySelectorAll(
    ".about .clearfix > p, .about .clearfix > h2, .about .clearfix > div.row, .news, .publications, .card"
  );

  sections.forEach(function (el) {
    el.classList.add("fade-in-section");
  });

  // Observe and animate
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".fade-in-section").forEach(function (el) {
    observer.observe(el);
  });
});
