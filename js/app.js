if (history.scrollRestoration) {
  history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

/* ── Global Shared State ─────────────────────────────────── */
window._isMobile   = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent) || window.innerWidth < 768;
window._lerpY    = 0;
window._scrollTasks = [];

/* ── Passive scroll listener ─────────────────────────────── */
(function () {
  var prevY = 0;
  function onScroll() {
    var y = window.pageYOffset;
    window._scrollDir = y > prevY ? 1 : -1;
    window._scrollY   = y;
    prevY = y;
  }
  function calcDocH() {
    window._docH = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight
    ) - window.innerHeight;
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', calcDocH, { passive: true });
  calcDocH();
  onScroll();
})();

/* ── Master rAF Loop ─────────────────────────────────────── */
(function loop(timestamp) {
  // Enable smooth lerp on desktop for "behemoth level" premium smoothness
  if (!window._isMobile) {
    // Smoother factor (0.065-0.075 is the sweet spot for "buttery" feel)
    var factor = 0.068; 
    var targetY = window._scrollY;
    var rawLerp = window._lerpY + (targetY - window._lerpY) * factor;
    // Snap to target if very close to avoid endless sub-pixel calculating
    window._lerpY = Math.abs(targetY - rawLerp) < 0.1 ? targetY : rawLerp;
  } else {
    // Native scroll on mobile needs immediate value
    window._lerpY = window._scrollY;
  }

  // Run scroll tasks
  var len = window._scrollTasks.length;
  for (var i = 0; i < len; i++) {
    try {
      window._scrollTasks[i](timestamp);
    } catch (e) {
      console.error('Scroll Task Error:', e);
    }
  }

  requestAnimationFrame(loop);
})(0);

/* ── DOM Ready Initializations ────────────────────────────── */
window.addEventListener('DOMContentLoaded', () => {
  // Trigger SVG animations on scroll
  // Project SVG Drawing Trigger Task
  const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-drawing'); // Trigger the drawing in CSS
        projectObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 }); // Trigger earlier so drawing starts as it fades in

  document.querySelectorAll('.project-card').forEach(card => projectObserver.observe(card));

  // --- Smooth Scroll to Hash on Load ---
  if (window.location.hash) {
    const targetId = window.location.hash.substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      setTimeout(() => {
        const top = targetEl.offsetTop - 80;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }, 600); // Wait for animations/load to settle
    }
  }
});
