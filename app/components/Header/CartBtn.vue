<script setup>
const cart = useState("cart") // { totalQuantities: number }
</script>

<template>
  <NuxtLink to="/cart" class="cart-btn">
    <SvgoCart class="cart-btn__icon" />
    <span v-if="cart?.value?.totalQuantities > 0" class="cart-btn__badge">
      {{ cart.value.totalQuantities }}
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
