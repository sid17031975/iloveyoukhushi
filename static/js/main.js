/* main.js — gatekeeper logic, birthday reveal, love letter */

/* ── NO BUTTON: stays ON screen, runs from cursor ── */
(function initNoButton() {
  const btn = document.getElementById('noBtn');
  if (!btn) return;

  // Place it in a visible spot initially (near Yes button, offset right)
  placeNoButton(54, 55);

  btn.addEventListener('mouseover', runAway);
  btn.addEventListener('touchstart', runAway, { passive: true });
  btn.addEventListener('mousemove', runAway);
})();

function placeNoButton(topPct, leftPct) {
  const btn = document.getElementById('noBtn');
  btn.style.top  = topPct + '%';
  btn.style.left = leftPct + '%';
}

function runAway() {
  const btn = document.getElementById('noBtn');
  const bw  = btn.offsetWidth  || 120;
  const bh  = btn.offsetHeight || 50;

  // Safe margins so button never goes off-screen
  const safeMargin = 20;
  const minX = safeMargin;
  const minY = safeMargin;
  const maxX = window.innerWidth  - bw - safeMargin;
  const maxY = window.innerHeight - bh - safeMargin;

  // Pick a random spot within safe bounds
  let newX = Math.floor(Math.random() * (maxX - minX)) + minX;
  let newY = Math.floor(Math.random() * (maxY - minY)) + minY;

  btn.style.left = newX + 'px';
  btn.style.top  = newY + 'px';
  btn.style.transform = 'none'; // clear any % transform
}

/* ── YES BUTTON → Birthday Section ── */
function handleYes() {
  const gate  = document.getElementById('gatekeeper');
  const bday  = document.getElementById('birthdaySection');

  gate.style.transition = 'opacity 0.9s ease, transform 0.9s ease';
  gate.style.opacity    = '0';
  gate.style.transform  = 'scale(1.04)';

  setTimeout(() => {
    gate.style.display = 'none';
    bday.classList.remove('hidden');
    bday.style.opacity    = '0';
    bday.style.transition = 'opacity 1s ease';

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        bday.style.opacity = '1';
      });
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 850);
}

/* ── ENVELOPE OPEN → show letter ── */
function openEnvelope() {
  const envelope = document.getElementById('bdayEnvelope');
  const letter   = document.getElementById('bdayLetter');

  if (envelope.classList.contains('opened')) return;

  envelope.classList.add('opened');

  setTimeout(() => {
    envelope.style.transition = 'opacity 0.5s ease';
    envelope.style.opacity    = '0';
    setTimeout(() => {
      envelope.style.display = 'none';
      letter.classList.remove('hidden');
    }, 500);
  }, 700);
}

/* ── JOURNEY BUTTON → Main Gallery ── */
function showJourney() {
  const bday = document.getElementById('birthdaySection');
  const main = document.getElementById('mainContent');

  bday.style.transition = 'opacity 0.9s ease';
  bday.style.opacity    = '0';

  setTimeout(() => {
    bday.style.display = 'none';
    main.classList.remove('hidden');
    main.style.opacity    = '0';
    main.style.transition = 'opacity 1.1s ease';

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        main.style.opacity = '1';
      });
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Animate gallery cards in with IntersectionObserver
    setTimeout(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity   = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      }, { threshold: 0.1 });

      document.querySelectorAll('.gallery-card').forEach((card, i) => {
        card.style.opacity    = '0';
        card.style.transform  = 'translateY(40px)';
        card.style.transition = `opacity 0.6s ease ${i * 0.06}s, transform 0.6s ease ${i * 0.06}s`;
        observer.observe(card);
      });
    }, 400);
  }, 850);
}

/* ── LOVE LETTER POPUP ── */
function showLoveLetter() {
  // trigger confetti first
  triggerConfetti();

  const overlay = document.getElementById('loveletterModal');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLoveLetter(e) {
  if (e && e.target !== document.getElementById('loveletterModal')) return;
  document.getElementById('loveletterModal').classList.remove('open');
  document.body.style.overflow = '';
}

// Escape key closes love letter
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const ll = document.getElementById('loveletterModal');
    if (ll && ll.classList.contains('open')) {
      ll.classList.remove('open');
      document.body.style.overflow = '';
    }
    const modal = document.getElementById('modal');
    if (modal && modal.classList.contains('open')) {
      modal.classList.remove('open');
      document.body.style.overflow = '';
      const vid = modal.querySelector('video');
      if (vid) vid.pause();
    }
  }
});
