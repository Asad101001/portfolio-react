/* ============================================================
   PORTFOLIO — app.js
   Muhammad Asad Khan
   ============================================================

   SECTIONS
   A. Animated stat counters
   B. Live GitHub contribution graph
   C. Certifications drawer (open/close via nav link)
   D. Mobile nav auto-close on link click
   E. Tech marquee (CSS handles animation, JS adds duplicate
      items so the loop is seamless)
   ============================================================ */

'use strict';

/* ── A. Animated Stat Counters ──────────────────────────── */
function runCounters() {
  document.querySelectorAll('[data-export-counter]').forEach(el => {
    const target = parseInt(el.dataset.exportCounter, 10);
    const duration = 1400;
    const start = performance.now();

    function step(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target) + '+';
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  });
}

// Run counters when the About section enters the viewport
const aboutSection = document.getElementById('about');
if (aboutSection) {
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      runCounters();
      observer.disconnect();
    }
  }, { threshold: 0.2 });
  observer.observe(aboutSection);
}


/* ── B. Live GitHub Contribution Graph ───────────────────── */
(function () {
  const GITHUB_USER = 'Asad101001';   // ← change if username changes
  const COLOR = '#00d4ff';
  const grid = document.getElementById('gh-contrib-grid');
  const countEl = document.getElementById('gh-contrib-count');
  if (!grid) return;

  fetch('https://github-contributions-api.jogruber.de/v4/' + GITHUB_USER + '?y=last')
    .then(r => r.json())
    .then(data => {
      const weeks = data.contributions;
      let total = 0;
      grid.innerHTML = '';

      weeks.forEach(week => {
        const col = document.createElement('div');
        col.className = 'flex flex-col gap-1';
        const days = week.days || week;
        days.forEach(day => {
          const count = day.count !== undefined ? day.count : day;
          total += count;
          const cell = document.createElement('div');
          cell.className = 'w-3 h-3 rounded-sm';
          const op = count === 0 ? 0.08 : count < 3 ? 0.25 : count < 7 ? 0.5 : count < 12 ? 0.75 : 1;
          cell.style.cssText = `background-color:${COLOR};opacity:${op}`;
          cell.title = `${count} contribution${count !== 1 ? 's' : ''}`;
          col.appendChild(cell);
        });
        grid.appendChild(col);
      });

      if (countEl) countEl.textContent = `${total} contributions this year`;
    })
    .catch(() => {
      // Graceful fallback — aesthetic static pattern
      grid.innerHTML = '';
      const opacities = [0.08, 0.08, 0.15, 0.25, 0.4, 0.6, 0.85];
      for (let w = 0; w < 52; w++) {
        const col = document.createElement('div');
        col.className = 'flex flex-col gap-1';
        for (let d = 0; d < 7; d++) {
          const cell = document.createElement('div');
          cell.className = 'w-3 h-3 rounded-sm';
          cell.style.cssText = `background-color:${COLOR};opacity:${opacities[(w + d) % 7]}`;
          col.appendChild(cell);
        }
        grid.appendChild(col);
      }
      if (countEl) countEl.textContent = '';
    });
})();


/* ── C. Certifications Drawer ────────────────────────────── */
const drawer   = document.getElementById('certs-drawer');
const backdrop = document.getElementById('certs-backdrop');
const closeBtn = document.getElementById('certs-close');

function openCerts() {
  if (!drawer) return;
  drawer.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCerts() {
  if (!drawer) return;
  drawer.classList.remove('open');
  document.body.style.overflow = '';
}

// Open when ANY nav link pointing to #certifications is clicked
document.querySelectorAll('a[href="#certifications"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    openCerts();
  });
});

// Close via backdrop click or close button
if (backdrop) backdrop.addEventListener('click', closeCerts);
if (closeBtn) closeBtn.addEventListener('click', closeCerts);

// Close with Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeCerts();
});


/* ── D. Mobile nav — close <details> after link click ───── */
const mobileNav = document.querySelector('details.mobile-nav');
if (mobileNav) {
  mobileNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mobileNav.removeAttribute('open');
    });
  });
}


/* ── E. Seamless marquee — duplicate content ─────────────── */
// Each marquee lane needs its children duplicated so the loop
// has no visible gap when it wraps.
document.querySelectorAll('.export-tech-marquee-lane').forEach(lane => {
  const original = lane.innerHTML;
  lane.innerHTML = original + original;
});
