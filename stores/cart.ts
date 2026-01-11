// stores/cart.ts
import { defineStore } from "pinia"
import { compareArrays } from "@/utils/cart"
import type { Discount } from "~~/types/product.types"

export type CartItem = {
  id: number
  name: string
  srcUrl: string
  price: number
  attributes: string[]
  discount: Discount
  quantity: number
}

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [] as CartItem[],
    totalQuantities: 0,
    totalPrice: 0,
    adjustedTotalPrice: 0,
  }),

  actions: {
    calcAdjustedPrice(item: CartItem, quantity?: number) {
      const price =
        item.discount.percentage > 0
          ? Math.round(
              item.price - (item.price * item.discount.percentage) / 100
            )
          : item.discount.amount > 0
            ? Math.round(item.price - item.discount.amount)
            : item.price

      return price * (quantity ?? item.quantity)
    },

    addToCart(item: CartItem) {
      const existing = this.items.find(
        (i) => i.id === item.id && compareArrays(i.attributes, item.attributes)
      )

      if (existing) {
        existing.quantity += item.quantity
      } else {
        this.items.push(item)
      }

      this.totalQuantities += item.quantity
      this.totalPrice += item.price * item.quantity
      this.adjustedTotalPrice += this.calcAdjustedPrice(item)
    },

    removeOne(id: number, attributes: string[]) {
      const item = this.items.find(
        (i) => i.id === id && compareArrays(i.attributes, attributes)
      )
      if (!item) return

      item.quantity -= 1
      this.totalQuantities -= 1
      this.totalPrice -= item.price
      this.adjustedTotalPrice -= this.calcAdjustedPrice(item, 1)

      if (item.quantity <= 0) {
        this.items = this.items.filter((i) => i !== item)
      }
    },

    removeAll(id: number, attributes: string[]) {
      const item = this.items.find(
        (i) => i.id === id && compareArrays(i.attributes, attributes)
      )
      if (!item) return

      this.totalQuantities -= item.quantity
      this.totalPrice -= item.price * item.quantity
      this.adjustedTotalPrice -= this.calcAdjustedPrice(item, item.quantity)

      this.items = this.items.filter((i) => i !== item)
    },
  },
})
