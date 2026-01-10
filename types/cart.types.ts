import type { Discount } from "./product.types"

export type CartItem = {
  id: number
  name: string
  srcUrl: string
  price: number
  attributes: string[]
  discount: Discount
  quantity: number
}
