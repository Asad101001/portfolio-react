/* ============================================================
   js/modules/mobile.js
   Specifically tuned experiences for MOBILE devices.
   ============================================================ */

(function initMobile() {
  const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  
  if (isTouch || window._isMobile) {
    document.body.classList.add('is-mobile-device');
    
    // Disable heavy cursor glow on mobile
    const glow = document.getElementById('cursor-glow');
    if (glow) glow.style.display = 'none';

    // Optimize section reveal triggers for touch scrolling
    // (Less aggressive transformation for smoother native scroll)
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(r => {
      if (r.getBoundingClientRect().top < window.innerHeight) {
        r.classList.add('visible');
      }
    });
  }

  // Handle subtle touch feedback on cards (active state)
  document.addEventListener('touchstart', function(e) {
    const card = e.target.closest('.glass-card');
    if (card) {
      card.style.transform = 'scale(0.98)';
      card.style.transition = 'transform 0.1s ease';
    }
  }, { passive: true });

  document.addEventListener('touchend', function(e) {
    const card = e.target.closest('.glass-card');
    if (card) {
      card.style.transform = '';
    }
  }, { passive: true });

})();
