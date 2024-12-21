document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      document.querySelectorAll(".nav-link").forEach((nav) => nav.classList.remove("active"));
      link.classList.add("active");
    });
  });
  document.addEventListener("DOMContentLoaded", () => {
    new Typed("#typed-text", {
      strings: ["Junior Software Engineer", "Full-Stack Developer","Flutter Developer"],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    });
  });
  document.addEventListener("DOMContentLoaded", () => {
    tsParticles.load("particles", particlesConfig).then((container) => {
      console.log("Particles loaded", container);
    }).catch((error) => {
      console.error("Error loading particles", error);
    });
  });