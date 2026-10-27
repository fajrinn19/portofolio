# Portofolio pribadi

Situs statis HTML, CSS, dan JavaScript vanilla tanpa npm/build step. Buka `index.html` langsung dari `file://` atau deploy folder ini ke Vercel sebagai **Other / No Framework** dengan output directory root.

## Mengganti konten
Semua konten berada di `assets/js/data.js`. Ganti field yang bertanda `// TODO: ganti`, termasuk nama, kontak, domain, pengalaman, skill, dan proyek. Untuk foto, taruh file di `assets/img/` lalu isi `profilePhoto` dengan path seperti `assets/img/foto.webp`. Untuk CV, taruh PDF di `assets/cv.pdf` lalu isi `cv` dan sesuaikan tombol bila diperlukan.

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
- [x] IntersectionObserver + reduced motion.
- [x] SEO dasar, OG, sitemap, robots, Vercel headers.
- [x] Gambar proyek punya alt, dimensi, lazy loading.
- [ ] Gambar OG PNG 1200×630 perlu dibuat/ditambahkan sebelum deploy produksi.
- [ ] Ganti seluruh TODO dan domain contoh.

## Data contoh yang perlu diganti
Nama, peran, tagline, lokasi, email, WhatsApp, LinkedIn, GitHub, domain, deskripsi tentang, statistik, seluruh skill, seluruh proyek (termasuk URL), pengalaman, pendidikan, dan sertifikat. `formEndpoint` opsional. Foto profil dan CV saat ini belum tersedia.
