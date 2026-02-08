import type { Discount, LocalizedText } from "./product.types"

export type CartItem = {
  id: number
  name: LocalizedText
  srcUrl: string
  price: number
  attributes: string[]
  discount: Discount
  quantity: number
}
