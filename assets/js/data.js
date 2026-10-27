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
  /* ---------- Kartu kecil di atas foto ----------
     Diisi { value, label } untuk memunculkannya; null berarti tidak ditampilkan. */
  highlight: null,

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
    { label: 'Produk digital dibangun', value: 10, suffix: '' },
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

  /* ---------- Keahlian teknis ---------- */
  skills: {
    Web: ['Laravel', 'PHP', 'MySQL', 'Pengembangan website'],
    Mobile: ['Kotlin', 'Aplikasi Android'],
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
      tech: ['Kotlin', 'Android'],
      metrics: [],
      features: [
        'Pencatatan profil dan parameter setiap batch sangrai.',
        'Pemantauan jalannya proses roasting.',
        'Riwayat batch sebagai acuan konsistensi rasa.'
      ],
      demo: '',
      repo: '',
      screenshot: ''
    },
    {
      title: 'SCA Cupping',
      description: 'Aplikasi penilaian cita rasa kopi mengikuti protokol SCA: 10 atribut, skala 100 poin, lengkap dengan timer tahapan dan roda rasa.',
      category: 'Aplikasi Kopi',
      year: '[ISI]',
      role: 'Developer',
      featured: false,
      tech: ['Kotlin', 'Android'],
      // Angka di bawah adalah spesifikasi protokol yang tertera di aplikasi, bukan klaim hasil.
      metrics: [
        { value: '10', label: 'atribut SCA' },
        { value: '100', label: 'skala poin' },
        { value: '73', label: 'deskriptor rasa' }
      ],
      features: [
        'Pendataan sampel: kode, petani, asal, varietas, proses, ketinggian, dan tanggal panen.',
        'Penilaian 10 atribut dengan timer per tahap cupping dan penanda atribut yang belum dinilai.',
        'Roda Rasa SCA interaktif berisi 73 deskriptor, ditambah kategori lokal Sinjai.',
        'Skor otomatis dengan klasifikasi mutu, dari di bawah Specialty sampai Outstanding.',
        'Pengelolaan panelis untuk penilaian dan kalibrasi, plus berbagi ringkasan peringkat.'
      ],
      demo: '',
      repo: '',
      screenshot: ''                     // TODO: isi setelah gambar tersedia
    },
    {
      title: 'Defect Math',
      description: 'Aplikasi perhitungan dan klasifikasi cacat biji kopi secara otomatis.',
      category: 'Aplikasi Kopi',
      year: '[ISI]',
      role: 'Developer',
      featured: false,
      tech: ['Kotlin', 'Android'],
      metrics: [],
      features: [
        'Input temuan cacat per kategori.',
        'Perhitungan dan klasifikasi cacat secara otomatis.',
        'Ringkasan hasil sebagai dasar penilaian mutu biji.'
      ],
      demo: '',
      repo: '',
      screenshot: ''
    },
    {
      title: 'Inventaris Kawasan',
      description: 'Aplikasi inventaris kawasan untuk mendata aset per lokasi, memantau kondisinya, dan menjalankan stock opname.',
      category: 'Operasional',
      year: '[ISI]',
      role: 'Developer',
      featured: false,
      tech: ['Kotlin', 'Android'],
      metrics: [],
      features: [
        'Dasbor nilai aset dengan rincian jumlah unit, jenis barang, dan tempat.',
        'Ringkasan kondisi seluruh unit: baik, perlu perbaikan, dan rusak.',
        'Grafik nilai aset dan jumlah unit per lokasi, dipisah karena rupiah dan jumlah barang bukan satuan yang sama.',
        'Daftar aset berkode dengan pencarian, serta rincian tempat, jumlah, kondisi, nilai perolehan, dan nilai buku.',
        'Modul opname untuk pemeriksaan stok berkala.'
      ],
      demo: '',
      repo: '',
      screenshot: ''                     // TODO: isi setelah gambar tersedia
    },
    {
      title: 'Madaya Cafe Ops',
      description: 'Aplikasi operasional cafe yang menyatukan kasir, katalog menu, pemantauan bahan, dan perhitungan margin dalam satu aplikasi.',
      category: 'Operasional',
      year: '[ISI]',
      role: 'Developer',
      featured: false,
      tech: ['Kotlin', 'Android'],
      metrics: [],
      features: [
        'Kasir dengan katalog menu berkategori, pencarian, dan pemindai kode.',
        'Tutup kasir per shift: ringkasan tunai, QRIS, dan transfer, lalu hitung fisik laci beserta selisihnya.',
        'Peringatan bahan menipis dengan kekurangan per satuan terhadap batas minimum.',
        'Perhitungan margin per menu memakai rumus HPP yang bisa diatur sendiri (bahan, waste, inflasi, layanan, operasional).',
        'Opname stok per lokasi dengan sesi berkode dan penghitungan selisih.'
      ],
      demo: '',
      repo: '',
      screenshot: ''                     // TODO: isi setelah gambar tersedia
    },
    {
      title: 'Monitoring Fermentasi ESP32',
      description: 'Sistem pemantauan suhu dan pH proses fermentasi kopi berbasis ESP32, terbaca real-time lewat perangkat Android.',
      category: 'IoT',
      year: '[ISI]',
      role: 'Developer IoT',
      featured: true,
      tech: ['Kotlin', 'Android', 'ESP32'],
      metrics: [],
      features: [
        'Pembacaan sensor suhu dan pH pada tangki fermentasi.',
        'Pengiriman data real-time dari ESP32 ke aplikasi Android.',
        'Pemantauan proses fermentasi tanpa harus berada di lokasi.'
      ],
      demo: '',
      repo: '',
      screenshot: ''
    },
    {
      title: 'Produksi',
      description: 'Aplikasi alur produksi kopi dari penerimaan ceri sampai green bean, lengkap dengan pencatatan lot, setoran petani, dan laporan rendemen.',
      category: 'Operasional',
      year: '[ISI]',
      role: 'Developer',
      featured: true,
      tech: ['Kotlin', 'Android'],
      metrics: [],
      features: [
        'Dasbor alur produksi per tahap: ceri, fermentasi, penjemuran, istirahat, hulling, dan green bean.',
        'Lot berkode dengan label yang bisa dipindai, pencatatan tiap tahap proses, dan penandaan kelas.',
        'Data petani beserta varietas, asal, dan luas lahan, terhubung ke setoran dan pembayaran.',
        'Laporan rendemen ceri ke green bean, riwayat lot, dan kinerja petani dengan rentang tanggal.',
        'Modul gudang untuk stok green bean, roast bean, blend, dan penjualan.'
      ],
      demo: '',
      repo: '',
      screenshot: 'assets/img/produksi.webp'
    },
    {
      title: 'Web Madaya Sinjai',
      description: 'Website kawasan pemberdayaan terpadu Madaya Sinjai: profil lima pilar, katalog kopi, cafe, serta pemesanan vila dan camping.',
      category: 'Website',
      year: '[ISI]',
      role: 'Web Developer',
      featured: true,
      tech: ['Laravel', 'PHP', 'MySQL'],
      metrics: [],
      features: [
        'Profil kawasan dan lima pilarnya: ekonomi, dakwah, kesehatan, pendidikan, dan sosial.',
        'Katalog kopi dengan keranjang belanja serta akun pengunjung untuk masuk dan mendaftar.',
        'Panduan Cara Menyeduh berisi empat resep lengkap dengan dosis, air, suhu, waktu, dan penghitung waktu berjalan.',
        'Halaman vila dan camping beserta ketersediaan unit, kapasitas, dan pengecekan status pesanan.',
        'Berita kawasan, halaman kontak, dan mode terang/gelap.'
      ],
      demo: 'https://madayasinjai.com',
      repo: '',
      screenshot: 'assets/img/web-madaya.webp'
    },
    {
      title: 'Rialau Project',
      description: 'Website untuk RialauProject, dikerjakan selama masa kontrak sebagai web dan app developer.',
      category: 'Website',
      year: '[ISI]',
      role: 'Web Developer',
      featured: false,
      tech: ['Laravel', 'PHP', 'MySQL'],
      metrics: [],
      features: [
        '[ISI] Fitur utama 1.',
        '[ISI] Fitur utama 2.',
        '[ISI] Fitur utama 3.'
      ],
      demo: 'https://rialauproject.com',
      repo: '',
      screenshot: ''
    },
    {
      title: 'Portal SMAN 14 Sinjai',
      description: 'Portal web untuk SMAN 14 Sinjai sebagai kanal informasi sekolah.',
      category: 'Website',
      year: '[ISI]',
      role: 'Web Developer',
      featured: false,
      tech: ['Laravel', 'PHP', 'MySQL'],
      metrics: [],
      features: [
        '[ISI] Fitur utama 1.',
        '[ISI] Fitur utama 2.',
        '[ISI] Fitur utama 3.'
      ],
      demo: 'https://portalsman14sinjai.com',
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
