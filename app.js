'use strict';
/* ============================================================
   PORTFOLIO app.js v4  —  Muhammad Asad Khan
   ============================================================ */

/* ── A. Particle Canvas ─────────────────────────────────── */
(function () {
  var c = document.getElementById('bg-canvas');
  if (!c) return;
  var x = c.getContext('2d'), W, H, pts = [], mx = -9999, my = -9999;

  function resize() { W = c.width = window.innerWidth; H = c.height = window.innerHeight; }
  resize();
  window.addEventListener('resize', function () { resize(); init(); });
  window.addEventListener('mousemove', function (e) { mx = e.clientX; my = e.clientY; });

  function r(a, b) { return Math.random() * (b - a) + a; }
  function init() {
    pts = [];
    for (var i = 0, n = Math.floor(W * H / 18000); i < n; i++)
      pts.push({ x: r(0,W), y: r(0,H), vx: r(-0.18,0.18), vy: r(-0.18,0.18), rad: r(0.8,2.2), a: r(0.15,0.5) });
  }
  init();

  function draw() {
    x.clearRect(0, 0, W, H);
    var g = x.createRadialGradient(W/2,0,0,W/2,0,H*0.65);
    g.addColorStop(0,'rgba(0,212,255,0.04)'); g.addColorStop(1,'transparent');
    x.fillStyle = g; x.fillRect(0,0,W,H);
    for (var i = 0; i < pts.length; i++) {
      var p = pts[i];
      p.x += p.vx; p.y += p.vy;
      if (p.x < -5) p.x = W+5; if (p.x > W+5) p.x = -5;
      if (p.y < -5) p.y = H+5; if (p.y > H+5) p.y = -5;
      var dx = p.x-mx, dy = p.y-my, dd = Math.sqrt(dx*dx+dy*dy);
      if (dd < 90 && dd > 0) { var f=(90-dd)/90*0.35; p.x+=dx/dd*f; p.y+=dy/dd*f; }
      x.beginPath(); x.arc(p.x,p.y,p.rad,0,Math.PI*2);
      x.fillStyle='rgba(0,212,255,'+p.a+')'; x.fill();
      for (var j = i+1; j < pts.length; j++) {
        var q=pts[j], ex=p.x-q.x, ey=p.y-q.y, ed=Math.sqrt(ex*ex+ey*ey);
        if (ed < 120) {
          x.beginPath(); x.moveTo(p.x,p.y); x.lineTo(q.x,q.y);
          x.strokeStyle='rgba(0,212,255,'+(0.055*(1-ed/120))+')';
          x.lineWidth=0.5; x.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
})();


/* ── B. Typewriter ──────────────────────────────────────── */
(function () {
  var el = document.getElementById('typewriter');
  if (!el) return;
  var phrases = [
    'Cloud & Networking enthusiast',
    'Python + Data Science learner',
    'Building AI / LLM pipelines',
    'AWS architecture explorer',
    'Breaking things since 2024...',
    'Always learning. Always shipping.'
  ];
  var pi = 0, ci = 0, del = false;
  function tick() {
    var cur = phrases[pi];
    if (!del) {
      el.textContent = cur.slice(0, ++ci);
      if (ci === cur.length) { del = true; setTimeout(tick, 1800); return; }
      setTimeout(tick, 55);
    } else {
      el.textContent = cur.slice(0, --ci);
      if (ci === 0) { del = false; pi = (pi + 1) % phrases.length; setTimeout(tick, 300); return; }
      setTimeout(tick, 28);
    }
  }
  setTimeout(tick, 800);
})();


/* ── C. Stat Counters ───────────────────────────────────── */
/*
  IMPORTANT: the stat elements use plain IDs (cnt-projects, cnt-certs, cnt-tech).
  We target them directly by ID so there is zero ambiguity about which element
  gets its textContent updated.
*/
(function () {
  var counters = [
    { id: 'cnt-projects', target: 4 },
    { id: 'cnt-certs',    target: 4 },
    { id: 'cnt-tech',     target: 20 }
  ];

  function animOne(el, target) {
    if (el._done) return;
    el._done = true;
    var start = performance.now(), dur = 1400;
    function step(now) {
      var p = Math.min((now - start) / dur, 1);
      var e = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.floor(e * target) + '+';
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  function runAll() {
    counters.forEach(function (c) {
      var el = document.getElementById(c.id);
      if (el) animOne(el, c.target);
    });
  }

  /* Run once 300ms after page load (handles case where about section is already in view) */
  setTimeout(runAll, 300);

  /* Also run when about section scrolls into view */
  var about = document.getElementById('about');
  if (about && window.IntersectionObserver) {
    var obs = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) { runAll(); obs.disconnect(); }
    }, { threshold: 0.05 });
    obs.observe(about);
  }
})();


/* ── D. GitHub Contribution Graph ──────────────────────── */
(function () {
  var USER  = 'Asad101001';
  var COLOR = '#00d4ff';
  var grid  = document.getElementById('gh-contrib-grid');
  var cnt   = document.getElementById('gh-contrib-count');
  if (!grid) return;

  function build(weeks) {
    var total = 0;
    grid.innerHTML = '';
    weeks.forEach(function (week) {
      var days = week.days || week;
      if (!Array.isArray(days)) return;
      var col = document.createElement('div');
      days.forEach(function (day) {
        var n = (day && day.count !== undefined) ? day.count : (typeof day === 'number' ? day : 0);
        total += n;
        var cell = document.createElement('div');
        cell.style.background = COLOR;
        cell.style.opacity = n === 0 ? 0.07 : n < 3 ? 0.22 : n < 7 ? 0.45 : n < 12 ? 0.7 : 1;
        cell.title = n + ' contribution' + (n !== 1 ? 's' : '');
        col.appendChild(cell);
      });
      if (col.children.length) grid.appendChild(col);
    });
    if (cnt) cnt.textContent = total.toLocaleString() + ' contributions in the last year';
  }

  function fallback() {
    grid.innerHTML = '';
    var ops = [0.07, 0.07, 0.12, 0.22, 0.38, 0.55, 0.8];
    for (var w = 0; w < 52; w++) {
      var col = document.createElement('div');
      for (var d = 0; d < 7; d++) {
        var cell = document.createElement('div');
        cell.style.background = COLOR;
        cell.style.opacity = ops[(w * 3 + d * 2) % 7];
        col.appendChild(cell);
      }
      grid.appendChild(col);
    }
    if (cnt) cnt.textContent = '';
  }

  fetch('https://github-contributions-api.jogruber.de/v4/' + USER + '?y=last')
    .then(function (r) { if (!r.ok) throw 0; return r.json(); })
    .then(function (data) {
      var weeks = data.contributions || data.weeks || data;
      if (Array.isArray(weeks) && weeks.length) build(weeks); else fallback();
    })
    .catch(fallback);
})();


/* ── E. Certifications Drawer ───────────────────────────── */
(function () {
  var drawer   = document.getElementById('certs-drawer');
  var backdrop = document.getElementById('certs-backdrop');
  var closeBtn = document.getElementById('certs-close');
  if (!drawer) return;

  function open()  { drawer.classList.add('open');    document.body.style.overflow = 'hidden'; }
  function close() { drawer.classList.remove('open'); document.body.style.overflow = ''; }

  document.querySelectorAll('a[href="#certifications"]').forEach(function (a) {
    a.addEventListener('click', function (e) { e.preventDefault(); open(); });
  });
  if (backdrop) backdrop.addEventListener('click', close);
  if (closeBtn)  closeBtn.addEventListener('click', close);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
})();


/* ── F. Mobile nav ──────────────────────────────────────── */
(function () {
  var mn = document.querySelector('details.mobile-nav');
  if (!mn) return;
  mn.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { mn.removeAttribute('open'); });
  });
})();


/* ── G. Marquee duplication ─────────────────────────────── */
document.querySelectorAll('.export-tech-marquee-lane').forEach(function (lane) {
  lane.innerHTML += lane.innerHTML;
});