# TryHackMe Write-up: Web Fundamentals

**Difficulty:** Easy
**Topic:** Web Exploitation / Web Basics
**Room Link:** https://tryhackme.com/room/webfundamentals

## Ringkasan
Room ini adalah pengenalan dasar tentang cara kerja web — bagaimana browser dan server saling berkomunikasi lewat protokol HTTP.

## Apa yang dipelajari
- **HTTP Request & Response** — cara browser mengirim permintaan ke server dan bagaimana server merespons
- **HTTP Methods/Verbs** — seperti GET (mengambil data), POST (mengirim/membuat data), DELETE, PUT, dll
- **HTTP Status Code** — misalnya 200 (OK), 401 (butuh autentikasi), 404 (tidak ditemukan)
- **Web Server** — memahami bahwa web server umumnya berjalan di port 80 (HTTP) atau 443 (HTTPS)
- **Cookies** — cara server menyimpan informasi sesi di sisi browser
- **DNS** — proses penerjemahan nama domain (URL) menjadi alamat IP
- Praktik langsung mengirim request (GET/POST) ke web server menggunakan browser/cURL untuk menyelesaikan mini CTF di akhir room

## Insight
Room ini jadi fondasi penting sebelum masuk ke exploitasi web yang lebih dalam (seperti SQL Injection atau XSS), karena memahami cara kerja HTTP adalah dasar dari hampir semua serangan berbasis web.

## Status
✅ Selesai
