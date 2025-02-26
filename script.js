document.addEventListener("DOMContentLoaded", function () {
  /**
   * Smooth scroll with custom easing (easeInOutQuad).
   * @param {Element} target - The element to scroll to.
   * @param {number} duration - Scroll duration in milliseconds.
   */
  const smoothScroll = (target, duration) => {
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    // Easing function: easeInOutQuad
    const easeInOutQuad = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
  };

  // Smooth scrolling for navigation links
  document.querySelectorAll("nav ul li a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        smoothScroll(targetSection, 1000); // 1-second duration
      }
    });
  });

  // Intersection Observer for section animations
  const sections = document.querySelectorAll("section");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );
  sections.forEach((section) => observer.observe(section));

  // Contact Form Submission: Open Gmail Compose Window with pre-filled fields
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Build Gmail compose URL
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=gummalaprashanth509@gmail.com&su=${encodeURIComponent(
      "Message from " + name
    )}&body=${encodeURIComponent(message + "\n\nFrom: " + email)}`;

    window.open(gmailUrl, "_blank");
  });
});
