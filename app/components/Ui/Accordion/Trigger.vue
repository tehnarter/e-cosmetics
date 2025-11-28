<script setup lang="ts">
import { inject } from "vue"

const props = defineProps<{ value: string }>()
const accordion = inject<any>("accordion")

function toggle() {
  accordion.toggleItem(props.value)
}
</script>

<template>
  <button class="accordion-trigger" @click="toggle">
    <slot />
  </button>
</template>

<style scoped lang="scss">
.accordion-trigger {
  width: 100%;
  text-align: left;
  padding: 8px 0;
  cursor: pointer;
  background: transparent;
  border: none;
}
</style>
