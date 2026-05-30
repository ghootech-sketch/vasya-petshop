import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, MessageCircle, Sparkles } from 'lucide-react'
import { generalWhatsappLink, siteConfig } from '@/lib/site'

const highlights = [
  'Produk lengkap & terkurasi',
  'Konsultasi ramah via WhatsApp',
  'Pilihan makanan, vitamin, dan grooming kit',
]

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-sage/20 blur-3xl" />
      <div className="absolute -right-24 bottom-16 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />

      <div className="section-padding relative mx-auto grid max-w-7xl items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div className="fade-in">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brown/10 bg-offwhite px-4 py-2 text-sm font-bold text-brown shadow-sm">
            <Sparkles className="h-4 w-4 text-gold" aria-hidden="true" />
            Petshop lokal untuk hewan sehat & happy
          </div>

          <h1 className="font-display text-4xl font-black leading-tight text-ink sm:text-5xl lg:text-6xl">
            {siteConfig.tagline}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
            Temukan makanan, aksesoris, vitamin, perlengkapan grooming, dan kebutuhan harian
            hewan peliharaanmu. Belanja mudah, konsultasi cepat, dan pesan langsung lewat WhatsApp.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/catalog"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brown px-6 py-3 text-sm font-bold text-offwhite shadow-soft transition hover:-translate-y-0.5 hover:bg-ink"
            >
              Lihat Katalog
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a
              href={generalWhatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-brown/15 bg-offwhite px-6 py-3 text-sm font-bold text-brown transition hover:-translate-y-0.5 hover:shadow-soft"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Tanya via WhatsApp
            </a>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {highlights.map((item) => (
              <div key={item} className="flex items-start gap-2 rounded-2xl bg-offwhite/80 p-3 text-sm font-semibold text-muted shadow-sm">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sage" aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative fade-in lg:justify-self-end">
          <div className="absolute -left-6 -top-6 hidden rounded-3xl bg-offwhite p-5 shadow-soft sm:block">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-sage">Ready Stock</p>
            <p className="mt-1 font-display text-2xl font-black text-ink">35+ Produk</p>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border-8 border-offwhite bg-sand shadow-soft">
            <Image
              src="https://source.unsplash.com/900x900/?happy,dog,cat,pet"
              alt="Hewan peliharaan bahagia bersama Vasya Petshop"
              width={900}
              height={900}
              priority
              className="aspect-square object-cover"
            />
          </div>

          <div className="absolute -bottom-6 right-4 rounded-3xl bg-brown p-5 text-offwhite shadow-soft sm:right-10">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-offwhite/70">Lokasi</p>
            <p className="mt-1 font-display text-xl font-black">{siteConfig.location}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
