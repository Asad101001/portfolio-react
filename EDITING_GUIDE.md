# Portfolio Editing Guide
**Muhammad Asad Khan — portfolio-v2**

---

## File Structure

```
portfolio-v2/
├── index.html              ← Page content & structure  (edit this most)
├── style.css               ← Visual styles, animations, certifications drawer
├── app.js                  ← JavaScript: counters, GitHub graph, drawer logic
└── public/
    ├── images/             ← Project screenshots
    │   ├── legalease.png
    │   └── pollpulse.png
    ├── certs/              ← Certification images
    │   ├── google-agile.png
    │   ├── google-ai.png
    │   ├── google-prompt.png
    │   └── ned-ds.png
    └── resume/
        └── resume.pdf
```

---

## Testing Locally

```bash
# Option A — Python (built-in, no install needed)
cd portfolio-v2/
python3 -m http.server 8080
# Open: http://localhost:8080

# Option B — VS Code: right-click index.html → Open with Live Server

# Option C — Node
npx serve .
```

> ⚠️  Do NOT just double-click index.html — local images won't load
> because browsers block `file://` paths. Always use a local server.

---

## 1. Basic Info (name, email, tagline)

Open `index.html` and search for the following strings:

| What to change | Search for | Replace with |
|---|---|---|
| Your name | `Muhammad Asad Khan` | Your name |
| Email | `muhammadasadk42@gmail.com` | Your email |
| Tagline (typewriter) | `Cloud & Networking • Generative AI / LLMs • Data Science` | Your tagline |
| Sub-headline | `UBIT '28 \| Networking & Cloud Enthusiast` | Your headline |
| Location | `Karachi, Pakistan` | Your city |
| GitHub URL | `github.com/Asad101001` | Your profile |
| LinkedIn URL | `linkedin.com/in/muhammadasadk/` | Your profile |
| GitHub username (for graph) | Open `app.js` → line: `const GITHUB_USER = 'Asad101001'` | Your username |

---

## 2. Adding / Changing Project Images

1. **Take a screenshot** of your project (recommended: 1200×630 px)
2. **Save it** in `public/images/` — e.g. `public/images/legalease.png`
3. In `index.html`, find the project card and change the `src`:
   ```html
   <!-- BEFORE (placeholder or Cloudinary URL) -->
   <img src="public/images/legalease.png" .../>

   <!-- AFTER (your file) -->
   <img src="public/images/legalease.png" .../>
   ```
4. If no image exists, the card shows a coloured gradient fallback automatically.

**To add a brand new project card:**
1. Find the comment `<!-- PASTE ADDITIONAL PROJECT CARDS BELOW THIS LINE -->` in `index.html`
2. Copy the entire `LegalEaseAI` card block (from `<!-- PROJECT CARD: LegalEaseAI -->` to its closing `</div>`)
3. Paste it below the comment
4. Edit: title, description, tags, GitHub link, Live Demo link, image src

---

## 3. Certifications

Certifications open in a **side drawer** when you click "Certifications" in the nav.
They do NOT appear as a section on the main page scroll.

### Changing cert images
1. Drop the image into `public/certs/` (e.g. `google-ai.png`)
2. That's it — `index.html` already points to those filenames

### Adding a new cert
Find the comment `<!-- ADD MORE CERTS HERE -->` in `index.html` and paste:

```html
<div class="cert-card">
  <div class="cert-thumb">
    <img src="public/certs/YOUR-FILE.png" alt="Cert Name"
         onerror="this.replaceWith(Object.assign(document.createElement('span'),{className:'cert-emoji',textContent:'🏆'}))"/>
  </div>
  <p class="cert-title">Certificate Name</p>
  <p class="cert-issuer">Issuing Organization</p>
  <p class="cert-meta">Issued Mon YYYY · ID XXXXXXX</p>
  <!-- Optional skills: -->
  <div class="cert-skills">
    <span class="cert-skill">Skill 1</span>
    <span class="cert-skill">Skill 2</span>
  </div>
  <!-- Status: use "completed" or "inprogress" -->
  <span class="cert-badge completed">Completed</span>
</div>
```

**Status badge colours:**
- `class="cert-badge completed"` → purple — "Completed"
- `class="cert-badge inprogress"` → cyan — "In Progress"

---

## 4. Changing the Spotify Playlist

In `index.html`, find the `<iframe>` near the contact section with `spotify.com/embed/playlist/`.

Replace the **playlist ID** (the long string after `playlist/`):

```html
<!-- Current: -->
src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M?..."

<!-- To get your own ID:
     1. Open Spotify
     2. Right-click your playlist → Share → Copy link
     3. The URL looks like: open.spotify.com/playlist/ABC123XYZ
     7AiShuc4G6kqRLGLf8GQSD?si=VHXsL5YxSEW5ej3rVvrCmw
     4. Copy the ABC123XYZ part and paste it below: -->
src="https://open.spotify.com/embed/playlist/7AiShuc4G6kqRLGLf8GQSD?si=VHXsL5YxSEW5ej3rVvrCmw?utm_source=generator&theme=0"
```

---

## 5. Resume

Drop `resume.pdf` into `public/resume/resume.pdf`.
The "Resume" nav link opens it in a new tab. No other change needed.

---

## 6. Education — Editing Entries

In `index.html`, find `<section class="... Education">` and edit any of these fields inside each card:

```html
<div class="text-sm mb-1 text-zinc-500">YEAR – YEAR</div>
<h3 class="text-xl font-bold text-white">Degree Name</h3>
<p class="text-zinc-400">Institution Name</p>
```

**To add a new entry:** copy one of the three `<div class="relative pl-8 ...">` blocks and paste it before the closing `</div>` of the timeline container.

---

## 7. Tech Stack Marquee

Find the two `<div class="export-tech-marquee-lane">` elements in `index.html`.

**Add a skill:** paste a new `<span>` anywhere inside the lane:
```html
<span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-sm bg-zinc-900 border-zinc-700 text-zinc-300">New Skill</span>
```

**Remove a skill:** delete the corresponding `<span>` line.

The JavaScript in `app.js` duplicates each lane automatically so the scroll loop is seamless.

---

## 8. Colours

The two accent colours are used as inline `style=""` throughout `index.html`:

| Variable | Value | Where used |
|---|---|---|
| Cyan | `#00d4ff` | Primary highlights, links, borders |
| Purple | `#a855f7` | Secondary highlights, reverse marquee |

To change them globally, do a find-and-replace in **both** `index.html` and `style.css`.

---

## 9. Deploying to Vercel

### Drag & Drop (easiest)
1. Go to [vercel.com](https://vercel.com) → New Project → Browse
2. Upload the entire `portfolio-v2/` folder
3. Framework: **Other** · Root: `/` · Build command: *(leave empty)* · Output: `.`
4. Click Deploy

### GitHub auto-deploy
1. `git init && git add . && git commit -m "init"`
2. Push to a new GitHub repo
3. Vercel → Import from GitHub → same settings as above
4. Every `git push` triggers a new deployment automatically

---

## Quick Reference

| Task | File | What to search |
|---|---|---|
| Change name/email | `index.html` | `Muhammad Asad Khan` |
| Change typewriter text | `index.html` | `Cloud & Networking` |
| Add project image | `public/images/` + `index.html` | `public/images/legalease` |
| Add cert image | `public/certs/` | drop file |
| Add cert card | `index.html` | `ADD MORE CERTS HERE` |
| Add project card | `index.html` | `PASTE ADDITIONAL PROJECT CARDS` |
| Change Spotify | `index.html` | `spotify.com/embed/playlist` |
| Change GitHub username (graph) | `app.js` | `GITHUB_USER` |
| Change animation speed | `style.css` | `marquee-fwd 28s` |
