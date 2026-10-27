/* =========================================================
   Logika situs. Semua konten dibaca dari assets/js/data.js.
   Tanpa dependensi, tanpa build step.
   ========================================================= */
(() => {
  'use strict';

  const d = window.portfolioData;
  if (!d) { console.error('portfolioData tidak ditemukan. Pastikan data.js dimuat lebih dulu.'); return; }

  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const esc = (v) => String(v ?? '').replace(/[&<>"']/g, (c) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
  ));
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const initials = d.site.name.trim().split(/\s+/).map((w) => w[0]).slice(0, 2).join('').toUpperCase();
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
  document.title = `${d.site.name} — ${d.site.role}`;
  const ld = $('#ld-person');
  if (ld) {
    ld.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: d.site.name,
      jobTitle: d.site.role,
      description: d.about,
      email: `mailto:${d.site.email}`,
      url: `${origin}/`,
      address: { '@type': 'PostalAddress', addressLocality: d.site.location },
      sameAs: [d.site.linkedin, d.site.github, d.site.instagram].filter(Boolean)
    });
  }

  /* ---------------- Navigasi ---------------- */
  $('#brand').textContent = d.site.name;
  $('#brand-mark').textContent = initials;
  $('#brand-footer').textContent = d.site.name;

  const NAV = [
    ['Tentang', 'about'], ['Keahlian', 'skills'], ['Proyek', 'projects'],
    ['Perjalanan', 'journey'], ['Kontak', 'contact']
  ];
  $('#nav-links').innerHTML = NAV.map(([label, id]) => `<a href="#${id}">${label}</a>`).join('');

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
    themeBtn.setAttribute('aria-label', t === 'dark' ? 'Ganti ke tema terang' : 'Ganti ke tema gelap');
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
  $('#hero-role').textContent = d.site.role;
  $('#tagline').textContent = d.site.tagline;
  $('#initials').textContent = initials;
  $('#about-initials').textContent = initials;

  const statusBadge = $('#status-badge');
  if (d.site.availableText || d.site.busyText) {
    $('#status-text').textContent = d.site.available ? d.site.availableText : d.site.busyText;
    statusBadge.hidden = false;
    if (!d.site.available) $('.dot', statusBadge).style.background = 'var(--fuchsia)';
  }

  $('#meta-location').innerHTML = `${ICON.pin}${esc(d.site.location)}`;
  if (d.site.timezone) $('#meta-timezone').innerHTML = `${ICON.clock}${esc(d.site.timezone)}`;
  $('#meta-projects').innerHTML = `${ICON.spark}${d.projects.length} proyek terpilih`;

  if (d.site.cv) {
    const cv = $('#cv-link');
    cv.href = d.site.cv;
    cv.hidden = false;
  }

  // Foto profil (hero + kartu tentang)
  if (d.site.profilePhoto) {
    const alt = `Foto ${d.site.name}`;
    $('#portrait-frame').innerHTML = `<img src="${esc(d.site.profilePhoto)}" alt="${esc(alt)}" width="800" height="1000" fetchpriority="high">`;
    $('#about-photo').innerHTML = `<img src="${esc(d.site.profilePhoto)}" alt="${esc(alt)}" width="600" height="600" loading="lazy">`;
    if (d.site.photoCutout) {
      $('#portrait').classList.add('cutout');
      $('#about-photo').classList.add('cutout');
    }
  }

  if (d.highlight) {
    $('#chip-value').textContent = d.highlight.value;
    $('#chip-label').innerHTML = esc(d.highlight.label).replace(/\n/g, '<br>');
    $('#portrait-chip').hidden = false;
  }

  // Marquee: daftar digandakan supaya animasinya menyambung (CSS menggeser -50%)
  if (d.marquee?.length) {
    const items = d.marquee.map((t) => `<span>${esc(t)}</span>`).join('');
    $('#marquee').innerHTML = items + items;
  }

  /* ---------------- Tentang ---------------- */
  $('#about-text').textContent = d.about;
  $('#about-points').innerHTML = (d.aboutPoints || []).map((p) => `<li>${esc(p)}</li>`).join('');
  $('#about-tags').innerHTML = Object.keys(d.skills || {}).map((k) => `<span class="tag">${esc(k)}</span>`).join('');

  /* Panel kartu "About me" - urutan sesuai referensi:
     Contact, Education, Technical skill, Soft skill, Skill set, Interest, Language. */
  const rows = (list) => list.map(([label, value, when, href]) => `
    <div class="row">
      <b>${esc(label)}</b>
      <span>${href ? `<a href="${esc(href)}"${href.startsWith('http') ? ' target="_blank" rel="noopener"' : ''}>${esc(value)}</a>` : esc(value)}</span>
      ${when ? `<span class="when">${esc(when)}</span>` : ''}
    </div>`).join('');

  const tagList = (items) => `<div class="tags">${(items || []).map((t) => `<span class="tag">${esc(t)}</span>`).join('')}</div>`;

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

  const softBars = (d.softSkills || []).map((sk) => `
    <div class="bar">
      <div class="bar-top"><span>${esc(sk.name)}</span><span>${+sk.level}%</span></div>
      <div class="bar-track" role="img" aria-label="${esc(sk.name)}: ${+sk.level} dari 100">
        <div class="bar-fill" data-level="${+sk.level}"></div>
      </div>
    </div>`).join('');

  $('#about-panels').innerHTML = [
    panel('Contact', 'Jalur langsung', rows([
      ['Email', d.site.email, '', `mailto:${d.site.email}`],
      ['WhatsApp', `+${d.site.whatsapp}`, '', `https://wa.me/${d.site.whatsapp}`],
      ...(d.site.linkedin ? [['LinkedIn', 'Profil', '', d.site.linkedin]] : []),
      ['Lokasi', d.site.location, d.site.timezone || '']
    ])),
    panel('Education', 'Pendidikan', rows((d.education || []).map((e) => [e.place, e.position, e.period]))),
    panel('Technical skill', 'Tools', `<div class="tool-grid">${toolTiles}</div>`),
    panel('Soft skill', 'Kolaborasi', softBars),
    panel('Skill set', `${(d.skillSet || []).length} item`, tagList(d.skillSet)),
    panel('Interest', 'Minat', tagList(d.interests)),
    panel('Language', 'Bahasa', rows((d.languages || []).map((l) => [l.name, l.level || ''])))
  ].join('');

  $('#stats').innerHTML = d.stats.map((s) => `
    <div class="stat reveal">
      <b data-value="${+s.value}" data-suffix="${esc(s.suffix || '')}">0${esc(s.suffix || '')}</b>
      <span>${esc(s.label)}</span>
    </div>`).join('');

  /* ---------------- Keahlian ---------------- */
  $('#skills-grid').innerHTML = Object.entries(d.skills).map(([group, items]) => `
    <div class="panel">
      <h3>${esc(group)} <span class="chip">${items.length} item</span></h3>
      <div class="tags">${items.map((i) => `<span class="tag">${esc(i)}</span>`).join('')}</div>
    </div>`).join('');

  /* ---------------- Proyek ---------------- */
  // Mock UI dipakai sebagai pengganti screenshot agar kartu tidak kosong.
  const mock = () => `
    <div class="mock" aria-hidden="true">
      <div class="mock-bar"><i></i><i></i><i></i><em>preview</em></div>
      <div class="mock-body">
        <div class="mock-side"></div>
        <div class="mock-main">
          <div class="mock-kpis"><i></i><i></i><i></i></div>
          <div class="mock-chart">${'<i style="height:__%"></i>'.repeat(7)}</div>
        </div>
      </div>
    </div>`.replace(/__/g, () => 30 + Math.round(Math.random() * 65));

  const shot = (p) => p.screenshot
    ? `<img src="${esc(p.screenshot)}" alt="Tampilan proyek ${esc(p.title)}" width="1200" height="750" loading="lazy" decoding="async">`
    : mock();

  $('#project-grid').innerHTML = d.projects.map((p, i) => `
    <article class="project reveal${p.featured ? ' is-feature' : ''}" data-index="${i}" data-category="${esc(p.category)}"
             tabindex="0" role="button" aria-label="Lihat detail proyek ${esc(p.title)}">
      <div class="shot">${shot(p)}</div>
      <div class="project-body">
        <div class="project-top">
          <h3>${esc(p.title)}</h3>
          <span class="pill">${esc(p.category)}</span>
        </div>
        <p>${esc(p.description)}</p>
        ${p.metrics?.length ? `<div class="metrics">${p.metrics.map((m) => `<div><b>${esc(m.value)}</b>${esc(m.label)}</div>`).join('')}</div>` : ''}
        <div class="tags">${p.tech.map((t) => `<span class="tag">${esc(t)}</span>`).join('')}</div>
        <div class="project-foot">
          <span class="link-btn">Detail ${ICON.arrow}</span>
          ${p.demo ? `<a class="link-btn" href="${esc(p.demo)}" target="_blank" rel="noopener" data-stop>Demo</a>` : ''}
          ${p.repo ? `<a class="link-btn" href="${esc(p.repo)}" target="_blank" rel="noopener" data-stop>GitHub</a>` : ''}
        </div>
      </div>
    </article>`).join('');

  /* Filter kategori */
  const ALL = 'Semua';
  const cats = [ALL, ...new Set(d.projects.map((p) => p.category))];
  $('#filters').innerHTML = cats.map((c) => `<button type="button" class="filter" aria-pressed="${c === ALL}" data-filter="${esc(c)}">${esc(c)}</button>`).join('');

  function applyFilter(value, updateHash = true) {
    const v = cats.includes(value) ? value : ALL;
    $$('#filters .filter').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.filter === v)));
    $$('.project').forEach((card) => { card.hidden = v !== ALL && card.dataset.category !== v; });
    $('#empty').hidden = $$('.project:not([hidden])').length > 0;
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
    applyFilter(decodeURIComponent(location.hash.split('kategori=')[1] || ''), false);
  }

  /* Dialog detail proyek */
  const sheet = $('#project-sheet');
  const openSheet = (i) => {
    const p = d.projects[i];
    if (!p) return;
    $('#sheet-category').textContent = [p.category, p.year, p.role].filter(Boolean).join(' · ');
    $('#sheet-title').textContent = p.title;
    $('#sheet-body').innerHTML = `
      <p class="muted">${esc(p.description)}</p>
      ${p.features?.length ? `<div><h4>Fitur utama</h4><ul class="feature-list">${p.features.map((f) => `<li>${esc(f)}</li>`).join('')}</ul></div>` : ''}
      ${p.metrics?.length ? `<div><h4>Hasil</h4><div class="metrics">${p.metrics.map((m) => `<div><b>${esc(m.value)}</b>${esc(m.label)}</div>`).join('')}</div></div>` : ''}
      <div><h4>Teknologi</h4><div class="tags">${p.tech.map((t) => `<span class="tag">${esc(t)}</span>`).join('')}</div></div>
      <div class="actions" style="margin-top:.2rem">
        ${p.demo ? `<a class="button" href="${esc(p.demo)}" target="_blank" rel="noopener">${ICON.link}Buka demo</a>` : ''}
        ${p.repo ? `<a class="button alt" href="${esc(p.repo)}" target="_blank" rel="noopener">Lihat kode</a>` : ''}
      </div>`;
    if (typeof sheet.showModal === 'function') sheet.showModal(); else sheet.setAttribute('open', '');
    $('#sheet-close').focus();
  };

  const grid = $('#project-grid');
  grid.addEventListener('click', (e) => {
    if (e.target.closest('[data-stop]')) return;      // biarkan tautan demo/GitHub bekerja
    const card = e.target.closest('.project');
    if (card) openSheet(+card.dataset.index);
  });
  grid.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const card = e.target.closest('.project');
    if (!card || e.target.closest('[data-stop]')) return;
    e.preventDefault();
    openSheet(+card.dataset.index);
  });
  $('#sheet-close').addEventListener('click', () => sheet.close());
  sheet.addEventListener('click', (e) => { if (e.target === sheet) sheet.close(); });

  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });

  /* ---------------- Perjalanan ---------------- */
  const timeline = (items) => items.map((x) => `
    <div class="tl-item">
      <h3>${esc(x.position)}</h3>
      <p class="where">${esc(x.place)}</p>
      <p class="when">${esc(x.period)}</p>
      <ul>${(x.points || []).map((p) => `<li>${esc(p)}</li>`).join('')}</ul>
    </div>`).join('');

  $('#experience').innerHTML = timeline(d.experience || []);
  $('#education').innerHTML = timeline(d.education || []);

  /* ---------------- Sertifikat ---------------- */
  if (d.certificates?.length) {
    $('#cert-grid').innerHTML = d.certificates.map((c) => {
      const inner = `<i aria-hidden="true">${ICON.award}</i><span><b>${esc(c.name)}</b><small>${esc(c.issuer)} · ${esc(c.year)}</small></span>`;
      return c.url
        ? `<a class="cert" href="${esc(c.url)}" target="_blank" rel="noopener">${inner}</a>`
        : `<article class="cert">${inner}</article>`;
    }).join('');
  } else {
    $('#certificates').hidden = true;
  }

  /* ---------------- Kontak ---------------- */
  $('#email-link').href = `mailto:${d.site.email}`;
  $('#wa-link').href = `https://wa.me/${d.site.whatsapp}`;

  const contactRows = [
    [ICON.mail, 'Email', d.site.email, `mailto:${d.site.email}`],
    [ICON.chat, 'WhatsApp', `+${d.site.whatsapp}`, `https://wa.me/${d.site.whatsapp}`],
    [ICON.link, 'LinkedIn', 'Profil profesional', d.site.linkedin],
    [ICON.link, 'GitHub', 'Repositori & kode', d.site.github]
  ].filter((r) => r[3]);

  $('#contact-list').innerHTML = contactRows.map(([icon, label, value, href]) => `
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
      formError.textContent = 'Mohon isi nama, email yang valid, dan pesan minimal 10 karakter.';
      form.reportValidity();
      return;
    }

    const payload = Object.fromEntries(new FormData(form));

    // Tanpa endpoint: buka email client.
    if (!d.site.formEndpoint) {
      const body = `${payload.name}\n${payload.email}\n\n${payload.message}`;
      formError.textContent = 'Membuka aplikasi email Anda…';
      formError.classList.add('ok');
      location.href = `mailto:${d.site.email}?subject=${encodeURIComponent('Pesan dari website')}&body=${encodeURIComponent(body)}`;
      return;
    }

    // Dengan endpoint: POST JSON.
    submitBtn.disabled = true;
    formError.textContent = 'Mengirim…';
    try {
      const res = await fetch(d.site.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      form.reset();
      formError.textContent = 'Terima kasih! Pesan Anda sudah terkirim.';
      formError.classList.add('ok');
    } catch (err) {
      formError.textContent = 'Gagal mengirim. Coba lagi atau hubungi saya lewat WhatsApp/email.';
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
