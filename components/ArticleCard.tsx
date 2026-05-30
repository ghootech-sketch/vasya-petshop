import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CalendarDays } from 'lucide-react'
import type { Article } from '@/lib/articles'

type ArticleCardProps = {
  article: Article
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date))
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-brown/10 bg-offwhite shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      <Link href={`/artikel/${article.slug}`} className="relative block aspect-video overflow-hidden bg-sand">
        <Image
          src={article.thumbnail}
          alt={article.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex flex-wrap items-center gap-2 text-xs font-bold text-muted">
          <span className="rounded-full bg-sage/15 px-3 py-1 font-black uppercase tracking-[0.16em] text-sage">
            {article.category}
          </span>
          <span className="inline-flex min-h-11 items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
            {formatDate(article.date)}
          </span>
        </div>

        <Link href={`/artikel/${article.slug}`} className="block">
          <h3 className="line-clamp-2 font-display text-2xl font-black leading-tight text-ink transition group-hover:text-brown">
            {article.title}
          </h3>
        </Link>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted">{article.excerpt}</p>

        <Link
          href={`/artikel/${article.slug}`}
          className="mt-auto inline-flex min-h-11 items-center gap-2 pt-4 text-sm font-black text-brown transition hover:text-ink"
        >
          Baca Artikel
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  )
}
