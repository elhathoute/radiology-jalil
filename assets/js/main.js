/**
* Template Name: Medicio
* Template URL: https://bootstrapmade.com/medicio-free-bootstrap-theme/
* Updated: Aug 07 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Auto generate the carousel indicators
   */
  document.querySelectorAll('.carousel-indicators').forEach((carouselIndicator) => {
    carouselIndicator.closest('.carousel').querySelectorAll('.carousel-item').forEach((carouselItem, index) => {
      if (index === 0) {
        carouselIndicator.innerHTML += `<li data-bs-target="#${carouselIndicator.closest('.carousel').id}" data-bs-slide-to="${index}" class="active"></li>`;
      } else {
        carouselIndicator.innerHTML += `<li data-bs-target="#${carouselIndicator.closest('.carousel').id}" data-bs-slide-to="${index}"></li>`;
      }
    });
  });

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

  const wrapper = document.getElementById('galleryWrapper');
  const filter = document.getElementById('typeFilter');
  
  const images = [];
  
// 👉 Groupe Accueil : (16, 2’, 3’, 4’, 5’, 7)
// 16 et 7 sont dans /others/, le reste est dans la racine img_*.jpeg

// 16 → dans /others/
images.push({
  src: `assets/img/others/RADIOLOGIE%20AIN%20CHOK-16.jpg`,
  type: 'Accueil'
});

// 7 → dans /others/
images.push({
  src: `assets/img/others/RADIOLOGIE%20AIN%20CHOK-7.jpg`,
  type: 'Accueil'
});
  // 7 → dans /others/
images.push({
  src: `assets/img/others/RADIOLOGIE%20AIN%20CHOK-4.jpg`,
  type: 'Accueil'
});



  // 👉 Groupe Radio : (17,2, 11)
  // 17+ et 11 sont dans /others/
  [17,11].forEach(num => {
    images.push({
      src: `assets/img/others/RADIOLOGIE%20AIN%20CHOK-${num}.jpg`,
      type: 'Radio'
    });
  });
  
  // 👉 Groupe IRM : (1+)
  images.push({
    src: `assets/img/others/RADIOLOGIE%20AIN%20CHOK-1.jpg`,
    type: 'IRM'
  });
  
  // 👉 Groupe Scanner : (12, 13, 14, 15)
  [12, 13, 14, 15].forEach(num => {
    images.push({
      src: `assets/img/others/RADIOLOGIE%20AIN%20CHOK-${num}.jpg`,
      type: 'Scanner'
    });
  });
  
  // 👉 Groupe Echo : (2,5, 6, 10)
  [ 5, 6, 10].forEach(num => {
    images.push({
      src: `assets/img/others/RADIOLOGIE%20AIN%20CHOK-${num}.jpg`,
      type: 'Echo'
    });
  });
  
  // 👉 Groupe Panoramique : (3)
  [2, 3].forEach(num => {
    images.push({
      src: `assets/img/others/RADIOLOGIE%20AIN%20CHOK-${num}.jpg`,
      type: 'Panoramique'
    });
  });
  
  // 👉 Groupe Ostéopathe : (18)
  images.push({
    src: `assets/img/others/RADIOLOGIE%20AIN%20CHOK-18.jpg`,
    type: 'Ostéopathe'
  });
  
  // 👉 Groupe Mamo : (4, 8, 9)
  [8, 9].forEach(num => {
    images.push({
      src: `assets/img/others/RADIOLOGIE%20AIN%20CHOK-${num}.jpg`,
      type: 'Mamo'
    });
  });
  
  let swiper;
  
  function renderImages(type) {
    wrapper.innerHTML = '';
  
    const filtered = (type === 'All') ? images : images.filter(img => img.type === type);
  
    filtered.forEach(img => {
      const slide = `
        <div class="swiper-slide">
          <a class="glightbox" data-gallery="images-gallery" href="${img.src}">
            <img src="${img.src}" class="img-fluid" alt="">
          </a>
        </div>`;
      wrapper.insertAdjacentHTML('beforeend', slide);
    });
  
    if (swiper) swiper.destroy(true, true);
    swiper = new Swiper('.init-swiper', JSON.parse(document.querySelector('.swiper-config').textContent));
  }
  
  renderImages('All');
  
  document.querySelectorAll('.filter-item').forEach(item => {
    item.addEventListener('click', () => {
      document.querySelectorAll('.filter-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');
  
      const type = item.dataset.type;
      renderImages(type);
    });
  });
  
  

})();