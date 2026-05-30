import Link from 'next/link'
import { ArrowRight, MessageCircle, ShieldCheck, Sparkles } from 'lucide-react'
import { generalWhatsappLink } from '@/lib/site'

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-ink"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=1600&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/45" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" aria-hidden="true" />

      <div className="section-padding relative z-10 mx-auto flex min-h-[680px] max-w-7xl items-center py-20 sm:py-24">
        <div className="max-w-3xl text-offwhite">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-offwhite/25 bg-offwhite/15 px-4 py-2 text-sm font-bold backdrop-blur">
            <Sparkles className="h-4 w-4 text-gold" aria-hidden="true" />
            Petshop lengkap untuk sahabat berbulumu
          </div>

          <h1 className="font-display text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
            Kebutuhan hewan peliharaan, lebih mudah dicari dan dipesan.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-offwhite/85 sm:text-lg">
            Temukan makanan, vitamin, aksesoris, perlengkapan grooming, aquarium, dan kebutuhan hewan
            lainnya di Vasya Petshop. Pilih produk dari katalog, lalu pesan langsung lewat WhatsApp.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/catalog"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-offwhite px-6 py-3 text-sm font-black text-brown shadow-soft transition hover:-translate-y-0.5 hover:bg-cream"
            >
              Lihat Katalog
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a
              href={generalWhatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-offwhite/30 bg-offwhite/15 px-6 py-3 text-sm font-black text-offwhite backdrop-blur transition hover:-translate-y-0.5 hover:bg-offwhite/25"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Chat WhatsApp
            </a>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              'Produk terkurasi',
              'Pesan via WhatsApp',
              'Cocok untuk harian',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-2xl bg-offwhite/12 px-4 py-3 text-sm font-bold text-offwhite backdrop-blur">
                <ShieldCheck className="h-4 w-4 text-gold" aria-hidden="true" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
