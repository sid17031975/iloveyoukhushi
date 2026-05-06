/* confetti.js — romantic hearts & petals shower */
function triggerConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  const ctx    = canvas.getContext('2d');
  canvas.width  = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
  const chars = ['💖', '🌸', '✨', '💕', '💖', '🩷', '💖', '✨'];
  const total = 140;
  const particles = [];
  for (let i = 0; i < total; i++) {
    particles.push({
      x: Math.random() * canvas.width, y: -20 - Math.random() * 200,
      char: chars[Math.floor(Math.random() * chars.length)],
      size: 14 + Math.random() * 20,
      speedY: 1.6 + Math.random() * 2.6, speedX: (Math.random() - 0.5) * 1.8,
      rot: Math.random() * 360, rotSpd: (Math.random() - 0.5) * 4,
      alpha: 0.9, decay: 0.003 + Math.random() * 0.004
    });
  }
  let frame, running = true;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let anyAlive = false;
    particles.forEach(p => {
      if (p.alpha <= 0) return;
      anyAlive = true;
      ctx.save();
      ctx.globalAlpha = p.alpha;
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rot * Math.PI) / 180);
      ctx.font = `${p.size}px serif`;
      ctx.textAlign = 'center';
      ctx.fillText(p.char, 0, 0);
      ctx.restore();
      p.y += p.speedY; p.x += p.speedX; p.rot += p.rotSpd; p.alpha -= p.decay;
    });
    if (anyAlive && running) { frame = requestAnimationFrame(draw); }
    else { ctx.clearRect(0, 0, canvas.width, canvas.height); }
  }
  draw();
  setTimeout(() => { running = false; cancelAnimationFrame(frame); }, 7000);
}
