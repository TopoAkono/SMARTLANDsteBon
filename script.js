document.addEventListener('DOMContentLoaded', () => {
    // Toggle menu
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
  
    burger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  
    // Slider
    const slides = document.querySelectorAll('.slide');
    let current = 0;
  
    setInterval(() => {
      slides[current].classList.remove('active');
      current = (current + 1) % slides.length;
      slides[current].classList.add('active');
    }, 5000);
  });
  