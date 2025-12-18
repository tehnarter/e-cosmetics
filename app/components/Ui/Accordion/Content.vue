<script setup lang="ts">
import { inject, computed } from "vue"

const props = defineProps<{ value: string }>()

const accordion = inject<any>("accordion")

const isOpen = computed(() => accordion?.openItems?.value.includes(props.value))
</script>

<template>
  <div class="accordion-content" :data-open="isOpen" ref="content">
    <div class="accordion-content-inner">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.accordion-content {
  overflow: hidden;
  max-height: 0;
  opacity: 0;
  padding: 0 16px;
  transition:
    max-height 260ms cubic-bezier(0.2, 0.8, 0.2, 1),
    opacity 200ms linear,
    padding 200ms linear;

  &[data-open="true"] {
    max-height: 1000px;
    opacity: 1;
    padding-top: 16px;
    padding-bottom: 16px;
  }

  .accordion-content-inner {
    padding: 0;
  }
}
</style>
