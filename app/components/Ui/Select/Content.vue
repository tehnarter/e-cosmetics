<script setup lang="ts">
import { inject } from "vue"

const select = inject<any>("ui-select")
</script>

<template>
  <div v-if="select.isOpen.value" class="select-content">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.select-content {
  position: absolute;
  margin-top: 6px;

  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 6px;
  z-index: 20;
}
</style>
