import Link from 'next/link'
import { Facebook, Instagram, MapPin, MessageCircle, PawPrint, Phone, Clock } from 'lucide-react'
import { generalWhatsappLink, siteConfig } from '@/lib/site'

const quickLinks = [
  { href: '/', label: 'Beranda' },
  { href: '/catalog', label: 'Katalog Produk' },
  { href: '/artikel', label: 'Artikel Pet Care' },
  { href: '/tentang-kami', label: 'Tentang Kami' },
]

const categories = ['Anjing', 'Kucing', 'Burung', 'Ikan', 'Grooming', 'Aksesoris']

export default function Footer() {
  return (
    <footer className="border-t border-brown/10 bg-ink text-offwhite">
      <div className="section-padding mx-auto grid max-w-7xl gap-10 py-14 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr]">
        <div>
          <Link href="/" className="mb-5 inline-flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sage text-offwhite">
              <PawPrint className="h-6 w-6" aria-hidden="true" />
            </span>
            <span>
              <span className="block font-display text-2xl font-bold">{siteConfig.name}</span>
              <span className="text-sm text-offwhite/70">{siteConfig.tagline}</span>
            </span>
          </Link>
          <p className="max-w-sm text-sm leading-7 text-offwhite/70">
            Petshop lokal yang menyediakan makanan, aksesoris, vitamin, dan perlengkapan grooming
            untuk hewan kesayanganmu. Konsultasi ramah, produk lengkap, dan belanja via WhatsApp.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-offwhite/10 transition hover:bg-sage"
              aria-label="Instagram Vasya Petshop"
            >
              <Instagram className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={siteConfig.tiktokUrl}
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-offwhite/10 transition hover:bg-sage"
              aria-label="TikTok Vasya Petshop"
            >
              <Facebook className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={generalWhatsappLink}
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-offwhite/10 transition hover:bg-sage"
              aria-label="WhatsApp Vasya Petshop"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-display text-lg font-bold">Menu</h3>
          <ul className="space-y-3 text-sm text-offwhite/70">
            {quickLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-offwhite">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-display text-lg font-bold">Kategori</h3>
          <ul className="space-y-3 text-sm text-offwhite/70">
            {categories.map((category) => (
              <li key={category}>
                <Link
                  href={`/catalog/${encodeURIComponent(category)}`}
                  className="transition hover:text-offwhite"
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-display text-lg font-bold">Kontak</h3>
          <ul className="space-y-4 text-sm text-offwhite/70">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-sage" aria-hidden="true" />
              <span>{siteConfig.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-sage" aria-hidden="true" />
              <span>+{siteConfig.whatsappNumber}</span>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-sage" aria-hidden="true" />
              <span>{siteConfig.businessHours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-offwhite/10 py-5 text-center text-sm text-offwhite/60">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  )
}
