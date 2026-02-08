import { defineStore } from "pinia"

interface ReviewCard {
  user: string
  content: string
  rating: number
  date: string
}

interface LocalizedReview {
  uk: ReviewCard
  en: ReviewCard
}

export const useReviewsStore = defineStore("reviews", {
  state: () => ({
    reviews: <LocalizedReview[]>[
      {
        uk: {
          user: "Олена К.",
          content:
            "«Довго не могла знайти косметику, яка підійшла б моїй чутливій шкірі, аж поки не відкрила для себе ваш бренд. Асортимент дуже різноманітний, а якість — на висоті!»",
          rating: 5,
          date: "14 грудня 2025",
        },
        en: {
          user: "Olena K.",
          content:
            "“I struggled to find cosmetics suitable for my sensitive skin until I discovered your brand. The range is very diverse, and the quality is top-notch!”",
          rating: 5,
          date: "December 14, 2025",
        },
      },
      {
        uk: {
          user: "Марія С.",
          content:
            "«Я в захваті від доглядової косметики, яку замовила! Креми, сироватки, навіть очищення — усе працює ідеально. Шкіра стала більш зволоженою та доглянутою.»",
          rating: 4,
          date: "15 грудня 2025",
        },
        en: {
          user: "Maria S.",
          content:
            "“I love the skincare I ordered! Creams, serums, even cleansing — everything works perfectly. My skin is more hydrated and cared for.”",
          rating: 4,
          date: "December 15, 2025",
        },
      },
      {
        uk: {
          user: "Ірина Л.",
          content:
            "«Ця тональна основа — мастхев! Лягає легко, не забиває пори, а вигляд обличчя — як після роботи візажиста. Дуже задоволена покупкою.»",
          rating: 5,
          date: "16 грудня 2025",
        },
        en: {
          user: "Iryna L.",
          content:
            "“This foundation is a must-have! It applies easily, doesn’t clog pores, and my face looks like it’s been done by a professional makeup artist. Very satisfied with the purchase.”",
          rating: 5,
          date: "December 16, 2025",
        },
      },
      {
        uk: {
          user: "Вікторія П.",
          content:
            "«Як людина, що цінує мінімалізм та якість, я у захваті від дизайну та ефективності вашої косметики. Від кремів до масок — усе створено з увагою до деталей.»",
          rating: 5,
          date: "17 грудня 2025",
        },
        en: {
          user: "Viktoria P.",
          content:
            "“As someone who values minimalism and quality, I am impressed by the design and effectiveness of your cosmetics. From creams to masks — everything is crafted with attention to detail.”",
          rating: 5,
          date: "December 17, 2025",
        },
      },
      {
        uk: {
          user: "Наталія М.",
          content:
            "«Цей набір для догляду — ідеальне поєднання аромату, текстури та результату. Шкіра стала м'якою, свіжою та сяючою. Відчувається, що над продуктами працювали професіонали.»",
          rating: 4,
          date: "18 грудня 2025",
        },
        en: {
          user: "Natalia M.",
          content:
            "“This skincare set is the perfect combination of scent, texture, and results. My skin became soft, fresh, and radiant. You can tell professionals worked on these products.”",
          rating: 4,
          date: "December 18, 2025",
        },
      },
      {
        uk: {
          user: "Катерина Д.",
          content:
            "«Обожнюю вашу косметику! Особливо сироватку — ефект помітний уже після кількох застосувань. Як дизайнер, оцінюю ще й упаковку — вона стильна й дуже приємна на дотик.»",
          rating: 5,
          date: "19 грудня 2025",
        },
        en: {
          user: "Kateryna D.",
          content:
            "“I adore your cosmetics! Especially the serum — the effect is noticeable after just a few uses. As a designer, I also appreciate the packaging — it’s stylish and very pleasant to the touch.”",
          rating: 5,
          date: "December 19, 2025",
        },
      },
    ],
  }),
})
