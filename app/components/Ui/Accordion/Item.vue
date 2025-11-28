<script setup lang="ts">
import { inject } from "vue"

const props = defineProps<{ value: string }>()

const accordion = inject<any>("accordion")
</script>

<template>
  <div class="accordion-item">
    <slot :open="accordion.openItems.includes(props.value)" />
  </div>
</template>

<style scoped lang="scss">
.accordion-item {
  border-bottom: 1px solid #e5e5e5;
}
</style>
