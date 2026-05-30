# Vasya Petshop

Website katalog petshop modern untuk **Vasya Petshop**, dibuat dengan **Next.js 14 App Router**, **TypeScript**, dan **Tailwind CSS**.

Project ini dibuat sebagai landing page dan katalog produk untuk membantu pelanggan melihat produk, membaca artikel pet care, dan menghubungi admin langsung melalui WhatsApp.

## Fitur Utama

- Homepage modern dengan hero section, kategori populer, produk unggulan, artikel terbaru, dan CTA WhatsApp.
- Katalog produk lengkap dengan 35 data produk lokal di `lib/products.ts`.
- Filter kategori produk melalui route dinamis `/catalog/[category]`.
- Halaman artikel pet care dengan 8 artikel di `lib/articles.ts`.
- Halaman detail artikel dinamis `/artikel/[slug]`.
- Halaman tentang kami dengan alamat, jam buka, dan Google Maps embed.
- Metadata SEO dan Open Graph image.
- Favicon custom.
- Responsive design untuk mobile, tablet, dan desktop.

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Lucide React Icons
- App Router

## Struktur Folder

```txt
app/
  catalog/
    [category]/
      page.tsx
    page.tsx
  artikel/
    [slug]/
      page.tsx
    page.tsx
  tentang-kami/
    page.tsx
  globals.css
  layout.tsx
  page.tsx
components/
  ArticleCard.tsx
  CategoryFilter.tsx
  Footer.tsx
  HeroSection.tsx
  Navbar.tsx
  ProductCard.tsx
lib/
  articles.ts
  products.ts
  site.ts
public/
  favicon.svg
  og-image.jpg
```

## Cara Menjalankan Lokal

Install dependencies:

```bash
npm install
```

Jalankan development server:

```bash
npm run dev
```

Buka browser:

```txt
http://localhost:3000
```

Build production:

```bash
npm run build
```

Jalankan production build:

```bash
npm run start
```

## Route Penting

```txt
/                     Homepage
/catalog              Semua produk
/catalog/Kucing       Produk kategori Kucing
/catalog/Anjing       Produk kategori Anjing
/artikel              Daftar artikel
/artikel/[slug]       Detail artikel
/tentang-kami         Profil toko dan kontak
```

## Konfigurasi Kontak

Data toko, WhatsApp, sosial media, alamat, dan Google Maps embed disimpan di:

```txt
lib/site.ts
```

Nomor WhatsApp default:

```txt
6281234567890
```

Untuk mengganti nomor WhatsApp, edit nilai berikut:

```ts
whatsappNumber
whatsapp
whatsappUrl
```

## Data Produk dan Artikel

Produk disimpan di:

```txt
lib/products.ts
```

Artikel disimpan di:

```txt
lib/articles.ts
```

Project ini belum memakai database atau CMS. Semua data masih statis agar ringan, cepat, dan mudah dideploy.

## Deploy ke Vercel

Project ini siap dideploy ke Vercel.

Build command:

```bash
npm run build
```

Output framework:

```txt
Next.js
```

Tidak ada environment variable wajib untuk versi awal ini.

## Catatan

Gambar produk dan artikel memakai remote image dari Unsplash Source. Domain gambar sudah diatur di `next.config.ts`.

Jika ingin produksi serius, disarankan mengganti gambar remote dengan aset sendiri atau CDN yang stabil. Karena bergantung pada gambar random dari internet untuk bisnis sungguhan adalah bentuk optimisme yang terlalu percaya diri.
