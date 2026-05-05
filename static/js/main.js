/* main.js — gatekeeper logic & section transitions */

/* ── NO BUTTON RUN AWAY ── */
(function positionNoButton() {
  const btn = document.getElementById('noBtn');
  if (!btn) return;

  // initial position: near the Yes button
  btn.style.top  = '54%';
  btn.style.left = '55%';

  btn.addEventListener('mouseover', runAway);
  btn.addEventListener('touchstart', runAway, { passive: true });
})();

function runAway() {
  const btn    = document.getElementById('noBtn');
  const margin = 100;
  const maxX   = window.innerWidth  - btn.offsetWidth  - margin;
  const maxY   = window.innerHeight - btn.offsetHeight - margin;

  const newX = Math.floor(Math.random() * maxX) + margin / 2;
  const newY = Math.floor(Math.random() * maxY) + margin / 2;

  btn.style.left = `${newX}px`;
  btn.style.top  = `${newY}px`;
}

/* ── YES BUTTON ── */
function handleYes() {
  const gate = document.getElementById('gatekeeper');
  const main = document.getElementById('mainContent');

  // Smooth fade-out gate
  gate.style.transition = 'opacity 1s ease, transform 1s ease';
  gate.style.opacity    = '0';
  gate.style.transform  = 'scale(1.04)';

  setTimeout(() => {
    gate.style.display = 'none';
    main.classList.remove('hidden');

    // fade in
    main.style.opacity   = '0';
    main.style.transform = 'translateY(30px)';
    main.style.transition = 'opacity 1.1s ease, transform 1.1s ease';

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        main.style.opacity   = '1';
        main.style.transform = 'translateY(0)';
      });
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 900);
}

/* ── INTERSECTION OBSERVER for gallery cards ── */
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity   = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.12 });

  // observe gallery cards once main content is revealed
  // re-query after main content is shown
  const yesBtn = document.getElementById('yesBtn');
  if (yesBtn) {
    yesBtn.addEventListener('click', () => {
      setTimeout(() => {
        document.querySelectorAll('.gallery-card').forEach(card => {
          card.style.opacity   = '0';
          card.style.transform = 'translateY(40px)';
          card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
          observer.observe(card);
        });
      }, 1200);
    });
  }
});
