/* =========================================================
   SUMBER KONTEN SITUS
   Semua teks, tautan, dan data ada di file ini.
   Ganti setiap nilai bertanda `TODO: ganti`.
   ========================================================= */

const portfolioData = {
  /* ---------- Identitas & tautan ---------- */
  site: {
    name: 'Al Fajrin Insani',
    role: 'Software Engineer',
    tagline: 'Membangun aplikasi web, mobile, dan sistem IoT untuk industri kopi dan pengelolaan data organisasi.',
    location: 'Gowa, Sulawesi Selatan',  // TODO: cek - domisili Borongloe, Bontomarannu, Kab. Gowa
    timezone: 'GMT+8',                   // WITA
    available: true,
    availableText: 'Terbuka untuk peluang baru',
    busyText: 'Sedang penuh sampai kuartal depan',

    email: 'alfajrininsani@gmail.com',
    whatsapp: '[ISI]',                   // TODO: nomor WhatsApp, format internasional tanpa + (mis. 62812...)
    linkedin: '',                        // TODO: URL LinkedIn, kosongkan bila belum ada
    github: 'https://github.com/fajrinn19', // TODO: cek kembali
    instagram: '',

    profilePhoto: 'assets/img/profile.webp', // foto cut-out (latar sudah dihapus)
    photoCutout: true,                   // true bila foto transparan (tampil tanpa frame kaca)
    cv: '',                              // mis. 'assets/cv.pdf' - kosong -> tombol CV disembunyikan
    domain: '[ISI].vercel.app',          // TODO: ganti setelah deploy
    formEndpoint: ''                     // kosong -> form memakai mailto. Isi untuk POST JSON
  },
  /* ---------- Kartu kecil di atas foto ---------- */
  highlight: { value: 'S1', label: 'Teknik Komputer\nUNM 2026' },

  /* ---------- Teks berjalan di bawah hero ---------- */
  marquee: ['Pengembangan Web', 'Aplikasi Mobile', 'Sistem IoT', 'Industri Kopi', 'Pengelolaan Data', 'IT Support'],

  /* ---------- Tentang ---------- */
  about: 'Saya lulusan Teknik Komputer Universitas Negeri Makassar yang memfokuskan pembelajaran pada pengembangan perangkat lunak dan sistem berbasis IoT, dengan penekanan pada penerapan langsung di dunia industri - khususnya sektor kopi dan pengelolaan data organisasi.',
  aboutPoints: [
    'Membangun aplikasi untuk proses produksi kopi: roasting, cupping SCA, dan klasifikasi cacat biji.',
    'Merancang sistem gudang dan inventory untuk stok, keluar-masuk barang, dan pelaporan persediaan.',
    'Mengintegrasikan perangkat keras IoT (ESP32) dengan aplikasi Android untuk pemantauan real-time.'
  ],

  // Angka di bawah dihitung dari pengalaman nyata, bukan perkiraan.
  stats: [
    { label: 'Produk digital dibangun', value: 8, suffix: '' },
    { label: 'Website dirilis', value: 3, suffix: '' },
    { label: 'Pengalaman kerja', value: 2, suffix: '' },
    { label: 'IPK', value: 3, suffix: ',00' }
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

  // TODO: sesuaikan angkanya - ini penilaian diri, bukan hasil pengukuran.
  softSkills: [
    { name: 'Komunikasi', level: 90 },
    { name: 'Kerja sama tim', level: 88 },
    { name: 'Problem solving', level: 92 },
    { name: 'Manajemen waktu', level: 80 }
  ],

  // Bidang yang saya minati dan siap saya kerjakan.
  skillSet: [
    'Software Engineer', 'Staf IT', 'Data Analyst', 'IT Support',
    'Manajemen Keuangan', 'Desain Grafis', 'Media Sosial',
    'Admin Operasional', 'Digital Marketing', 'Administrasi Perkantoran'
  ],

  interests: ['Industri kopi', 'Internet of Things', 'Web3 & Crypto', 'Desain grafis'],

  languages: [
    { name: 'Bahasa Indonesia', level: 'Native' },
    { name: 'English', level: '[ISI]' }  // TODO: isi tingkat kemampuan
  ],

  /* ---------- Keahlian teknis ----------
     TODO: tambahkan bahasa/framework spesifik yang Anda pakai
     (mis. PHP/Laravel, JavaScript, Flutter, MySQL) pada kelompok yang sesuai. */
  skills: {
    Web: ['Pengembangan website', 'Aplikasi web', '[ISI] framework/bahasa'],
    Mobile: ['Aplikasi Android', '[ISI] framework'],
    IoT: ['ESP32', 'Sensor suhu & pH', 'Monitoring real-time'],
    Data: ['Pengelolaan data organisasi', 'Pelaporan persediaan', 'Analisis kebutuhan sistem']
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
      description: 'Aplikasi pencatatan dan pemantauan proses sangrai kopi, dari profil roasting sampai riwayat setiap batch.',
      category: 'Aplikasi Kopi',
      year: '[ISI]',
      role: 'Developer',
      featured: true,
      tech: ['[ISI]'],                   // TODO: stack teknologi aplikasi ini
      metrics: [],
      features: [
        'Pencatatan profil dan parameter setiap batch sangrai.',
        'Pemantauan jalannya proses roasting.',
        'Riwayat batch sebagai acuan konsistensi rasa.'
      ],
      demo: '',
      repo: '',
      screenshot: ''                     // mis. 'assets/img/roasting.webp'
    },
    {
      title: 'Inventaris Madaya Cafe Ops',
      description: 'Sistem gudang dan inventory untuk mengelola stok, keluar-masuk barang, dan pelaporan persediaan di Madaya.',
      category: 'Operasional',
      year: '[ISI]',
      role: 'Developer',
      featured: false,
      tech: ['[ISI]'],
      metrics: [],
      features: [
        'Pengelolaan stok dan kartu persediaan.',
        'Pencatatan barang masuk dan keluar.',
        'Laporan persediaan untuk kebutuhan operasional.'
      ],
      demo: '',
      repo: '',
      screenshot: ''
    },
    {
      title: 'Produksi',
      description: '[ISI] Deskripsi singkat aplikasi Produksi - proses apa yang dicatat dan siapa penggunanya.',
      category: 'Operasional',
      year: '[ISI]',
      role: 'Developer',
      featured: false,
      tech: ['[ISI]'],
      metrics: [],
      features: [
        '[ISI] Fitur utama 1.',
        '[ISI] Fitur utama 2.',
        '[ISI] Fitur utama 3.'
      ],
      demo: '',
      repo: '',
      screenshot: ''
    },
    {
      title: 'Kasir',
      description: '[ISI] Deskripsi singkat aplikasi Kasir - transaksi apa yang ditangani dan di mana dipakai.',
      category: 'Operasional',
      year: '[ISI]',
      role: 'Developer',
      featured: false,
      tech: ['[ISI]'],
      metrics: [],
      features: [
        '[ISI] Fitur utama 1.',
        '[ISI] Fitur utama 2.',
        '[ISI] Fitur utama 3.'
      ],
      demo: '',
      repo: '',
      screenshot: ''
    },
    {
      title: 'Web Madaya Sinjai',
      description: 'Website untuk Madaya Sinjai sebagai kanal informasi dan profil usaha kopi mereka.',
      category: 'Website',
      year: '[ISI]',
      role: 'Web Developer',
      featured: false,
      tech: ['[ISI]'],
      metrics: [],
      features: [
        'Halaman profil dan informasi usaha.',
        '[ISI] Fitur utama lainnya.',
        '[ISI] Fitur utama lainnya.'
      ],
      demo: 'https://madayasinjai.com',
      repo: '',
      screenshot: ''
    }
  ],

  /* ---------- Perjalanan ---------- */
  experience: [
    {
      position: 'Staf IT',
      place: 'Madaya Sinjai · Part Time',
      period: 'Jul 2026 — Sep 2026',
      points: [
        'Mendukung kebutuhan teknologi informasi operasional harian.',
        '[ISI] Tambahkan 1-2 tanggung jawab atau hasil yang spesifik.'
      ]
    },
    {
      position: 'Web Developer & App Developer',
      place: 'RialauProject · Kontrak',
      period: 'Feb 2026 — Agu 2026',
      points: [
        'Mengembangkan website dan aplikasi sesuai kebutuhan proyek.',
        '[ISI] Tambahkan 1-2 tanggung jawab atau hasil yang spesifik.'
      ]
    }
  ],

  education: [
    {
      position: 'S1 Teknik Komputer',
      place: 'Universitas Negeri Makassar',
      period: '2022 — 2026',
      points: [
        'IPK 3,00 · Lulus 29 Juli 2026',
        'Fokus: pengembangan perangkat lunak dan sistem berbasis IoT.'
      ]
    }
  ],

  // Riwayat pelatihan.
  certificates: [
    { name: 'WEB3 — Edukasi Web3 & Crypto', issuer: 'IDNFT', year: 'Jun 2025', url: '' },
    { name: 'Basic Barista', issuer: 'Kampus Kopi Sinjai', year: 'Agu 2025', url: '' }
  ]
};

if (typeof window !== 'undefined') window.portfolioData = portfolioData;
