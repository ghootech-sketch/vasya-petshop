import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CalendarDays } from 'lucide-react'
import { Article } from '@/lib/articles'

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
    <article className="group overflow-hidden rounded-3xl border border-brown/10 bg-offwhite shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft">
      <Link href={`/artikel/${article.slug}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden bg-sand">
          <Image
            src={article.thumbnail}
            alt={article.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          <span className="absolute left-4 top-4 rounded-full bg-sage px-3 py-1 text-xs font-bold text-offwhite shadow-sm">
            {article.category}
          </span>
        </div>
      </Link>

      <div className="space-y-4 p-5">
        <div className="flex items-center gap-2 text-xs font-semibold text-muted">
          <CalendarDays className="h-4 w-4 text-sage" aria-hidden="true" />
          <time dateTime={article.date}>{formatDate(article.date)}</time>
        </div>

        <div>
          <Link href={`/artikel/${article.slug}`}>
            <h3 className="line-clamp-2 font-display text-xl font-bold text-ink transition group-hover:text-brown">
              {article.title}
            </h3>
          </Link>
          <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted">{article.excerpt}</p>
        </div>

        <Link
          href={`/artikel/${article.slug}`}
          className="inline-flex items-center gap-2 rounded-full border border-brown/15 px-4 py-2 text-sm font-bold text-brown transition hover:border-brown hover:bg-brown hover:text-offwhite"
        >
          Baca Artikel
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  )
}
