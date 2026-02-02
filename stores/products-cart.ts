import { defineStore } from "pinia"

export type Color = {
  name: string
  code: string
}

export const useProductsStore = defineStore("products-cart", {
  state: () => ({
    colorSelection: {
      name: "Brown",
      code: "#4F4631",
    } as Color,
    sizeSelection: "Large",
  }),

  actions: {
    setColorSelection(color: Color) {
      this.colorSelection = color
    },
    setSizeSelection(size: string) {
      this.sizeSelection = size
    },
  },
})
