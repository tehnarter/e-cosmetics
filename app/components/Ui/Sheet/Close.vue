<script setup lang="ts">
import { inject } from "vue"
const sheet = inject<any>("sheet")
</script>

<template>
  <div role="button" @click="sheet?.hide()" class="sheet-close">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.sheet-close {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
}
</style>
