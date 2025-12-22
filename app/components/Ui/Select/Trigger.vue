<script setup lang="ts">
import { inject } from "vue"

const select = inject<any>("ui-select")
</script>

<template>
  <button type="button" @click.stop="select.toggle()">
    <slot />
  </button>
</template>

<style scoped lang="scss">
.flex {
  display: flex;
}

.items-center {
  align-items: center;
}
</style>
