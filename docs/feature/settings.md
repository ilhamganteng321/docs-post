---
title: Settings
description: Manajemen database lengkap untuk backup, restore, export, optimasi, dan maintenance data aplikasi POS
outline: deep
---

# Settings

Modul Settings menyediakan fitur manajemen database lengkap untuk backup, restore, export, optimasi, dan maintenance data aplikasi POS.

![Settings Overview](/s-overview.png)

---

## Informasi Database

Panel informatif yang menampilkan kondisi database saat ini secara real-time.

![Database Info](/s-info-db.png)

| Informasi             | Deskripsi                                                |
| --------------------- | -------------------------------------------------------- |
| Ukuran Database       | Besar file database dalam format readable (KB / MB / GB) |
| Total Produk          | Jumlah produk yang tersimpan                             |
| Total Transaksi       | Jumlah transaksi yang telah dilakukan                    |
| Item Terjual          | Jumlah item yang terjual (dari `transaction_items`)      |
| Lokasi Database       | Path lengkap file database                               |
| Terakhir Dimodifikasi | Timestamp perubahan terakhir                             |

---

## Backup Database

Menyimpan seluruh data aplikasi ke file backup dalam format SQLite (`.db`).

![Backup Database](/s-backup.png)

| Properti           | Deskripsi                                        |
| ------------------ | ------------------------------------------------ |
| Format             | SQLite database file (`.db`)                     |
| Lokasi             | Pengguna dapat memilih lokasi penyimpanan        |
| Data yang disimpan | Semua data — produk, transaksi, item, pengaturan |

### Cara Penggunaan

1. Klik tombol **Backup Sekarang**
2. Pilih lokasi penyimpanan file backup
3. Sistem menyimpan file dengan nama berformat timestamp secara otomatis

---

## Restore Database

Memulihkan database dari file backup yang telah disimpan sebelumnya.

![Restore Database](/s-restore.png)

| Properti | Deskripsi                                              |
| -------- | ------------------------------------------------------ |
| Format   | SQLite database file (`.db`)                           |
| Efek     | Mengganti **seluruh** data saat ini dengan data backup |

::: danger Peringatan
Data yang ada akan ditimpa secara permanen dan tidak dapat dikembalikan. Pastikan memiliki backup terbaru sebelum melakukan restore.
:::

### Cara Penggunaan

1. Pastikan memiliki file backup terbaru
2. Klik tombol **Restore Database**
3. Konfirmasi peringatan yang muncul
4. Pilih file backup (`.db`)
5. Setelah selesai, reload halaman direkomendasikan

---

## Export ke SQL

Mengekspor seluruh database ke file `.sql` untuk keperluan migrasi atau import ke sistem lain.

![Export SQL](/s-export.png)

| Properti       | Deskripsi                                  |
| -------------- | ------------------------------------------ |
| Format         | File `.sql` dengan struktur dan data       |
| Kegunaan       | Migrasi database, import ke sistem lain    |
| Kompatibilitas | phpMyAdmin, DBeaver, MySQL Workbench, dll. |

File SQL yang dihasilkan berisi struktur semua tabel (`CREATE TABLE`) dan seluruh data (`INSERT` statements).

### Cara Penggunaan

1. Klik tombol **Export ke SQL**
2. Konfirmasi ekspor
3. Pilih lokasi penyimpanan file `.sql`

---

## Reset Database

Menghapus semua data dan mengembalikan database ke kondisi awal seperti baru diinstal.

![Reset Database](/s-reset.png)

::: danger Peringatan Kritis
Data yang dihapus **tidak dapat dikembalikan**. Lakukan backup terlebih dahulu sebelum melakukan reset.
:::

Data yang akan dihapus: semua produk, semua transaksi, dan semua item transaksi.

### Cara Penggunaan

1. Klik tombol **Reset Database**
2. Modal konfirmasi akan muncul
3. Ketik `RESET` (huruf kapital) pada input field
4. Klik tombol **Reset** yang sudah aktif
5. Halaman akan reload otomatis setelah proses selesai

---

## Optimasi Database

Mengecilkan ukuran file database dengan membersihkan ruang yang tidak terpakai menggunakan perintah `VACUUM`.

![Optimize Database](/s-vaccum.png)

| Properti    | Deskripsi                                                               |
| ----------- | ----------------------------------------------------------------------- |
| Cara Kerja  | Membersihkan ruang tidak terpakai dan rebuild database                  |
| Rekomendasi | Lakukan jika ukuran database > 50 MB atau setelah menghapus banyak data |

Manfaat optimasi: menghemat ruang penyimpanan, meningkatkan performa query, dan menampilkan informasi space yang berhasil dihemat.

---

## Hapus Semua Data Transaksi

Menghapus seluruh riwayat transaksi tanpa menyentuh data produk — berguna untuk memulai periode baru.

![Clear Transactions](/s-vaccum.png)

|               | Data                                     |
| ------------- | ---------------------------------------- |
| **Dihapus**   | Semua transaksi dan semua item transaksi |
| **Tetap ada** | Semua produk beserta stoknya             |

::: warning Perhatian
Aksi ini tidak dapat dibatalkan. Gunakan fitur ini hanya saat memulai periode akuntansi baru atau saat ingin membersihkan data uji coba.
:::

---

## Notifikasi Sistem

Sistem menampilkan notifikasi untuk setiap aksi yang dilakukan. Notifikasi hilang otomatis setelah **4 detik**.

| Jenis  | Indikator          | Contoh Pesan                        |
| ------ | ------------------ | ----------------------------------- |
| Sukses | 🟢 Hijau (Emerald) | "Backup database berhasil disimpan" |
| Error  | 🔴 Merah (Red)     | "Gagal mengambil data database"     |

::: tip Tips Penggunaan

- Lakukan backup secara rutin, terutama sebelum melakukan restore atau reset.
- Gunakan export SQL jika ingin memindahkan data ke sistem database lain.
- Jalankan optimasi database secara berkala untuk menjaga performa aplikasi.
- Fitur **Hapus Transaksi** lebih aman dari **Reset** jika hanya ingin membersihkan riwayat penjualan.
  :::
