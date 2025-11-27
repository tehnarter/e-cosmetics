<script setup lang="ts">
import { inject } from "vue"
const sheet = inject<any>("sheet")
</script>

<template>
  <div role="button" @click="sheet?.hide()" class="ui-sheet-close">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.ui-sheet-close {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
}
</style>
