import type { Metadata } from 'next'
import { MessageCircle, Search, ShoppingBag } from 'lucide-react'
import CategoryFilter from '@/components/CategoryFilter'
import ProductCard from '@/components/ProductCard'
import { formatRupiah, products } from '@/lib/products'
import { whatsappProductLink } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Katalog Produk',
  description:
    'Lihat katalog lengkap Vasya Petshop: makanan kucing, makanan anjing, aksesoris, vitamin, grooming kit, perlengkapan ikan, dan kebutuhan hewan lainnya.',
}

type CatalogPageProps = {
  searchParams?: {
    produk?: string
  }
}

export default function CatalogPage({ searchParams }: CatalogPageProps) {
  const selectedProduct = products.find((product) => product.id === searchParams?.produk)

  return (
    <div className="bg-cream">
      <section className="section-padding mx-auto max-w-7xl py-12 sm:py-16">
        <div className="mb-8 max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-offwhite px-4 py-2 text-sm font-bold text-brown shadow-sm">
            <ShoppingBag className="h-4 w-4 text-sage" aria-hidden="true" />
            Katalog Vasya Petshop
          </div>
          <h1 className="font-display text-4xl font-black leading-tight text-ink sm:text-5xl">
            Semua kebutuhan hewan peliharaan dalam satu katalog.
          </h1>
          <p className="mt-4 text-base leading-8 text-muted">
            Pilih produk yang kamu butuhkan, cek kategori, lalu klik tombol WhatsApp untuk tanya stok,
            rekomendasi, atau pemesanan. Tidak perlu checkout rumit seolah beli roket NASA.
          </p>
        </div>

        {selectedProduct ? (
          <div className="mb-8 rounded-[2rem] border border-brown/10 bg-offwhite p-6 shadow-soft">
            <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="mb-2 text-sm font-black uppercase tracking-[0.2em] text-sage">
                  Produk Dipilih
                </p>
                <h2 className="font-display text-3xl font-black text-ink">{selectedProduct.name}</h2>
                <p className="mt-2 max-w-2xl text-sm leading-7 text-muted">
                  {selectedProduct.description}
                </p>
                <p className="mt-3 font-display text-2xl font-black text-brown">
                  {formatRupiah(selectedProduct.price)}
                </p>
              </div>
              <a
                href={whatsappProductLink(selectedProduct.name)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brown px-6 py-3 text-sm font-black text-offwhite shadow-soft transition hover:-translate-y-0.5 hover:bg-ink"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Tanya Produk Ini
              </a>
            </div>
          </div>
        ) : null}

        <div className="mb-8">
          <CategoryFilter activeCategory="Semua" />
        </div>

        <div className="mb-6 flex flex-col justify-between gap-3 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-2xl font-black text-ink">Semua Produk</h2>
            <p className="mt-1 text-sm text-muted">Menampilkan {products.length} produk aktif.</p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-offwhite px-4 py-2 text-sm font-bold text-muted shadow-sm">
            <Search className="h-4 w-4 text-sage" aria-hidden="true" />
            Filter via kategori di atas
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  )
}
