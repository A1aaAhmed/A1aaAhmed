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
  function sendEmail(event) {
    event.preventDefault(); // Prevent form submission

    // Get email and message values
    const email = document.getElementById('email_addr').value;
    const message = document.getElementById('message').value;

    // Construct the mailto link
    const mailToLink = `mailto:alaaahmad20000@gmail.com?subject=New%20Message%20from%20${encodeURIComponent(email)}&body=${encodeURIComponent(message)}`;

    // Open the mail client
    window.location.href = mailToLink;
}