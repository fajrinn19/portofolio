/* =========================================================
   SUMBER KONTEN SITUS
   Semua teks, tautan, dan data ada di file ini.
   Ganti setiap nilai bertanda `TODO: ganti`.
   ========================================================= */

const portfolioData = {
  /* ---------- Identitas & tautan ---------- */
  site: {
    name: '[ISI] Nama Tampil',           // TODO: ganti
    role: '[ISI] Role',                  // TODO: ganti
    tagline: '[ISI] Satu kalimat tentang apa yang Anda kerjakan.', // TODO: ganti
    location: '[ISI] Kota, Indonesia',    // TODO: ganti
    timezone: 'GMT+7',                   // TODO: ganti
    available: true,                     // true → badge "Tersedia untuk proyek baru"
    availableText: 'Tersedia untuk proyek baru',
    busyText: 'Sedang penuh sampai kuartal depan',

    email: '[ISI]@email.com',            // TODO: ganti
    whatsapp: '[ISI]',                   // TODO: ganti (format internasional, tanpa +, mis. 62812...)
    linkedin: '',                        // TODO: ganti - URL LinkedIn, kosongkan bila tidak ada
    github: 'https://github.com/fajrinn19',              // TODO: cek kembali
    instagram: '',                       // kosongkan bila tidak dipakai

    profilePhoto: 'assets/img/profile.webp', // foto cut-out (latar sudah dihapus)
    photoCutout: true,                   // true bila foto transparan (tampil tanpa frame kaca)
    cv: '',                              // mis. 'assets/cv.pdf' — kosong → tombol CV disembunyikan
    domain: '[ISI].vercel.app',          // TODO: ganti
    formEndpoint: ''                     // kosong → form memakai mailto. Isi untuk POST JSON (Formspree dsb.)
  },

  /* ---------- Kartu kecil di atas foto ---------- */
  highlight: { value: '5+', label: 'tahun membangun\nproduk web' }, // TODO: ganti

  /* ---------- Teks berjalan di bawah hero ---------- */
  marquee: ['Frontend', 'Backend', 'Design System', 'Aksesibilitas', 'Performa Web', 'UI Engineering'], // TODO: ganti

  /* ---------- Tentang ---------- */
  about: 'Saya developer yang berfokus pada pengalaman web yang rapi, inklusif, dan berdampak. Saya senang menggabungkan engineering yang solid dengan desain produk yang empatik — dari riset kecil, prototipe, sampai rilis yang terukur.', // TODO: ganti
  aboutPoints: [                         // TODO: ganti
    'Terbiasa memimpin fitur dari brief sampai rilis.',
    'Menulis kode yang mudah dibaca dan diuji orang lain.',
    'Peduli pada performa, aksesibilitas, dan detail kecil.'
  ],

  stats: [                               // TODO: ganti
    { label: 'Tahun pengalaman', value: 5, suffix: '+' },
    { label: 'Proyek selesai', value: 24, suffix: '+' },
    { label: 'Teknologi dikuasai', value: 18, suffix: '+' },
    { label: 'Kepuasan klien', value: 98, suffix: '%' }
  ],

  /* ---------- Panel di kartu "About me" (sesuai referensi) ----------
     Urutan panel mengikuti referensi: Contact, Education, Technical skill,
     Soft skill, Skill set, Interest, Language.                              */

  // Technical skill — tile ikon aplikasi. `icon` memakai SVG inline bawaan
  // (daftar kunci ada di TOOL_ICONS pada app.js, memakai warna resmi tiap merek).
  // Tool tanpa ikon bawaan akan memakai `abbr`.
  tools: [
    { name: 'Figma', icon: 'figma' },
    { name: 'VS Code', icon: 'vscode' },
    { name: 'Lightroom', icon: 'lightroom' },
    { name: 'Word', icon: 'word' },
    { name: 'Excel', icon: 'excel' },
    { name: 'PowerPoint', icon: 'powerpoint' }
  ],

  softSkills: [                          // TODO: ganti (level 0-100)
    { name: 'Komunikasi', level: 90 },
    { name: 'Kerja sama tim', level: 88 },
    { name: 'Problem solving', level: 92 },
    { name: 'Manajemen waktu', level: 80 }
  ],

  skillSet: ['[ISI]'],                   // TODO: ganti - mis. 'UI Design', 'Data Entry'
  interests: ['[ISI]'],                  // TODO: ganti - mis. 'Fotografi', 'Kopi'
  languages: [                           // TODO: ganti
    { name: 'Bahasa Indonesia', level: 'Native' },
    { name: 'English', level: '[ISI]' }
  ],

  /* ---------- Keahlian teknis ---------- */
  skills: {                              // TODO: ganti
    Web: ['HTML & CSS', 'JavaScript', 'TypeScript', 'React', 'Node.js', 'REST API'],
    Mobile: ['React Native', 'Expo', 'Mobile UI'],
    'Data/IoT': ['Python', 'Data Visualization', 'MQTT'],
    Tools: ['Git & GitHub', 'Figma', 'Docker', 'Vercel']
  },

  /* ---------- Proyek ----------
     featured: true -> kartu melebar 2 kolom di layar besar
     metrics        -> HANYA angka nyata yang terukur. Biarkan [] bila belum ada.
                       Jangan pernah mengarang angka.
     features       -> poin yang tampil di dialog detail
     screenshot     -> kosong -> kartu memakai mock UI otomatis            */
  projects: [
    {
      title: 'Roasting',
      description: '[ISI] Deskripsi singkat aplikasi Roasting - masalah yang diselesaikan dan untuk siapa.',
      category: 'Web',                 // TODO: sesuaikan kategori
      year: '[ISI]',
      role: '[ISI]',
      featured: true,
      tech: ['[ISI]'],                   // TODO: stack teknologi aplikasi ini
      metrics: [],                       // Biarkan kosong sampai ada angka NYATA. Jangan dikarang.
      features: [
        '[ISI] Fitur utama 1.',
        '[ISI] Fitur utama 2.',
        '[ISI] Fitur utama 3.'
      ],
      demo: '',
      repo: '',
      screenshot: ''                     // mis. 'assets/img/roasting.webp' - kosong - pakai mock UI
    },
    {
      title: 'Inventaris Madaya Cafe Ops',
      description: '[ISI] Deskripsi singkat aplikasi Inventaris Madaya Cafe Ops - masalah yang diselesaikan dan untuk siapa.',
      category: 'Web',                 // TODO: sesuaikan kategori
      year: '[ISI]',
      role: '[ISI]',
      featured: false,
      tech: ['[ISI]'],                   // TODO: stack teknologi aplikasi ini
      metrics: [],                       // Biarkan kosong sampai ada angka NYATA. Jangan dikarang.
      features: [
        '[ISI] Fitur utama 1.',
        '[ISI] Fitur utama 2.',
        '[ISI] Fitur utama 3.'
      ],
      demo: '',
      repo: '',
      screenshot: ''                     // mis. 'assets/img/roasting.webp' - kosong - pakai mock UI
    },
    {
      title: 'Produksi',
      description: '[ISI] Deskripsi singkat aplikasi Produksi - masalah yang diselesaikan dan untuk siapa.',
      category: 'Web',                 // TODO: sesuaikan kategori
      year: '[ISI]',
      role: '[ISI]',
      featured: false,
      tech: ['[ISI]'],                   // TODO: stack teknologi aplikasi ini
      metrics: [],                       // Biarkan kosong sampai ada angka NYATA. Jangan dikarang.
      features: [
        '[ISI] Fitur utama 1.',
        '[ISI] Fitur utama 2.',
        '[ISI] Fitur utama 3.'
      ],
      demo: '',
      repo: '',
      screenshot: ''                     // mis. 'assets/img/roasting.webp' - kosong - pakai mock UI
    },
    {
      title: 'Kasir',
      description: '[ISI] Deskripsi singkat aplikasi Kasir - masalah yang diselesaikan dan untuk siapa.',
      category: 'Web',                 // TODO: sesuaikan kategori
      year: '[ISI]',
      role: '[ISI]',
      featured: false,
      tech: ['[ISI]'],                   // TODO: stack teknologi aplikasi ini
      metrics: [],                       // Biarkan kosong sampai ada angka NYATA. Jangan dikarang.
      features: [
        '[ISI] Fitur utama 1.',
        '[ISI] Fitur utama 2.',
        '[ISI] Fitur utama 3.'
      ],
      demo: '',
      repo: '',
      screenshot: ''                     // mis. 'assets/img/roasting.webp' - kosong - pakai mock UI
    },
    {
      title: 'Web Madaya Sinjai',
      description: '[ISI] Deskripsi singkat aplikasi Web Madaya Sinjai - masalah yang diselesaikan dan untuk siapa.',
      category: 'Web',                 // TODO: sesuaikan kategori
      year: '[ISI]',
      role: '[ISI]',
      featured: false,
      tech: ['[ISI]'],                   // TODO: stack teknologi aplikasi ini
      metrics: [],                       // Biarkan kosong sampai ada angka NYATA. Jangan dikarang.
      features: [
        '[ISI] Fitur utama 1.',
        '[ISI] Fitur utama 2.',
        '[ISI] Fitur utama 3.'
      ],
      demo: '',
      repo: '',
      screenshot: ''                     // mis. 'assets/img/roasting.webp' - kosong - pakai mock UI
    }
  ],

  /* ---------- Perjalanan ---------- */
  experience: [                          // TODO: ganti
    {
      position: 'Full-stack Developer',
      place: 'Studio Digital Nusantara',
      period: '2022 — Sekarang',
      points: [
        'Mengembangkan produk web end-to-end untuk berbagai kebutuhan bisnis.',
        'Meningkatkan performa halaman utama hingga 40%.'
      ]
    },
    {
      position: 'Frontend Developer',
      place: 'Karya Teknologi',
      period: '2020 — 2022',
      points: [
        'Membangun sistem desain dan komponen UI reusable.',
        'Berkolaborasi dengan designer dan product manager.'
      ]
    }
  ],

  education: [                           // TODO: ganti
    {
      position: 'S1 Teknik Informatika',
      place: 'Universitas Teknologi Bandung',
      period: '2016 — 2020',
      points: ['Fokus: Rekayasa Perangkat Lunak · IPK 3,72']
    }
  ],

  certificates: [                        // TODO: ganti (kosongkan array → bagian ini disembunyikan)
    { name: 'Professional Web Accessibility', issuer: 'W3C', year: '2024', url: 'https://www.w3.org/WAI/' },
    { name: 'JavaScript Algorithms and Data Structures', issuer: 'freeCodeCamp', year: '2023', url: 'https://www.freecodecamp.org/' }
  ]
};

if (typeof window !== 'undefined') window.portfolioData = portfolioData;
