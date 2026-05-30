import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, PackageSearch } from 'lucide-react'
import { notFound } from 'next/navigation'
import CategoryFilter from '@/components/CategoryFilter'
import ProductCard from '@/components/ProductCard'
import { getProductsByCategory, productCategories } from '@/lib/products'

const validCategories = productCategories.filter((category) => category !== 'Semua')

type CategoryPageProps = {
  params: {
    category: string
  }
}

export function generateStaticParams() {
  return validCategories.map((category) => ({
    category,
  }))
}

export function generateMetadata({ params }: CategoryPageProps): Metadata {
  const category = decodeURIComponent(params.category)

  return {
    title: `Katalog ${category}`,
    description: `Lihat pilihan produk kategori ${category} di Vasya Petshop. Tanya stok dan pesan langsung lewat WhatsApp.`,
  }
}

export default function CategoryCatalogPage({ params }: CategoryPageProps) {
  const category = decodeURIComponent(params.category)
  const isValidCategory = validCategories.some(
    (item) => item.toLowerCase() === category.toLowerCase()
  )

  if (!isValidCategory) {
    notFound()
  }

  const categoryProducts = getProductsByCategory(category)

  return (
    <div className="bg-cream">
      <section className="section-padding mx-auto max-w-7xl py-14 sm:py-18">
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
            Produk kategori {category}
          </h1>
          <p className="mt-4 text-base leading-8 text-muted">
            Menampilkan pilihan produk kategori {category.toLowerCase()} yang tersedia di Vasya Petshop.
            Pilih produk, lalu klik tombol WhatsApp untuk tanya stok dan rekomendasi. Sangat modern,
            walau konsepnya tetap bertanya ke manusia.
          </p>
        </div>

        <div className="mb-8">
          <CategoryFilter activeCategory={category} />
        </div>

        <div className="mb-6 flex flex-col justify-between gap-3 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-2xl font-black text-ink">{category}</h2>
            <p className="mt-1 text-sm text-muted">
              Menampilkan {categoryProducts.length} produk dalam kategori ini.
            </p>
          </div>
        </div>

        {categoryProducts.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categoryProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="rounded-[2rem] border border-brown/10 bg-offwhite p-8 text-center shadow-sm">
            <h2 className="font-display text-2xl font-black text-ink">Produk belum tersedia</h2>
            <p className="mt-3 text-sm leading-7 text-muted">
              Kategori ini belum memiliki produk aktif. Coba cek kategori lain atau hubungi admin.
            </p>
          </div>
        )}
      </section>
    </div>
  )
}
