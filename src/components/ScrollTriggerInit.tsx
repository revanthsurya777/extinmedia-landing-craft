
import { useEffect } from 'react';

const ScrollTriggerInit = () => {
  useEffect(() => {
    const initScrollTriggers = () => {
      const scrollElements = document.querySelectorAll('.scroll-trigger');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '-50px'
      });

      scrollElements.forEach((el) => observer.observe(el));
      
      return () => {
        scrollElements.forEach((el) => observer.unobserve(el));
      };
    };

    // Initialize after a short delay to ensure DOM is ready
    const timeout = setTimeout(initScrollTriggers, 100);
    
    return () => clearTimeout(timeout);
  }, []);

  return null;
};

export default ScrollTriggerInit;
