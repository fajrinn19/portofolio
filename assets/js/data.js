// Semua konten situs ada di file ini. Ganti nilai bertanda TODO: ganti.
const portfolioData = {
  site: {
    name: 'Raka Pratama', // TODO: ganti
    role: 'Full-stack Developer', // TODO: ganti
    tagline: 'Membangun produk digital yang cepat, bermakna, dan mudah digunakan.', // TODO: ganti
    location: 'Bandung, Indonesia', // TODO: ganti
    email: 'raka.pratama@example.com', // TODO: ganti
    whatsapp: '6281234567890', // TODO: ganti
    linkedin: 'https://www.linkedin.com/in/rakapratama', // TODO: ganti
    github: 'https://github.com/rakapratama', // TODO: ganti
    instagram: '',
    profilePhoto: '',
    cv: '',
    domain: 'raka-pratama.vercel.app', // TODO: ganti
    formEndpoint: '' // TODO: ganti jika memakai endpoint POST JSON
  },
  about: 'Saya adalah developer yang berfokus pada pembuatan pengalaman web yang rapi, inklusif, dan berdampak. Saat ini saya mengeksplorasi cara menggabungkan engineering yang solid dengan desain produk yang empatik.', // TODO: ganti
  stats: [
    { label: 'Tahun pengalaman', value: 5, suffix: '+' },
    { label: 'Proyek selesai', value: 24, suffix: '+' },
    { label: 'Teknologi dikuasai', value: 18, suffix: '+' },
    { label: 'Kepuasan klien', value: 98, suffix: '%' }
  ],
  skills: {
    Web: ['HTML & CSS', 'JavaScript', 'React', 'Node.js', 'REST API'],
    Mobile: ['React Native', 'Expo', 'Mobile UI'],
    'Data/IoT': ['Python', 'Data Visualization', 'MQTT'],
    Tools: ['Git & GitHub', 'Figma', 'Docker', 'Vercel']
  },
  projects: [
    { title: 'RuangKarya', description: 'Platform kolaborasi untuk membantu tim kreatif mengatur brief, progres, dan umpan balik dalam satu ruang kerja.', category: 'Web', tech: ['JavaScript', 'Node.js', 'PostgreSQL'], demo: 'https://example.com', repo: 'https://github.com/rakapratama/ruangkarya', screenshot: '' },
    { title: 'SehatTerus', description: 'Dashboard pemantauan kebiasaan sehat yang mengubah data harian menjadi insight sederhana dan actionable.', category: 'Mobile', tech: ['React Native', 'Expo', 'Charts'], demo: '', repo: 'https://github.com/rakapratama/sehatterus', screenshot: '' },
    { title: 'IoT Greenhouse', description: 'Sistem monitoring suhu dan kelembapan greenhouse secara real-time untuk mendukung keputusan petani.', category: 'Data/IoT', tech: ['Python', 'MQTT', 'IoT'], demo: '', repo: 'https://github.com/rakapratama/iot-greenhouse', screenshot: '' }
  ],
  experience: [
    { position: 'Full-stack Developer', place: 'Studio Digital Nusantara', period: '2022 — Sekarang', points: ['Mengembangkan produk web end-to-end untuk berbagai kebutuhan bisnis.', 'Meningkatkan performa halaman utama hingga 40%.'] },
    { position: 'Frontend Developer', place: 'Karya Teknologi', period: '2020 — 2022', points: ['Membangun sistem desain dan komponen UI reusable.', 'Berkolaborasi dengan designer dan product manager.'] }
  ],
  education: [{ position: 'S1 Teknik Informatika', place: 'Universitas Teknologi Bandung', period: '2016 — 2020', points: ['Fokus: Rekayasa Perangkat Lunak · IPK 3,72'] }],
  certificates: [
    { name: 'Professional Web Accessibility', issuer: 'W3C', year: '2024', url: 'https://www.w3.org/WAI/' },
    { name: 'JavaScript Algorithms and Data Structures', issuer: 'freeCodeCamp', year: '2023', url: 'https://www.freecodecamp.org/' }
  ]
};
if (typeof window !== 'undefined') window.portfolioData = portfolioData; 
// TODO: ganti: seluruh data contoh di atas dengan data pribadi Anda.