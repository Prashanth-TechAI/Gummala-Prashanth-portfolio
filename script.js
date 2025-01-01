// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      targetSection.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Add animations on scroll
  const sections = document.querySelectorAll('section');
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.2 }
  );
  
  sections.forEach((section) => {
    observer.observe(section);
  });
  
  // Contact Form Submission
  document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    const mailtoLink = `mailto:gummalaprashanth509@gmail.com?subject=Message from ${name}&body=${message}%0D%0A%0D%0AFrom: ${email}`;
  
    window.location.href = mailtoLink;
  });