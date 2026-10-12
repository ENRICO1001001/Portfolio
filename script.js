(function () {
  var CONFIG = window.PORTFOLIO_CONFIG;
  var root = document.documentElement;
  var profile = CONFIG.profile;
  var langCodes = Object.keys(CONFIG.languages);

  var ICONS = {
    lock: '<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
    bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>',
    ticket: '<path d="M3 9a2 2 0 0 0 0 6v3a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3a2 2 0 0 0 0-6V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"/><path d="M13 4v16" stroke-dasharray="2 2"/>',
    school: '<path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/>',
    chat: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M8 9h8M8 13h5"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    code: '<path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/>',
    database: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
    pin: '<path d="M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>'
  };

  // ---------- Helpers ----------
  function esc(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function icon(name) {
    return '<svg viewBox="0 0 24 24" aria-hidden="true">' + (ICONS[name] || ICONS.code) + '</svg>';
  }

  function tags(list) {
    if (!list || !list.length) return '';
    return '<ul class="tags">' + list.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '</ul>';
  }

  function title(num, text) {
    return '<h2 class="section-title"><span class="mono num">' + num + '</span>' + esc(text) + '</h2>';
  }

  function pad(n) { return n < 10 ? '0' + n : String(n); }

  function setField(name, value) {
    document.querySelectorAll('[data-field="' + name + '"]').forEach(function (el) { el.textContent = value; });
  }

  // ---------- Section renderers ----------
  function renderHero(t) {
    var h = t.hero;
    return '' +
      '<p class="eyebrow mono">' + esc(h.greeting) + '</p>' +
      '<h1 class="hero-title">' + esc(profile.name) + '</h1>' +
      (h.nameReading ? '<p class="hero-reading">' + esc(h.nameReading) + '</p>' : '') +
      '<p class="hero-role">' + esc(h.role) + ' <span class="dot">·</span> ' + esc(h.roleTech) + '</p>' +
      '<p class="hero-lead">' + esc(h.lead) + '</p>' +
      '<div class="hero-meta">' +
        '<span class="chip">' + icon('pin') + esc(h.location) + '</span>' +
        (profile.openToWork ? '<span class="chip chip-accent"><span class="pulse" aria-hidden="true"></span>' + esc(h.status) + '</span>' : '') +
      '</div>' +
      '<div class="hero-cta">' +
        '<a class="btn btn-primary" href="#contact">' + esc(h.ctaPrimary) + '</a>' +
        '<a class="btn btn-ghost" href="#projects">' + esc(h.ctaSecondary) + '</a>' +
      '</div>';
  }

  function renderAbout(t, num) {
    var a = t.about;
    return title(num, a.title) +
      '<div class="about-grid">' +
        '<div class="about-text">' + a.paragraphs.map(function (p) { return '<p>' + esc(p) + '</p>'; }).join('') + '</div>' +
        '<ul class="stats">' + a.stats.map(function (s) {
          return '<li><strong>' + esc(s.value) + '</strong><span>' + esc(s.label) + '</span></li>';
        }).join('') + '</ul>' +
      '</div>';
  }

  function renderExperience(t, num) {
    var e = t.experience;
    return title(num, e.title) +
      '<ol class="timeline">' + e.items.map(function (job) {
        return '<li class="tl-item">' +
          '<div class="tl-head">' +
            '<h3>' + esc(job.role) + ' <span class="at">@ ' + esc(job.company) + '</span></h3>' +
            '<p class="tl-meta mono">' + esc(job.period) + ' · ' + esc(job.place) + '</p>' +
          '</div>' +
          (job.summary ? '<p>' + esc(job.summary) + '</p>' : '') +
          (job.bullets && job.bullets.length
            ? '<ul class="tl-list">' + job.bullets.map(function (b) { return '<li>' + esc(b) + '</li>'; }).join('') + '</ul>'
            : '') +
          tags(job.tags) +
        '</li>';
      }).join('') + '</ol>';
  }

  function renderProjects(t, num) {
    var p = t.projects;
    return title(num, p.title) +
      (p.intro ? '<p class="section-intro">' + esc(p.intro) + '</p>' : '') +
      '<div class="cards">' + p.items.map(function (item) {
        return '<article class="card">' +
          '<div class="card-icon">' + icon(item.icon) + '</div>' +
          '<h3>' + esc(item.title) + '</h3>' +
          '<p>' + esc(item.text) + '</p>' +
          tags(item.tags) +
        '</article>';
      }).join('') + '</div>';
  }

  function renderSkills(t, num) {
    var s = t.skills;
    return title(num, s.title) +
      '<div class="skill-groups">' + s.groups.map(function (g) {
        return '<div class="skill-group"><h3>' + esc(g.name) + '</h3>' + tags(g.items) + '</div>';
      }).join('') + '</div>';
  }

  function renderEducation(t, num) {
    var ed = t.education;
    return title(num, ed.title) +
      '<div class="edu-grid">' +
        '<div class="edu-list">' + ed.items.map(function (item) {
          return '<article class="edu">' +
            '<p class="tl-meta mono">' + esc(item.period) + '</p>' +
            '<h3>' + esc(item.degree) + '</h3>' +
            '<p>' + esc(item.school) + '</p>' +
          '</article>';
        }).join('') + '</div>' +
        '<ul class="langs">' + ed.spoken.map(function (l) {
          var w = Math.max(0, Math.min(100, Number(l.percent) || 0));
          return '<li>' +
            '<div class="lang-row"><span>' + esc(l.name) + '</span><span class="mono">' + esc(l.level) + '</span></div>' +
            '<div class="bar"><span style="--w:' + w + '%"></span></div>' +
          '</li>';
        }).join('') + '</ul>' +
      '</div>';
  }

  // The address is stored split in config.js and only assembled in the browser
  function emailAddress() {
    var e = profile.email;
    if (!e) return '';
    return typeof e === 'string' ? e : e.user + '@' + e.domain;
  }

  function renderContact(t, num) {
    var c = t.contact;
    var email = !!profile.email;
    return '<div class="contact-box">' +
      '<h2 class="contact-title"><span class="mono num">' + num + '</span>' + esc(c.title) + '</h2>' +
      '<p>' + esc(c.text) + '</p>' +
      '<div class="contact-actions">' +
        (email
          ? '<a class="btn btn-primary" href="#contact" data-email aria-label="' + esc(c.emailHint || c.emailLabel) + '">' +
              esc(c.emailLabel || 'Email') +
            '</a>'
          : '') +
        (profile.linkedin ? '<a class="btn btn-ghost" href="' + esc(profile.linkedin) + '" target="_blank" rel="noopener">' + esc(c.linkedinLabel) + '</a>' : '') +
        (profile.github ? '<a class="btn btn-ghost" href="' + esc(profile.github) + '" target="_blank" rel="noopener">' + esc(c.githubLabel) + '</a>' : '') +
      '</div>' +
    '</div>';
  }

  var SECTIONS = [
    { id: 'about', render: renderAbout },
    { id: 'experience', render: renderExperience },
    { id: 'projects', render: renderProjects },
    { id: 'skills', render: renderSkills },
    { id: 'education', render: renderEducation },
    { id: 'contact', render: renderContact }
  ];

  // ---------- Language ----------
  var navToggle = document.querySelector('.nav-toggle');
  var navLinks = document.getElementById('nav-links');
  var langSwitch = document.querySelector('.lang-switch');
  var themeBtn = document.querySelector('.theme-toggle');
  var currentLang;
  var activeId = null;

  function pickInitialLang() {
    var saved = null;
    try { saved = localStorage.getItem('lang'); } catch (e) {}
    if (saved && CONFIG.languages[saved]) return saved;
    var browser = (navigator.language || '').slice(0, 2).toLowerCase();
    if (CONFIG.languages[browser]) return browser;
    return CONFIG.languages[CONFIG.defaultLanguage] ? CONFIG.defaultLanguage : langCodes[0];
  }

  function render(lang) {
    var t = CONFIG.languages[lang];
    currentLang = lang;
    root.lang = t.htmlLang || lang;

    document.title = t.meta.title;
    document.querySelector('meta[name="description"]').setAttribute('content', t.meta.description);

    document.querySelector('.skip-link').textContent = t.ui.skipLink;
    document.querySelector('.brand').setAttribute('aria-label', profile.name);
    themeBtn.setAttribute('aria-label', t.ui.toggleTheme);
    langSwitch.setAttribute('aria-label', t.ui.language);
    setField('initials', profile.initials);
    setField('name', profile.name);
    setField('backToTop', t.ui.backToTop);

    navLinks.innerHTML = SECTIONS.map(function (s) {
      return '<li><a href="#' + s.id + '"' + (s.id === activeId ? ' class="active"' : '') + '>' + esc(t.ui.nav[s.id]) + '</a></li>';
    }).join('');

    langSwitch.innerHTML = langCodes.length < 2 ? '' : langCodes.map(function (code) {
      var on = code === lang;
      return '<button type="button" data-lang="' + code + '" aria-pressed="' + on + '"' +
        ' lang="' + esc(CONFIG.languages[code].htmlLang || code) + '">' + esc(CONFIG.languages[code].label) + '</button>';
    }).join('');

    document.getElementById('top').innerHTML = renderHero(t);
    SECTIONS.forEach(function (s, i) {
      document.getElementById(s.id).innerHTML = s.render(t, pad(i + 1));
    });

    setMenu(false);
    document.dispatchEvent(new CustomEvent('portfolio:render', { detail: { lang: lang, t: t } }));
  }

  // The email is assembled only on click, so it never appears in the page
  document.addEventListener('click', function (e) {
    if (!e.target.closest('[data-email]')) return;
    e.preventDefault();
    window.location.href = 'mailto:' + emailAddress();
  });

  langSwitch.addEventListener('click', function (e) {
    var btn = e.target.closest('button[data-lang]');
    if (!btn || btn.dataset.lang === currentLang) return;
    try { localStorage.setItem('lang', btn.dataset.lang); } catch (err) {}
    render(btn.dataset.lang);
  });

  // ---------- Theme toggle ----------
  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

  themeBtn.addEventListener('click', function () {
    var current = root.getAttribute('data-theme') || (prefersDark.matches ? 'dark' : 'light');
    var next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  });

  // ---------- Mobile menu ----------
  function setMenu(open) {
    var t = CONFIG.languages[currentLang];
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', open ? t.ui.closeMenu : t.ui.openMenu);
    navLinks.classList.toggle('open', open);
  }

  navToggle.addEventListener('click', function () {
    setMenu(navToggle.getAttribute('aria-expanded') !== 'true');
  });

  navLinks.addEventListener('click', function (e) {
    if (e.target.closest('a')) setMenu(false);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setMenu(false);
  });

  // ---------- Header border on scroll ----------
  var header = document.querySelector('.site-header');
  function onScroll() { header.classList.toggle('scrolled', window.scrollY > 8); }
  window.addEventListener('scroll', onScroll, { passive: true });

  // ---------- First render ----------
  render(pickInitialLang());
  onScroll();
  document.getElementById('year').textContent = new Date().getFullYear();

  // ---------- Reveal sections + highlight active nav link ----------
  var sections = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    var revealObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    var activeObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        activeId = entry.target.id;
        navLinks.querySelectorAll('a').forEach(function (a) {
          a.classList.toggle('active', a.getAttribute('href') === '#' + activeId);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    sections.forEach(function (s) {
      revealObs.observe(s);
      activeObs.observe(s);
    });
  } else {
    sections.forEach(function (s) { s.classList.add('visible'); });
  }
})();
