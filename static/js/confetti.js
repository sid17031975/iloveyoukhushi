/* confetti.js — romantic confetti with hearts & petals */

function triggerConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  const ctx    = canvas.getContext('2d');

  canvas.width  = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  const particles = [];
  const chars = ['💙', '🩵', '✨', '💎', '🌸', '💙', '🩵'];
  const count = 120;

  for (let i = 0; i < count; i++) {
    particles.push({
      x:     Math.random() * canvas.width,
      y:     -20 - Math.random() * 200,
      char:  chars[Math.floor(Math.random() * chars.length)],
      size:  14 + Math.random() * 18,
      speedY: 1.8 + Math.random() * 2.8,
      speedX: (Math.random() - 0.5) * 1.8,
      rot:   Math.random() * 360,
      rotSpd:(Math.random() - 0.5) * 4,
      alpha: 0.85 + Math.random() * 0.15,
      decay: 0.003 + Math.random() * 0.004
    });
  }

  let frame;
  let running = true;

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      ctx.save();
      ctx.globalAlpha = p.alpha;
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rot * Math.PI) / 180);
      ctx.font = `${p.size}px serif`;
      ctx.textAlign = 'center';
      ctx.fillText(p.char, 0, 0);
      ctx.restore();

      p.y     += p.speedY;
      p.x     += p.speedX;
      p.rot   += p.rotSpd;
      p.alpha -= p.decay;
    });

    const alive = particles.filter(p => p.alpha > 0 && p.y < canvas.height + 40);

    if (alive.length > 0 && running) {
      frame = requestAnimationFrame(draw);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  draw();

  // auto-stop after 6 seconds
  setTimeout(() => { running = false; cancelAnimationFrame(frame); }, 6000);
}
