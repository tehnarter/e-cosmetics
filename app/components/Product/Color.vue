<script setup lang="ts">
import { computed } from "vue"
import { useProductsStore } from "~~/stores/products-cart"

export interface Color {
  name: string
  code: string
}

const colorsData: Color[] = [
  { name: "Brown", code: "#4F4631" },
  { name: "Green", code: "#314F4A" },
  { name: "Blue", code: "#31344F" },
]

const productsStore = useProductsStore()

const selectedColor = computed(() => productsStore.colorSelection)

const selectColor = (color: Color) => {
  productsStore.setColorSelection(color)
}
</script>

<template>
  <div class="color-selection">
    <span class="color-selection__label">Select Colors</span>

    <div class="color-selection__list">
      <button
        v-for="color in colorsData"
        :key="color.name"
        type="button"
        class="color-selection__item"
        :style="{ backgroundColor: color.code }"
        @click="selectColor(color)"
      >
        <span
          v-if="selectedColor?.name === color.name"
          class="color-selection__check"
        >
          ✓
        </span>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.color-selection {
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
    gap: 0.75rem;

    @media (min-width: 640px) {
      gap: 1rem;
    }
  }

  &__item {
    width: 2.25rem;
    height: 2.25rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;

    @media (min-width: 640px) {
      width: 2.5rem;
      height: 2.5rem;
    }
  }

  &__check {
    color: #fff;
    font-size: 1rem;
    line-height: 1;
  }
}
</style>
