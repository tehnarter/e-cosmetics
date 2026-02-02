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
  // 1️⃣ STATE
  state: () => ({
    items: [] as CartItem[],
  }),

  // 2️⃣ GETTERS
  getters: {
    totalQuantities: (state) =>
      state.items.reduce((sum, item) => sum + item.quantity, 0),

    totalPrice: (state) =>
      state.items.reduce((sum, item) => sum + item.price * item.quantity, 0),

    adjustedTotalPrice: (state) =>
      state.items.reduce((sum, item) => {
        const price =
          item.discount.percentage > 0
            ? Math.round(
                item.price - (item.price * item.discount.percentage) / 100
              )
            : item.discount.amount > 0
              ? Math.round(item.price - item.discount.amount)
              : item.price

        return sum + price * item.quantity
      }, 0),
  },

  // 3️⃣ ACTIONS
  actions: {
    initCart() {
      if (!process.client) return

      const saved = localStorage.getItem("cart")
      if (!saved) return

      try {
        this.items = JSON.parse(saved)
      } catch {
        this.items = []
      }
    },

    persist() {
      if (!process.client) return
      localStorage.setItem("cart", JSON.stringify(this.items))
    },

    addToCart(item: CartItem) {
      const existing = this.items.find(
        (i) => i.id === item.id && compareArrays(i.attributes, item.attributes)
      )

      if (existing) {
        existing.quantity += item.quantity
      } else {
        this.items.push({ ...item })
      }

      this.persist()
    },

    removeOne(id: number, attributes: string[]) {
      const item = this.items.find(
        (i) => i.id === id && compareArrays(i.attributes, attributes)
      )
      if (!item) return

      item.quantity -= 1

      if (item.quantity <= 0) {
        this.items = this.items.filter((i) => i !== item)
      }

      this.persist()
    },

    removeAll(id: number, attributes: string[]) {
      this.items = this.items.filter(
        (i) => !(i.id === id && compareArrays(i.attributes, attributes))
      )

      this.persist()
    },

    clearCart() {
      this.items = []
      this.persist()
    },
  },
})
