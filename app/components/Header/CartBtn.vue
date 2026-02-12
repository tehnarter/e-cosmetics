<script setup lang="ts">
import { computed } from "vue"
import { useCartStore } from "~~/stores/cart"

const cartStore = useCartStore()

const totalQuantities = computed(() => cartStore.totalQuantities)
</script>

<template>
  <NuxtLink to="/cart" class="cart-btn">
    <SvgoCart class="cart-btn__icon" />

    <span v-if="totalQuantities > 0" class="cart-btn__badge">
      {{ totalQuantities }}
    </span>
  </NuxtLink>
</template>

<style lang="scss" scoped>
.cart-btn {
  position: relative;
  margin-right: 14px;
  padding: 4px;
  display: inline-flex;

  &__icon {
    width: 22px;
    height: 22px;
    &:hover {
      color: var(--hover-color);
    }
  }

  &__badge {
    position: absolute;
    top: -6px;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    color: #fff;
    border-radius: 50%;
    font-size: 10px;
    padding: 1px 5px;
    line-height: 1;
  }
}
</style>
