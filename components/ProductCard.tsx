import Image from 'next/image'
import Link from 'next/link'
import { MessageCircle, Tag } from 'lucide-react'
import type { Product } from '@/lib/products'
import { formatRupiah } from '@/lib/products'
import { whatsappProductLink } from '@/lib/site'

type ProductCardProps = {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-brown/10 bg-offwhite shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      <Link href={`/catalog/${product.id}`} className="relative block aspect-square overflow-hidden bg-sand">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        {product.badge ? (
          <span className="absolute left-4 top-4 rounded-full bg-brown px-3 py-1 text-xs font-black uppercase tracking-wide text-offwhite shadow-sm">
            {product.badge}
          </span>
        ) : null}
      </Link>

      <div className="p-5">
        <div className="mb-3 flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-sage">
          <Tag className="h-3.5 w-3.5" aria-hidden="true" />
          {product.category}
        </div>

        <Link href={`/catalog/${product.id}`} className="block">
          <h3 className="line-clamp-2 font-display text-2xl font-black leading-tight text-ink transition group-hover:text-brown">
            {product.name}
          </h3>
        </Link>

        <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted">{product.description}</p>

        <div className="mt-5 flex items-center justify-between gap-3">
          <p className="font-display text-2xl font-black text-brown">{formatRupiah(product.price)}</p>
          <a
            href={whatsappProductLink(product.name)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sage text-offwhite shadow-sm transition hover:-translate-y-0.5 hover:bg-brown"
            aria-label={`Pesan ${product.name} via WhatsApp`}
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  )
}
