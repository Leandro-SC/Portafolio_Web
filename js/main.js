// Esperar a que el documento cargue
document.addEventListener("DOMContentLoaded", function() {
    // Preloader
    const preloader = document.getElementById("preloader");
    window.addEventListener("load", function() {
      preloader.style.opacity = "0";
      setTimeout(() => preloader.style.display = "none", 500);
    });
  
    // Navbar Hamburger toggle
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
  
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  
    // Animación en scroll usando Intersection Observer
    const faders = document.querySelectorAll(".fade-in");
    const sliders = document.querySelectorAll(".slide-in");
  
    const appearOptions = {
      threshold: 0.3,
      rootMargin: "0px 0px -50px 0px"
    };
  
    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add("appear");
          observer.unobserve(entry.target);
        }
      });
    }, appearOptions);
  
    faders.forEach(fader => {
      appearOnScroll.observe(fader);
    });
  
    sliders.forEach(slider => {
      appearOnScroll.observe(slider);
    });
  
    // Ejemplo de manejo del formulario de contacto (puedes adaptarlo a un servicio real)
    const contactForm = document.getElementById("contactForm");
    contactForm.addEventListener("submit", function(e) {
      e.preventDefault();
      alert("Mensaje enviado. Pronto nos pondremos en contacto.");
      contactForm.reset();
    });
  });
  