<script setup lang="ts">
import { inject, computed } from "vue"

const props = defineProps<{ value: string }>()

const accordion = inject<any>("accordion")

const isOpen = computed(
  () =>
    Array.isArray(accordion?.openItems?.value) &&
    accordion.openItems.value.includes(props.value)
)
</script>

<template>
  <div class="accordion-item" :data-open="isOpen">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.accordion-item {
  border-bottom: 1px solid #e6e6e6;
  &:last-child {
    border-bottom: none;
  }
}
</style>
