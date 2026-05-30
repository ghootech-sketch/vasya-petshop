export type Article = {
  slug: string
  title: string
  category: string
  thumbnail: string
  excerpt: string
  date: string
  content: string
}

const longContent = `Merawat hewan peliharaan bukan hanya tentang memberi makan lalu berharap semuanya baik-baik saja. Hewan membutuhkan rutinitas, lingkungan yang aman, nutrisi yang sesuai, dan perhatian harian agar tetap sehat secara fisik maupun emosional. Pemilik perlu memahami tanda-tanda kecil seperti perubahan nafsu makan, pola tidur, kebiasaan minum, energi bermain, dan kondisi bulu. Detail kecil ini sering menjadi petunjuk awal ketika hewan sedang tidak nyaman.

Langkah pertama yang penting adalah membuat jadwal perawatan yang konsisten. Makanan sebaiknya diberikan pada jam yang relatif sama setiap hari, air minum harus selalu bersih, dan area istirahat perlu dijaga kering serta nyaman. Untuk kucing, litter box yang bersih membantu mengurangi stres dan mencegah masalah perilaku. Untuk anjing, rutinitas jalan pagi atau sore membantu menjaga berat badan, menyalurkan energi, dan memperkuat ikatan dengan pemilik.

Nutrisi juga tidak boleh asal pilih. Setiap hewan memiliki kebutuhan berbeda berdasarkan usia, ukuran tubuh, ras, tingkat aktivitas, dan kondisi kesehatan. Anak kucing atau anak anjing membutuhkan formula yang berbeda dari hewan dewasa. Hewan senior pun sering membutuhkan makanan yang lebih mudah dicerna. Jika pemilik ragu, konsultasi dengan dokter hewan adalah pilihan paling aman. Internet memang penuh saran, tapi tidak semua saran dibuat oleh orang yang pernah melihat hewan selain dalam bentuk stiker lucu.

Perawatan bulu dan kebersihan adalah bagian lain yang sering diremehkan. Menyisir bulu secara rutin membantu mengurangi rontok, mencegah kusut, dan memberi kesempatan untuk memeriksa kulit dari luka, kutu, atau iritasi. Grooming tidak harus selalu rumit. Mulailah dengan aktivitas sederhana yang membuat hewan nyaman, lalu tingkatkan secara bertahap. Gunakan shampo, sisir, dan alat potong kuku yang memang dibuat untuk hewan, bukan alat sembarangan dari laci rumah.

Selain kebutuhan fisik, hewan juga memerlukan stimulasi mental. Mainan interaktif, scratch post, latihan dasar, atau sesi bermain singkat bisa membantu mencegah bosan. Hewan yang bosan sering menunjukkan perilaku merusak, bukan karena jahat, tetapi karena energinya tidak tersalurkan. Dengan lingkungan yang tepat, produk yang sesuai, dan perhatian rutin, hewan peliharaan bisa tumbuh lebih sehat, tenang, dan percaya pada pemiliknya.`

export const articles: Article[] = [
  {
    slug: 'cara-merawat-kucing-pertama-kali',
    title: 'Panduan Lengkap Merawat Kucing untuk Pemula',
    category: 'Kucing',
    thumbnail: 'https://source.unsplash.com/800x500/?kitten,cute',
    excerpt:
      'Baru pertama kali memelihara kucing? Pelajari kebutuhan dasar mulai dari makanan, litter box, grooming, hingga cara membangun rutinitas yang nyaman.',
    date: '2026-01-08',
    content: longContent,
  },
  {
    slug: 'makanan-terbaik-anjing-dewasa',
    title: '7 Rekomendasi Makanan Terbaik untuk Anjing Dewasa',
    category: 'Anjing',
    thumbnail: 'https://source.unsplash.com/800x500/?dog,food',
    excerpt:
      'Makanan anjing dewasa perlu disesuaikan dengan ukuran, energi, dan kondisi kesehatannya. Ini panduan memilih nutrisi yang lebih tepat.',
    date: '2026-01-14',
    content: longContent,
  },
  {
    slug: 'tips-grooming-kucing-di-rumah',
    title: 'Tips Grooming Kucing Sendiri di Rumah Tanpa Stres',
    category: 'Grooming',
    thumbnail: 'https://source.unsplash.com/800x500/?cat,grooming',
    excerpt:
      'Grooming di rumah bisa lebih tenang jika dilakukan bertahap. Mulailah dari menyisir, membersihkan telinga, dan memotong kuku dengan alat yang tepat.',
    date: '2026-01-21',
    content: longContent,
  },
  {
    slug: 'manfaat-vitamin-hewan-peliharaan',
    title: 'Kenapa Hewan Peliharaan Butuh Vitamin? Ini Penjelasannya',
    category: 'Kesehatan',
    thumbnail: 'https://source.unsplash.com/800x500/?pet,health',
    excerpt:
      'Vitamin dapat membantu daya tahan tubuh, kesehatan bulu, dan pemulihan. Namun pemakaian tetap perlu disesuaikan dengan kebutuhan hewan.',
    date: '2026-02-02',
    content: longContent,
  },
  {
    slug: 'aquarium-pemula-panduan-setup',
    title: 'Setup Aquarium Pertama: Panduan Step-by-Step untuk Pemula',
    category: 'Ikan',
    thumbnail: 'https://source.unsplash.com/800x500/?aquarium,fish',
    excerpt:
      'Aquarium pertama harus disiapkan dengan filter, dekorasi, air yang stabil, dan pakan yang sesuai agar ikan tidak mudah stres.',
    date: '2026-02-12',
    content: longContent,
  },
  {
    slug: 'memilih-kandang-kucing-yang-baik',
    title: 'Cara Memilih Kandang Kucing yang Nyaman dan Aman',
    category: 'Aksesoris',
    thumbnail: 'https://source.unsplash.com/800x500/?cat,cage',
    excerpt:
      'Kandang kucing yang baik tidak hanya kuat, tetapi juga cukup lega, mudah dibersihkan, dan aman untuk aktivitas harian.',
    date: '2026-02-20',
    content: longContent,
  },
  {
    slug: 'tanda-hewan-peliharaan-sakit',
    title: '8 Tanda Hewan Peliharaan Kamu Sedang Sakit yang Sering Diabaikan',
    category: 'Kesehatan',
    thumbnail: 'https://source.unsplash.com/800x500/?sick,pet,vet',
    excerpt:
      'Perubahan kecil seperti malas makan, tidur berlebihan, atau bulu kusam bisa menjadi tanda awal gangguan kesehatan.',
    date: '2026-03-04',
    content: longContent,
  },
  {
    slug: 'kenapa-kucing-suka-menggaruk',
    title: 'Kenapa Kucing Suka Menggaruk Sofa? Ini Alasan dan Solusinya',
    category: 'Kucing',
    thumbnail: 'https://source.unsplash.com/800x500/?cat,sofa',
    excerpt:
      'Menggaruk adalah perilaku alami kucing untuk menandai wilayah dan merawat kuku. Solusinya bukan marah-marah, melainkan memberi media yang tepat.',
    date: '2026-03-15',
    content: longContent,
  },
]

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug)
}

export function getLatestArticles(limit = 3) {
  return [...articles]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit)
}
