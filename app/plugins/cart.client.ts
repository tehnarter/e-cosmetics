import { useCartStore } from "~~/stores/cart"

export default defineNuxtPlugin(() => {
  const cart = useCartStore()

  // 1️⃣ Завантаження з localStorage
  const saved = localStorage.getItem("cart")
  if (saved) {
    try {
      cart.$patch(JSON.parse(saved))
    } catch {
      localStorage.removeItem("cart")
    }
  }

  // 2️⃣ Автозапис у localStorage
  watch(
    () => cart.$state,
    (state) => {
      localStorage.setItem("cart", JSON.stringify(state))
    },
    { deep: true }
  )
})
