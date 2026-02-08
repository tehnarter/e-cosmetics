export type Discount = {
  amount: number
  percentage: number
}

// Локалізований текст
export type LocalizedText = {
  uk: string
  en: string
}

export type Product = {
  id: number
  title: LocalizedText
  description: LocalizedText
  srcUrl: string
  gallery?: string[]
  price: number
  discount: Discount
  rating: number
}
