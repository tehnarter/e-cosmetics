<script setup lang="ts">
import { inject, computed } from "vue"

const props = defineProps<{ value: string }>()
const select = inject<any>("ui-select")

const isActive = computed(() => select.selectedValue.value === props.value)

function onSelect() {
  select.select(props.value)
}
</script>

<template>
  <div class="select-item" :class="{ active: isActive }" @click.stop="onSelect">
    <span><slot /></span>

    <span v-if="isActive" class="check">✓</span>
  </div>
</template>

<style scoped lang="scss">
.select-item {
  display: flex;
  justify-content: space-between;
  padding: 6px 10px;
  cursor: pointer;

  &.active {
    font-weight: 600;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
}
.check {
  font-size: 12px;
}
</style>
