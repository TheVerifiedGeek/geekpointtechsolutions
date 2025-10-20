// ===== MOBILE NAV TOGGLE =====
const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
  menuToggle.classList.toggle("open");
});

// ===== SMOOTH SCROLL FOR LINKS =====
const navLinks = document.querySelectorAll('.nav a[href^="#"]');
navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
    nav.classList.remove("active");
    menuToggle.classList.remove("open");
  });
});

// ===== FADE-IN SECTIONS ON SCROLL =====
const sections = document.querySelectorAll(".section");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });
sections.forEach(section => observer.observe(section));

const customBtn = document.getElementById('customSubmit');
const googleFormURL = "https://docs.google.com/forms/d/e/1FAIpQLSdPCImuP7kJN2zHNM0lSn5_5c7v-2FtSl9HqzazFM6p8-Xllw/viewform";

customBtn.addEventListener('click', () => {
  window.open(googleFormURL, '_blank'); // opens Google Form in new tab for submission
});
// Auto-update copyright year
const yearSpan = document.getElementById('currentYear');
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;
