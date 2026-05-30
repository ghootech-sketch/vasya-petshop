import Link from 'next/link'
import { productCategories } from '@/lib/products'

type CategoryFilterProps = {
  activeCategory?: string
}

export default function CategoryFilter({ activeCategory = 'Semua' }: CategoryFilterProps) {
  return (
    <div className="rounded-3xl border border-brown/10 bg-offwhite p-4 shadow-sm">
      <div className="flex flex-wrap gap-3">
        {productCategories.map((category) => {
          const isActive = category.toLowerCase() === decodeURIComponent(activeCategory).toLowerCase()
          const href = category === 'Semua' ? '/catalog' : `/catalog/${encodeURIComponent(category)}`

          return (
            <Link
              key={category}
              href={href}
              className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${
                isActive
                  ? 'bg-brown text-offwhite shadow-soft'
                  : 'bg-cream text-muted hover:bg-sage hover:text-offwhite'
              }`}
            >
              {category}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
