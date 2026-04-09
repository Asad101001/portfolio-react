```
 █████╗ ███████╗ █████╗ ██████╗ ███████╗    ██████╗  ██████╗ ██████╗ ████████╗███████╗ ██████╗ ██╗     ██╗ ██████╗
██╔══██╗██╔════╝██╔══██╗██╔══██╗██╔════╝    ██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝██╔═══██╗██║     ██║██╔═══██╗
███████║███████╗███████║██║  ██║███████╗    ██████╔╝██║   ██║██████╔╝   ██║   █████╗  ██║   ██║██║     ██║██║   ██║
██╔══██║╚════██║██╔══██║██║  ██║╚════██║    ██╔═══╝ ██║   ██║██╔══██╗   ██║   ██╔══╝  ██║   ██║██║     ██║██║   ██║
██║  ██║███████║██║  ██║██████╔╝███████║    ██║     ╚██████╔╝██║  ██║   ██║   ██║     ╚██████╔╝███████╗██║╚██████╔╝
╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═════╝ ╚══════╝    ╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝      ╚═════╝ ╚══════╝╚═╝ ╚═════╝
```

<div align="center">

**`muhammadasad-portfolio.vercel.app`**

[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat-square&logo=vercel)](https://muhammadasad-portfolio.vercel.app)
[![Vanilla JS](https://img.shields.io/badge/Vanilla-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Vite](https://img.shields.io/badge/Build-Vite%207-646CFF?style=flat-square&logo=vite)](https://vite.dev)
[![License](https://img.shields.io/badge/License-ISC-00ff41?style=flat-square)](#)

*CS Student · UBIT, University of Karachi '28 · Python · AWS · AI/ML*

</div>

---

```
asad@2006:~/portfolio-v2$ cat OVERVIEW.md
```

A performance-obsessed personal portfolio with live data widgets, 4 runtime themes, serverless API functions, and a single master `requestAnimationFrame` loop. **Deliberately vanilla** — no React, no Vue, no overhead. Every architectural choice was a conscious tradeoff documented below.

---

## `$ ls -la`

```
portfolio-v2/
│
├── 📡  api/                        ← Vercel serverless functions (Node 18 ESM)
│   ├── spotify.js                  ← OAuth refresh → Now Playing + Recently Played
│   ├── current-show.js             ← Trakt watching → TMDB → TVmaze poster chain
│   ├── watchlist.js                ← Trakt watchlist → poster resolution (shows + movies)
│   └── linkedin-post.js            ← Upstash Redis KV: GET (public) / POST (bearer-gated)
│
├── 🧩  components/                 ← HTML partials (inlined at build via Vite plugin)
│   ├── loading-screen.html         ← 3D CSS cube intro animation
│   ├── nav.html                    ← Fixed glassmorphism nav + mobile drawer
│   ├── hero.html                   ← 2×3 grid: main card, terminal, activity hub, clock
│   ├── about.html                  ← Stats, WIP cards, GitHub heatmap
│   ├── projects.html               ← 2-col card grid with SVG path draw animations
│   ├── experience.html             ← Accordion-gated humor section + error popup easter egg
│   ├── tech-stack.html             ← Filterable arsenal grid with expand-on-hover icons
│   ├── education.html              ← Staggered timeline (ladder layout on mobile)
│   ├── contact.html                ← Social chips + 2-col widget layout
│   └── overlays.html               ← Cursor glow, toast, back-to-top, certs drawer
│
├── 🎨  css/
│   ├── style.css                   ← @import chain (ORDER MATTERS — perf.css always last)
│   ├── base.css                    ← :root variables, reset, fonts, loading screen
│   ├── components.css              ← Glass card, nav, hero grid, buttons
│   ├── sections.css                ← Per-section layout, footer, timeline, scrollbar
│   ├── widgets.css                 ← Spotify, Last.fm, GitHub, XP bar, clock, drawer
│   ├── animations.css              ← Reveal system, stagger, keyframes, responsive
│   ├── additions.css               ← Hero orb, rotating widgets, Barca scorecard, arsenal
│   ├── contact-layout.css          ← 2-col social layout (Spotify+Last.fm | Twitter+LinkedIn+XP)
│   ├── perf.css                    ← ⚠️  PERFORMANCE OVERRIDES (imports last — wins specificity)
│   ├── mobile.css                  ← Touch-optimized overrides (max-width: 768px)
│   ├── desktop.css                 ← Desktop enhancements (min-width: 769px)
│   ├── project-page.css            ← Individual case study page styles
│    └── themes/
        ├── cyberpunk.css           ← Electric cyan #00fff9 + neon purple #bc13fe
        ├── sunset.css              ← Hot pink #ff0055 + gold #ffd700 (default)
        ├── industrial.css          ← Raw Neo-Brutalist: safety orange #f97316 + white/black grid
        └── emerald.css             ← Deep green #10B981 + lime #ADFF2F
│
├── ⚙️  js/
│   ├── app.js                      ← Global state · passive scroll · master rAF loop
│   └── modules/
│       ├── loader.js               ← 3D intro + particle system + dismiss logic
│       ├── canvas.js               ← Star/nebula canvas (30fps cap, pauses off-screen)
│       ├── animations.js           ← Magnetic, CSS-var tilt, parallax, text scramble
│       ├── ui.js                   ← Nav dots, typewriter, counters, accordion, arsenal
│       ├── widgets.js              ← ALL data widgets (see widget map below)
│       ├── twitter.js              ← Nitter RSS → rss2json proxy (multi-instance fallback)
│       ├── theme.js                ← 4-theme engine + View Transitions API + localStorage
│       ├── mobile.js               ← Touch feedback, pull-to-refresh, reveal tuning
│       └── desktop.js              ← Smooth anchors, parallax layers, optimized reveals
│
├── 🗂️  projects/                   ← Case study pages (each fully self-contained)
│   ├── legaleaseai.html
│   ├── pollpulse.html
│   ├── devpulse.html
│   ├── mogscope.html
│   └── aws.html
│
├── index.html                      ← Entry point — components inlined at build time
├── 404.html                        ← Interactive terminal 404 (type `home` or `cd /` to escape)
├── vite.config.js                  ← Multi-page build + custom html-include plugin
├── vercel.json                     ← Routing: filesystem first, fallback to 404.html
└── package.json
```

---

## `$ cat ARCHITECTURE.md`

### The rAF Loop

Everything per-frame runs through **one** loop, registered in `app.js`:

```
window._scrollTasks = []   ← modules push tasks onto this array
          │
          ▼
requestAnimationFrame(loop)
    ├── update window._lerpY   (lerp factor: 0.068)
    ├── run canvas.js draw()   (star field, 30fps gated)
    ├── run animations.js      (parallax, hero shrink)
    ├── run ui.js tasks        (nav hide/show, back-to-top ring)
    └── run cursor glow        (smooth follower)
```

> Each module registers its task once. No competing rAF loops. No redundant layout reads.

---

### Scroll Architecture

```
Native scroll event (passive)
    └── updates window._scrollY + window._scrollDir

rAF loop reads window._scrollY
    ├── desktop:  lerps → window._lerpY  (buttery parallax, factor 0.068)
    └── mobile:   _lerpY = _scrollY      (native speed, no jank)
```

**Hard rule:** `getBoundingClientRect()` is never called inside scroll listeners or rAF. This was measured as a catastrophic performance regression on this codebase — 50× scroll slowdown.

---

### Component Loading

HTML partials use a custom Vite plugin (`html-include`):

```html
<!-- index.html — clean at authoring time -->
<include src="/components/hero.html"></include>

<!-- dist/index.html — inlined verbatim at build time -->
<section id="hero"> ... all hero markup ... </section>
```

**Do not** replace with async loaders (fetch + innerHTML). Scripts fire before injected DOM is ready on Vercel's static delivery. Flat inlined HTML is the correct pattern for this deployment model.

---

### Performance Contract

| Rule | How it's enforced |
|------|-------------------|
| No `backdrop-filter` on cards | `css/perf.css` overrides `none !important` site-wide |
| No `getBoundingClientRect` in loops | Zero instances in scroll/rAF paths — keep it that way |
| No lerp scroll on mobile | `window._isMobile` guard in `app.js` |
| Canvas pauses when hero is off-screen | `IntersectionObserver` sets `window._heroVisible = false` |
| Star canvas capped at 30fps | `FRAME_INTERVAL = 1000/30` timestamp gate in `canvas.js` |
| `body.is-scrolling` class | Disables pointer-events + blur during scroll (100ms debounce) |
| `contain: layout style paint` on cards | Applied globally via `perf.css` |
| **Universal Image Fallbacks** | `window.__handleImgError` in `widgets.js` injects NB placeholders |
| **Neo-Brutalist Boundaries** | `.nb-boundary` + `.nb-widget-label` system for industrial feel |

---

## `$ cat WIDGETS.md`

### Widget Map (`js/modules/widgets.js`)

```
CONFIG object (top of widgets.js)
├── usernames        → { letterboxd, lastfm, github, twitter }
├── currently        → { reading: string, series: string[] }
└── big3             → { players: [{name, fallback, wikiQuery}], watchlist: [{title, fallback}] }

Helper functions (private, used internally)
├── _tvmazePoster(title)      → TVmaze singlesearch → iTunes TV fallback
├── _artistImage(name)        → Wikipedia REST → iTunes musicArtist → iTunes song
├── _sportsdbPlayer(pObj)     → TheSportsDB searchplayers → Wikipedia thumbnail
├── _parseLetterboxd(raw)     → strips year/ellipsis, extracts ★ string
└── _starsHTML(starsStr)      → 5-star HTML with half-star support

Live widgets (DOM-targeting, self-initialising IIFEs)
├── GitHub Commit Line        → api.github.com/repos/.../commits/main
├── Book Cover                → openlibrary.org/search.json
├── Letterboxd Last Watched   → rss2json + letterboxd/{user}/rss + star ratings
├── TV Tracking               → /api/current-show → TMDB → TVmaze (client fallback)
├── Barca Scorecard           → site.api.espn.com (4 leagues, Promise.allSettled)
│   └── fetchScorers()        → ESPN summary endpoint → goalscorer name + clock
├── Last.fm Recent Tracks     → ws.audioscrobbler.com/2.0 (public API key)
├── Spotify Now Playing       → /api/spotify (30s poll, localStorage cache)
├── Visitor XP System         → localStorage visit counter + sessionStorage dedup
├── GitHub Heatmap            → github-contributions-api.jogruber.de (seeded fallback)
├── Coding Clock PKT          → UTC+5 Date math, zone-aware status strings
├── LinkedIn Post Snippet     → /api/linkedin-post (Upstash Redis KV read)
│
└── Big 3 Social Widget
    ├── Footballer Headshots  → TheSportsDB → Wikipedia (podium: gold/silver/bronze)
    ├── Weekly Artists        → Last.fm topartists 7day → iTunes + Wikipedia images
    └── Watchlist             → /api/watchlist (Trakt) + hardcoded movies for unreleased
```

### External API Reference

| Widget | API Endpoint | Auth | Notes |
|--------|-------------|------|-------|
| Spotify | `api.spotify.com/v1/me/player` | OAuth2 refresh | Via `/api/spotify` serverless |
| Last.fm | `ws.audioscrobbler.com/2.0` | Public key in `widgets.js` | Rate limit: 5 req/s |
| Trakt | `api.trakt.tv/users/…` | Client-ID header | Via `/api/*` serverless only |
| TMDB | `api.themoviedb.org/3` | Query param key | Via `/api/*` serverless only |
| TVmaze | `api.tvmaze.com/singlesearch` | None | Free, CORS-safe, no key |
| Letterboxd | RSS via `rss2json.com` | None | Public RSS feed |
| Open Library | `openlibrary.org/search.json` | None | Book covers |
| ESPN | `site.api.espn.com/apis/site/v2` | None | Soccer scores/events |
| TheSportsDB | `thesportsdb.com/api/v1/json/3` | None | Free tier, player headshots |
| Wikipedia | `en.wikipedia.org/api/rest_v1/page/summary` | None | Thumbnail images |
| iTunes Search | `itunes.apple.com/search` | None | Artist + show artwork |
| GitHub Heatmap | `github-contributions-api.jogruber.de/v4` | None | Community API |
| GitHub Commits | `api.github.com/repos/Asad101001/portfolio-v2` | None | Public repo |
| Upstash Redis | `UPSTASH_REDIS_REST_URL/get\|set/…` | Bearer token (env) | LinkedIn post KV |

---

## `$ cat SETUP.md`

### Prerequisites

- Node.js ≥ 20 (Vite 7 requirement)
- Vercel CLI (optional, for local API testing)

### Local Development

```bash
git clone https://github.com/Asad101001/portfolio-v2.git
cd portfolio-v2
npm install
npm run dev          # → http://localhost:5173
```

API functions won't execute locally without env vars. For full local dev with serverless:

```bash
npm i -g vercel
vercel dev           # reads .env.local + runs /api/* as serverless functions
```

### Environment Variables

```env
# ── Spotify ─────────────────────────────────────────────────
SPOTIFY_CLIENT_ID=
SPOTIFY_CLIENT_SECRET=
SPOTIFY_REFRESH_TOKEN=         # long-lived refresh token from OAuth flow

# ── Trakt + TMDB ────────────────────────────────────────────
TRAKT_CLIENT_ID=               # from trakt.tv/oauth/applications
TRAKT_USERNAME=                # Trakt username (default: as4d)
TMDB_API_KEY=                  # v3 key from themoviedb.org/settings/api

# ── LinkedIn post storage (Upstash Redis) ───────────────────
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=
LINKEDIN_POST_SECRET=          # self-chosen secret for POST /api/linkedin-post
```

### Credential Refresh (Trakt / TMDB)

```
1. trakt.tv/oauth/applications      → create app → copy Client ID
2. themoviedb.org/settings/api      → generate v3 API key
3. Vercel Dashboard → Project → Settings → Environment Variables
4. Update TRAKT_CLIENT_ID, TRAKT_USERNAME, TMDB_API_KEY
5. Vercel Dashboard → Deployments → Redeploy (no cache)
```

### Updating the LinkedIn Widget

LinkedIn's API blocks automated post fetching on all free tiers. Update manually:

```bash
curl -X POST https://<your-vercel-domain>/api/linkedin-post \
  -H "Authorization: Bearer <LINKEDIN_POST_SECRET>" \
  -H "Content-Type: application/json" \
  -d '{
    "text": "Post text up to 500 chars",
    "url":  "https://www.linkedin.com/feed/update/urn:li:activity:...",
    "date": "2026-04-01T00:00:00.000Z"
  }'
```

Data is stored in Upstash Redis under key `linkedin_data` and served on every GET to `/api/linkedin-post`.

---

## `$ cat THEMES.md`

Toggle with the `◑` button (bottom-left). Cycle order:

```
cyberpunk → industrial → sunset → emerald → (repeat)
```

| Theme | `--cyan` | `--lime` | Scanlines | Body class |
|-------|----------|----------|-----------|------------|
| **Cyberpunk** | `#00fff9` | `#39ff14` | 15% | `theme-cyberpunk` |
| **Industrial** | `#f97316` | `#ffffff` | 0% | `theme-professional` |
| **Sunset** | `#ff0055` | `#ffd700` | 8% | `theme-sunset` |
| **Emerald** | `#10B981` | `#ADFF2F` | 0% | `theme-emerald` |

Persisted via `localStorage['asad_portfolio_theme']`. Switching uses the [View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/) where supported.

Each theme overrides:
- Core CSS variables (`--cyan`, `--lime`, `--bg`, `--border`, `--text-*`)
- Widget accent colours (`--lastfm-clr`, `--spotify-clr`, `--github-bg1–4`)
- Hero backdrop image, opacity, and brightness
- Social card hover glows via `--p-clr` per platform card
- Glass card backgrounds and border colours

---

## `$ cat PROJECTS.md`

| Project | Stack highlights | Live |
|---------|-----------------|------|
| **LegalEaseAI** | FastAPI · LangChain · FAISS · RAG · Groq · Urdu NLP | [↗](https://legal-ease-ai-iota.vercel.app) |
| **PollPulse** | Node.js · Express · AWS EC2/RDS · MySQL · Chart.js | — |
| **DevPulse** | React · Express 5 · MongoDB Atlas · Llama 3.3 · Recharts | [↗](https://devpulse-app.onrender.com) |
| **Mogscope** | React · Three.js · face-api.js · TensorFlow · Groq AI | [↗](https://mogscope.vercel.app) |
| **AWS Static Website** | EC2 · Ubuntu · Nginx · VPC · IAM · Security Groups | — |

Case study pages at `/projects/{slug}.html` — each self-contained with Mermaid architecture diagrams, feature breakdowns, and full tech stack display.

---

## `$ cat GOTCHAS.md`

```diff
- DON'T add backdrop-filter to glass cards
  Caused ~50x scroll slowdown. Removed from all cards in perf.css.
  Only nav .nav-inner retains it (small fixed surface, acceptable cost).

- DON'T call getBoundingClientRect() inside scroll listeners or rAF
  Forces synchronous layout recalc on every frame = jank.
  Use IntersectionObserver, or read pre-cached window._scrollY in rAF.

- DON'T enable lerp scroll on mobile
  JS lerp forces the compositor to hand scrolling back to the main thread.
  The window._isMobile guard in app.js exists specifically for this.

- DON'T use async component loaders (fetch + innerHTML injection)
  Scripts execute before injected DOM exists on Vercel static delivery.
  The Vite html-include plugin inlines at build time. Use that instead.

- DON'T use the Deezer API for artist images
  CORS-blocked in browsers since mid-2024. Replaced with iTunes Search API.

- DON'T use Sofascore CDN for footballer headshots
  Blocks cross-origin browser requests. Replaced with TheSportsDB free API.

- DON'T use Last.fm image endpoints for artist photos
  Deprecated mid-2024 — all return blank hashes. Replaced with iTunes + Wikipedia.

! Cloudflare email obfuscation
  If domain ever routes through Cloudflare proxy, it rewrites mailto: hrefs
  to /cdn-cgi/l/email-protection. Verify after any DNS changes.

! Windows flag emoji
  Country flag emoji (e.g. 🇵🇰) renders as two-letter codes on Windows.
  Acceptable in terminal context; use ⚽ or neutral emoji in UI elements.

! Twitter/X widget reliability
  Nitter instances fail frequently. Widget implements a "Pinned Fallback"
  mechanism + `x-rt-sub-label` layout for official look even in downtime.

! High-Fidelity Image Fallbacks
  External APIs (Spotify, Last.fm, sports) are prone to broken assets.
  The global `__handleImgError` utility dynamically injects Neo-Brutalist
  placeholders with specific icons (music, film, player) to maintain UI.
```

---

## `$ cat CONTEXT.md`

### Quick-Edit Locations

> Things you'll want to update regularly — no hunting through the codebase.

| What | File | Key / Selector |
|------|------|----------------|
| Currently reading | `js/modules/widgets.js` | `CONFIG.currently.reading` |
| Favourite series list | `js/modules/widgets.js` | `CONFIG.currently.series[]` |
| Favourite players | `js/modules/widgets.js` | `CONFIG.big3.players[]` |
| Movie watchlist (hardcoded) | `js/modules/widgets.js` | `CONFIG.big3.watchlist[]` |
| Typewriter phrases | `js/modules/ui.js` | `phrases[]` array |
| Terminal boot text | `components/hero.html` | `.terminal-body` lines |
| Certifications | `components/overlays.html` | `#certs-panel .certs-grid` |
| WIP / Currently Exploring | `components/about.html` | `.working-on-grid` |
| Social handles display | `components/contact.html` | `.social-platforms-row` |
| Nav resume/CV link | `components/nav.html` | `.nav-cta[href]` |
| Project cards + tags | `components/projects.html` | `.projects-grid` |
| GitHub repo for commit line | `js/modules/widgets.js` | `const REPO` |

### Social Handles Reference

```
GitHub:     Asad101001
LinkedIn:   muhammadasadk
Email:      muhammadasadk42@gmail.com
Discord:    asad101001
Instagram:  @muhammadasad.k_
Medium:     @muhammadasadk42
Last.fm:    Asad991
Trakt:      as4d
Letterboxd: asad_k
Twitter/X:  As4d_41
Spotify:    muhammadasadk
```

### Build Output Structure

```
dist/
├── index.html              ← All components inlined, assets hashed
├── 404.html
├── assets/
│   ├── index-[hash].js     ← Bundled JS (all modules)
│   └── index-[hash].css    ← Bundled CSS (all partials)
└── projects/
    ├── legaleaseai.html
    ├── pollpulse.html
    ├── devpulse.html
    ├── mogscope.html
    └── aws.html
```

---

<div align="center">

```
asad@2006:~/portfolio-v2$ █
```

[![GitHub](https://img.shields.io/badge/GitHub-Asad101001-181717?style=flat-square&logo=github)](https://github.com/Asad101001)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-muhammadasadk-0077B5?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/muhammadasadk/)
[![Portfolio](https://img.shields.io/badge/Portfolio-Live-00ff41?style=flat-square)](https://muhammadasad-portfolio.vercel.app)

*Build broken things. Understand why they broke. Spend ages unbreaking them.*

</div>