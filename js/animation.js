(function () {

  // Typing animation
  new Typed('#typing-text', {
    strings: ["COMMUNICATE OUR IDEAS?", "BE MORE CREATIVE?", "IMPROVE OUR ENVIRONMENTS?"],
    typeSpeed: 60,
    backDelay: 1500,
    fadeOut: false,
    backSpeed: 30,
    smartBackspace: true,
    loop: true,
    showCursor: false
  });

  // Sticky nav — slide in after scrolling 80% past the hero
  const stickyNav = document.getElementById('sticky-nav');
  const hero = document.getElementById('landing_background');
  const scrollHint = document.querySelector('.scroll-hint');
  const heroGradient = document.querySelector('.hero-gradient');

  function updateOnScroll() {
    const heroThreshold = hero ? hero.offsetHeight * 0.8 : window.innerHeight * 0.8;
    const hintThreshold = window.innerHeight * 0.4;

    // Sticky nav
    if (window.scrollY > heroThreshold) {
      stickyNav.classList.add('visible');
      stickyNav.removeAttribute('aria-hidden');
    } else {
      stickyNav.classList.remove('visible');
      stickyNav.setAttribute('aria-hidden', 'true');
    }

    // Scroll hint + gradient — hide once user has scrolled noticeably
    if (window.scrollY > hintThreshold) {
      scrollHint?.classList.add('hidden');
      heroGradient?.classList.add('hidden');
    } else {
      scrollHint?.classList.remove('hidden');
      heroGradient?.classList.remove('hidden');
    }
  }

  window.addEventListener('scroll', updateOnScroll, { passive: true });

  // Chevron click — scroll to bio/headshot section
  const scrollHintBtn = document.querySelector('.scroll-hint');
  if (scrollHintBtn) {
    scrollHintBtn.style.cursor = 'pointer';
    scrollHintBtn.addEventListener('click', function () {
      const target = document.getElementById('headshot-content');
      if (target) {
        const top = target.getBoundingClientRect().top + window.scrollY - 32;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  }

  // Landing nav tap feedback (mobile)
  document.querySelectorAll('#hero-navigation-bar a.nav').forEach(function (link) {
    link.addEventListener('click', function () {
      link.classList.add('tapped');
      setTimeout(function () { link.classList.remove('tapped'); }, 600);
    });
  });

  // Hamburger menu (mobile sticky nav)
  const hamburger = document.getElementById('hamburger');
  const stickyNavLinks = document.getElementById('sticky-nav-links');
  if (hamburger && stickyNavLinks) {
    hamburger.addEventListener('click', function () {
      const open = stickyNavLinks.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', open);
    });
    stickyNavLinks.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        stickyNavLinks.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Lightbox for research figures
  if (typeof GLightbox !== 'undefined') {
    GLightbox({ selector: '.glightbox' });
  }

  // Scroll-triggered fade-ins
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.06 });

  document.querySelectorAll('.fade-section').forEach(function (el) {
    observer.observe(el);
  });

})();
