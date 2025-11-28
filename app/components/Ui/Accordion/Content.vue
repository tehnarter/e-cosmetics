<script setup lang="ts">
import { inject } from "vue"

const props = defineProps<{ value: string }>()
const accordion = inject<any>("accordion")
</script>

<template>
  <div
    v-show="accordion.openItems.includes(props.value)"
    class="accordion-content"
  >
    <slot />
  </div>
</template>

<style scoped lang="scss">
.accordion-content {
  padding: 12px 0;
}
</style>
