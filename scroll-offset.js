document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
  
      if (targetElement) {
        const headerOffset = document.querySelector('nav').offsetHeight;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  