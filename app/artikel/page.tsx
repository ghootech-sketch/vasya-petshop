import type { Metadata } from 'next'
import { BookOpen, MessageCircle } from 'lucide-react'
import ArticleCard from '@/components/ArticleCard'
import { articles } from '@/lib/articles'
import { generalWhatsappLink } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Artikel Pet Care',
  description:
    'Baca artikel pet care dari Vasya Petshop: tips merawat kucing, anjing, ikan, grooming, kesehatan hewan, dan perlengkapan hewan peliharaan.',
}

export default function ArticlesPage() {
  const sortedArticles = [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return (
    <div className="bg-cream">
      <section className="section-padding mx-auto max-w-7xl py-14 sm:py-18">
        <div className="mb-10 grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-offwhite px-4 py-2 text-sm font-bold text-brown shadow-sm">
              <BookOpen className="h-4 w-4 text-sage" aria-hidden="true" />
              Artikel Pet Care
            </div>
            <h1 className="font-display text-4xl font-black leading-tight text-ink sm:text-5xl">
              Tips merawat hewan peliharaan agar tetap sehat dan nyaman.
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-8 text-muted">
              Kumpulan artikel praktis untuk pemilik kucing, anjing, burung, ikan, dan hewan
              kesayangan lainnya. Ditulis dengan bahasa ringan, karena hewan saja sudah cukup
              rumit tanpa perlu jargon yang sok ilmiah.
            </p>
          </div>

          <div className="rounded-[2rem] border border-brown/10 bg-offwhite p-6 shadow-soft">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-sage">Butuh rekomendasi?</p>
            <h2 className="mt-2 font-display text-2xl font-black text-ink">Tanya produk yang cocok via WhatsApp.</h2>
            <p className="mt-3 text-sm leading-7 text-muted">
              Ceritakan jenis hewan, usia, dan kebutuhanmu. Admin akan bantu rekomendasikan produk yang sesuai.
            </p>
            <a
              href={generalWhatsappLink}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-brown px-5 py-3 text-sm font-black text-offwhite shadow-soft transition hover:-translate-y-0.5 hover:bg-ink"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Chat WhatsApp
            </a>
          </div>
        </div>

        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl font-black text-ink">Artikel Terbaru</h2>
            <p className="mt-1 text-sm text-muted">Menampilkan {sortedArticles.length} artikel pet care.</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sortedArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>
    </div>
  )
}
