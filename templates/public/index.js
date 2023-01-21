(function () {
  window.runTemplateScript = function () {
    const onePageHeaderSelector = '.one-page-header';
    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector(onePageHeaderSelector);
    if (mainNav) {
      new bootstrap.ScrollSpy(document.documentElement, {
        target: onePageHeaderSelector,
        // smoothScroll: true,
        // rootMargin: '0px 0px -25%',
        // offset: 68,
        // threshold: [0.1, 0.5, 1]
      });
    };

    // Navbar shrink function
    var navbarShrink = function () {
      const navbarCollapsible = document.body.querySelector(onePageHeaderSelector);
      if (!navbarCollapsible) {
          return;
      }
      if (window.scrollY === 0) {
          navbarCollapsible.classList.remove('navbar-shrink')
      } else {
          navbarCollapsible.classList.add('navbar-shrink')
      }
    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);
  }
})();