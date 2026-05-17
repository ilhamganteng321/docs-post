---
layout: doc
description: Aplikasi POS desktop modern berbasis Electron + Vite
hero:
  name: "Electron POS"
  text: "Point of Sale Modern"
---

# Electron POS

Aplikasi POS desktop modern berbasis **Electron + Vite** yang cepat, ringan, dan mudah dikembangkan.

<div style="display:flex; gap:10px; margin:20px 0;">
  <a class="VPButton medium brand" href="#instalasi">
    Mulai Instalasi
  </a>

  <a class="VPButton medium alt" href="https://github.com/ilhamganteng321/electron-pos">
    GitHub
  </a>
  <a class="VPButton medium alt" href="https://github.com/ilhamganteng321/electron-pos">
    Download
  </a>
</div>

## Persyaratan Minimum

### Environment Development

Pastikan sistem Anda memenuhi persyaratan berikut sebelum memulai.

::: info Node.js
Diperlukan **Node.js versi 20 ke atas**. Gunakan [nvm](https://github.com/nvm-sh/nvm) untuk mengelola versi Node.js.
:::

**Package Manager yang didukung:**

- `npm`
- `pnpm` _(direkomendasikan)_
- `yarn`
- `bun`

**Tools tambahan:**

- Terminal / Command Prompt
- [VS Code](https://code.visualstudio.com/) _(disarankan)_

---

### Persyaratan Sistem

| Komponen      | Minimum               | Rekomendasi            |
| ------------- | --------------------- | ---------------------- |
| **OS**        | Windows 10 / macOS 11 | Windows 11 / macOS 13+ |
| **RAM**       | 4 GB                  | 8 GB+                  |
| **Storage**   | 500 MB                | SSD 1 GB+              |
| **Processor** | Dual Core             | Quad Core              |
| **Browser**   | Chrome 100+           | Chrome terbaru         |
| **Internet**  | 2 Mbps                | 10 Mbps+               |

---

## Instalasi {#instalasi}

### 1. Clone Repository

```bash
git clone https://github.com/ilhamganteng321/electron-pos
cd electron-pos
```

### 2. Install Dependencies

Pilih package manager yang Anda gunakan:

::: code-group

```bash [npm]
npm install
```

```bash [pnpm]
pnpm install
```

```bash [yarn]
yarn install
```

```bash [bun]
bun install
```

:::

---

## Menjalankan Project

Jalankan development server dengan perintah berikut:

::: code-group

```bash [npm]
npm run dev
```

```bash [pnpm]
pnpm run dev
```

```bash [yarn]
yarn dev
```

:::

---

## Build Aplikasi Desktop

Untuk mengemas aplikasi menjadi installer Windows (`.exe`):

::: code-group

```bash [npm]
npm run build:win
```

```bash [pnpm]
pnpm run build:win
```

```bash [yarn]
yarn build:win
```

:::

### Hasil Build

Setelah proses build selesai, file installer tersedia di:

```text
dist/
```

atau

```text
out/
```

> Lokasi output tergantung pada konfigurasi `electron-builder` yang digunakan.

---

## Struktur Proyek

```text
electron-pos/
│
├── 📁 .vscode/                 # Konfigurasi VS Code
├── 📁 build/                   # Asset build tambahan
├── 📁 dist/                    # Hasil build frontend (Vite)
├── 📁 electron/                # Source proses utama Electron
│   ├── ipc/                    # Komunikasi IPC
│   └── db/                     # Akses database SQLite
│
├── 📁 node_modules/            # Dependencies
├── 📁 out/                     # Output aplikasi desktop (setelah packaging)
├── 📁 resources/               # Icon, font, dan asset tambahan
├── 📁 src/                     # Source frontend utama
│   ├── main/
│   ├── preload/
│   └── renderer/
│
├── app.db                      # Database SQLite lokal
├── electron.vite.config.mjs    # Konfigurasi electron-vite
├── electron-builder.yml        # Konfigurasi packaging
├── package.json                # Dependency & scripts
└── README.md                   # Dokumentasi project
```

---

## Technology Stack

| Teknologi            | Fungsi                 |
| -------------------- | ---------------------- |
| **Electron**         | Desktop Framework      |
| **React**            | User Interface         |
| **Vite**             | Build Tool             |
| **SQLite**           | Local Database         |
| **Tailwind CSS**     | Styling                |
| **electron-builder** | Packaging & Distribusi |

---

## Fitur Utama

::: tip ✨ Fitur Unggulan

- 🖥️ **Desktop POS Modern** — tampilan bersih dan intuitif
- ⚡ **Performa Cepat** — ditenagai Vite + Electron
- 🧾 **Manajemen Transaksi** — catat dan kelola transaksi dengan mudah
- 📦 **Kelola Produk** — tambah, edit, dan hapus produk
- 📊 **Laporan Penjualan** — pantau performa penjualan
- 💾 **Backup Database SQLite** — data aman tersimpan lokal
- 🖨️ **Support Print Struk** — cetak struk langsung dari aplikasi
- 🌙 **Modern UI** — desain gelap yang nyaman di mata
  :::

---

## Tips Development

### Bersihkan Cache

Jika terjadi error pada dependency, coba bersihkan cache terlebih dahulu:

```bash
rm -rf node_modules
npm install
```

### Rebuild Native Modules

Jika module Electron bermasalah setelah update:

```bash
npm rebuild
```

---

## Troubleshooting

### Aplikasi Blank / White Screen

::: warning Solusi

1. Pastikan proses **build frontend** selesai tanpa error
2. Cek output **console Electron** untuk pesan error
3. **Restart** development server
   :::

### Database Tidak Terdeteksi

::: danger Periksa file berikut
Pastikan file `app.db` tersedia di root direktori project:

```text
electron-pos/
└── app.db   ✅ harus ada
```

:::

### Build Gagal

::: warning Solusi
Jalankan ulang instalasi dan build:

```bash
npm install
npm run build
```

:::

---

## Lisensi

**MIT License** © 2026

---

::: info ❤️ Support
Jika project ini membantu, berikan **⭐ star** di [repository GitHub](https://github.com/ilhamganteng321/electron-pos) — sangat berarti untuk pengembangan lebih lanjut!
:::
