<script setup lang="ts">
import { computed } from "vue"
import { useProductsStore } from "~~/stores/products-cart"

const sizes = ["Small", "Medium", "Large", "X-Large"] as const

type Size = (typeof sizes)[number]

const productsStore = useProductsStore()

const selectedSize = computed(() => productsStore.sizeSelection)

const selectSize = (size: Size) => {
  productsStore.setSizeSelection(size)
}
</script>

<template>
  <div class="size-selection">
    <span class="size-selection__label">Choose Size</span>

    <div class="size-selection__list">
      <button
        v-for="size in sizes"
        :key="size"
        type="button"
        class="size-selection__item"
        :class="{ 'is-active': selectedSize === size }"
        @click="selectSize(size)"
      >
        {{ size }}
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.size-selection {
  display: flex;
  flex-direction: column;

  &__label {
    font-size: 0.875rem;
    margin-bottom: 1rem;
    opacity: 0.6;

    @media (min-width: 640px) {
      font-size: 1rem;
    }
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;

    @media (min-width: 1024px) {
      gap: 0.75rem;
    }
  }

  &__item {
    background: #f0f0f0;
    color: #000;
    border: none;
    border-radius: 999px;
    padding: 0.625rem 1.25rem;
    font-size: 0.875rem;
    cursor: pointer;
    max-height: 46px;

    transition:
      background 0.2s ease,
      color 0.2s ease;

    &:hover {
      background: #e5e5e5;
    }

    &.is-active {
      background: #000;
      color: #fff;
      font-weight: 500;
    }

    @media (min-width: 1024px) {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
  }
}
</style>
