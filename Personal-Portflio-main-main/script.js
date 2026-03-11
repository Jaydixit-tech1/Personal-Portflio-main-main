(function () {
  'use strict';

  // ----- Sticky Navbar -----
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  function updateNavbar() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', updateNavbar);
  updateNavbar();

  // ----- Mobile Menu Toggle -----
  function toggleMenu() {
    navMenu.classList.toggle('active');
    const icon = navToggle.querySelector('i');
    if (navMenu.classList.contains('active')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
    } else {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  }

  navToggle.addEventListener('click', toggleMenu);

  // Close menu when a nav link is clicked (smooth scroll will happen via anchor)
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (navMenu.classList.contains('active')) {
        toggleMenu();
      }
    });
  });

  // ----- Smooth Scroll (enhance for offset with fixed nav) -----
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ----- Scroll Reveal Animation -----
  const revealElements = document.querySelectorAll('.reveal');
  const revealOffset = 80;

  function revealOnScroll() {
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY || window.pageYOffset;

    revealElements.forEach(function (el) {
      const top = el.getBoundingClientRect().top + scrollY;
      if (scrollY + windowHeight - revealOffset > top) {
        el.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);
  revealOnScroll(); // run once on load for elements already in view

  // ----- Footer Year -----
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // ----- Download Resume Button -----
  var downloadResume = document.getElementById('downloadResume');
  if (downloadResume) {
    downloadResume.addEventListener('click', function (e) {
      // Add your resume file (e.g. resume.pdf) in the project folder and use:
      // this.href = 'resume.pdf'; this.download = 'Jay_Dixit_Resume.pdf';
      // For now, prevent default and show a message if no file is set
      if (!this.getAttribute('href') || this.getAttribute('href') === '#') {
        e.preventDefault();
        alert('Add your resume PDF to the project folder and set the link in index.html (id="downloadResume") to enable download.');
      }
    });
  }
})();
