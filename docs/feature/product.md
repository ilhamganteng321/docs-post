---
title: Product
description: Manajemen produk dan inventaris bisnis
outline: deep
---

# Product

Modul Product menyediakan sistem manajemen inventaris lengkap untuk mengelola semua produk dalam bisnis Anda — mulai dari data produk, pemantauan stok, pembaruan harga, hingga pengelolaan inventaris secara efisien.

![Product Overview](/p-overview.png)

---

## Ringkasan Inventaris

Dashboard inventaris menampilkan statistik utama produk secara real-time.

| Metrik          | Deskripsi                            |
| --------------- | ------------------------------------ |
| Total Produk    | Jumlah seluruh produk yang terdaftar |
| Nilai Inventori | Total nilai stok (harga × stok)      |
| Stok Menipis    | Jumlah produk dengan stok ≤ 5 unit   |

![Inventory Summary](/p-ringkasan.png)

---

## Daftar Produk

Tabel produk menampilkan seluruh data produk yang tersimpan di sistem.

![Product Table](/p-list.png)

| Kolom          | Deskripsi                              |
| -------------- | -------------------------------------- |
| ID Produk      | Identifikasi unik produk               |
| Nama Produk    | Nama produk dengan ikon produk         |
| Harga          | Harga produk dalam format Rupiah (IDR) |
| Stok           | Jumlah stok tersedia                   |
| Status         | Status stok produk                     |
| Tanggal Dibuat | Tanggal produk ditambahkan             |

### Format ID Produk

Setiap produk memiliki ID unik dengan format `#ID`, misalnya `#1024`, `#2048`, `#3001`.

---

## Pencarian Produk

Fitur pencarian real-time membantu menemukan produk dengan cepat berdasarkan nama.

![Product Search](/p-search.png)

- Pencarian langsung tanpa perlu menekan Enter
- Hasil diperbarui otomatis setiap karakter diketik
- Mendukung pencarian cepat untuk data dalam jumlah besar

---

## Tambah Produk

Klik tombol **Tambah Produk** untuk menambahkan produk baru ke sistem.

![Add Product](/p-add.png)

| Field       | Keterangan                              |
| ----------- | --------------------------------------- |
| Nama Produk | Nama produk (wajib diisi)               |
| Harga       | Harga jual produk (tidak boleh negatif) |
| Stok        | Jumlah stok awal (harus berupa angka)   |
| Kategori    | Jenis produk                            |
| Deskripsi   | Informasi tambahan produk               |
| Gambar      | Foto produk (JPG, PNG, WEBP)            |

::: warning Validasi Form
Sistem akan memvalidasi semua field secara otomatis sebelum data disimpan. Pastikan nama produk, harga, dan stok telah diisi dengan benar.
:::

---

## Edit Produk

Klik ikon pensil pada baris produk untuk membuka modal edit.

![Edit Product](/p-edit.png)

Fungsi yang tersedia: mengubah nama, memperbarui harga, mengubah stok, mengganti gambar, dan memperbarui kategori produk.

---

## Hapus Produk

Produk dapat dihapus langsung dari tabel. Sistem akan menampilkan dialog konfirmasi sebelum penghapusan dilakukan.

![Delete Product](/p-delete.png)

::: danger Perhatian
Menghapus produk akan menghilangkan data produk secara permanen dari sistem.
:::

---

## Status Stok

Sistem menggunakan badge warna untuk menunjukkan kondisi stok produk secara visual.

![Stock Badge](/p-status.png)

| Stok | Status  | Indikator |
| ---- | ------- | --------- |
| > 5  | Normal  | 🟢 Hijau  |
| ≤ 5  | Menipis | 🟡 Kuning |
| 0    | Habis   | 🔴 Merah  |

Produk dengan stok rendah akan otomatis ditandai oleh sistem untuk mencegah kehabisan barang.

![Low Stock Alert](/p-stock-alert.png)

---

## Loading & Error State

### Loading State

Saat data sedang dimuat, sistem menampilkan skeleton loader.

<!-- ![Loading Product](../../images/product/product-loading.png) -->

### Error State

Jika terjadi kesalahan saat mengambil data, sistem akan menampilkan notifikasi error beserta tombol reload.

<!-- ![Error Product](../../images/product/product-error.png) -->

### Empty State

Jika belum ada produk, sistem menampilkan halaman kosong dengan tombol untuk menambahkan produk pertama.

<!-- ![Empty Product](../../images/product/product-empty.png) -->

---

## Refresh Data

Gunakan tombol **Refresh** atau tekan `R` untuk memuat ulang data produk terbaru. Sistem akan menampilkan animasi loading dan menyinkronkan data inventaris secara otomatis.

::: tip Tips Penggunaan

- Gunakan pencarian untuk menemukan produk lebih cepat.
- Periksa badge stok secara berkala dan segera restock produk berstatus menipis.
- Tambahkan gambar produk untuk mempermudah identifikasi visual.
- Update harga produk secara rutin sesuai kondisi pasar.
  :::
