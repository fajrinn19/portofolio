# Portofolio pribadi

Situs statis HTML, CSS, dan JavaScript vanilla tanpa npm/build step. Jalankan lewat server statis apa pun (kartu lanyard 3D memakai ES module sehingga `file://` tidak cukup), atau deploy folder ini ke Vercel sebagai **Other / No Framework** dengan output directory root.

## Mengganti konten
Semua konten berada di `assets/js/data.js`. Ganti setiap field bertanda `[ISI]` atau `// TODO: ganti`.

Struktur data:
- `site` — identitas, kontak, domain, foto, CV, endpoint form.
- `highlight`, `marquee` — kartu kecil di foto dan teks berjalan di hero.
- `about`, `aboutPoints`, `stats` — kartu "About me".
- `tools`, `softSkills`, `skillSet`, `interests`, `languages` — tujuh panel di kartu "About me"
  (Contact, Education, Technical skill, Soft skill, Skill set, Interest, Language).
- `skills` — keahlian teknis per kelompok.
- `projects` — kartu proyek + isi dialog detail.
- `experience`, `education`, `certificates` — bagian perjalanan dan sertifikat.

**Angka pada `metrics` proyek harus angka nyata.** Biarkan `metrics: []` selama belum ada data
terukur; kartu dan dialog akan menyembunyikan baris itu sendiri.

Foto profil: taruh di `assets/img/` lalu isi `profilePhoto`. Bila fotonya sudah tanpa latar
(transparan), set `photoCutout: true` agar tampil bebas tanpa frame kaca. CV: taruh PDF di
`assets/cv.pdf`, isi `cv`; bila kosong, tombol CV otomatis disembunyikan.

Ikon tool: `tools[].icon` memakai SVG inline bawaan dengan warna resmi tiap merek
(`figma`, `vscode`, `lightroom`, `word`, `excel`, `powerpoint`). Daftarnya ada di `TOOL_ICONS`
pada `assets/js/app.js`. Tool lain memakai `abbr` sebagai teks.

## Deploy
**GitHub:** buat repository, push seluruh folder, buka Vercel → Add New Project → pilih repository → Framework Preset Other/No Framework → Output Directory `.` → Deploy.

**CLI:** instal Vercel CLI, jalankan `vercel login`, masuk ke folder proyek, lalu `vercel --prod`. Tidak perlu `npm install` atau build.

**Domain kustom:** Vercel Project → Settings → Domains → Add domain, ikuti instruksi DNS. Setelah aktif, ubah domain di satu tempat: `assets/js/data.js` pada `site.domain`; sesuaikan juga nilai SEO statis di `index.html`, `robots.txt`, dan `sitemap.xml` bila ingin URL produksi baru.

## Form endpoint
Default form membuka `mailto:`. Untuk POST JSON, isi `site.formEndpoint` di `data.js` dengan endpoint Formspree atau Vercel Function. Endpoint harus menerima JSON dengan `name`, `email`, dan `message`.

## Checklist
- [x] Mobile-first, responsive, tanpa dependensi/build step.
- [x] Tema dark/light tersimpan dan anti-flash inline.
- [x] Skip link, focus-visible, keyboard menu + Escape, ARIA form/theme.
- [x] Filter proyek memakai hash dan empty state.
- [x] Reveal on scroll + sapuan cadangan + `prefers-reduced-motion`.
- [x] Kartu proyek bisa dibuka lewat klik maupun keyboard, detail memakai `<dialog>`.
- [x] SEO: title/description, canonical, OG + Twitter, JSON-LD Person, favicon, sitemap, robots.
- [x] Gambar punya alt, dimensi, dan lazy loading.
- [x] Font Google dimuat non-blocking (preconnect + `display=swap`), bukan `@import`.
- [x] Gaya cetak: latar dekoratif dimatikan agar halaman tetap terbaca.
- [x] Diverifikasi di Chromium: tema gelap/terang, 1440px dan 390px, tanpa error konsol.
- [ ] Ganti seluruh `[ISI]` dan domain contoh sebelum deploy.

## Kartu lanyard 3D (bagian "Tentang saya")
Kartu identitas yang menggantung adalah port vanilla dari komponen React Bits `<Lanyard />`
(`assets/js/lanyard.js`), karena situs ini tanpa React dan tanpa build step. Dimuat sebagai ES
module dari `index.html`; browser tanpa module/WebGL akan mengabaikannya tanpa error.

three.js dipaketkan lokal di `assets/js/vendor/` (MIT, lihat `THREE-LICENSE.txt`) supaya tidak
ada permintaan ke CDN saat halaman dibuka. Ukurannya ~750 KB mentah, ~190 KB setelah gzip.

Gambar kartu dibuat dari foto profil: `card-front.png`, `card-back.png`, dan `lanyard-band.png`
di `assets/img/`. Ganti ketiganya bila identitas berubah.

Karena memakai ES module, halaman harus dibuka lewat HTTP — bukan `file://`. Untuk mencoba
lokal: `python3 -m http.server 8000` lalu buka `http://127.0.0.1:8000`.

## Galeri melengkung (bagian "Proyek")
Galeri tampilan aplikasi adalah port vanilla dari komponen React Bits `<CircularGallery />`
(`assets/js/circular-gallery.js`). Murni WebGL2, tanpa dependensi.

Gambar tiap kartu diambil dari `projects[].screenshot`. Selama field itu kosong, kartu memakai
penanda bergaya situs yang bertuliskan "Tangkapan layar belum tersedia" - bukan dashboard palsu.
Isi `screenshot` dengan path gambar asli (mis. `assets/img/roasting.webp`) dan kartu langsung
memakai gambar itu.

## Domain
Sebelum deploy, ganti `GANTI-DOMAIN.vercel.app` di `index.html`, `robots.txt`, `sitemap.xml`,
dan `site.domain` pada `assets/js/data.js`.

## Yang masih perlu diisi
Identitas, riwayat, dan pelatihan sudah terisi. Yang masih bertanda `[ISI]`:

- `site.whatsapp` dan `site.linkedin`, serta `site.domain` setelah deploy.
- Stack teknologi tiap proyek (`tech`).
- Deskripsi dan fitur aplikasi **Produksi** dan **Kasir**, tahun tiap proyek.
- Framework/bahasa spesifik pada `skills.Web` dan `skills.Mobile`.
- Tingkat kemampuan bahasa Inggris pada `languages`.
- Angka `softSkills` masih penilaian diri — sesuaikan bila perlu.

Foto profil sudah terpasang (`assets/img/profile.webp`, latar dihapus). CV belum ada; taruh di
`assets/cv.pdf` lalu isi `site.cv` agar tombol unduh muncul.
