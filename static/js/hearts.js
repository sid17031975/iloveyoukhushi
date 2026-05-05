/* hearts.js — generates floating heart emojis in the background */
(function () {
  const container = document.getElementById('heartsBg');
  const heartChars = ['💙', '🩵', '💎', '✨', '💙', '🩵'];
  const total = 28;

  function createHeart() {
    const el = document.createElement('span');
    el.classList.add('floating-heart');
    el.textContent = heartChars[Math.floor(Math.random() * heartChars.length)];

    const left = Math.random() * 100;
    const duration = 8 + Math.random() * 14;   // 8s – 22s
    const delay = Math.random() * 12;
    const size = 0.9 + Math.random() * 1.4;    // 0.9rem – 2.3rem

    el.style.left = `${left}%`;
    el.style.fontSize = `${size}rem`;
    el.style.animationDuration = `${duration}s`;
    el.style.animationDelay = `${delay}s`;

    container.appendChild(el);
  }

  for (let i = 0; i < total; i++) createHeart();
})();
