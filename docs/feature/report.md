---
title: Report
description: Analisis mendalam performa bisnis melalui laporan penjualan, produk, dan inventaris
outline: deep
---

# Report

Modul Report menyediakan analisis mendalam tentang performa bisnis melalui tiga jenis laporan utama: laporan penjualan, produk terlaris, dan inventaris. Semua laporan dapat difilter berdasarkan periode dan rentang tanggal.

![Report Overview](/r-overview.png)

---

## Jenis Laporan

| Tab             | Laporan          | Fungsi                                        |
| --------------- | ---------------- | --------------------------------------------- |
| Penjualan       | Sales Report     | Analisis transaksi dan pendapatan per periode |
| Produk Terlaris | Product Report   | Ranking produk berdasarkan performa penjualan |
| Inventaris      | Inventory Report | Status stok dan nilai inventaris              |

---

## Laporan Penjualan

Sales Report menyajikan analisis transaksi dan pendapatan bisnis berdasarkan periode yang dipilih.

![Sales Report](/r-sales.png)

### Ringkasan Statistik

| Metrik              | Deskripsi                                    |
| ------------------- | -------------------------------------------- |
| Total Transaksi     | Seluruh transaksi dalam periode yang dipilih |
| Total Pendapatan    | Akumulasi pendapatan                         |
| Rata-rata Transaksi | Nilai rata-rata per transaksi                |
| Performa            | Indikator tren (meningkat / menurun)         |

### Filter Laporan

| Filter         | Opsi                     | Deskripsi                |
| -------------- | ------------------------ | ------------------------ |
| Periode        | Harian, Bulanan, Tahunan | Level agregasi data      |
| Dari Tanggal   | Date picker              | Batas awal rentang data  |
| Sampai Tanggal | Date picker              | Batas akhir rentang data |

![Sales Filter](/r-filter.png)

### Tabel Detail Penjualan

| Kolom      | Deskripsi                                  |
| ---------- | ------------------------------------------ |
| Periode    | Tanggal (harian) / Bulan & Tahun (bulanan) |
| Transaksi  | Jumlah transaksi pada periode tersebut     |
| Pendapatan | Total pendapatan dalam periode             |
| Rata-rata  | Nilai rata-rata per transaksi              |
| Min        | Nilai transaksi terkecil                   |
| Max        | Nilai transaksi terbesar                   |

![Sales Table](/r-details.png)

---

## Laporan Produk Terlaris

Product Report menampilkan ranking produk berdasarkan performa penjualan dalam rentang waktu tertentu.

![Product Report](/t-product.png)

### Filter Laporan

| Filter         | Opsi              | Deskripsi                      |
| -------------- | ----------------- | ------------------------------ |
| Jumlah Produk  | Top 5, 10, 20, 50 | Jumlah produk yang ditampilkan |
| Dari Tanggal   | Date picker       | Batas awal periode penjualan   |
| Sampai Tanggal | Date picker       | Batas akhir periode penjualan  |

### Ringkasan Statistik

| Metrik               | Deskripsi                             |
| -------------------- | ------------------------------------- |
| Total Produk Terjual | Akumulasi kuantitas penjualan         |
| Total Revenue        | Pendapatan dari semua produk terlaris |
| Rata-rata per Produk | Rata-rata unit terjual per produk     |

### Informasi per Produk

Setiap produk dalam daftar menampilkan informasi berikut:

| Informasi     | Deskripsi                                     |
| ------------- | --------------------------------------------- |
| Ranking       | Peringkat dengan ikon (🏆 untuk Top 3)        |
| Nama Produk   | Nama lengkap produk                           |
| Stok Saat Ini | Jumlah stok tersisa                           |
| Total Revenue | Pendapatan dari produk tersebut               |
| Terjual       | Total unit yang terjual                       |
| Frekuensi     | Jumlah kali produk dibeli                     |
| Progress Bar  | Perbandingan visual dengan produk terlaris #1 |

![Product Ranking](/r-rank.png)

### Indikator Peringkat

| Peringkat | Warna                   | Ikon   |
| --------- | ----------------------- | ------ |
| #1        | 🟡 Emas (Yellow-400)    | Trophy |
| #2        | ⚪ Perak (Gray-400)     | Trophy |
| #3        | 🟠 Perunggu (Amber-600) | Trophy |
| ≥ 4       | ⬜ Abu-abu              | Star   |

---

## Laporan Inventaris

Inventory Report menyajikan kondisi stok dan nilai inventaris seluruh produk secara menyeluruh.

![Inventory Report](/r-inventaris.png)

### Ringkasan Statistik

| Metrik       | Deskripsi                       |
| ------------ | ------------------------------- |
| Total Produk | Jumlah seluruh produk terdaftar |
| Total Stok   | Akumulasi semua unit stok       |
| Stok Menipis | Produk dengan stok ≤ 5 unit     |
| Habis        | Produk dengan stok = 0          |

### Nilai Inventaris

| Informasi              | Deskripsi                             |
| ---------------------- | ------------------------------------- |
| Total Nilai Inventaris | Nilai total semua stok (harga × stok) |
| Rata-rata Harga Produk | Rata-rata harga per produk            |

### Distribusi Status Stok

| Status  | Indikator          | Deskripsi     |
| ------- | ------------------ | ------------- |
| Normal  | 🟢 Hijau (Emerald) | Stok > 5 unit |
| Menipis | 🟡 Kuning (Amber)  | Stok 1–5 unit |
| Habis   | 🔴 Merah (Rose)    | Stok = 0      |

Setiap status menampilkan jumlah produk dalam status tersebut, total stok untuk status tersebut, persentase dari total produk (dengan progress bar), dan nilai inventaris untuk status tersebut.

![Inventory Distribution](/r-distribution.png)

---

## Loading & Error State

### Loading State

Saat data laporan sedang dimuat, sistem menampilkan skeleton loader.

### Error State

Jika terjadi kesalahan saat mengambil data, sistem menampilkan notifikasi error beserta tombol reload.

### Empty State

Jika tidak ada data dalam rentang tanggal yang dipilih, sistem menampilkan tampilan kosong dengan panduan mengubah filter.

::: tip Tips Penggunaan

- Gunakan filter **Harian** untuk analisis hari-per-hari, dan **Bulanan** untuk melihat tren jangka panjang.
- Pantau laporan Produk Terlaris secara rutin untuk mengetahui produk unggulan dan menyesuaikan stok.
- Cek Laporan Inventaris sebelum melakukan pemesanan ulang barang agar lebih efisien.
- Kombinasikan rentang tanggal yang sama di ketiga tab untuk analisis bisnis yang konsisten.
  :::
