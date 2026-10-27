/* =========================================================
   SUMBER KONTEN SITUS
   Semua teks, tautan, dan data ada di file ini.
   Ganti setiap nilai bertanda `TODO: ganti` atau `[ISI]`.

   Teks dwibahasa ditulis t('Indonesia', 'English').
   Kalau hanya ditulis sebagai string biasa, teks itu dipakai
   untuk kedua bahasa (cocok untuk nama, kode, dan angka).
   ========================================================= */

const t = (id, en) => ({ id, en });

const portfolioData = {
  /* ---------- Identitas & tautan ---------- */
  site: {
    name: 'Al Fajrin Insani',
    role: t('Software Engineer', 'Software Engineer'),
    tagline: t(
      'Membangun aplikasi web, mobile, dan sistem IoT untuk industri kopi dan pengelolaan data organisasi.',
      'Building web apps, mobile apps and IoT systems for the coffee industry and organisational data.'
    ),
    location: t('Gowa, Sulawesi Selatan', 'Gowa, South Sulawesi'), // TODO: cek
    timezone: 'GMT+8',                   // WITA
    available: true,
    availableText: t('Terbuka untuk peluang baru', 'Open to new opportunities'),
    busyText: t('Sedang penuh sampai kuartal depan', 'Fully booked until next quarter'),

    email: 'alfajrininsani@gmail.com',
    whatsapp: '[ISI]',                   // TODO: format internasional tanpa + (mis. 62812...)
    linkedin: '',                        // TODO: URL LinkedIn, kosongkan bila belum ada
    github: 'https://github.com/fajrinn19',
    instagram: '',

    profilePhoto: 'assets/img/profile.webp',
    photoCutout: true,
    cv: '',                              // mis. 'assets/cv.pdf' - kosong -> tombol CV disembunyikan
    domain: 'GANTI-DOMAIN.vercel.app',   // TODO: ganti setelah deploy
    formEndpoint: ''                     // kosong -> mailto. Isi untuk POST JSON
  },

  /* ---------- Kartu kecil di atas foto; null = tidak ditampilkan ---------- */
  highlight: null,

  /* ---------- Teks berjalan di bawah hero ---------- */
  marquee: [
    t('Pengembangan Web', 'Web Development'),
    t('Aplikasi Mobile', 'Mobile Apps'),
    t('Sistem IoT', 'IoT Systems'),
    t('Industri Kopi', 'Coffee Industry'),
    t('Pengelolaan Data', 'Data Management'),
    t('IT Support', 'IT Support')
  ],

  /* ---------- Tentang ---------- */
  about: t(
    'Saya lulusan Teknik Komputer Universitas Negeri Makassar yang memfokuskan pembelajaran pada pengembangan perangkat lunak dan sistem berbasis IoT, dengan penekanan pada penerapan langsung di dunia industri - khususnya sektor kopi dan pengelolaan data organisasi.',
    'I am a Computer Engineering graduate of Universitas Negeri Makassar, focused on software development and IoT-based systems with an emphasis on real industry use - particularly the coffee sector and organisational data management.'
  ),
  aboutPoints: [
    t('Membangun aplikasi untuk proses produksi kopi: roasting, cupping SCA, dan klasifikasi cacat biji.',
      'Built apps for coffee production: roasting, SCA cupping and bean defect classification.'),
    t('Merancang sistem gudang dan inventory untuk stok, keluar-masuk barang, dan pelaporan persediaan.',
      'Designed warehouse and inventory systems for stock, goods movement and inventory reporting.'),
    t('Mengintegrasikan perangkat keras IoT (ESP32) dengan aplikasi Android untuk pemantauan real-time.',
      'Integrated IoT hardware (ESP32) with an Android app for real-time monitoring.')
  ],

  // Angka di bawah dihitung dari pengalaman nyata, bukan perkiraan.
  stats: [
    { label: t('Produk digital dibangun', 'Digital products built'), value: 10, suffix: '' },
    { label: t('Website dirilis', 'Websites shipped'), value: 3, suffix: '' },
    { label: t('Pengalaman kerja', 'Work experience'), value: 2, suffix: '' },
    { label: t('IPK', 'GPA'), value: 3, suffix: ',00' }
  ],

  /* ---------- Panel kartu "About me" ---------- */
  // `icon` memakai SVG bawaan di TOOL_ICONS pada app.js (warna resmi tiap merek).
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
    { name: t('Komunikasi', 'Communication'), level: 90 },
    { name: t('Kerja sama tim', 'Teamwork'), level: 88 },
    { name: t('Problem solving', 'Problem solving'), level: 92 },
    { name: t('Manajemen waktu', 'Time management'), level: 80 }
  ],

  skillSet: [
    'Software Engineer',
    t('Staf IT', 'IT Staff'),
    'Data Analyst',
    'IT Support',
    t('Manajemen Keuangan', 'Finance Management'),
    t('Desain Grafis', 'Graphic Design'),
    t('Media Sosial', 'Social Media'),
    t('Admin Operasional', 'Operations Admin'),
    'Digital Marketing',
    t('Administrasi Perkantoran', 'Office Administration')
  ],

  interests: [
    t('Industri kopi', 'Coffee industry'),
    'Internet of Things',
    'Web3 & Crypto',
    t('Desain grafis', 'Graphic design')
  ],

  languages: [
    { name: t('Bahasa Indonesia', 'Indonesian'), level: t('Penutur asli', 'Native') },
    { name: t('Bahasa Inggris', 'English'), level: '[ISI]' }  // TODO: isi tingkat kemampuan
  ],

  /* ---------- Keahlian teknis ---------- */
  skills: {
    Web: { label: 'Web', items: ['Laravel', 'PHP', 'MySQL', t('Pengembangan website', 'Website development')] },
    Mobile: { label: 'Mobile', items: ['Kotlin', t('Aplikasi Android', 'Android apps')] },
    IoT: { label: 'IoT', items: ['ESP32', t('Sensor suhu & pH', 'Temperature & pH sensors'), t('Monitoring real-time', 'Real-time monitoring')] },
    Data: { label: 'Data', items: [t('Pengelolaan data organisasi', 'Organisational data management'), t('Pelaporan persediaan', 'Inventory reporting'), t('Analisis kebutuhan sistem', 'System requirements analysis')] }
  },

  /* ---------- Proyek ----------
     featured: true -> kartu melebar 2 kolom di layar besar
     metrics        -> HANYA angka nyata. Biarkan [] bila belum ada.
     screenshot     -> kosong -> kartu galeri memakai penanda            */
  projects: [
    {
      title: 'Roasting',
      description: t('Aplikasi pencatatan dan pemantauan proses sangrai kopi, dari profil roasting sampai riwayat setiap batch.',
                     'An app for recording and monitoring coffee roasting, from roast profiles to the history of every batch.'),
      category: t('Aplikasi Kopi', 'Coffee Apps'),
      year: '[ISI]',
      role: 'Developer',
      featured: true,
      tech: ['Kotlin', 'Android'],
      metrics: [],
      features: [
        t('Pencatatan profil dan parameter setiap batch sangrai.', 'Records the profile and parameters of every roast batch.'),
        t('Pemantauan jalannya proses roasting.', 'Monitors the roast as it runs.'),
        t('Riwayat batch sebagai acuan konsistensi rasa.', 'Batch history as a reference for flavour consistency.')
      ],
      demo: '', repo: '', screenshot: ''
    },
    {
      title: 'SCA Cupping',
      description: t('Aplikasi penilaian cita rasa kopi mengikuti protokol SCA: 10 atribut, skala 100 poin, lengkap dengan timer tahapan dan roda rasa.',
                     'A coffee tasting app following the SCA protocol: 10 attributes on a 100-point scale, with stage timers and a flavour wheel.'),
      category: t('Aplikasi Kopi', 'Coffee Apps'),
      year: '[ISI]',
      role: 'Developer',
      featured: false,
      tech: ['Kotlin', 'Android'],
      // Angka berikut adalah spesifikasi protokol yang tertera di aplikasi, bukan klaim hasil.
      metrics: [
        { value: '10', label: t('atribut SCA', 'SCA attributes') },
        { value: '100', label: t('skala poin', 'point scale') },
        { value: '73', label: t('deskriptor rasa', 'flavour descriptors') }
      ],
      features: [
        t('Pendataan sampel: kode, petani, asal, varietas, proses, ketinggian, dan tanggal panen.',
          'Sample records: code, farmer, origin, variety, process, altitude and harvest date.'),
        t('Penilaian 10 atribut dengan timer per tahap cupping dan penanda atribut yang belum dinilai.',
          'Scoring across 10 attributes with a timer per cupping stage and markers for unscored attributes.'),
        t('Roda Rasa SCA interaktif berisi 73 deskriptor, ditambah kategori lokal Sinjai.',
          'An interactive SCA flavour wheel with 73 descriptors, plus a local Sinjai category.'),
        t('Skor otomatis dengan klasifikasi mutu, dari di bawah Specialty sampai Outstanding.',
          'Automatic scoring with quality grades, from below Specialty through to Outstanding.'),
        t('Pengelolaan panelis untuk penilaian dan kalibrasi, plus berbagi ringkasan peringkat.',
          'Panellist management for scoring and calibration, plus sharing a ranked summary.')
      ],
      demo: '', repo: '', screenshot: ''
    },
    {
      title: 'Defect Math',
      description: t('Aplikasi perhitungan dan klasifikasi cacat biji kopi secara otomatis.',
                     'An app that counts and classifies coffee bean defects automatically.'),
      category: t('Aplikasi Kopi', 'Coffee Apps'),
      year: '[ISI]',
      role: 'Developer',
      featured: false,
      tech: ['Kotlin', 'Android'],
      metrics: [],
      features: [
        t('Input temuan cacat per kategori.', 'Enter defect findings by category.'),
        t('Perhitungan dan klasifikasi cacat secara otomatis.', 'Automatic defect counting and classification.'),
        t('Ringkasan hasil sebagai dasar penilaian mutu biji.', 'A result summary as the basis for grading the beans.')
      ],
      demo: '', repo: '', screenshot: ''
    },
    {
      title: t('Inventaris Kawasan', 'Area Inventory'),
      description: t('Aplikasi inventaris kawasan untuk mendata aset per lokasi, memantau kondisinya, dan menjalankan stock opname.',
                     'An area inventory app for recording assets per location, tracking their condition and running stock takes.'),
      category: t('Operasional', 'Operations'),
      year: '[ISI]',
      role: 'Developer',
      featured: false,
      tech: ['Kotlin', 'Android'],
      metrics: [],
      features: [
        t('Dasbor nilai aset dengan rincian jumlah unit, jenis barang, dan tempat.',
          'An asset value dashboard broken down by unit count, item type and location.'),
        t('Ringkasan kondisi seluruh unit: baik, perlu perbaikan, dan rusak.',
          'A condition summary across all units: good, needs repair and damaged.'),
        t('Grafik nilai aset dan jumlah unit per lokasi, dipisah karena rupiah dan jumlah barang bukan satuan yang sama.',
          'Separate charts for asset value and unit count per location, kept apart because currency and item counts are not the same unit.'),
        t('Daftar aset berkode dengan pencarian, serta rincian tempat, jumlah, kondisi, nilai perolehan, dan nilai buku.',
          'A searchable coded asset list with location, quantity, condition, acquisition value and book value.'),
        t('Modul opname untuk pemeriksaan stok berkala.', 'A stock-take module for periodic checks.')
      ],
      demo: '', repo: '', screenshot: ''
    },
    {
      title: 'Madaya Cafe Ops',
      description: t('Aplikasi operasional cafe yang menyatukan kasir, katalog menu, pemantauan bahan, dan perhitungan margin dalam satu aplikasi.',
                     'A cafe operations app bringing the till, menu catalogue, ingredient tracking and margin calculation into one place.'),
      category: t('Operasional', 'Operations'),
      year: '[ISI]',
      role: 'Developer',
      featured: false,
      tech: ['Kotlin', 'Android'],
      metrics: [],
      features: [
        t('Kasir dengan katalog menu berkategori, pencarian, dan pemindai kode.',
          'A till with a categorised menu catalogue, search and a code scanner.'),
        t('Tutup kasir per shift: ringkasan tunai, QRIS, dan transfer, lalu hitung fisik laci beserta selisihnya.',
          'Shift close-out: a cash, QRIS and transfer summary, then a physical drawer count with the variance.'),
        t('Peringatan bahan menipis dengan kekurangan per satuan terhadap batas minimum.',
          'Low-stock alerts showing the shortfall per unit against the minimum threshold.'),
        t('Perhitungan margin per menu memakai rumus HPP yang bisa diatur sendiri (bahan, waste, inflasi, layanan, operasional).',
          'Per-item margin using a configurable cost formula (ingredients, waste, inflation, service and overhead).'),
        t('Opname stok per lokasi dengan sesi berkode dan penghitungan selisih.',
          'Stock takes per location with coded sessions and variance calculation.')
      ],
      demo: '', repo: '', screenshot: ''
    },
    {
      title: t('Monitoring Fermentasi ESP32', 'ESP32 Fermentation Monitor'),
      description: t('Sistem pemantauan suhu dan pH proses fermentasi kopi berbasis ESP32, terbaca real-time lewat perangkat Android.',
                     'An ESP32-based system for monitoring temperature and pH during coffee fermentation, read in real time on Android.'),
      category: 'IoT',
      year: '[ISI]',
      role: t('Developer IoT', 'IoT Developer'),
      featured: true,
      tech: ['Kotlin', 'Android', 'ESP32'],
      metrics: [],
      features: [
        t('Pembacaan sensor suhu dan pH pada tangki fermentasi.', 'Temperature and pH sensor readings on the fermentation tank.'),
        t('Pengiriman data real-time dari ESP32 ke aplikasi Android.', 'Real-time data from the ESP32 to the Android app.'),
        t('Pemantauan proses fermentasi tanpa harus berada di lokasi.', 'Monitoring the fermentation without having to be on site.')
      ],
      demo: '', repo: '', screenshot: ''
    },
    {
      title: t('Produksi', 'Production'),
      description: t('Aplikasi alur produksi kopi dari penerimaan ceri sampai green bean, lengkap dengan pencatatan lot, setoran petani, dan laporan rendemen.',
                     'A coffee production app covering the flow from cherry intake to green bean, with lot records, farmer deliveries and yield reports.'),
      category: t('Operasional', 'Operations'),
      year: '[ISI]',
      role: 'Developer',
      featured: true,
      tech: ['Kotlin', 'Android'],
      metrics: [],
      features: [
        t('Dasbor alur produksi per tahap: ceri, fermentasi, penjemuran, istirahat, hulling, dan green bean.',
          'A production dashboard by stage: cherry, fermentation, drying, resting, hulling and green bean.'),
        t('Lot berkode dengan label yang bisa dipindai, pencatatan tiap tahap proses, dan penandaan kelas.',
          'Coded lots with scannable labels, per-stage process records and grade tagging.'),
        t('Data petani beserta varietas, asal, dan luas lahan, terhubung ke setoran dan pembayaran.',
          'Farmer records with variety, origin and plot size, linked to deliveries and payments.'),
        t('Laporan rendemen ceri ke green bean, riwayat lot, dan kinerja petani dengan rentang tanggal.',
          'Cherry-to-green-bean yield reports, lot history and farmer performance over a date range.'),
        t('Modul gudang untuk stok green bean, roast bean, blend, dan penjualan.',
          'A warehouse module for green bean, roast bean, blend and sales.')
      ],
      demo: '', repo: '', screenshot: 'assets/img/produksi.webp'
    },
    {
      title: 'Web Madaya Sinjai',
      description: t('Website kawasan pemberdayaan terpadu Madaya Sinjai: profil lima pilar, katalog kopi, cafe, serta pemesanan vila dan camping.',
                     'The website of the Madaya Sinjai integrated community area: its five pillars, a coffee catalogue, the cafe, and villa and camping bookings.'),
      category: 'Website',
      year: '[ISI]',
      role: 'Web Developer',
      featured: true,
      tech: ['Laravel', 'PHP', 'MySQL'],
      metrics: [],
      features: [
        t('Profil kawasan dan lima pilarnya: ekonomi, dakwah, kesehatan, pendidikan, dan sosial.',
          'The area profile and its five pillars: economy, outreach, health, education and social work.'),
        t('Katalog kopi dengan keranjang belanja serta akun pengunjung untuk masuk dan mendaftar.',
          'A coffee catalogue with a shopping cart and visitor accounts for signing in and registering.'),
        t('Panduan Cara Menyeduh berisi empat resep lengkap dengan dosis, air, suhu, waktu, dan penghitung waktu berjalan.',
          'A brewing guide with four recipes covering dose, water, temperature, time and a running timer.'),
        t('Halaman vila dan camping beserta ketersediaan unit, kapasitas, dan pengecekan status pesanan.',
          'Villa and camping pages with unit availability, capacity and order status lookup.'),
        t('Berita kawasan, halaman kontak, dan mode terang/gelap.', 'Area news, a contact page and a light/dark mode.')
      ],
      demo: 'https://madayasinjai.com', repo: '', screenshot: 'assets/img/web-madaya.webp'
    },
    {
      title: 'Rialau Project',
      description: t('Website untuk RialauProject, dikerjakan selama masa kontrak sebagai web dan app developer.',
                     'A website for RialauProject, built during a contract as web and app developer.'),
      category: 'Website',
      year: '[ISI]',
      role: 'Web Developer',
      featured: false,
      tech: ['Laravel', 'PHP', 'MySQL'],
      metrics: [],
      features: ['[ISI]', '[ISI]', '[ISI]'],
      demo: 'https://rialauproject.com', repo: '', screenshot: ''
    },
    {
      title: 'Portal SMAN 14 Sinjai',
      description: t('Portal web untuk SMAN 14 Sinjai sebagai kanal informasi sekolah.',
                     'A web portal for SMAN 14 Sinjai as the school information channel.'),
      category: 'Website',
      year: '[ISI]',
      role: 'Web Developer',
      featured: false,
      tech: ['Laravel', 'PHP', 'MySQL'],
      metrics: [],
      features: ['[ISI]', '[ISI]', '[ISI]'],
      demo: 'https://portalsman14sinjai.com', repo: '', screenshot: ''
    }
  ],

  /* ---------- Perjalanan ---------- */
  experience: [
    {
      position: t('Staf IT', 'IT Staff'),
      place: t('Madaya Sinjai · Paruh waktu', 'Madaya Sinjai · Part time'),
      period: t('Jul 2026 — Sep 2026', 'Jul 2026 — Sep 2026'),
      points: [
        t('Mendukung kebutuhan teknologi informasi operasional harian.', 'Supported day-to-day operational IT needs.'),
        '[ISI]'
      ]
    },
    {
      position: 'Web Developer & App Developer',
      place: t('RialauProject · Kontrak', 'RialauProject · Contract'),
      period: t('Feb 2026 — Agu 2026', 'Feb 2026 — Aug 2026'),
      points: [
        t('Mengembangkan website dan aplikasi sesuai kebutuhan proyek.', 'Built websites and apps to project requirements.'),
        '[ISI]'
      ]
    }
  ],

  education: [
    {
      position: t('S1 Teknik Komputer', 'BEng Computer Engineering'),
      place: t('Universitas Negeri Makassar', 'Universitas Negeri Makassar'),
      period: '2022 — 2026',
      points: [
        t('IPK 3,00 · Lulus 29 Juli 2026', 'GPA 3.00 · Graduated 29 July 2026'),
        t('Fokus: pengembangan perangkat lunak dan sistem berbasis IoT.', 'Focus: software development and IoT-based systems.')
      ]
    }
  ],

  // Riwayat pelatihan.
  certificates: [
    { name: t('WEB3 — Edukasi Web3 & Crypto', 'WEB3 — Web3 & Crypto education'), issuer: 'IDNFT', year: t('Jun 2025', 'Jun 2025'), url: '' },
    { name: 'Basic Barista', issuer: t('Kampus Kopi Sinjai', 'Kampus Kopi Sinjai'), year: t('Agu 2025', 'Aug 2025'), url: '' }
  ]
};

if (typeof window !== 'undefined') window.portfolioData = portfolioData;
