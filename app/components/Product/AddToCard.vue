<script setup lang="ts">
import type { Product } from "~~/types/product.types"

defineProps<{ data: Product }>()

const quantity = ref(1)
</script>

<template>
  <div class="add-to-cart">
    <CartCounter v-model="quantity" />

    <ProductAddToCartBtn :product="data" :quantity="quantity" />
  </div>
</template>

<style lang="scss" scoped>
.add-to-cart {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.05);

  @media (min-width: 768px) {
    position: relative;
    padding: 0;
    border-top: none;
    justify-content: center;
  }
}
</style>
