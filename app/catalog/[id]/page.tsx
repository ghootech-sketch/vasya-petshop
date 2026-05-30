import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, MessageCircle, PackageSearch, ShoppingBag, Tag } from 'lucide-react'
import { redirect } from 'next/navigation'
import CategoryFilter from '@/components/CategoryFilter'
import ProductCard from '@/components/ProductCard'
import {
  formatRupiah,
  getProductById,
  getProductsByCategory,
  productCategories,
  products,
} from '@/lib/products'
import { whatsappProductLink } from '@/lib/site'

type CatalogDynamicPageProps = {
  params: {
    id: string
  }
}

const validCategories = productCategories.filter((category) => category !== 'Semua')

function isCategory(value: string) {
  return validCategories.some((category) => category.toLowerCase() === value.toLowerCase())
}

function getRelatedProducts(productId: string, category: string) {
  return products
    .filter((product) => product.id !== productId && product.category === category)
    .slice(0, 4)
}

export function generateStaticParams() {
  return [
    ...products.map((product) => ({ id: product.id })),
    ...validCategories.map((category) => ({ id: category })),
  ]
}

export function generateMetadata({ params }: CatalogDynamicPageProps): Metadata {
  const id = decodeURIComponent(params.id)
  const product = getProductById(id)

  if (product) {
    return {
      title: product.name,
      description: product.description,
      openGraph: {
        title: product.name,
        description: product.description,
        images: [
          {
            url: product.image,
            width: 800,
            height: 800,
            alt: product.name,
          },
        ],
      },
    }
  }

  if (isCategory(id)) {
    return {
      title: `Katalog ${id}`,
      description: `Lihat pilihan produk kategori ${id} di Vasya Petshop. Tanya stok dan pesan langsung lewat WhatsApp.`,
    }
  }

  return {
    title: 'Produk Tidak Ditemukan',
    description: 'Produk yang kamu cari tidak ditemukan di Vasya Petshop.',
  }
}

export default function CatalogDynamicPage({ params }: CatalogDynamicPageProps) {
  const id = decodeURIComponent(params.id)
  const product = getProductById(id)

  if (product) {
    const relatedProducts = getRelatedProducts(product.id, product.category)

    return (
      <div className="bg-cream">
        <section className="section-padding mx-auto max-w-7xl py-12 sm:py-16">
          <Link
            href="/catalog"
            className="mb-8 inline-flex items-center gap-2 rounded-full bg-offwhite px-4 py-2 text-sm font-bold text-brown shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Kembali ke Katalog
          </Link>

          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="relative aspect-square overflow-hidden rounded-[2rem] border-8 border-offwhite bg-sand shadow-soft">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              {product.badge ? (
                <span className="absolute left-5 top-5 rounded-full bg-brown px-4 py-2 text-xs font-black uppercase tracking-wide text-offwhite shadow-sm">
                  {product.badge}
                </span>
              ) : null}
            </div>

            <div className="rounded-[2rem] border border-brown/10 bg-offwhite p-6 shadow-soft sm:p-8">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-cream px-4 py-2 text-sm font-bold text-brown">
                <Tag className="h-4 w-4 text-sage" aria-hidden="true" />
                {product.category}
              </div>

              <h1 className="font-display text-4xl font-black leading-tight text-ink sm:text-5xl">
                {product.name}
              </h1>

              <p className="mt-4 font-display text-4xl font-black text-brown">
                {formatRupiah(product.price)}
              </p>

              <div className="mt-6 rounded-3xl bg-cream p-5">
                <h2 className="font-display text-2xl font-black text-ink">Deskripsi Produk</h2>
                <p className="mt-3 text-base leading-8 text-muted">
                  {product.description} Produk ini tersedia di Vasya Petshop untuk kebutuhan harian hewan
                  peliharaan. Hubungi admin untuk cek stok terbaru, rekomendasi pemakaian, dan opsi
                  pengiriman yang tersedia.
                </p>
              </div>

              <a
                href={whatsappProductLink(product.name)}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex min-h-11 w-full items-center justify-center gap-3 rounded-full bg-brown px-7 py-4 text-base font-black text-offwhite shadow-soft transition hover:-translate-y-0.5 hover:bg-ink"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Pesan via WhatsApp
              </a>
            </div>
          </div>

          {relatedProducts.length > 0 ? (
            <section className="mt-16">
              <div className="mb-6 flex flex-col justify-between gap-3 md:flex-row md:items-end">
                <div>
                  <p className="mb-2 text-sm font-black uppercase tracking-[0.2em] text-sage">
                    Produk Lainnya
                  </p>
                  <h2 className="font-display text-3xl font-black text-ink">
                    Pilihan lain di kategori {product.category}
                  </h2>
                </div>
                <Link
                  href={`/catalog/${encodeURIComponent(product.category)}`}
                  className="inline-flex items-center gap-2 text-sm font-black text-brown transition hover:text-ink"
                >
                  Lihat kategori
                  <ShoppingBag className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
                {relatedProducts.map((item) => (
                  <ProductCard key={item.id} product={item} />
                ))}
              </div>
            </section>
          ) : null}
        </section>
      </div>
    )
  }

  if (!isCategory(id)) {
    redirect('/catalog')
  }

  const categoryProducts = getProductsByCategory(id)

  return (
    <div className="bg-cream">
      <section className="section-padding mx-auto max-w-7xl py-12 sm:py-16">
        <Link
          href="/catalog"
          className="mb-8 inline-flex items-center gap-2 rounded-full bg-offwhite px-4 py-2 text-sm font-bold text-brown shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Semua Produk
        </Link>

        <div className="mb-8 max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-offwhite px-4 py-2 text-sm font-bold text-brown shadow-sm">
            <PackageSearch className="h-4 w-4 text-sage" aria-hidden="true" />
            Kategori Produk
          </div>
          <h1 className="font-display text-4xl font-black leading-tight text-ink sm:text-5xl">
            Produk kategori {id}
          </h1>
          <p className="mt-4 text-base leading-8 text-muted">
            Menampilkan pilihan produk kategori {id.toLowerCase()} yang tersedia di Vasya Petshop.
            Pilih produk, lalu klik detail atau tombol WhatsApp untuk tanya stok dan pemesanan.
          </p>
        </div>

        <div className="mb-8">
          <CategoryFilter activeCategory={id} />
        </div>

        <div className="mb-6">
          <h2 className="font-display text-2xl font-black text-ink">{id}</h2>
          <p className="mt-1 text-sm text-muted">
            Menampilkan {categoryProducts.length} produk dalam kategori ini.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
          {categoryProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </div>
  )
}
