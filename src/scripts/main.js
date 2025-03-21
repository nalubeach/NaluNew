// Importando os módulos
import { initAnimations } from './animations.js';
import { initLightbox } from './lightbox.js';

// DOM Elements
const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
const reservationButtons = document.querySelectorAll('.btn-reservation');
const modal = document.getElementById('mothersDay');
const closeModalBtn = document.querySelector('.close-btn');
const bookingModal = document.querySelector('.booking-modal');

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  // Inicializa as animações na rolagem
  initAnimations();

  // Inicializa o lightbox para a galeria de imagens
  initLightbox();

  // Set initial state (show Mother's Day modal)
  if (modal) {
    setTimeout(() => {
      modal.classList.add('active');
    }, 2000);
  }

  // Header scroll effect
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // Mobile menu toggle
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('active');
      toggleMenuIcon();
    });
  }

  // Close modal
  if (closeModalBtn && modal) {
    closeModalBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  }

  // Close modal when clicking outside content
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  }

  // Reservation buttons open booking modal
  if (bookingModal) {
    reservationButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        bookingModal.classList.add('active');
      });
    });
  }

  // Close booking modal when clicking outside content
  if (bookingModal) {
    bookingModal.addEventListener('click', (e) => {
      if (e.target === bookingModal) {
        bookingModal.classList.remove('active');
      }
    });
  }
});

// Toggle menu icon in mobile view
function toggleMenuIcon() {
  if (!menuToggle) return;

  const spans = menuToggle.querySelectorAll('span');

  if (nav.classList.contains('active')) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(8px, -8px)';
  } else {
    spans[0].style.transform = 'none';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'none';
  }
}

// Scroll to unhide header
  window.addEventListener('scroll', function() {
    const header = document.querySelector('.site-header');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
