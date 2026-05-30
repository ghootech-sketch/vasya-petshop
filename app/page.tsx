import Link from 'next/link'
import { ArrowRight, HeartHandshake, MapPin, MessageCircle, ShieldCheck, Sparkles, Truck } from 'lucide-react'
import ArticleCard from '@/components/ArticleCard'
import HeroSection from '@/components/HeroSection'
import ProductCard from '@/components/ProductCard'
import { getLatestArticles } from '@/lib/articles'
import { getFeaturedProducts, productCategories } from '@/lib/products'
import { generalWhatsappLink, siteConfig } from '@/lib/site'

const benefits = [
  {
    title: 'Produk Terkurasi',
    description: 'Pilihan makanan, vitamin, aksesoris, dan grooming kit yang cocok untuk kebutuhan harian hewan.',
    icon: ShieldCheck,
  },
  {
    title: 'Konsultasi Ramah',
    description: 'Butuh rekomendasi produk? Tim Vasya Petshop siap membantu lewat WhatsApp dengan respons praktis.',
    icon: HeartHandshake,
  },
  {
    title: 'Belanja Mudah',
    description: 'Pilih produk dari katalog, klik tombol WhatsApp, lalu tanyakan stok dan pengiriman tanpa ribet.',
    icon: Truck,
  },
]

export default function HomePage() {
  const featuredProducts = getFeaturedProducts()
  const latestArticles = getLatestArticles(3)
  const categoryHighlights = productCategories.filter((category) => category !== 'Semua').slice(0, 6)

  return (
    <>
      <HeroSection />

      <section className="section-padding mx-auto max-w-7xl py-16">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-2 text-sm font-black uppercase tracking-[0.2em] text-sage">Kategori Populer</p>
            <h2 className="font-display text-3xl font-black text-ink sm:text-4xl">Cari kebutuhan hewan lebih cepat</h2>
          </div>
          <Link
            href="/catalog"
            className="inline-flex items-center gap-2 text-sm font-black text-brown transition hover:text-ink"
          >
            Semua kategori
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categoryHighlights.map((category) => (
            <Link
              key={category}
              href={`/catalog/${encodeURIComponent(category)}`}
              className="group rounded-3xl border border-brown/10 bg-offwhite p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-sage/15 text-sage transition group-hover:bg-sage group-hover:text-offwhite">
                <Sparkles className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="font-display text-2xl font-black text-ink">{category}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                Lihat pilihan produk kategori {category.toLowerCase()} yang tersedia di Vasya Petshop.
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-offwhite/60 py-16">
        <div className="section-padding mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="mb-2 text-sm font-black uppercase tracking-[0.2em] text-sage">Produk Terlaris</p>
              <h2 className="font-display text-3xl font-black text-ink sm:text-4xl">Favorit pelanggan Vasya Petshop</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
                Rekomendasi produk populer untuk makanan, perawatan, dan kebutuhan harian hewan peliharaan.
              </p>
            </div>
            <Link
              href="/catalog"
              className="inline-flex items-center gap-2 rounded-full bg-brown px-5 py-3 text-sm font-black text-offwhite shadow-soft transition hover:-translate-y-0.5 hover:bg-ink"
            >
              Lihat Katalog
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding mx-auto max-w-7xl py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon
            return (
              <div key={benefit.title} className="rounded-3xl border border-brown/10 bg-offwhite p-7 shadow-sm">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brown text-offwhite">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="font-display text-2xl font-black text-ink">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      <section className="bg-sand/70 py-16">
        <div className="section-padding mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="mb-2 text-sm font-black uppercase tracking-[0.2em] text-sage">Artikel Pet Care</p>
              <h2 className="font-display text-3xl font-black text-ink sm:text-4xl">Tips merawat hewan peliharaan</h2>
            </div>
            <Link
              href="/artikel"
              className="inline-flex items-center gap-2 text-sm font-black text-brown transition hover:text-ink"
            >
              Semua artikel
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {latestArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding mx-auto grid max-w-7xl gap-8 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="rounded-[2rem] bg-brown p-8 text-offwhite shadow-soft sm:p-10">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-offwhite/70">Kunjungi Toko</p>
          <h2 className="font-display text-3xl font-black sm:text-4xl">Belanja online bisa, mampir langsung juga bisa.</h2>
          <p className="mt-4 text-sm leading-7 text-offwhite/75">{siteConfig.address}</p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={generalWhatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-offwhite px-5 py-3 text-sm font-black text-brown transition hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Chat WhatsApp
            </a>
            <Link
              href="/tentang-kami"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-offwhite/25 px-5 py-3 text-sm font-black text-offwhite transition hover:bg-offwhite/10"
            >
              <MapPin className="h-4 w-4" aria-hidden="true" />
              Lihat Detail Toko
            </Link>
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-brown/10 bg-offwhite p-3 shadow-soft">
          <iframe
            src={siteConfig.mapsEmbedUrl}
            title="Lokasi Vasya Petshop"
            className="h-[360px] w-full rounded-[1.5rem] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  )
}
