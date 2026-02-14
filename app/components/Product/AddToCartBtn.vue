<script setup lang="ts">
import { computed } from "vue"
import { useCartStore } from "~~/stores/cart"
import { useProductsStore } from "~~/stores/products-cart"
import type { Product } from "~~/types/product.types"

const props = defineProps<{
  product: Product
  quantity: number
}>()

const cartStore = useCartStore()
const productsStore = useProductsStore()

// ✅ СТАБІЛЬНИЙ порядок атрибутів
const attributes = computed(() =>
  [productsStore.sizeSelection, productsStore.colorSelection?.name]
    .filter(Boolean)
    .sort()
)

const addToCartHandler = () => {
  cartStore.addToCart({
    id: props.product.id,
    name: props.product.title,
    srcUrl: props.product.srcUrl,
    price: props.product.price,
    discount: props.product.discount,
    attributes: attributes.value,
    quantity: props.quantity,
  })
}
</script>

<template>
  <button type="button" class="add-to-cart-btn" @click="addToCartHandler">
    Add to Cart
  </button>
</template>

<style lang="scss" scoped>
.add-to-cart-btn {
  width: 100%;
  height: 2.75rem;
  margin-left: 0.75rem;

  background: #000;
  color: #fff;
  font-size: 0.875rem;
  border-radius: 999px;

  transition: background 0.2s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }

  @media (min-width: 640px) {
    margin-left: 1.25rem;
    font-size: 1rem;
  }

  @media (min-width: 768px) {
    height: 3.25rem;
  }
}
</style>
