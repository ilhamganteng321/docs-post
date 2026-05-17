---
title: Transaction
description: Sistem transaksi penjualan dan riwayat pembayaran
outline: deep
---

# Transaction

Modul Transaction menyediakan sistem point of sale lengkap untuk memproses penjualan dan mengelola riwayat transaksi bisnis Anda secara real-time.

<img 
  src="/t-overview.png" 
  alt="Transaction Overview"
  style="
    border-radius: 16px;
    border: 1px solid var(--vp-c-divider);
    box-shadow: 0 8px 24px rgba(0,0,0,0.08);
  "
/>

---

## Dua Mode Operasi

Modul ini terbagi menjadi dua tab utama yang dapat diakses dari halaman yang sama.

| Tab               | Fungsi                                             |
| ----------------- | -------------------------------------------------- |
| Transaksi Baru    | Membuat transaksi penjualan baru                   |
| Riwayat Transaksi | Melihat dan mengelola transaksi yang telah selesai |

---

## Transaksi Baru

Halaman transaksi baru terdiri dari dua panel yang bekerja bersama: pencarian produk di kiri dan keranjang belanja di kanan.

![Transaction New](/t-new.png)

### Panel Pencarian Produk

Panel kiri digunakan untuk mencari dan memilih produk yang akan ditambahkan ke keranjang.

- Pencarian real-time berdasarkan nama produk
- Tampilan grid produk dengan informasi harga dan stok
- Pengaturan kuantitas per produk sebelum ditambahkan
- Peringatan stok menipis (≤ 5) dan stok habis
- Validasi stok saat menambah produk ke keranjang

![Product Search Panel](/t-panel.png)

### Panel Keranjang

Panel kanan menampilkan semua produk yang telah dipilih beserta ringkasan pembayaran.

Setiap item dalam keranjang menampilkan nama produk dan harga satuan, kontrol kuantitas (tambah/kurang), subtotal per item, dan tombol hapus item.

Di bagian bawah keranjang tersedia total keseluruhan belanja, tombol kosongkan keranjang, dan tombol untuk memulai proses pembayaran.

![Cart Panel](/t-cart.png)

---

## Proses Pembayaran

Klik **Bayar Sekarang** untuk membuka modal pembayaran.

![Payment Modal](/t-payment.png)

Modal pembayaran menyediakan fitur berikut:

- Menampilkan total yang harus dibayar
- Input nominal pembayaran dari pelanggan
- Validasi minimal pembayaran (tidak boleh kurang dari total)
- Perhitungan kembalian otomatis
- Indikator loading saat transaksi sedang diproses

::: warning Validasi Pembayaran
Nominal pembayaran tidak boleh kurang dari total belanja. Sistem akan menolak pembayaran jika nilai yang dimasukkan tidak mencukupi.
:::

---

## Riwayat Transaksi

Tab Riwayat Transaksi menampilkan seluruh transaksi yang telah selesai dalam bentuk tabel.

![Transaction History](/t-riwayat.png)

| Kolom   | Informasi                            |
| ------- | ------------------------------------ |
| ID      | Nomor transaksi (format: `#ID`)      |
| Tanggal | Waktu transaksi (DD MMM YYYY, HH:MM) |
| Total   | Total nilai transaksi                |
| Bayar   | Jumlah pembayaran dari pelanggan     |
| Kembali | Nominal kembalian                    |
| Aksi    | Tombol detail transaksi              |

---

## Detail Transaksi

Klik tombol aksi pada baris transaksi untuk membuka modal detail.

![Transaction Detail](/t-detail.png)

Modal detail menampilkan informasi lengkap transaksi:

- Informasi transaksi (ID dan tanggal)
- Daftar item yang dibeli (produk, kuantitas, harga, subtotal)
- Ringkasan pembayaran (subtotal, pembayaran, kembalian)
- Tombol cetak struk

---

## Alur Transaksi

```
1. Cari produk  →  2. Atur kuantitas  →  3. Tambah ke keranjang
                                                    ↓
4. Ulangi untuk produk lain  ←  5. Kosongkan keranjang (opsional)
                                                    ↓
                                        6. Klik "Bayar Sekarang"
                                                    ↓
                                    7. Input nominal pembayaran
                                                    ↓
                            8. Validasi (minimal = total belanja)
                                                    ↓
                        9. Konfirmasi → Proses transaksi
                                                    ↓
                        10. Update stok produk otomatis
                                                    ↓
                11. Notifikasi sukses → Reset keranjang
                                                    ↓
                        12. Beralih ke tab Riwayat Transaksi
```

## Loading & Error State

### Loading State

Saat data sedang dimuat atau transaksi sedang diproses, sistem menampilkan skeleton loader atau indikator loading.

### Error State

Jika terjadi kesalahan saat memproses transaksi atau mengambil data riwayat, sistem menampilkan notifikasi error beserta tombol reload.

### Empty State

Jika belum ada riwayat transaksi, sistem menampilkan halaman kosong dengan panduan untuk memulai transaksi pertama.

---

## Keyboard Shortcut

| Shortcut   | Fungsi                  |
| ---------- | ----------------------- |
| `Ctrl + T` | Buka Tab Transaksi Baru |
| `Ctrl + H` | Buka Tab Riwayat        |
| `Ctrl + F` | Fokus Pencarian Produk  |
| `Esc`      | Tutup Modal             |

::: tip Tips Penggunaan

- Gunakan pencarian untuk menemukan produk lebih cepat saat melayani pelanggan.
- Periksa indikator stok sebelum menambah produk ke keranjang.
- Manfaatkan fitur cetak struk untuk memberikan bukti pembayaran kepada pelanggan.
- Cek tab Riwayat Transaksi untuk memverifikasi transaksi yang sudah selesai.
  :::
