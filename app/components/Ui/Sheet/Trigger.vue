<script setup lang="ts">
import { inject } from "vue"
const sheet = inject<any>("sheet")
</script>

<template>
  <div role="button" @click="sheet?.show()" class="ui-sheet-trigger">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.ui-sheet-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
}
</style>
