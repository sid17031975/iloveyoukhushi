/* modal.js — photo/video popup */

function openModal(message, imageFile, videoFile) {
  const overlay   = document.getElementById('modal');
  const mediaWrap = document.getElementById('modalMediaWrap');
  const msgEl     = document.getElementById('modalMessage');

  mediaWrap.innerHTML = '';

  if (videoFile) {
    const vid = document.createElement('video');
    vid.src = `/videos/${videoFile}`;
    vid.controls = true;
    vid.autoplay = true;
    vid.playsInline = true;
    mediaWrap.appendChild(vid);
  } else {
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
  if (e && e.target !== document.getElementById('modal')) return;
  const overlay = document.getElementById('modal');
  overlay.classList.remove('open');
  document.body.style.overflow = '';
  const vid = overlay.querySelector('video');
  if (vid) vid.pause();
}
