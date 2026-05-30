import type { Metadata } from 'next'
import Link from 'next/link'
import { Clock, HeartHandshake, MapPin, MessageCircle, PawPrint, ShieldCheck, Sparkles, Store, Truck } from 'lucide-react'
import { generalWhatsappLink, siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Tentang Kami',
  description:
    'Kenali Vasya Petshop, petshop lokal di Surabaya yang menyediakan makanan, aksesoris, vitamin, grooming kit, dan kebutuhan hewan peliharaan.',
}

const values = [
  {
    title: 'Sayang Hewan',
    description: 'Kami membantu pemilik memilih kebutuhan hewan dengan pendekatan ramah, praktis, dan tidak asal jual.',
    icon: PawPrint,
  },
  {
    title: 'Produk Terkurasi',
    description: 'Makanan, vitamin, aksesoris, dan grooming kit dipilih agar cocok untuk kebutuhan harian hewan peliharaan.',
    icon: ShieldCheck,
  },
  {
    title: 'Belanja Mudah',
    description: 'Cek katalog, pilih produk, lalu tanya stok lewat WhatsApp. Tidak perlu drama checkout yang berlapis-lapis.',
    icon: Truck,
  },
]

const stats = [
  { value: '35+', label: 'Produk aktif' },
  { value: '8+', label: 'Artikel pet care' },
  { value: '6', label: 'Kategori utama' },
]

export default function AboutPage() {
  return (
    <div className="bg-cream">
      <section className="section-padding mx-auto grid max-w-7xl gap-10 py-14 sm:py-18 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-offwhite px-4 py-2 text-sm font-bold text-brown shadow-sm">
            <Store className="h-4 w-4 text-sage" aria-hidden="true" />
            Tentang Vasya Petshop
          </div>
          <h1 className="font-display text-4xl font-black leading-tight text-ink sm:text-5xl lg:text-6xl">
            Petshop lokal untuk kebutuhan harian sahabat berbulumu.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg">
            {siteConfig.name} hadir untuk membantu pemilik hewan menemukan makanan, aksesoris,
            vitamin, grooming kit, dan perlengkapan lain dengan proses belanja yang sederhana.
            Konsultasi bisa langsung lewat WhatsApp, karena kadang memilih makanan kucing saja bisa
            lebih rumit daripada memilih arah hidup. 🐾
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={generalWhatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brown px-6 py-3 text-sm font-black text-offwhite shadow-soft transition hover:-translate-y-0.5 hover:bg-ink"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Chat WhatsApp
            </a>
            <Link
              href="/catalog"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-brown/15 bg-offwhite px-6 py-3 text-sm font-black text-brown transition hover:-translate-y-0.5 hover:shadow-soft"
            >
              Lihat Katalog
            </Link>
          </div>
        </div>

        <div className="rounded-[2rem] border border-brown/10 bg-offwhite p-6 shadow-soft sm:p-8">
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-sage text-offwhite">
            <Sparkles className="h-7 w-7" aria-hidden="true" />
          </div>
          <h2 className="font-display text-3xl font-black text-ink">Kenapa pelanggan memilih kami?</h2>
          <p className="mt-4 text-sm leading-7 text-muted">
            Fokus kami sederhana: produk jelas, rekomendasi masuk akal, dan komunikasi cepat. Tidak
            perlu janji kosmik, cukup bantu hewan peliharaan lebih sehat dan pemiliknya lebih tenang.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-3xl bg-cream p-4 text-center">
                <p className="font-display text-3xl font-black text-brown">{stat.value}</p>
                <p className="mt-1 text-xs font-bold text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding mx-auto max-w-7xl py-10">
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((value) => {
            const Icon = value.icon
            return (
              <div key={value.title} className="rounded-[2rem] border border-brown/10 bg-offwhite p-7 shadow-sm">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brown text-offwhite">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h2 className="font-display text-2xl font-black text-ink">{value.title}</h2>
                <p className="mt-3 text-sm leading-7 text-muted">{value.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      <section className="section-padding mx-auto grid max-w-7xl gap-8 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="space-y-5 rounded-[2rem] bg-brown p-8 text-offwhite shadow-soft sm:p-10">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-offwhite/70">Info Toko</p>
          <h2 className="font-display text-3xl font-black sm:text-4xl">Mampir langsung atau hubungi admin.</h2>

          <div className="space-y-5 pt-3 text-sm leading-7 text-offwhite/80">
            <div className="flex gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
              <span>{siteConfig.address}</span>
            </div>
            <div className="flex gap-3">
              <Clock className="mt-1 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
              <span>{siteConfig.businessHours}</span>
            </div>
            <div className="flex gap-3">
              <HeartHandshake className="mt-1 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
              <span>Konsultasi produk dan pemesanan bisa langsung lewat WhatsApp.</span>
            </div>
          </div>

          <a
            href={generalWhatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-offwhite px-6 py-3 text-sm font-black text-brown transition hover:-translate-y-0.5"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Hubungi Admin
          </a>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-brown/10 bg-offwhite p-3 shadow-soft">
          <iframe
            src={siteConfig.mapsEmbedUrl}
            title="Lokasi Vasya Petshop"
            className="h-[460px] w-full rounded-[1.5rem] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  )
}
