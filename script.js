document.addEventListener('DOMContentLoaded', function() {
  if (typeof feather !== 'undefined') {
    feather.replace();
  }
  
  document.getElementById('current-year').textContent = new Date().getFullYear();
  
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  if (hamburger) {
    hamburger.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      
      const icon = hamburger.querySelector('i');
      if (navLinks.classList.contains('active')) {
        icon.setAttribute('data-feather', 'x');
      } else {
        icon.setAttribute('data-feather', 'menu');
      }
      feather.replace();
    });
  }
  
  const navLinkItems = document.querySelectorAll('.nav-link');
  navLinkItems.forEach(link => {
    link.addEventListener('click', function() {
      if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        const icon = hamburger.querySelector('i');
        icon.setAttribute('data-feather', 'menu');
        feather.replace();
      }
    });
  });
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerHeight = document.querySelector('.topbar').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      const formData = new FormData(this);
      const name = formData.get('from_name');
      
      alert(`Thank you, ${name}! Your message has been sent. I'll get back to you soon.`);
      
      this.reset();
    });
  }
  
  window.addEventListener('scroll', function() {
    const topbar = document.querySelector('.topbar');
    if (window.scrollY > 100) {
      topbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
      topbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.08)';
    } else {
      topbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
      topbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.08)';
    }
  });
  
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.skill-category, .project, .detail-item');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;
      
      if (elementPosition < screenPosition) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  };
  
  const animatedElements = document.querySelectorAll('.skill-category, .project, .detail-item');
  animatedElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });
  
  setTimeout(animateOnScroll, 300);
  
  window.addEventListener('scroll', animateOnScroll);
});