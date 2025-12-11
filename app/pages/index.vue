<script setup lang="ts">
const placeholderImg = "/images/pic1.png"

const newArrivalsData = [
  {
    id: 1,
    title: "Зволожувальний крем для обличчя",
    srcUrl: placeholderImg,
    gallery: [placeholderImg],
    price: 299,
    discount: { amount: 0, percentage: 0 },
    rating: 4.8,
  },
  {
    id: 2,
    title: "Гіалуронова сироватка",
    srcUrl: placeholderImg,
    gallery: [placeholderImg],
    price: 350,
    discount: { amount: 0, percentage: 10 },
    rating: 4.7,
  },
  {
    id: 3,
    title: "Очищувальна пінка для вмивання",
    srcUrl: placeholderImg,
    gallery: [placeholderImg],
    price: 220,
    discount: { amount: 0, percentage: 0 },
    rating: 4.5,
  },
  {
    id: 4,
    title: "Патчі під очі з золотом",
    srcUrl: placeholderImg,
    gallery: [placeholderImg],
    price: 180,
    discount: { amount: 0, percentage: 15 },
    rating: 4.6,
  },
  {
    id: 5,
    title: "Тональний крем з SPF 30",
    srcUrl: placeholderImg,
    gallery: [placeholderImg],
    price: 430,
    discount: { amount: 0, percentage: 0 },
    rating: 4.9,
  },
  {
    id: 6,
    title: "Матова губна помада",
    srcUrl: placeholderImg,
    gallery: [placeholderImg],
    price: 199,
    discount: { amount: 0, percentage: 0 },
    rating: 4.4,
  },
  {
    id: 7,
    title: "Лак для нігтів нюдовий",
    srcUrl: placeholderImg,
    gallery: [placeholderImg],
    price: 150,
    discount: { amount: 0, percentage: 0 },
    rating: 4.1,
  },
  {
    id: 8,
    title: "Антивікова сироватка",
    srcUrl: placeholderImg,
    gallery: [placeholderImg],
    price: 520,
    discount: { amount: 0, percentage: 20 },
    rating: 4.9,
  },
  {
    id: 9,
    title: "Скраб для тіла кавовий",
    srcUrl: placeholderImg,
    gallery: [placeholderImg],
    price: 160,
    discount: { amount: 0, percentage: 5 },
    rating: 4.3,
  },
  {
    id: 10,
    title: "Міцелярна вода",
    srcUrl: placeholderImg,
    gallery: [placeholderImg],
    price: 190,
    discount: { amount: 0, percentage: 0 },
    rating: 4.5,
  },
]

const topSellingData = [
  {
    id: 11,
    title: "Крем для рук живильний",
    srcUrl: placeholderImg,
    gallery: [placeholderImg],
    price: 120,
    discount: { amount: 0, percentage: 10 },
    rating: 4.8,
  },
  {
    id: 12,
    title: "Шампунь проти випадіння волосся",
    srcUrl: placeholderImg,
    gallery: [placeholderImg],
    price: 260,
    discount: { amount: 0, percentage: 0 },
    rating: 4.7,
  },
  {
    id: 13,
    title: "Бальзам для губ",
    srcUrl: placeholderImg,
    gallery: [placeholderImg],
    price: 99,
    discount: { amount: 0, percentage: 0 },
    rating: 4.3,
  },
  {
    id: 14,
    title: "Кондиціонер для волосся",
    srcUrl: placeholderImg,
    gallery: [placeholderImg],
    price: 230,
    discount: { amount: 0, percentage: 5 },
    rating: 4.6,
  },
  {
    id: 15,
    title: "Сироватка проти акне",
    srcUrl: placeholderImg,
    gallery: [placeholderImg],
    price: 310,
    discount: { amount: 0, percentage: 0 },
    rating: 4.8,
  },
  {
    id: 16,
    title: "Маска для обличчя з вугіллям",
    srcUrl: placeholderImg,
    gallery: [placeholderImg],
    price: 140,
    discount: { amount: 0, percentage: 0 },
    rating: 4.2,
  },
  {
    id: 17,
    title: "Парфумована вода жіноча",
    srcUrl: placeholderImg,
    gallery: [placeholderImg],
    price: 680,
    discount: { amount: 0, percentage: 20 },
    rating: 4.9,
  },
  {
    id: 18,
    title: "Маска для волосся кератинова",
    srcUrl: placeholderImg,
    gallery: [placeholderImg],
    price: 250,
    discount: { amount: 0, percentage: 0 },
    rating: 4.7,
  },
  {
    id: 19,
    title: "Туш для вій об'ємна",
    srcUrl: placeholderImg,
    gallery: [placeholderImg],
    price: 220,
    discount: { amount: 0, percentage: 0 },
    rating: 4.5,
  },
  {
    id: 20,
    title: "Олія для кутикули",
    srcUrl: placeholderImg,
    gallery: [placeholderImg],
    price: 130,
    discount: { amount: 0, percentage: 10 },
    rating: 4.4,
  },
]

const relatedProductData = [
  {
    id: 21,
    title: "Гель для брів фіксуючий",
    srcUrl: placeholderImg,
    gallery: [placeholderImg],
    price: 160,
    discount: { amount: 0, percentage: 0 },
    rating: 4.6,
  },
  {
    id: 22,
    title: "Палетка тіней нейтральних",
    srcUrl: placeholderImg,
    gallery: [placeholderImg],
    price: 480,
    discount: { amount: 0, percentage: 10 },
    rating: 4.9,
  },
  {
    id: 23,
    title: "Праймер під макіяж",
    srcUrl: placeholderImg,
    gallery: [placeholderImg],
    price: 210,
    discount: { amount: 0, percentage: 0 },
    rating: 4.4,
  },
  {
    id: 24,
    title: "Рум'яна кремові",
    srcUrl: placeholderImg,
    gallery: [placeholderImg],
    price: 170,
    discount: { amount: 0, percentage: 0 },
    rating: 4.3,
  },
  {
    id: 25,
    title: "База під тіні",
    srcUrl: placeholderImg,
    gallery: [placeholderImg],
    price: 190,
    discount: { amount: 0, percentage: 15 },
    rating: 4.7,
  },
  {
    id: 26,
    title: "Матуючий тональний крем",
    srcUrl: placeholderImg,
    gallery: [placeholderImg],
    price: 410,
    discount: { amount: 0, percentage: 0 },
    rating: 4.8,
  },
  {
    id: 27,
    title: "Олія для тіла ароматизована",
    srcUrl: placeholderImg,
    gallery: [placeholderImg],
    price: 250,
    discount: { amount: 0, percentage: 5 },
    rating: 4.5,
  },
  {
    id: 28,
    title: "Крем навколо очей",
    srcUrl: placeholderImg,
    gallery: [placeholderImg],
    price: 300,
    discount: { amount: 0, percentage: 0 },
    rating: 4.6,
  },
  {
    id: 29,
    title: "Гель для вмивання з алое",
    srcUrl: placeholderImg,
    gallery: [placeholderImg],
    price: 170,
    discount: { amount: 0, percentage: 0 },
    rating: 4.4,
  },
  {
    id: 30,
    title: "Спрей для волосся термозахисний",
    srcUrl: placeholderImg,
    gallery: [placeholderImg],
    price: 260,
    discount: { amount: 0, percentage: 10 },
    rating: 4.7,
  },
]

const reviews = [
  {
    id: 1,
    user: "Олена К.",
    content:
      "«Довго не могла знайти косметику, яка підійшла б моїй чутливій шкірі, аж поки не відкрила для себе ваш бренд. Асортимент дуже різноманітний, а якість — на висоті!»",
    rating: 5,
    date: "14 грудня 2025",
  },
  {
    id: 2,
    user: "Марія С.",
    content:
      "«Я в захваті від доглядової косметики, яку замовила! Креми, сироватки, навіть очищення — усе працює ідеально. Шкіра стала більш зволоженою та доглянутою.»",
    rating: 4,
    date: "15 грудня 2025",
  },
  {
    id: 3,
    user: "Ірина Л.",
    content:
      "«Ця тональна основа — мастхев! Лягає легко, не забиває пори, а вигляд обличчя — як після роботи візажиста. Дуже задоволена покупкою.»",
    rating: 5,
    date: "16 грудня 2025",
  },
  {
    id: 4,
    user: "Вікторія П.",
    content:
      "«Як людина, що цінує мінімалізм та якість, я у захваті від дизайну та ефективності вашої косметики. Від кремів до масок — усе створено з увагою до деталей.»",
    rating: 5,
    date: "17 грудня 2025",
  },
  {
    id: 5,
    user: "Наталія М.",
    content:
      "«Цей набір для догляду — ідеальне поєднання аромату, текстури та результату. Шкіра стала м'якою, свіжою та сяючою. Відчувається, що над продуктами працювали професіонали.»",
    rating: 4,
    date: "18 грудня 2025",
  },
  {
    id: 6,
    user: "Катерина Д.",
    content:
      "«Обожнюю вашу косметику! Особливо сироватку — ефект помітний уже після кількох застосувань. Як дизайнер, оцінюю ще й упаковку — вона стильна й дуже приємна на дотик.»",
    rating: 5,
    date: "19 грудня 2025",
  },
]
</script>

<template>
  <HomeTop />
  <HomeBrands />
  <ProductList
    title="NEW ARRIVALS"
    :data="newArrivalsData"
    view-all-link="/shop#new-arrivals"
  />
</template>

<style lang="scss" scoped></style>
