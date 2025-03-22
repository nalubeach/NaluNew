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
const popupImage = document.getElementById('popup-image');
const popupCloseBtn = document.getElementById('popup-close-btn');


// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  initAnimations();
  initLightbox();

// === POPUP DE IMAGEM (só 1 vez por sessão) ===
if (popupImage && !sessionStorage.getItem('popupShown')) {
  setTimeout(() => {
    popupImage.classList.add('active');
    sessionStorage.setItem('popupShown', 'true');
  }, 2000);
}

if (popupCloseBtn) {
  popupCloseBtn.addEventListener('click', () => {
    popupImage.classList.remove('active');
  });
}

if (popupImage) {
  popupImage.addEventListener('click', (e) => {
    if (e.target === popupImage) {
      popupImage.classList.remove('active');
    }
  });
}



  // Mobile menu toggle
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('active'); // Abre ou fecha o menu
      menuToggle.classList.toggle('active'); // Transforma o ícone em "X"
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

  menuToggle.classList.toggle('active'); // Alterna a classe do botão

  const spans = menuToggle.querySelectorAll('span');

  if (menuToggle.classList.contains('active')) {
    spans[0].style.transform = 'translateY(9px) rotate(45deg)';
    spans[1].style.opacity = '0'; // Esconde a linha do meio
    spans[2].style.transform = 'translateY(-9px) rotate(-45deg)';
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
