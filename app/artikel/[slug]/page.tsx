import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, CalendarDays, MessageCircle, ShoppingBag } from 'lucide-react'
import { notFound } from 'next/navigation'
import { articles, getArticleBySlug } from '@/lib/articles'
import { generalWhatsappLink } from '@/lib/site'

type ArticleDetailPageProps = {
  params: {
    slug: string
  }
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date))
}

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export function generateMetadata({ params }: ArticleDetailPageProps): Metadata {
  const article = getArticleBySlug(params.slug)

  if (!article) {
    return {
      title: 'Artikel Tidak Ditemukan',
      description: 'Artikel yang kamu cari tidak ditemukan di Vasya Petshop.',
    }
  }

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      images: [
        {
          url: article.thumbnail,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
  }
}

export default function ArticleDetailPage({ params }: ArticleDetailPageProps) {
  const article = getArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  const paragraphs = article.content.split('\n\n')
  const relatedArticles = articles
    .filter((item) => item.slug !== article.slug && item.category === article.category)
    .slice(0, 3)

  return (
    <div className="bg-cream">
      <article className="section-padding mx-auto max-w-5xl py-14 sm:py-18">
        <Link
          href="/artikel"
          className="mb-8 inline-flex items-center gap-2 rounded-full bg-offwhite px-4 py-2 text-sm font-bold text-brown shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Kembali ke Artikel
        </Link>

        <header className="mb-8">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-sage px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-offwhite">
              {article.category}
            </span>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-muted">
              <CalendarDays className="h-4 w-4 text-sage" aria-hidden="true" />
              <time dateTime={article.date}>{formatDate(article.date)}</time>
            </span>
          </div>

          <h1 className="font-display text-4xl font-black leading-tight text-ink sm:text-5xl lg:text-6xl">
            {article.title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-muted">{article.excerpt}</p>
        </header>

        <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-[2rem] border-8 border-offwhite bg-sand shadow-soft">
          <Image
            src={article.thumbnail}
            alt={article.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
          />
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_280px] lg:items-start">
          <div className="rounded-[2rem] border border-brown/10 bg-offwhite p-6 shadow-sm sm:p-8">
            <div className="prose prose-brown max-w-none">
              {paragraphs.map((paragraph) => (
                <p key={paragraph} className="mb-6 text-base leading-8 text-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <aside className="space-y-5 lg:sticky lg:top-28">
            <div className="rounded-[2rem] border border-brown/10 bg-offwhite p-6 shadow-soft">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-sage">Butuh Produk?</p>
              <h2 className="mt-2 font-display text-2xl font-black text-ink">Tanya rekomendasi via WhatsApp.</h2>
              <p className="mt-3 text-sm leading-7 text-muted">
                Jelaskan kebutuhan hewanmu, lalu admin bantu pilih makanan, vitamin, atau aksesoris yang cocok.
              </p>
              <a
                href={generalWhatsappLink}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brown px-5 py-3 text-sm font-black text-offwhite transition hover:bg-ink"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Chat Admin
              </a>
            </div>

            <Link
              href="/catalog"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-brown/15 bg-offwhite px-5 py-3 text-sm font-black text-brown transition hover:bg-brown hover:text-offwhite"
            >
              <ShoppingBag className="h-4 w-4" aria-hidden="true" />
              Lihat Katalog
            </Link>
          </aside>
        </div>

        {relatedArticles.length > 0 ? (
          <section className="mt-12 rounded-[2rem] border border-brown/10 bg-sand/60 p-6 sm:p-8">
            <h2 className="font-display text-2xl font-black text-ink">Artikel terkait</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {relatedArticles.map((item) => (
                <Link
                  key={item.slug}
                  href={`/artikel/${item.slug}`}
                  className="rounded-3xl bg-offwhite p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
                >
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-sage">{item.category}</p>
                  <h3 className="mt-2 line-clamp-2 font-display text-lg font-black text-ink">{item.title}</h3>
                </Link>
              ))}
            </div>
          </section>
        ) : null}
      </article>
    </div>
  )
}
