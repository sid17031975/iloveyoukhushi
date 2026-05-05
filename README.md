# 💙 Romantic Proposal Website

A beautiful single-page romantic proposal website built with Flask + Vanilla JS.

---

## 📁 Project Structure

```
romantic-proposal/
├── app.py                   ← Flask server
├── requirements.txt         ← Python dependencies
├── Procfile                 ← For Railway deployment
├── railway.toml             ← Railway config
├── templates/
│   └── index.html           ← Main HTML page
└── static/
    ├── css/
    │   └── style.css        ← All styles
    ├── js/
    │   ├── hearts.js        ← Floating hearts background
    │   ├── gallery.js       ← Gallery data & rendering  ← EDIT THIS
    │   ├── modal.js         ← Photo/video popup
    │   ├── confetti.js      ← Confetti animation
    │   └── main.js          ← Gatekeeper logic
    ├── images/              ← ✅ PUT YOUR PHOTOS HERE
    └── videos/              ← ✅ PUT YOUR VIDEOS HERE
```

---

## 📸 How to Add Your Photos

1. Drop **16 photos** into `/static/images/`  
   Name them: `couple1.jpg`, `couple2.jpg`, ... `couple16.jpg`  
   (or any name you like — just match in `gallery.js`)

2. Open `static/js/gallery.js`  
   Update the `photos` array:
   ```js
   {
     file: "couple1.jpg",        // your filename
     caption: "Our first date",  // shown on hover
     message: "Your heart message here..."  // shown in popup
   }
   ```

---

## 🎬 How to Add Your Videos

1. Drop **2 videos** into `/static/videos/`  
   Name them: `video1.mp4`, `video2.mp4`

2. In `gallery.js`, add `video: "video1.mp4"` to the 2 photo entries  
   where you want a video to play when clicked:
   ```js
   {
     file: "couple2.jpg",
     caption: "Our adventure",
     message: "I love you so much...",
     video: "video1.mp4"   // ← this makes it play a video
   }
   ```
   
   Cards with videos show a **▶ play badge** in the corner.

---

## 💻 Running Locally

```bash
# 1. Install dependencies
pip install -r requirements.txt

# 2. Run the app
python app.py

# 3. Open in browser
http://localhost:5000
```

---

## 🚀 Deploying to Railway

### Step 1 — Create a GitHub Repository
```bash
git init
git add .
git commit -m "Initial commit 💙"
git remote add origin https://github.com/YOUR_USERNAME/romantic-proposal.git
git push -u origin main
```

### Step 2 — Deploy on Railway
1. Go to [railway.app](https://railway.app) and sign up / log in
2. Click **"New Project"** → **"Deploy from GitHub repo"**
3. Select your repository
4. Railway auto-detects Python/Flask and builds it
5. Go to **Settings → Networking → Generate Domain**
6. Your site is live! 🎉

### Step 3 — Add Your Files to the Repo
Before pushing to GitHub, make sure your photos and videos are in:
- `static/images/couple1.jpg` ... `couple16.jpg`
- `static/videos/video1.mp4`, `video2.mp4`

> ⚠️ **Note:** If your videos are large (>50MB each), consider uploading them  
> to a cloud storage (Google Drive / Cloudinary) and updating the `src` URLs  
> in `gallery.js` to point to those links instead.

---

## 🎨 Customisation

| What | Where |
|------|-------|
| All photo captions & messages | `static/js/gallery.js` — `photos` array |
| Which photos show videos | Add `video: "filename.mp4"` in gallery.js |
| Colors | `static/css/style.css` — `:root` variables |
| "Do you love him?" text | `templates/index.html` |
| Final proposal message | `templates/index.html` — `.proposal-text` |
| Font style | `templates/index.html` — Google Fonts link |

---

## ❤️ Features

- **Gatekeeper** — "No" button runs away from cursor
- **16-photo gallery** — beautiful grid with hover effects
- **2 video modals** — click a photo to watch a video
- **14 image modals** — click any photo for a heartfelt message
- **Confetti shower** — triggered by the "Forever" button
- **Floating hearts** — animated background
- **Smooth transitions** — premium fade between sections
- **Mobile responsive** — looks gorgeous on phones too
