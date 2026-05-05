/* modal.js — handles image/video modal */

function openModal(message, imageFile, videoFile) {
  const overlay   = document.getElementById('modal');
  const mediaWrap = document.getElementById('modalMediaWrap');
  const msgEl     = document.getElementById('modalMessage');

  // clear previous media
  mediaWrap.innerHTML = '';

  if (videoFile) {
    // show video
    const vid = document.createElement('video');
    vid.src = `/videos/${videoFile}`;
    vid.controls = true;
    vid.autoplay = true;
    vid.playsInline = true;
    vid.style.width = '100%';
    vid.style.maxHeight = '420px';
    vid.style.objectFit = 'cover';
    mediaWrap.appendChild(vid);
  } else {
    // show image
    const img = document.createElement('img');
    img.src = `/images/${imageFile}`;
    img.alt = message;
    mediaWrap.appendChild(img);
  }

  msgEl.textContent = message;

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(e) {
  // if called from overlay click, only close if clicking the overlay itself
  if (e && e.target !== document.getElementById('modal')) return;

  const overlay = document.getElementById('modal');
  overlay.classList.remove('open');
  document.body.style.overflow = '';

  // pause any video
  const vid = overlay.querySelector('video');
  if (vid) vid.pause();
}

// close on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const overlay = document.getElementById('modal');
    if (overlay.classList.contains('open')) {
      overlay.classList.remove('open');
      document.body.style.overflow = '';
      const vid = overlay.querySelector('video');
      if (vid) vid.pause();
    }
  }
});
