/* =========================================================
   Logika situs. Semua konten dibaca dari assets/js/data.js.
   Tanpa dependensi, tanpa build step.
   ========================================================= */
(() => {
  'use strict';

  const d = window.portfolioData;
  if (!d) { console.error('portfolioData tidak ditemukan. Pastikan data.js dimuat lebih dulu.'); return; }
  const STRINGS = window.translations || { id: {}, en: {} };

  const LANGS = ['id', 'en'];
  const readLang = () => {
    try {
      const saved = localStorage.getItem('lang');
      if (LANGS.includes(saved)) return saved;
    } catch (e) { }
    return (navigator.language || 'id').toLowerCase().startsWith('en') ? 'en' : 'id';
  };
  let lang = readLang();
  const REPAINT = [];

  /* Teks konten: t({id,en}) -> string bahasa aktif. String biasa dibiarkan apa adanya. */
  const tx = (v) => (v && typeof v === 'object' && 'id' in v) ? (v[lang] ?? v.id) : (v ?? '');
  /* Nilai yang masih placeholder [ISI] tidak ditampilkan ke pengunjung. */
  const filled = (v) => { const out = tx(v); return String(out).includes('[ISI]') ? '' : out; };
  const waNumber = filled(d.site.whatsapp);
  /* Teks antarmuka berdasarkan kunci, dengan pengganti {nama}. */
  const ui = (key, vars) => {
    let out = STRINGS[lang]?.[key] ?? STRINGS.id?.[key] ?? key;
    if (vars) for (const k in vars) out = out.replaceAll(`{${k}}`, vars[k]);
    return out;
  };

  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const esc = (v) => String(v ?? '').replace(/[&<>"']/g, (c) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
  ));
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const initials = d.site.name.trim().split(/\s+/).map((w) => w[0]).slice(0, 2).join('').toUpperCase();
  const LOGO = '<svg viewBox="0 0 200 200" aria-hidden="true" fill="none" stroke="currentColor"'
    + ' stroke-width="8" stroke-linejoin="miter">'
    + '<path d="M100 16 184 100 100 184 16 100Z"/><circle cx="100" cy="100" r="70"/>'
    + '<circle cx="75" cy="75" r="35"/><circle cx="125" cy="75" r="35"/>'
    + '<circle cx="125" cy="125" r="35"/><circle cx="75" cy="125" r="35"/></svg>';
  const origin = `https://${d.site.domain}`;

  /* ---------------- Ikon ---------------- */
  const ICON = {
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" width="15" height="15"><path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true" width="15" height="15"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    spark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" width="15" height="15"><path d="M12 3l2 5 5 2-5 2-2 5-2-5-5-2 5-2z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true" width="17" height="17"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 7 8.5 6 8.5-6"/></svg>',
    chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true" width="17" height="17"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.3A8 8 0 1 1 21 12z"/></svg>',
    link: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true" width="17" height="17"><path d="M10 13a4 4 0 0 0 5.7 0l2.6-2.6a4 4 0 0 0-5.7-5.7L11 6.3"/><path d="M14 11a4 4 0 0 0-5.7 0L5.7 13.6a4 4 0 0 0 5.7 5.7L13 17.7"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" width="15" height="15"><path d="M5 12h13M13 6l6 6-6 6"/></svg>',
    award: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true" width="18" height="18"><circle cx="12" cy="9" r="5"/><path d="m8.5 13.5-1 7 4.5-2.5 4.5 2.5-1-7"/></svg>'
  };

  /* Tile ikon aplikasi. SVG inline, viewBox 24x24, memakai warna resmi tiap merek.
     Tool tanpa ikon di sini akan memakai `abbr` dari data.js. */
  const TOOL_ICONS = {
    // Figma - 5 warna resmi: #F24E1E #FF7262 #A259FF #1ABCFE #0ACF83
    figma: '<svg viewBox="0 0 24 24" aria-hidden="true">'
      + '<path fill="#F24E1E" d="M8.5 2.5h3.5V8H8.5a2.75 2.75 0 0 1 0-5.5z"/>'
      + '<path fill="#FF7262" d="M12 2.5h3.5a2.75 2.75 0 0 1 0 5.5H12z"/>'
      + '<path fill="#A259FF" d="M8.5 8H12v5.5H8.5a2.75 2.75 0 0 1 0-5.5z"/>'
      + '<path fill="#0ACF83" d="M8.5 13.5H12V19a2.75 2.75 0 1 1-3.5-2.66z"/>'
      + '<circle fill="#1ABCFE" cx="15.25" cy="10.75" r="2.75"/></svg>',

    // Visual Studio Code - #0065A9
    vscode: '<svg viewBox="0 0 24 24" aria-hidden="true">'
      + '<rect width="24" height="24" rx="5" fill="#0065A9"/>'
      + '<path fill="#fff" d="m17.6 4.8-7.1 7.2-3.7-2.9-1.4.7v4.4l1.4.7 3.7-2.9 7.1 7.2 1.8-.8V5.6z" opacity=".25"/>'
      + '<path fill="#fff" d="M17.6 6.4v11.2L11.4 12z"/>'
      + '<path fill="#fff" d="m6.8 9.1 3.7 2.9-3.7 2.9-1.4-.7V9.8z"/></svg>',

    // Adobe Lightroom - latar #001E36, glyph #31A8FF
    lightroom: '<svg viewBox="0 0 24 24" aria-hidden="true">'
      + '<rect width="24" height="24" rx="5" fill="#001E36"/>'
      + '<path fill="#31A8FF" d="M7 6.4h1.9v9.2h4.3v1.9H7z"/>'
      + '<path fill="#31A8FF" d="M14.8 9.6h1.7l.1 1.1a2.3 2.3 0 0 1 2-1.2v1.9c-1.2 0-2 .5-2 1.8v4.3h-1.8z"/></svg>',

    // Microsoft Word - #2B579A
    word: '<svg viewBox="0 0 24 24" aria-hidden="true">'
      + '<rect width="24" height="24" rx="5" fill="#2B579A"/>'
      + '<path fill="#fff" d="M5.6 8.3h1.9l1.1 5.3 1.3-5.3h1.8l1.3 5.3 1.1-5.3h1.9l-1.9 7.9h-2l-1.3-5-1.3 5h-2z"/></svg>',

    // Microsoft Excel - #217346
    excel: '<svg viewBox="0 0 24 24" aria-hidden="true">'
      + '<rect width="24" height="24" rx="5" fill="#217346"/>'
      + '<path fill="#fff" d="M7.4 8h2.2l2.4 3.3L14.4 8h2.2L13 12l3.6 4h-2.2L12 12.7 9.6 16H7.4L11 12z"/></svg>',

    // Microsoft PowerPoint - #D24726
    powerpoint: '<svg viewBox="0 0 24 24" aria-hidden="true">'
      + '<rect width="24" height="24" rx="5" fill="#D24726"/>'
      + '<path fill="#fff" d="M8.2 7.8h3.9a3.1 3.1 0 0 1 0 6.2h-2v2.2H8.2zm1.9 1.8v2.6h1.8a1.3 1.3 0 0 0 0-2.6z"/></svg>'
  };

  /* ---------------- Head: judul & structured data ---------------- */
  const paintTitle = () => { document.title = `${d.site.name} — ${tx(d.site.role)}`; };
  paintTitle();
  const ld = $('#ld-person');
  if (ld) {
    ld.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: d.site.name,
      jobTitle: tx(d.site.role),
      description: tx(d.about),
      email: `mailto:${d.site.email}`,
      url: `${origin}/`,
      address: { '@type': 'PostalAddress', addressLocality: tx(d.site.location) },
      sameAs: [d.site.linkedin, d.site.github, d.site.instagram].filter(Boolean)
    });
  }

  /* ---------------- Navigasi ---------------- */
  $('#brand').textContent = d.site.name;
  $('#brand-mark').innerHTML = LOGO;
  $('#brand-footer').textContent = d.site.name;

  const NAV = [['nav.about', 'about'], ['nav.skills', 'skills'], ['nav.projects', 'projects'],
               ['nav.journey', 'journey'], ['nav.contact', 'contact']];
  const paintNav = () => {
    $('#nav-links').innerHTML = NAV.map(([key, id]) => `<a href="#${id}">${esc(ui(key))}</a>`).join('');
    $('#nav-links').setAttribute('aria-label', ui('nav.label'));
    menuBtn.setAttribute('aria-label', ui('nav.menu'));
  };

  const navEl = $('#nav');
  const menuBtn = $('#menu');
  const navLinks = $('#nav-links');

  const closeMenu = () => { navLinks.classList.remove('open'); menuBtn.setAttribute('aria-expanded', 'false'); };
  menuBtn.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
  });
  navLinks.addEventListener('click', (e) => { if (e.target.closest('a')) closeMenu(); });
  document.addEventListener('click', (e) => {
    if (navLinks.classList.contains('open') && !e.target.closest('.nav-in')) closeMenu();
  });
  addEventListener('scroll', () => navEl.classList.toggle('is-stuck', scrollY > 8), { passive: true });

  /* ---------------- Tema ---------------- */
  const themeBtn = $('#theme');
  const themeIcon = $('#theme-icon');
  const paintTheme = (t) => {
    themeBtn.setAttribute('aria-pressed', String(t === 'dark'));
    themeBtn.setAttribute('aria-label', ui(t === 'dark' ? 'theme.toLight' : 'theme.toDark'));
    themeIcon.textContent = t === 'dark' ? '☾' : '☀';
  };
  paintTheme(document.documentElement.dataset.theme);
  themeBtn.addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch (e) { }
    paintTheme(next);
  });

  /* ---------------- Hero ---------------- */
  $('#hero-name').textContent = d.site.name;
  const paintHero = () => {
    $('#hero-role').textContent = tx(d.site.role);
    $('#tagline').textContent = tx(d.site.tagline);
  };
  paintHero();
  $('#initials').textContent = initials;

  const statusBadge = $('#status-badge');
  if (d.site.availableText || d.site.busyText) {
    $('#status-text').textContent = tx(d.site.available ? d.site.availableText : d.site.busyText);
    statusBadge.hidden = false;
    if (!d.site.available) $('.dot', statusBadge).style.background = 'var(--fuchsia)';
  }

  const paintMeta = () => {
    $('#meta-location').innerHTML = `${ICON.pin}${esc(tx(d.site.location))}`;
    $('#meta-projects').innerHTML = `${ICON.spark}${esc(ui('hero.count', { n: d.projects.length }))}`;
  };
  if (d.site.timezone) $('#meta-timezone').innerHTML = `${ICON.clock}${esc(d.site.timezone)}`;

  if (d.site.cv) {
    const cv = $('#cv-link');
    cv.href = d.site.cv;
    cv.hidden = false;
  }

  // Foto profil (hero + kartu tentang)
  if (d.site.profilePhoto) {
    const alt = ui('photo.alt', { name: d.site.name });
    $('#portrait-frame').innerHTML = `<img src="${esc(d.site.profilePhoto)}" alt="${esc(alt)}" width="800" height="1000" fetchpriority="high">`;
    if (d.site.photoCutout) $('#portrait').classList.add('cutout');
  }

  if (d.highlight) {
    $('#chip-value').textContent = d.highlight.value;
    $('#chip-label').innerHTML = esc(d.highlight.label).replace(/\n/g, '<br>');
    $('#portrait-chip').hidden = false;
  }

  // Marquee: daftar digandakan supaya animasinya menyambung (CSS menggeser -50%)
  if (d.marquee?.length) {
    const paintMarquee = () => {
      const items = d.marquee.map((m) => `<span>${esc(tx(m))}</span>`).join('');
      $('#marquee').innerHTML = items + items;
    };
    paintMarquee();
    REPAINT.push(paintMarquee);
  }

  /* ---------------- Tentang ---------------- */
  const paintAbout = () => {
    $('#about-text').textContent = tx(d.about);
    $('#about-points').innerHTML = (d.aboutPoints || []).map((p) => `<li>${esc(tx(p))}</li>`).join('');
    $('#about-tags').innerHTML = Object.values(d.skills || {}).map((g) => `<span class="tag">${esc(tx(g.label))}</span>`).join('');
  };

  /* Panel kartu "About me" - urutan sesuai referensi:
     Contact, Education, Technical skill, Soft skill, Skill set, Interest, Language. */
  const rows = (list) => list.map(([label, value, when, href]) => `
    <div class="row">
      <b>${esc(label)}</b>
      <span>${href ? `<a href="${esc(href)}"${href.startsWith('http') ? ' target="_blank" rel="noopener"' : ''}>${esc(value)}</a>` : esc(value)}</span>
      ${when ? `<span class="when">${esc(when)}</span>` : ''}
    </div>`).join('');

  const tagList = (items) => `<div class="tags">${(items || []).map((i) => `<span class="tag">${esc(tx(i))}</span>`).join('')}</div>`;

  const panel = (title, chip, body) => `
    <div class="panel">
      <h3>${esc(title)}${chip ? `<span class="chip">${esc(chip)}</span>` : ''}</h3>
      ${body}
    </div>`;

  const toolTiles = (d.tools || []).map((t) => {
    const key = (t.icon || t.name).toLowerCase().replace(/\s+/g, '');
    const icon = TOOL_ICONS[key] || `<span class="abbr">${esc(t.abbr || t.name.slice(0, 2))}</span>`;
    return `<div class="tool" title="${esc(t.name)}">${icon}<span class="tool-name">${esc(t.name)}</span></div>`;
  }).join('');

  const softBars = () => (d.softSkills || []).map((sk) => `
    <div class="bar">
      <div class="bar-top"><span>${esc(tx(sk.name))}</span><span>${+sk.level}%</span></div>
      <div class="bar-track" role="img" aria-label="${esc(ui('scale.of', { name: tx(sk.name), v: +sk.level }))}">
        <div class="bar-fill" data-level="${+sk.level}"></div>
      </div>
    </div>`).join('');

  const paintPanels = () => {
    $('#about-panels').innerHTML = [
      panel(ui('panel.contact'), ui('panel.contact.chip'), rows([
        [ui('row.email'), d.site.email, '', `mailto:${d.site.email}`],
        ...(waNumber ? [[ui('row.whatsapp'), `+${waNumber}`, '', `https://wa.me/${waNumber}`]] : []),
        ...(d.site.linkedin ? [[ui('row.linkedin'), ui('row.profile'), '', d.site.linkedin]] : []),
        [ui('row.location'), tx(d.site.location), d.site.timezone || '']
      ])),
      panel(ui('panel.education'), ui('panel.education.chip'),
            rows((d.education || []).map((e) => [tx(e.place), tx(e.position), tx(e.period)]))),
      panel(ui('panel.technical'), ui('panel.technical.chip'), `<div class="tool-grid">${toolTiles}</div>`),
      panel(ui('panel.soft'), ui('panel.soft.chip'), softBars()),
      panel(ui('panel.skillset'), ui('item.count', { n: (d.skillSet || []).length }), tagList(d.skillSet)),
      panel(ui('panel.interest'), ui('panel.interest.chip'), tagList(d.interests)),
      panel(ui('panel.language'), ui('panel.language.chip'),
            rows((d.languages || []).map((l) => [tx(l.name), filled(l.level)])))
    ].join('');
  };

  const paintStats = () => {
    $('#stats').innerHTML = d.stats.map((s) => `
    <div class="stat reveal">
      <b data-value="${+s.value}" data-suffix="${esc(s.suffix || '')}">0${esc(s.suffix || '')}</b>
      <span>${esc(tx(s.label))}</span>
    </div>`).join('');
  };

  /* ---------------- Keahlian ---------------- */
  const paintSkills = () => {
    $('#skills-grid').innerHTML = Object.values(d.skills).map((g) => `
    <div class="panel">
      <h3>${esc(tx(g.label))} <span class="chip">${esc(ui('item.count', { n: g.items.length }))}</span></h3>
      ${tagList(g.items)}
    </div>`).join('');
  };

  /* ---------------- Proyek ---------------- */
  /* Filter kategori */
  const ALL = '__all__';
  const catKey = (c) => c?.id ?? c;
  const cats = [...new Map(d.projects.map((p) => [catKey(p.category), p.category])).entries()];
  let currentFilter = ALL;
  const paintFilters = (active = ALL) => {
    $('#filters').setAttribute('aria-label', ui('projects.filterLabel'));
    $('#filters').innerHTML = [[ALL, ui('projects.all')], ...cats.map(([k, c]) => [k, tx(c)])]
      .map(([key, label]) => `<button type="button" class="filter" aria-pressed="${key === active}" data-filter="${esc(key)}">${esc(label)}</button>`).join('');
  };

  const matches = (p) => currentFilter === ALL || catKey(p.category) === currentFilter;

  function applyFilter(value, updateHash = true) {
    const v = cats.some(([k]) => k === value) ? value : ALL;
    currentFilter = v;
    $$('#filters .filter').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.filter === v)));
    document.dispatchEvent(new CustomEvent('filterchange', { detail: { filter: v } }));
    if (updateHash) {
      const hash = v === ALL ? '#projects' : `#projects?kategori=${encodeURIComponent(v)}`;
      history.replaceState(null, '', location.pathname + hash);
    }
  }

  $('#filters').addEventListener('click', (e) => {
    const btn = e.target.closest('.filter');
    if (btn) applyFilter(btn.dataset.filter);
  });

  if (location.hash.includes('kategori=')) {
    currentFilter = decodeURIComponent(location.hash.split('kategori=')[1] || '');
  }

  /* Dialog detail proyek */
  const sheet = $('#project-sheet');
  const openSheet = (i) => {
    const p = d.projects[i];
    if (!p) return;
    $('#sheet-category').textContent = [filled(p.category), filled(p.year), filled(p.role)].filter(Boolean).join(' · ');
    $('#sheet-title').textContent = tx(p.title);
    $('#sheet-body').innerHTML = `
      ${p.screenshot ? `<img class="sheet-shot" src="${esc(p.screenshot)}" alt="${esc(ui('shot.alt', { title: tx(p.title) }))}" loading="lazy">` : ''}
      <p class="muted">${esc(filled(p.description))}</p>
      ${(p.features || []).some(filled) ? `<div><h4>${esc(ui('sheet.features'))}</h4><ul class="feature-list">${p.features.filter(filled).map((f) => `<li>${esc(tx(f))}</li>`).join('')}</ul></div>` : ''}
      ${p.metrics?.length ? `<div><h4>${esc(ui('sheet.results'))}</h4><div class="metrics">${p.metrics.map((m) => `<div><b>${esc(m.value)}</b>${esc(tx(m.label))}</div>`).join('')}</div></div>` : ''}
      ${p.tech.some(filled) ? `<div><h4>${esc(ui('sheet.tech'))}</h4>${tagList(p.tech.filter(filled))}</div>` : ''}
      <div class="actions" style="margin-top:.2rem">
        ${p.demo ? `<a class="button" href="${esc(p.demo)}" target="_blank" rel="noopener">${ICON.link}${esc(ui('sheet.demo'))}</a>` : ''}
        ${p.repo ? `<a class="button alt" href="${esc(p.repo)}" target="_blank" rel="noopener">${esc(ui('sheet.code'))}</a>` : ''}
      </div>`;
    if (typeof sheet.showModal === 'function') sheet.showModal(); else sheet.setAttribute('open', '');
    $('#sheet-close').focus();
  };

  window.portfolioUI = { openProject: openSheet, matches };

  $('#sheet-close').addEventListener('click', () => sheet.close());
  sheet.addEventListener('click', (e) => { if (e.target === sheet) sheet.close(); });

  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });

  /* ---------------- Perjalanan ---------------- */
  const timeline = (items) => items.map((x) => `
    <div class="tl-item">
      <h3>${esc(tx(x.position))}</h3>
      <p class="where">${esc(tx(x.place))}</p>
      <p class="when">${esc(tx(x.period))}</p>
      <ul>${(x.points || []).filter(filled).map((p) => `<li>${esc(tx(p))}</li>`).join('')}</ul>
    </div>`).join('');

  const paintJourney = () => {
    $('#experience').innerHTML = timeline(d.experience || []);
    $('#education').innerHTML = timeline(d.education || []);
  };

  /* ---------------- Sertifikat ---------------- */
  const paintCerts = () => {
    if (!d.certificates?.length) { $('#certificates').hidden = true; return; }
    $('#cert-grid').innerHTML = d.certificates.map((c) => {
      const inner = `<i aria-hidden="true">${ICON.award}</i><span><b>${esc(tx(c.name))}</b><small>${esc(tx(c.issuer))} · ${esc(tx(c.year))}</small></span>`;
      return c.url
        ? `<a class="cert" href="${esc(c.url)}" target="_blank" rel="noopener">${inner}</a>`
        : `<article class="cert">${inner}</article>`;
    }).join('');
  };

  /* ---------------- Kontak ---------------- */
  $('#email-link').href = `mailto:${d.site.email}`;
  if (waNumber) $('#wa-link').href = `https://wa.me/${waNumber}`;
  else $('#wa-link').hidden = true;

  const contactRows = () => [
    [ICON.mail, ui('row.email'), d.site.email, `mailto:${d.site.email}`],
    ...(waNumber ? [[ICON.chat, ui('row.whatsapp'), `+${waNumber}`, `https://wa.me/${waNumber}`]] : []),
    [ICON.link, ui('row.linkedin'), ui('row.profile'), d.site.linkedin],
    [ICON.link, ui('row.github'), ui('row.repo'), d.site.github]
  ].filter((r) => r[3]);

  const paintContact = () => $('#contact-list').innerHTML = contactRows().map(([icon, label, value, href]) => `
    <li><i aria-hidden="true">${icon}</i>
      <span><a href="${esc(href)}"${href.startsWith('http') ? ' target="_blank" rel="noopener"' : ''}>${esc(value)}</a>
      <small>${esc(label)}</small></span>
    </li>`).join('');

  const form = $('#contact-form');
  const formError = $('#form-error');
  const submitBtn = $('#form-submit');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    formError.classList.remove('ok');

    if (!form.checkValidity()) {
      formError.textContent = ui('form.invalid');
      form.reportValidity();
      return;
    }

    const payload = Object.fromEntries(new FormData(form));

    // Tanpa endpoint: buka email client.
    if (!d.site.formEndpoint) {
      const body = `${payload.name}\n${payload.email}\n\n${payload.message}`;
      formError.textContent = ui('form.opening');
      formError.classList.add('ok');
      location.href = `mailto:${d.site.email}?subject=${encodeURIComponent(ui('form.subject'))}&body=${encodeURIComponent(body)}`;
      return;
    }

    // Dengan endpoint: POST JSON.
    submitBtn.disabled = true;
    formError.textContent = ui('form.sending');
    try {
      const res = await fetch(d.site.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      form.reset();
      formError.textContent = ui('form.sent');
      formError.classList.add('ok');
    } catch (err) {
      formError.textContent = ui('form.failed');
      console.error(err);
    } finally {
      submitBtn.disabled = false;
    }
  });

  /* ---------------- Footer ---------------- */
  $('#footer-socials').innerHTML = [
    [d.site.linkedin, 'LinkedIn'], [d.site.github, 'GitHub'], [d.site.instagram, 'Instagram']
  ].filter(([url]) => url)
    .map(([url, label]) => `<a href="${esc(url)}" target="_blank" rel="noopener">${label}</a>`).join('');
  $('#year').textContent = new Date().getFullYear();

  /* ---------------- Bahasa & warna tema ---------------- */
  const langBtn = $('#lang');
  const accentBtn = $('#accent');

  const paintLangBtn = () => {
    langBtn.setAttribute('aria-label', ui('lang.label'));
    langBtn.innerHTML = LANGS
      .map((l) => `<span class="${l === lang ? 'on' : ''}">${l.toUpperCase()}</span>`)
      .join('<i aria-hidden="true">/</i>');
  };

  /* Teks statis di HTML ditandai data-i18n (isi) dan data-i18n-label (aria-label). */
  const paintStatic = () => {
    $$('[data-i18n]').forEach((el) => { el.textContent = ui(el.dataset.i18n); });
    $$('[data-i18n-label]').forEach((el) => { el.setAttribute('aria-label', ui(el.dataset.i18nLabel)); });
  };

  const RENDER = [paintTitle, paintNav, paintHero, paintMeta, paintAbout, paintPanels, paintStats,
                  paintSkills, paintJourney, paintCerts, paintContact,
                  paintStatic, paintLangBtn];

  const renderAll = () => {
    document.documentElement.lang = lang;
    RENDER.forEach((fn) => fn());
    REPAINT.forEach((fn) => fn());
    paintFilters(currentFilter);
    applyFilter(currentFilter, false);
    paintTheme(document.documentElement.dataset.theme);
    if (d.site.available !== undefined) {
      $('#status-text').textContent = tx(d.site.available ? d.site.availableText : d.site.busyText);
    }
  };

  langBtn.addEventListener('click', () => {
    lang = LANGS[(LANGS.indexOf(lang) + 1) % LANGS.length];
    try { localStorage.setItem('lang', lang); } catch (e) { }
    renderAll();
    document.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
    $$('.reveal').forEach((el) => el.classList.add('in'));
    $$('.bar-fill').forEach((b) => { b.style.width = `${b.dataset.level}%`; });
    $$('[data-value]').forEach((n) => { n.textContent = n.dataset.value + (n.dataset.suffix || ''); });
  });

  const ACCENTS = ['violet', 'crimson'];
  const readAccent = () => {
    try {
      const saved = localStorage.getItem('accent');
      if (ACCENTS.includes(saved)) return saved;
    } catch (e) { }
    return 'violet';
  };
  const paintAccent = (a) => {
    document.documentElement.dataset.accent = a;
    accentBtn.setAttribute('aria-label', ui('accent.label'));
    accentBtn.setAttribute('aria-pressed', String(a === 'crimson'));
  };
  paintAccent(readAccent());
  accentBtn.addEventListener('click', () => {
    const next = document.documentElement.dataset.accent === 'crimson' ? 'violet' : 'crimson';
    try { localStorage.setItem('accent', next); } catch (e) { }
    paintAccent(next);
  });

  renderAll();

  /* ---------------- Animasi saat tampil ---------------- */
  const countUp = (el) => {
    const end = +el.dataset.value;
    const suffix = el.dataset.suffix || '';
    if (reduceMotion || !end) { el.textContent = end + suffix; return; }
    const start = performance.now();
    const dur = 900;
    const step = (now) => {
      const t = Math.min(1, (now - start) / dur);
      el.textContent = Math.round(end * (1 - Math.pow(1 - t, 3))) + suffix;
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const revealNow = (el) => {
    if (el.classList.contains('in')) return;
    el.classList.add('in');
    $$('[data-value]', el).forEach((n) => {
      if (n.dataset.done) return;
      n.dataset.done = '1';
      countUp(n);
    });
    $$('.bar-fill', el).forEach((b) => { b.style.width = `${b.dataset.level}%`; });
    revealer.unobserve(el);
  };

  const revealer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => { if (entry.isIntersecting) revealNow(entry.target); });
  }, { threshold: 0, rootMargin: '0px 0px -6% 0px' });

  $$('.reveal').forEach((el) => revealer.observe(el));

  /* Jaring pengaman: saat scroll cepat, elemen bisa terlewat sebelum observer
     sempat jalan dan akan tertinggal transparan selamanya. Sapuan ini menangkapnya. */
  let sweeping = false;
  const sweep = () => {
    sweeping = false;
    $$('.reveal:not(.in)').forEach((el) => {
      if (el.getBoundingClientRect().top < innerHeight * 0.94) revealNow(el);
    });
  };
  const queueSweep = () => {
    if (sweeping) return;
    sweeping = true;
    requestAnimationFrame(sweep);
  };
  addEventListener('scroll', queueSweep, { passive: true });
  addEventListener('resize', queueSweep, { passive: true });
  addEventListener('load', sweep);
  sweep();

  /* Tandai menu aktif sesuai bagian yang terlihat */
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      $$('#nav-links a').forEach((a) => a.classList.toggle('active', a.hash === `#${id}`));
    });
  }, { rootMargin: '-35% 0px -55% 0px' });

  $$('main section[id]').forEach((s) => spy.observe(s));
})();
