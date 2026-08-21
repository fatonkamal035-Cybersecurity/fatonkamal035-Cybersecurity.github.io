/* ============================================================
   PROFILE.js — satu file ini isi semua data pribadi/konten.
   Edit di sini untuk update nama, bio, link, skill, tools, dst.
   Semua halaman otomatis ambil data dari sini lewat script.js
   ============================================================ */

const PROFILE = {
  name: "Fathon Kamal",
  alias: "fatonkamal035",
  role: { id: "Cybersecurity Enthusiast", en: "Cybersecurity Enthusiast" },
  tagline: {
    id: "Belajar ethical hacking dari nol — satu langkah pasti setiap minggu.",
    en: "Learning ethical hacking from scratch — one deliberate step every week."
  },
  focus: ["Penetration Testing", "Network Security", "CTF", "Linux"],
  location: { id: "[LOKASI BELUM DIISI]", en: "[LOCATION NOT SET]" },
  status: "ONLINE",

  bio: {
    id: [
      "Saya masih di tahap awal perjalanan cybersecurity — belajar dari nol lewat roadmap terstruktur, mulai dari dasar jaringan, Linux, sampai tools penetration testing dasar.",
      "Fokus saat ini: memahami fundamental jaringan dan sistem Linux dengan benar sebelum lompat ke tools yang lebih kompleks. Saya latihan langsung di Kali Linux dan menyelesaikan room-room di TryHackMe sambil mendokumentasikan setiap progres di sini.",
      "Tujuannya sederhana: konsisten belajar setiap minggu, dan suatu saat bisa berkontribusi nyata di bidang cybersecurity dan ethical hacking."
    ],
    en: [
      "I'm still early in my cybersecurity journey — learning from zero through a structured roadmap, starting from networking fundamentals, Linux, up to basic penetration testing tools.",
      "Current focus: understanding networking and Linux fundamentals properly before jumping into more complex tools. I practice hands-on in Kali Linux and complete rooms on TryHackMe while documenting the progress here.",
      "The goal is simple: stay consistent week after week, and eventually make a real contribution in cybersecurity and ethical hacking."
    ]
  },

  links: {
    github: "https://github.com/fatonkamal035-Cybersecurity",
    youtube: "https://youtube.com/@gxsmacine_025?si=J67fFeJ-gTtg4mq9",
    tiktok: "https://www.tiktok.com/@fkrr_025?_r=1&_t=ZS-98RF6zHrfpx",
    instagram: "https://www.instagram.com/fkrr_035?igsh=MWtvOXd1YmMxM2FtYg==",
    email: "fathonkamal045@gmail.com",
    tryhackme: "https://tryhackme.com/p/fatonkamal035",
    hackthebox: "https://profile.hackthebox.com/profile/019f945a-256c-727d-b4b6-a1d0f106f0dd",
    discord: "https://discord.gg/juqz5Mrx",
    linkedin: "https://www.linkedin.com/in/fathon-r-97636842a"
  },

  dashboard: [
    { label: "NETWORK", value: "ONLINE", ok: true },
    { label: "SECURITY", value: "ACTIVE", ok: true },
    { label: "LEARNING", value: "ACTIVE", ok: true },
    { label: "CTF", value: "ACTIVE", ok: true },
    { label: "ROOMS", value: "7", ok: true },
    { label: "GITHUB", value: "ONLINE", ok: true }
  ],

  skillMatrix: {
    level: { id: "Foundational", en: "Foundational" },
    note: {
      id: "Level ini diambil langsung dari Skills Matrix TryHackMe — masih tahap awal di semua kategori, ditampilkan apa adanya.",
      en: "This level is taken directly from the TryHackMe Skills Matrix — still early stage across every category, shown as-is."
    },
    categories: [
      "Security Operations", "Red Teaming", "Incident Response",
      "Exploitation", "Malware Analysis", "Penetration Testing"
    ]
  },

  skills: [
    { name: { id: "Jaringan Dasar", en: "Networking Fundamentals" }, pct: 35, note: { id: "TCP/IP, subnetting, model OSI", en: "TCP/IP, subnetting, OSI model" } },
    { name: { id: "Linux & Kali Linux", en: "Linux & Kali Linux" }, pct: 45, note: { id: "Instalasi selesai, aktif latihan CLI", en: "Installation done, actively practicing the CLI" } },
    { name: { id: "Nmap", en: "Nmap" }, pct: 20, note: { id: "Sudah praktik Nmap Live Host Discovery", en: "Practiced Nmap Live Host Discovery" } },
    { name: { id: "Wireshark", en: "Wireshark" }, pct: 10, note: { id: "Baru kenal dasar analisis paket", en: "Just getting started with packet analysis" } },
    { name: { id: "Password Attacks (Hydra)", en: "Password Attacks (Hydra)" }, pct: 15, note: { id: "Selesai room Hydra di TryHackMe", en: "Completed the Hydra room on TryHackMe" } }
  ],

  tools: [
    { name: "Kali Linux", category: { id: "Sistem Operasi", en: "Operating System" }, desc: { id: "Distro utama untuk latihan dan eksplorasi tools security.", en: "Main distro for practicing and exploring security tools." }, url: "https://www.kali.org/" },
    { name: "Nmap", category: { id: "Jaringan", en: "Network" }, desc: { id: "Network scanning & host discovery.", en: "Network scanning & host discovery." }, url: "https://nmap.org/" },
    { name: "Wireshark", category: { id: "Jaringan", en: "Network" }, desc: { id: "Analisis paket & traffic jaringan.", en: "Packet & network traffic analysis." }, url: "https://www.wireshark.org/" },
    { name: "Hydra", category: { id: "Exploitation", en: "Exploitation" }, desc: { id: "Network logon cracker untuk latihan credential attack.", en: "Network logon cracker for credential attack practice." }, url: "https://github.com/vanhauser-thc/thc-hydra" },
    { name: "TryHackMe", category: { id: "Platform Latihan", en: "Practice Platform" }, desc: { id: "Platform utama latihan hands-on cybersecurity.", en: "Main hands-on cybersecurity practice platform." }, url: "https://tryhackme.com/p/fatonkamal035" },
    { name: "Hack The Box", category: { id: "Platform Latihan", en: "Practice Platform" }, desc: { id: "Platform latihan lanjutan, baru dimulai.", en: "Advanced practice platform, just getting started." }, url: "https://profile.hackthebox.com/profile/019f945a-256c-727d-b4b6-a1d0f106f0dd" }
  ],

  projects: [
    {
      name: { id: "Portofolio Website Ini", en: "This Portfolio Website" },
      category: { id: "Web / Personal Branding", en: "Web / Personal Branding" },
      desc: { id: "Website portofolio pribadi bertema cybersecurity, dibangun dengan HTML/CSS/JS murni dan di-hosting di GitHub Pages.", en: "Personal cybersecurity-themed portfolio site, built with vanilla HTML/CSS/JS and hosted on GitHub Pages." },
      status: { id: "Live", en: "Live" },
      github: "https://github.com/fatonkamal035-Cybersecurity"
    },
    {
      name: { id: "Project Berikutnya", en: "Next Project" },
      category: { id: "TBD", en: "TBD" },
      desc: { id: "Slot untuk project atau tool security berikutnya yang sedang direncanakan.", en: "Slot for the next security project or tool currently being planned." },
      status: { id: "Segera", en: "Coming Soon" },
      github: null
    }
  ],

  ctf: {
    tryhackme: {
      rank: "Top 50%",
      level: "2 · APPRENTICE",
      points: 448,
      streak: 4,
      badges: 3,
      roomsCompleted: 7,
      rooms: [
        { name: "Hydra", difficulty: "Easy" },
        { name: "Linux Fundamentals Part 1", difficulty: "Info" },
        { name: "Nmap Live Host Discovery", difficulty: "Medium" },
        { name: "Careers in Cyber", difficulty: "Info" },
        { name: "Search Skills", difficulty: "Easy" },
        { name: "Defensive Security Intro", difficulty: "Easy" },
        { name: "Offensive Security Intro", difficulty: "Easy" }
      ]
    },
    hackthebox: {
      note: { id: "Profil aktif — statistik lengkap menyusul setelah menyelesaikan lebih banyak challenge.", en: "Active profile — full stats coming soon after completing more challenges." }
    }
  },

  certifications: []
};

const I18N = {
  nav: {
    home: { id: "Home", en: "Home" },
    about: { id: "About", en: "About" },
    skills: { id: "Skills", en: "Skills" },
    tools: { id: "Tools", en: "Tools" },
    projects: { id: "Projects", en: "Projects" },
    ctf: { id: "CTF", en: "CTF" },
    certifications: { id: "Certifications", en: "Certifications" },
    contact: { id: "Contact", en: "Contact" }
  }
};
