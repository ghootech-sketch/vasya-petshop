import Image from 'next/image'
import Link from 'next/link'
import { MessageCircle, Tag } from 'lucide-react'
import { Product, formatRupiah } from '@/lib/products'
import { whatsappProductLink } from '@/lib/site'

type ProductCardProps = {
  product: Product
}

const badgeClass: Record<string, string> = {
  Terlaris: 'bg-sage text-offwhite',
  Baru: 'bg-gold text-ink',
  Promo: 'bg-brown text-offwhite',
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-brown/10 bg-offwhite shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft">
      <div className="relative aspect-square overflow-hidden bg-sand">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        {product.badge ? (
          <span
            className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold shadow-sm ${
              badgeClass[product.badge] ?? 'bg-brown text-offwhite'
            }`}
          >
            {product.badge}
          </span>
        ) : null}
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-sage">
          <Tag className="h-3.5 w-3.5" aria-hidden="true" />
          {product.category}
        </div>

        <div>
          <h3 className="line-clamp-2 font-display text-xl font-bold text-ink">{product.name}</h3>
          <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted">{product.description}</p>
        </div>

        <div className="flex items-center justify-between gap-3 border-t border-brown/10 pt-4">
          <p className="font-display text-xl font-bold text-brown">{formatRupiah(product.price)}</p>
          <a
            href={whatsappProductLink(product.name)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-sage px-4 py-2 text-sm font-bold text-offwhite transition hover:bg-brown"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Tanya
          </a>
        </div>

        <Link
          href={`/catalog?produk=${encodeURIComponent(product.id)}`}
          className="block rounded-full border border-brown/15 px-4 py-2 text-center text-sm font-bold text-brown transition hover:border-brown hover:bg-brown hover:text-offwhite"
        >
          Detail Produk
        </Link>
      </div>
    </article>
  )
}
