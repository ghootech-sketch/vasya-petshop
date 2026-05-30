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
    <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-[1.5rem] border border-brown/10 bg-offwhite shadow-sm transition hover:-translate-y-1 hover:shadow-soft sm:rounded-[2rem]">
      <Link href={`/catalog/${product.id}`} className="relative block aspect-square overflow-hidden bg-sand">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        {product.badge ? (
          <span className="absolute left-3 top-3 rounded-full bg-brown px-2.5 py-1 text-[10px] font-black uppercase tracking-wide text-offwhite shadow-sm sm:left-4 sm:top-4 sm:text-xs">
            {product.badge}
          </span>
        ) : null}
      </Link>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="mb-2 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.16em] text-sage sm:text-xs">
          <Tag className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          <span className="truncate">{product.category}</span>
        </div>

        <Link href={`/catalog/${product.id}`} className="block">
          <h3 className="line-clamp-2 min-h-[3.2rem] font-display text-lg font-black leading-tight text-ink transition group-hover:text-brown sm:text-2xl">
            {product.name}
          </h3>
        </Link>

        <p className="mt-2 line-clamp-2 text-xs leading-5 text-muted sm:line-clamp-3 sm:text-sm sm:leading-6">
          {product.description}
        </p>

        <div className="mt-auto pt-4">
          <p className="mb-3 font-display text-xl font-black text-brown sm:text-2xl">{formatRupiah(product.price)}</p>
          <a
            href={whatsappProductLink(product.name)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-sage px-4 py-3 text-sm font-black text-offwhite shadow-sm transition hover:-translate-y-0.5 hover:bg-brown sm:w-auto"
            aria-label={`Pesan ${product.name} via WhatsApp`}
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            <span className="sm:hidden">Pesan WA</span>
          </a>
        </div>
      </div>
    </article>
  )
}
