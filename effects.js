// Visual effects: runs alongside script.js and re-applies after every render
(function () {
  var root = document.documentElement;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  var interactive = finePointer && !reduceMotion;

  var main = document.getElementById('main');
  var progressBar = document.querySelector('.scroll-progress');
  var glow = document.querySelector('.cursor-glow');
  var toTop = document.querySelector('.to-top');

  var firstRender = true;
  var typeTimer = null;
  var statsCounted = false;
  var statsObserver = null;

  function esc(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  // ---------- Typewriter roles ----------
  function setupTyped(hero) {
    clearTimeout(typeTimer);
    var el = document.querySelector('.hero-role');
    var roles = hero.roles;
    if (!el || !roles || !roles.length) return;

    el.innerHTML = '<span class="sr-only">' + esc(roles.join(' · ')) + '</span>' +
      '<span class="typed" aria-hidden="true"></span><span class="caret" aria-hidden="true"></span>';
    var out = el.querySelector('.typed');

    if (reduceMotion) { out.textContent = roles[0]; return; }

    var index = 0, count = 0, deleting = false;
    function tick() {
      var chars = Array.from(roles[index]);
      if (!deleting) {
        count++;
        out.textContent = chars.slice(0, count).join('');
        if (count >= chars.length) { deleting = true; typeTimer = setTimeout(tick, 1700); return; }
        typeTimer = setTimeout(tick, 65 + Math.random() * 40);
      } else {
        count--;
        out.textContent = chars.slice(0, count).join('');
        if (count <= 0) { deleting = false; index = (index + 1) % roles.length; typeTimer = setTimeout(tick, 350); return; }
        typeTimer = setTimeout(tick, 30);
      }
    }
    typeTimer = setTimeout(tick, 700);
  }

  // ---------- Skills marquee ----------
  function buildMarquee(t) {
    var track = document.querySelector('.marquee-track');
    if (!track) return;
    var seen = {};
    var items = [];
    t.skills.groups.forEach(function (g) {
      g.items.forEach(function (item) {
        if (!seen[item]) { seen[item] = true; items.push(item); }
      });
    });
    var row = items.map(function (item) {
      return '<span class="mq-item">' + esc(item) + '</span><span class="mq-sep">✦</span>';
    }).join('');
    // Two copies so the -50% loop is seamless
    track.innerHTML = row + row;
  }

  // ---------- Staggered reveal ----------
  function applyStagger() {
    document.querySelectorAll('.cards, .timeline, .skill-groups, .stats, .edu-list, .langs, .contact-actions')
      .forEach(function (container) {
        container.classList.add('stagger');
        Array.prototype.forEach.call(container.children, function (child, i) {
          child.style.setProperty('--i', i);
        });
      });
  }

  // ---------- Stats count-up ----------
  function prepareStats() {
    if (statsCounted || reduceMotion) return;
    document.querySelectorAll('#about .stats strong').forEach(function (el) {
      var m = el.textContent.match(/^(\d+)(.*)$/);
      if (!m) return;
      el.dataset.target = m[1];
      el.dataset.suffix = m[2];
      el.textContent = '0' + m[2];
    });

    if (statsObserver || !('IntersectionObserver' in window)) return;
    statsObserver = new IntersectionObserver(function (entries) {
      if (!entries[0].isIntersecting) return;
      statsObserver.disconnect();
      statsCounted = true;
      countUp();
    }, { threshold: 0.4 });
    statsObserver.observe(document.getElementById('about'));
  }

  function countUp() {
    var els = document.querySelectorAll('#about .stats strong[data-target]');
    var start = performance.now();
    var duration = 1400;
    function frame(now) {
      var p = Math.min(1, (now - start) / duration);
      var eased = 1 - Math.pow(1 - p, 3);
      els.forEach(function (el) {
        el.textContent = Math.round(eased * Number(el.dataset.target)) + el.dataset.suffix;
      });
      if (p < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  // ---------- Scroll-driven effects ----------
  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      ticking = false;
      var max = root.scrollHeight - window.innerHeight;
      var p = max > 0 ? window.scrollY / max : 0;
      progressBar.style.setProperty('--progress', p.toFixed(4));
      // Hidden near the bottom, where the footer already has its own back-to-top link
      toTop.classList.toggle('show', window.scrollY > window.innerHeight * 0.8 && max - window.scrollY > 140);
      updateTimeline();
    });
  }

  function updateTimeline() {
    var tl = document.querySelector('.timeline');
    if (!tl) return;
    var line = window.innerHeight * 0.6;
    var rect = tl.getBoundingClientRect();
    var p = Math.max(0, Math.min(1, (line - rect.top) / rect.height));
    tl.style.setProperty('--tl', p.toFixed(4));
    tl.querySelectorAll('.tl-item').forEach(function (item) {
      item.classList.toggle('passed', item.getBoundingClientRect().top + 12 < line);
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);

  // ---------- Pointer effects: glow, spotlight, tilt, magnetic buttons ----------
  var tiltCard = null;
  var magnetBtn = null;

  function resetTilt() {
    if (tiltCard) { tiltCard.style.transform = ''; tiltCard = null; }
  }
  function resetMagnet() {
    if (magnetBtn) { magnetBtn.style.transform = ''; magnetBtn = null; }
  }

  if (interactive) {
    document.addEventListener('pointermove', function (e) {
      glow.style.setProperty('--cx', e.clientX + 'px');
      glow.style.setProperty('--cy', e.clientY + 'px');
      glow.classList.add('active');

      var surface = e.target.closest('.card, .skill-group, .edu, .stats li, .langs');
      if (surface) {
        var r = surface.getBoundingClientRect();
        surface.style.setProperty('--mx', (e.clientX - r.left) + 'px');
        surface.style.setProperty('--my', (e.clientY - r.top) + 'px');
      }

      var card = e.target.closest('.card');
      if (card !== tiltCard) resetTilt();
      if (card) {
        var cr = card.getBoundingClientRect();
        var rx = (0.5 - (e.clientY - cr.top) / cr.height) * 8;
        var ry = ((e.clientX - cr.left) / cr.width - 0.5) * 10;
        card.style.transform = 'translateY(-6px) rotateX(' + rx.toFixed(2) + 'deg) rotateY(' + ry.toFixed(2) + 'deg)';
        tiltCard = card;
      }

      var btn = e.target.closest('.hero-cta .btn, .contact-actions .btn');
      if (btn !== magnetBtn) resetMagnet();
      if (btn) {
        var br = btn.getBoundingClientRect();
        var dx = (e.clientX - (br.left + br.width / 2)) * 0.25;
        var dy = (e.clientY - (br.top + br.height / 2)) * 0.35;
        btn.style.transform = 'translate(' + dx.toFixed(1) + 'px, ' + dy.toFixed(1) + 'px)';
        magnetBtn = btn;
      }
    }, { passive: true });

    document.addEventListener('pointerleave', function () {
      glow.classList.remove('active');
      resetTilt();
      resetMagnet();
    });
  }

  // ---------- Hook into every render (first load + language switch) ----------
  document.addEventListener('portfolio:render', function (e) {
    var t = e.detail.t;
    setupTyped(t.hero);
    buildMarquee(t);
    applyStagger();
    prepareStats();
    toTop.setAttribute('aria-label', t.ui.backToTop.replace(/[\s↑]+$/, ''));
    tiltCard = null;
    magnetBtn = null;

    if (!firstRender && !reduceMotion && main.animate) {
      main.animate(
        [{ opacity: 0, transform: 'translateY(10px)' }, { opacity: 1, transform: 'none' }],
        { duration: 450, easing: 'cubic-bezier(0.2, 0.7, 0.2, 1)' }
      );
    }
    firstRender = false;
    onScroll();
  });
})();
