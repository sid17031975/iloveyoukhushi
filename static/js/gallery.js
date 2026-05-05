/* gallery.js
   ─────────────────────────────────────────────────────────────────────────
   HOW TO ADD YOUR PHOTOS & VIDEOS:
   1. Drop your photos into  /static/images/   (any name, e.g. couple1.jpg)
   2. Drop your 2 videos into /static/videos/  (e.g. video1.mp4)
   3. Update the `photos` array below:
        - file    : filename inside static/images/
        - caption : text shown on hover
        - message : shown in the modal when clicked
        - video   : (optional) filename inside static/videos/ — set only for the 2 special photos
        - featured: (optional) true = wider card
   ─────────────────────────────────────────────────────────────────────────
*/

const photos = [
  {
    file: "couple1.jpg",
    caption: "The day it all began 💙",
    message: "The moment I first saw you, the whole world went quiet. It's been music ever since.",
    featured: true
  },
  {
    file: "couple2.jpg",
    caption: "Our first adventure ✨",
    message: "Exploring the world is a hundred times better when you're beside me.",
    video: "video1.mp4"   // ← this card will play a video in the modal
  },
  {
    file: "couple3.jpg",
    caption: "Laughing till it hurts 😂💙",
    message: "Your laugh is literally my favourite sound in the entire universe."
  },
  {
    file: "couple4.jpg",
    caption: "Golden hour with you 🌅",
    message: "Every sunset is more beautiful when I'm watching it with you."
  },
  {
    file: "couple5.jpg",
    caption: "Dancing in the kitchen 🕺",
    message: "The best moments aren't planned — they just happen when you're around."
  },
  {
    file: "couple6.jpg",
    caption: "Stargazing together 🌟",
    message: "You make me believe in magic. Real, breathtaking, everyday magic.",
    video: "video2.mp4"   // ← this card will play a video in the modal
  },
  {
    file: "couple7.jpg",
    caption: "That rainy day we loved 🌧️",
    message: "Rainy days are secretly my favourite — they give me an excuse to hold you closer."
  },
  {
    file: "couple8.jpg",
    caption: "Stolen smiles 💙",
    message: "I never get tired of looking at you. Not even a little."
  },
  {
    file: "couple9.jpg",
    caption: "Our little getaway 🗺️",
    message: "With you, even getting lost feels like an adventure I'd choose a thousand times.",
    featured: true
  },
  {
    file: "couple10.jpg",
    caption: "Morning light & you ☀️",
    message: "Waking up knowing you exist is the best part of every single day."
  },
  {
    file: "couple11.jpg",
    caption: "Side by side always 💑",
    message: "I want every side-by-side moment for the rest of my life — and they all involve you."
  },
  {
    file: "couple12.jpg",
    caption: "The look you give me 👀💙",
    message: "When you look at me like that, I forget every worry I've ever had."
  },
  {
    file: "couple13.jpg",
    caption: "Wild and free 🌊",
    message: "You make me feel completely free and completely at home, all at once."
  },
  {
    file: "couple14.jpg",
    caption: "A thousand small things 🌸",
    message: "It's not the grand gestures — it's the thousand small things you do that make me fall deeper every day."
  },
  {
    file: "couple15.jpg",
    caption: "Where I belong 🏡",
    message: "Home isn't a place. Home is wherever you are."
  },
  {
    file: "couple16.jpg",
    caption: "Forever starts today 💍💙",
    message: "I knew from the very first moment. You are my forever person.",
    featured: true
  }
];

/* ── build the grid ── */
function buildGallery() {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;

  photos.forEach((photo, index) => {
    const card = document.createElement('div');
    card.classList.add('gallery-card');
    if (photo.featured) card.classList.add('featured');

    // staggered animation delay
    card.style.animationDelay = `${index * 0.07}s`;

    const hasVideo = !!photo.video;

    card.innerHTML = `
      <img src="/images/${photo.file}" alt="${photo.caption}" loading="lazy" />
      <div class="card-overlay">
        <span class="card-overlay-text">${photo.caption}</span>
      </div>
      ${hasVideo ? '<div class="card-badge">▶</div>' : '<div class="card-badge">💙</div>'}
    `;

    card.addEventListener('click', () => {
      openModal(photo.message, photo.file, photo.video || null);
    });

    grid.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', buildGallery);
